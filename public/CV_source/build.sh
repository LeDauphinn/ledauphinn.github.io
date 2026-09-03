#!/usr/bin/env bash
set -e
cd "$(dirname "$0")"
python3 -m weasyprint resume.html Yunus_Turkeri_CV.pdf
echo "-> Yunus_Turkeri_CV.pdf"
