const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: {
    client: './src/client/index.tsx',
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.css'],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '../stylesheets/styles.css',
      chunkFilename: '[id].css',
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
  output: {
    path: path.resolve(__dirname, 'dist/public/javascripts'),
    filename: '[name].bundle.js',
  },
};
