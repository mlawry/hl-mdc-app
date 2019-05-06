# YTML Highlighter app MDC customisation

This repository is a skeleton project that allows you to customise the UI of a [YTML Highlighter](https://ytml.com.au/Products/Highlighter) app using components from the [Material Design System](https://material.io/).
A Highlighter app's UI already includes a standard set of JavaScript libraries, every Web page loads common libraries such as jQuery and bootstrap already.
So it is necessary to bundle the Material Design Components (MDC) (JavaScript and CSS) in a way that does not conflict with the standard libraries included with Highlighter apps.

The skeleton Node.js project contained in this repository is set up to compile the JavaScript written in `app/index.js` into a single bundled `dist/index_bundle.js` file, and compile the Sass written in `app/index.scss` into a single CSS bundle file `dist/index_bundle.css`.
By compiling MDC into a bundle, the JavaScript code avoids the use of runtime module loading (typeically via require.js), hence the code is more self-contained and less likely to cause conflicts with Highlighter app's JavaScript libraries.
