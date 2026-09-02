# Yunus Eren Türkeri — CV source

    resume.html   CV content + page rules + layout CSS
    base.css      shared design system (fonts, colours, masthead, section heads, chips)
    assets/       portrait_sq.jpg (680x680 square crop)
    fonts/        Instrument Serif x2, Instrument Sans x4, Geist Mono x2 (SIL OFL)
    build.sh      one-line render script

## Render

    pip install weasyprint
    python3 -m weasyprint resume.html output.pdf

Tested with WeasyPrint 69. The `@font-face` paths in `base.css` are relative,
so `fonts/` and `assets/` must stay next to `resume.html`.

## Design system

    petrol   #235878   primary accent (role line, section labels, job titles)
    brass    #a67441   secondary accent (doc label, slab border, bullets)
    paper    #f5f4ef   profile slab tone
    ink      #1c1c1c   headings
    rule     #d8d5cc   hairlines

Instrument Serif = display name, Instrument Sans = body, Geist Mono = metadata.
