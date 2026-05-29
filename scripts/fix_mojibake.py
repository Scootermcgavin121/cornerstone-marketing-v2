#!/usr/bin/env python3
"""Repair double/triple-encoded UTF-8 mojibake across the marketing site.

Root cause: text was repeatedly passed through a *cp1252-lenient* decoder
(standard cp1252, but the five undefined byte slots 0x81/0x8D/0x8F/0x90/0x9D
pass through unchanged as U+0081.. etc). Each pass turned correctly-encoded
UTF-8 bytes into a longer mojibake string.

Reverse: at each layer, map every char back to the single byte that the
lenient cp1252 decoder would have produced it from, giving a UTF-8 byte
string, then utf-8 decode it. Repeat until it stops being valid / stops
helping. Accept a layer only if it strictly reduces the mojibake-signature
count and introduces no U+FFFD. Idempotent.
"""
import os
import sys

try:
    sys.stdout.reconfigure(encoding="utf-8", errors="backslashreplace")
except Exception:
    pass

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
SRC = os.path.join(ROOT, "src")
EXTS = (".tsx", ".ts", ".jsx", ".js", ".md", ".mdx", ".json")

# --- Build the lenient cp1252 decode map and its inverse -------------------
_DEC = {}
for _b in range(256):
    try:
        _DEC[_b] = bytes([_b]).decode("cp1252")
    except Exception:
        _DEC[_b] = chr(_b)  # undefined slot passes through
# inverse: char -> byte (only for the 256 chars producible by lenient cp1252)
_INV = {v: k for k, v in _DEC.items()}

def encode_lenient(s):
    """Reverse the lenient-cp1252 decode: char -> its source byte.
    Returns bytes, or None if any char isn't in the cp1252-lenient range."""
    out = bytearray()
    for ch in s:
        b = _INV.get(ch)
        if b is None:
            return None
        out.append(b)
    return bytes(out)

# Mojibake signature substrings. Presence indicates likely corruption.
SIG = [
    "\u00c3",            # A-tilde
    "\u00c2",            # A-circumflex
    "\u00e2\u20ac",      # a-circumflex + euro  (start of many sequences)
    "\u00c5\u00b8",
    "\u00c5\u00be",
    "\u00e2\u201a\u00ac",  # a + sbquote + not  (euro fragment)
    "\u00f0\u0178",        # double-encoded emoji lead
    "\u00e2\u0084\u00a2",  # TM fragment
    "\u00c3\u0192",        # A-tilde + f-hook (deep)
    "\u00c3\u201a",        # A-tilde + sbquote (deep)
]

def sig_count(s):
    return sum(s.count(x) for x in SIG)

def unroll_once(s):
    """Try to peel one mojibake layer. Returns candidate string or None."""
    bs = encode_lenient(s)
    if bs is None:
        return None
    try:
        cand = bs.decode("utf-8")
    except UnicodeDecodeError:
        return None
    if "\ufffd" in cand:
        return None
    return cand

def fix_string(s):
    cur = s
    layers = 0
    while True:
        cand = unroll_once(cur)
        if cand is None or cand == cur:
            break
        if sig_count(cand) >= sig_count(cur) and sig_count(cur) > 0:
            # No improvement this layer. Peek one more: sometimes a layer is
            # signature-neutral but enables the next to improve.
            cand2 = unroll_once(cand)
            if cand2 is not None and cand2 != cand and sig_count(cand2) < sig_count(cur):
                cur = cand2
                layers += 2
                continue
            break
        cur = cand
        layers += 1
        if layers > 12:
            break
    return cur, layers

def iter_files():
    for dirpath, dirnames, filenames in os.walk(SRC):
        dirnames[:] = [d for d in dirnames if d not in ("node_modules", ".next", ".git")]
        for fn in filenames:
            if fn.endswith(EXTS):
                yield os.path.join(dirpath, fn)

def main():
    write_mode = "--write" in sys.argv
    total_files = changed_files = changed_lines = remaining = 0
    samples = []
    for path in iter_files():
        total_files += 1
        with open(path, "rb") as f:
            raw = f.read()
        try:
            text = raw.decode("utf-8")
        except UnicodeDecodeError:
            print("SKIP (not utf-8):", path)
            continue
        if sig_count(text) == 0:
            continue
        out_lines = []
        file_changed = False
        for i, line in enumerate(text.split("\n")):
            if sig_count(line) == 0:
                out_lines.append(line)
                continue
            fixed, layers = fix_string(line)
            if fixed != line:
                file_changed = True
                changed_lines += 1
                if len(samples) < 14:
                    samples.append((os.path.relpath(path, ROOT), i + 1, layers, line, fixed))
            out_lines.append(fixed)
        new_text = "\n".join(out_lines)
        rem = sum(1 for ln in new_text.split("\n") if sig_count(ln) > 0)
        remaining += rem
        if file_changed:
            changed_files += 1
            flag = "" if rem == 0 else f"  *** {rem} RESIDUAL ***"
            print(f"FIX {os.path.relpath(path, ROOT)}{flag}")
            if write_mode:
                with open(path, "w", encoding="utf-8", newline="") as f:
                    f.write(new_text)
    print("=" * 60)
    print(f"scanned files: {total_files}")
    print(f"changed files: {changed_files}")
    print(f"changed lines: {changed_lines}")
    print(f"remaining mojibake-signature lines: {remaining}")
    print("mode:", "WRITE" if write_mode else "DRY-RUN")
    print("--- samples (codepoints of non-ascii in AFTER) ---")
    for relp, ln, layers, b, a in samples:
        nb = [c for c in b if ord(c) > 126]
        na = [c for c in a if ord(c) > 126]
        print(f"[{relp}:{ln}] layers={layers}")
        print("  BEFORE non-ascii:", " ".join("U+%04X" % ord(c) for c in nb[:18]))
        print("  AFTER  non-ascii:", " ".join("U+%04X" % ord(c) for c in na[:18]) or "(all ascii)")

if __name__ == "__main__":
    main()
