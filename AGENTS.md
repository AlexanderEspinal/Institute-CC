# AGENTS.md — Institute-CC

## Overview
Simple single-page Flask app. Early stage — only one route, no tests, no CI.

## Key facts
- **Framework**: Flask 3.1.3 (in `.venv`), no `requirements.txt` — run `pip install flask` if missing
- **Tailwind**: v4 via CDN (`@tailwindcss/browser@4`), no build/CLI step
- **Entry point**: `app.py` — run with `python app.py` (debug mode on by default)
- **Templates**: `templates/index.html`
- **Static assets**: `static/js/app.js`, `static/sprites.svg`, `static/img/` (add images here)
- **Template images**: reference via `{{ url_for('static', filename='img/...') }}`
- **No tests, no linters, no type checker, no CI, no formatter config**

## Commands
```bash
python app.py          # run dev server (debug=True)
```

## Opencode conventions
- No existing instruction files; treat this as a greenfield project
- Before adding dependencies beyond Flask, ask about tooling choices (test framework, linter, etc.)
