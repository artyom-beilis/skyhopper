# I want to translate AstroHopper to new language what should I do

First of all this is great. There are two levels of translation, lets
say we want to translate it to French

- UI
- Manual

## UI translation

Take astrohopper.pot and copy it to [LANGUAGECODE].po for example fr.po
and edit is with specialized dictionary editor for example open source
poedit that is available on Linux, Windows and Mac OS X.

It is critical to use a tool and not just text editor as it keeps 
the format correct and consistent and in generally way easier to use
than plain text editor

Special notes:

- "Align" is written on main button. If in your language it is long word use abbreviation, for example in Ukrainian "вирівнювання" is shortened as "вирів.",
  note it appears in several places make sure it is consistent.
- If you translate a language written right to left like Hebrew, Arabic and Farsi translate "LTR" keyword as "RTL" for other languages written left to right translate it as LTR.
  This would adjust layout of the application according to general writing direction where it is needed
- Make sure you keep HTML parts inside so they would be displayed correctly,
- "List" - refers to watch list - keep it short not to break UI,
- If you are not comfortable with some statements in the dictionary, I can understand, just leave them untranslated.


## Manual Translation

It is optional but recommended part.

To translate manual, copy README.md to `po/README_lang.md` for example `po/README_fr.md` similar to `po/README_he.md`
It is markdown format. Translate it as you feed comfortable but keep it properly formatted Markdown.

Keep `[TOC]` tag as is - it is placeholder for table of content

## Submitting

Submit a PR with these files or just e-mail me them if you aren't familiar with github
