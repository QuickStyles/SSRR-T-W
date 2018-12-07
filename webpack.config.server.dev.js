const path = require('path');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  node: {
    fs: 'empty',
    net: 'empty',
  },
  entry: {
    server: './src/server/app.ts',
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '/public/stylesheets/styles.css',
      chunkFilename: '/public/styelsheets/[id].style.css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        exclude: /node_modules/,
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              localIdentName: '[name].[hash:8]',
              modules: true,
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    // library: '[name].bundle.js',
    libraryTarget: 'commonjs2',
  },
};
