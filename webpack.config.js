module.exports = [
  {
    entry: './app/index.js',
    devtool: false,
    mode: "development",
    module: {
      rules: [{
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['env']
            }
          }
        ]
      }]
    },
    output: {
      filename: 'index_bundle.js',
      path: __dirname + '/dist'
    }
  },
  {
    entry: './app/index.scss',
    devtool: false,
    mode: "development",
    module: {
      rules: [{
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'index_bundle.css'
            }
          },
          {
            loader: 'extract-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: [ './node_modules' ]
            }
          }
        ]
      }]
    },
    output: {
      // This is necessary for webpack to compile. We never use ignore-style-bundle.js
      filename: 'ignore-style-bundle.js',
      path: __dirname + '/dist'
    }
  }
];
