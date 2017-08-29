const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlaugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const VENDOR_LIBS = [
  'react', 'redux', 'react-redux', 'react-dom',
  'react-bootstrap', 'prop-types', 'react-images',
  'react-slick', 'react-scroll',
];

const config = {
  devtool: 'source-map',
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
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
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
