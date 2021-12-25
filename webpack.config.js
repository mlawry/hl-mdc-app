// This module helps us resolve relative paths into absolute paths (which webpack requires).
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'), // Path must be absolute.
        publicPath: './dist/' // May need to set this to Highlighter appropriate path. Must end in slash for directories.
    },
    mode: 'none',
    module: {
        rules: [
            {   // This rule allows images to be imported like a JS module and assigned to img.src attribute.
                // The file itself will be copied to the output path (dist) and the URL is the value assigned
                // to img.src. The default output file name is a hash of the contents of the image.
                test: /\.(png|jpg)$/,
                type: 'asset/resource' // Can also use asset/inline.
            },
            {
                // This rule allows CSS to be webpacked into the JS bundle.
                test: /\.css$/,
                use: [
                    'style-loader', // This loader renders the CSSJS using <style> tags.
                    'css-loader'    // This loader reads the CSS from file and exposes it as CSSJS.
                ]
            },
            {
                // This rule allows SCSS to be webpacked into the JS bundle.
                test: /\.scss$/,
                use: [
                    'style-loader', // This loader renders the CSSJS using <style> tags.
                    'css-loader',   // This loader reads the CSS and exposes it as CSSJS.
                    'sass-loader'   // This loader reads the SCSS file and converts it to CSS.
                ]
            }
        ]
    }
};
