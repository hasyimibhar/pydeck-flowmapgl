module.exports = [
  {
    mode: 'development',
    entry: './index.js',
    output: {
      filename: './bundle.js'
    },
    target: 'web',
    externals: ['@deck.gl/core', '@deck.gl/layers', '@luma.gl/core',
      '@flowmap.gl/data', '@flowmap.gl/layers'],
    devServer: {
      contentBase: __dirname,
      writeToDisk: true,
      port: 8080
    }
  }
];
