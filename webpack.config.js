// This module helps us resolve relative paths into absolute paths (which webpack requires).
const path = require('path');

// This module is a plugin that extracts CSS and outputs them to a separate file.
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'hl-mdc-app-bundle.js',
        path: path.resolve(__dirname, './dist'), // Path must be absolute.
        publicPath: './dist/' // May need to set this to Highlighter appropriate path. Must end in slash for directories.
    },
    mode: 'none',
    module: {
        rules: [
            {   // This rule allows images to be imported like a JS module and assigned to img.src attribute.
                // The image file will be read into a base64 data URI, which can be assigned to img.src.
                // The only downside is that the final JS bundle will be quite large.
                test: /\.(png|jpg)$/,
                type: 'asset/inline'
            },
            {
                // This rule allows CSS to be webpacked into the JS bundle.
                test: /\.css$/,
                use: [
                    //MiniCssExtractPlugin.loader, // Replace style-loader with this loader to output CSS to a separate .css file.
                    'style-loader', // This loader renders the CSSJS using <style> tags. Comment out if using MiniCssExtractPlugin.loader.
                    'css-loader'    // This loader reads the CSS from file and exposes it as CSSJS.
                ]
            },
            {
                // This rule allows SCSS to be webpacked into the JS bundle.
                test: /\.scss$/,
                use: [
                    //MiniCssExtractPlugin.loader, // Replace style-loader with this loader to output CSS to a separate .css file.
                    'style-loader', // This loader renders the CSSJS using <style> tags. Comment out if using MiniCssExtractPlugin.loader.
                    'css-loader',   // This loader reads the CSS and exposes it as CSSJS.
                    'sass-loader'   // This loader reads the SCSS file and converts it to CSS.
                ]
            }
        ]
    },
    plugins: [
        // Uncomment this plugin to output CSS to a separate file.
        // More info about this plugin at https://webpack.js.org/plugins/mini-css-extract-plugin/
        //new MiniCssExtractPlugin({
        //    filename: 'hl-mdc-app-bundle.css'
        //})
    ]
};
