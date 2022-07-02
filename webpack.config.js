module.exports = [
  {
    mode: 'development',
    entry: './index.js',
    output: {
      filename: './bundle.js'
    },
    target: 'web',
    devServer: {
      contentBase: __dirname,
      writeToDisk: true,
      port: 8080
    }
  }
];
