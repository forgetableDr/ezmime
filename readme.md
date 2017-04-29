# ezmime

Very clean and fast filename-to-MIME library

## Install

Install with npm:

    npm install ezmime

## Usage

Ezmime will convert strings such as ".html", "html" or "index.html" to the MIME type returning "text/html" for all there requests. You can see ezmime usage below:
```js
const ezmime = require('ezmime');
ezmime.see('/var/www/html/index.html') // "text/html"
ezmime.see('kick.mp3') // "audio/mpeg"
ezmime.see('.css') // "text/css"
ezmime.see('js') // "application/javascript"
```
