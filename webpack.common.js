const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlaugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const VENDOR_LIBS = [
  'react', 'react-dom',
  'react-bootstrap', 'prop-types', 'react-images',
  'react-slick', 'react-scroll', 'react-addons-css-transition-group',
];

const config = {
  entry: {
    bundle: './src/index.jsx',
    vendor: VENDOR_LIBS,
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.jsx?$/,
        exclude: /node_modules/,
      },
      {
        use: ExtractTextPlugin.extract({
          use: ['css-loader'],
        }),
        test: /\.css$/,
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 40000,
            },
          },
          'image-webpack-loader',
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: 'file-loader',
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
    }),
    new HtmlWebpackPlaugin({
      template: 'src/index.html',
    }),
    new CopyWebpackPlugin([
      {
        from: 'src/data/img',
        to: 'img',
      },
    ]),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};

module.exports = config;
