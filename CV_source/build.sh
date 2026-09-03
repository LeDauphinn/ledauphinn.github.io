#!/usr/bin/env bash
# Renders the CV to PDF.
# Requires: python3 -m pip install weasyprint
set -e
cd "$(dirname "$0")"
python3 -m weasyprint resume.html Yunus_Eren_Turkeri_CV.pdf
echo "-> Yunus_Eren_Turkeri_CV.pdf"
