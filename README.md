This is a jquery plugin to add a new function that aligns every svg on the page to a pixel boundary. This is
necessary for Firefox (at least on some platforms) and possibly other browsers as well.

See [this ticket](https://github.com/DmitryBaranovskiy/raphael/issues/175) for more information. Thanks to
@medikoo for the code.

### Usage

``` javascript
// Sometime after document load...
$.pixelAlignSvgs()
```

**Note:** If want 1px borders on shapes in your SVGs to be crisp, you will have to align the shapes to
half-pixel boundaries (in addition to aligning the whole SVG to a pixel boundary with this plugin). This is
outside the scope of this plugin, but you can see an example of doing this in `test.html`.
