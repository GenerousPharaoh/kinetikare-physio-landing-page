# Signature generator

Builds `components/home/signature-data.ts`, the name that writes itself in on
the home hero (`components/home/Signature.tsx`).

How it works: the name is set in Herr Von Muellerhoff (Google Fonts, SIL Open
Font License) and kept as filled outlines. The same text is rasterised and
skeletonised, and the skeleton is walked as a hand would write it (leftmost
first, straight on through crossings, dots after their word). Each walked
stroke becomes a mask path; the hero draws the outlines through that mask and
animates the strokes' `stroke-dashoffset` in turn.

Run from this folder (the font is not committed; download it first):

```sh
curl -L -o HerrVonMuellerhoff-Regular.ttf https://github.com/google/fonts/raw/main/ofl/herrvonmuellerhoff/HerrVonMuellerhoff-Regular.ttf
npm install --no-save opentype.js@1.3.4
node glyphs.cjs HerrVonMuellerhoff-Regular.ttf "Kareem Hassanein" name     # name.json + name.png
python trace.py name.png strokes.json                                     # needs scikit-image, scipy, pillow
node emit.cjs HerrVonMuellerhoff-Regular.ttf "Kareem Hassanein" strokes.json ../../components/home/signature-data.ts 1900 name.json
```

The last argument to `emit.cjs` before `name.json` is the writing time in ms.
Delete the font, `name.*` and `strokes.json` afterwards.

To use a real signature instead, scan it on white, threshold it to a white-on-black
PNG, trace its outline to path data (for example with potrace) in place of the
font outlines, and run `trace.py` on the PNG for the pen strokes.
