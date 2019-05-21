# YTML Highlighter app MDC customisation

This repository is a skeleton project that allows you to customise the UI of a [YTML Highlighter](https://ytml.com.au/Products/Highlighter) app using components from the [Material Design System](https://material.io/).
A Highlighter app's UI already includes several JavaScript libraries: every Web page loads common libraries such as jQuery and bootstrap.
Hence it is necessary to bundle the Material Design Components (MDC) (JavaScript and CSS) in a way that does not conflict with the default JS and CSS libraries included with Highlighter apps.

The skeleton Node.js project contained in this repository is set up to compile the JavaScript written in `app/index.js` into a single bundled `dist/index_bundle.js` file, and compile the Sass written in `app/index.scss` into a single CSS bundle file `dist/index_bundle.css`.
By compiling the JS into a bundle, the MDC JavaScripts avoid the use of runtime module loading (typically via require.js), the result is that the code is more self-contained and less likely to cause conflicts with Highlighter app's JavaScript libraries.
The same reasoning applies to the Sass/CSS bundle.

## How to use this project

Install Node.js and Npm on your computer.
This project has been tested on `node` version 10.15.3 and `npm` version 6.4.1.

Git clone this repository onto your computer as directory **hl-mdc-app**.

Within the project directory (**hl-mdc-app**), run `npm install` command to install required Node.js modules.

Run `npm start` command, you should see a message *webpack is watching the files...*.

Edit the **app/index.js** and **app/index.scss** files, whenever you save these files with changes, webpack will re-bundle them into the output files **dist/index_bundle.js** and **index_bundle.css** respectively.

When you're ready, uploading the files **dist/index_bundle.js** and **index_bundle.css** into Highlighter.

## Generating minified code

By default the bundled code is not minified so as to aid debugging.
Edit the **webpack.config.js** file and change all of the `mode: "development"` options to `mode: "production"` and the resulting bundled code will be minified.

## More information

Information on the set up of this project can be found in the [Material Design Getting Started Guide for Web](https://material.io/develop/web/docs/getting-started/) (scroll down to the *Using MDC Web with Sass and ES2015* section).


