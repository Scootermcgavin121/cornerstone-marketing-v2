#!/usr/bin/env python3
"""Survey: extract every maximal run of mojibake-signature characters across
all candidate files, and tally distinct runs so we can build a deterministic
replacement table."""
import os, sys, re
from collections import Counter
sys.stdout.reconfigure(encoding="utf-8", errors="backslashreplace")

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
SRC = os.path.join(ROOT, "src")
EXTS = (".tsx", ".ts", ".jsx", ".js", ".md", ".mdx", ".json")

# Characters that only appear inside mojibake (high-bit Latin-1 / cp1252
# punctuation that the corruption uses). Build maximal runs of these.
MOJI_CHARS = set(
    "\u00c3\u00c2\u00c5\u00c6\u20ac\u201a\u201e\u2019\u2014\u2122"
    "\u00a2\u00ac\u00a6\u0161\u0153\u0178\u00a3\u00a4\u00a5\u00a7"
    "\u00e2\u00f0\u0192\u0152\x9d\x9e\x80\x9c\x9f\x98\x99\x9a\x9b"
)

def runs(line):
    out = []
    cur = []
    for ch in line:
        if ch in MOJI_CHARS:
            cur.append(ch)
        else:
            if cur:
                out.append("".join(cur))
                cur = []
    if cur:
        out.append("".join(cur))
    return out

counter = Counter()
for dirpath, dirnames, filenames in os.walk(SRC):
    dirnames[:] = [d for d in dirnames if d not in ("node_modules", ".next", ".git")]
    for fn in filenames:
        if not fn.endswith(EXTS):
            continue
        p = os.path.join(dirpath, fn)
        with open(p, "rb") as f:
            raw = f.read()
        try:
            text = raw.decode("utf-8")
        except UnicodeDecodeError:
            continue
        for line in text.split("\n"):
            for r in runs(line):
                if len(r) >= 2:  # ignore lone chars for now
                    counter[r] += 1

print("distinct runs:", len(counter))
for run, n in counter.most_common():
    print(f"{n:4d}  {ascii(run)}")
