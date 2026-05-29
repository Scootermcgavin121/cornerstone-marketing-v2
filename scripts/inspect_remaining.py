#!/usr/bin/env python3
"""Inspect lines that still contain mojibake signatures AFTER a fix pass,
to decide whether they're true residue or false positives."""
import os, sys
sys.stdout.reconfigure(encoding="utf-8", errors="backslashreplace")

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import fix_mojibake as fm

shown = 0
for path in fm.iter_files():
    with open(path, "rb") as f:
        raw = f.read()
    try:
        text = raw.decode("utf-8")
    except UnicodeDecodeError:
        continue
    if fm.sig_count(text) == 0:
        continue
    for i, line in enumerate(text.split("\n")):
        if fm.sig_count(line) == 0:
            continue
        fixed, layers = fm.fix_string(line)
        if fm.sig_count(fixed) > 0:
            shown += 1
            if shown <= 40:
                print(f"[{os.path.relpath(path, fm.ROOT)}:{i+1}] layers={layers}")
                print("  RESIDUE:", ascii(fixed.strip()[:120]))
print("TOTAL residual lines:", shown)
