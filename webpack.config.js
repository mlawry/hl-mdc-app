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
  }
];
