# DASH Highlighter app customisation

This repository is a skeleton project that helps you to customise the UI of your [DASH](https://www.dash.com.au/) Highlighter app using:

* Components from the [Material Design System](https://material.io/components?platform=web).
* [Apache Echart](https://echarts.apache.org/) library.

A Highlighter app's UI already includes several JavaScript libraries: every Web page loads common libraries such as jQuery and bootstrap.
Hence this project is set up in such a way that it can webpack the Material Design Components (MDC) and Echart (JavaScript and CSS) in a way that does not conflict with the default JS and CSS libraries included with Highlighter apps.

The skeleton Node.js project contained in this repository is set up to compile the JavaScript written in **src/index.js** into a single bundled **dist/hl-mdc-app-bundle.js** file.
Webpack `style-loader` is used to package Sass styles into the JavaScript bundle as well.
The styles will be added to a Web page's `<head><style>` tag at runtime.
Alternatively, you can update **webpack.config.js** to enable the `MiniCssExtractPlugin` to output all styles to a separate .css file.
Webpack is also configured to package `.png` or `.jpg` image files into the JavaScript bundle using the asset/inline module.

By packaging all resources into a single bundle, all dependencies are included together so there is no need for runtime loading of resources (e.g. via require.js).
The resultant code is more self-contained and less likely to cause conflicts with Highlighter app's JavaScript libraries.

Note that this project assumes jQuery is provided globally by Highlighter, so the code can simply use the `jQuery` variable (you can use `$` as well) without defining it.

## How to use this project

Install Node.js and Npm on your computer.
This project has been tested with `node` version 18.17.1 and `npm` version 9.6.7.

Git clone this repository onto your computer as directory **hl-mdc-app**.

Within the project directory (**hl-mdc-app**), run `npm install` command to install required Node.js modules.

Run the `npm run dev` command and webpack will create the output bundle **dist/hl-mdc-app-bundle.js**.
Edit the **src/index.js** and other source files, whenever you save these files with changes, re-run the command to update the output bundle.

When you are ready, upload the bundle file **dist/hl-mdc-app-bundle.js** to Highlighter and link it as a customisation script for an app.

## Generating minified code

The `npm run dev` command generates bundled code that is not minified so as to aid debugging.
You can generate minified bundled code by using the command `npm run build`.

## More information

This webpack project is kept simple on purpose to reduce the number of dependencies.
In particular it does not use babel and babel-loader, which means the JavaScript code needs to be understandable by Web browsers directly.
A good bet is to write ECMAScript 2015 (also known as ES6) JavaScript because all modern browsers support it.
For a more complex set up involving babel, see the [Material Design Getting Started Guide for Web](https://material.io/develop/web/docs/getting-started/) (scroll down to the *Using MDC Web with Sass and ES2015* section).

For a list of available Material Design Components and how to use them for the Web, see https://material.io/components?platform=web
