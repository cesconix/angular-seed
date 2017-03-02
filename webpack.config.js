/* eslint angular/json-functions: */

const webpack = require('webpack');
const path = require('path');
const config = require('./config');

const sourceDir = path.resolve(__dirname, 'src/app');
const distDir = path.resolve(__dirname, 'dist');

const PRODUCTION_ENV = 'production';
const DEVELOPMENT_ENV = 'development';

require('babel-polyfill');

const webpackConfig = {
  context: sourceDir,

  entry: {
    app: ['babel-polyfill', './app.module.js']
  },

  output: {
    path: distDir,
    filename: '[name].bundle.js'
  },

  devtool: config.env.name === DEVELOPMENT_ENV ? 'inline-source-map' : 'hidden-source-map',

  resolve: {
    modules: ['node_modules'],
    extensions: ['.js']
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['ng-annotate-loader', 'babel-loader'],
        include: sourceDir
      },
      {
        test: /\.html$/,
        use: 'raw-loader',
        include: sourceDir
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
        include: sourceDir
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'url-loader?limit=10000&minetype=application/font-woff'
      },
      {
        test: /\.(ttf|eot|svg|jpg|png|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'file-loader'
      }
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      __API_URL__: JSON.stringify(config.env.apiUrl),
      __AUTH__: config.auth || null
    })
  ],

  devServer: {
    contentBase: './src',
    host: 'localhost'
  }
};

if (config.env.name === PRODUCTION_ENV) {
  webpackConfig.module.rules.push(
    {
      test: /\.js$/,
      enforce: 'pre',
      use: 'eslint-loader',
      include: sourceDir
    },
    {
      test: /\.js$/,
      enforce: 'post',
      use: 'uglify-loader',
      include: sourceDir,
      exclude: /spec\.js/
    }
  );
  webpackConfig.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        warnings: false,
        screw_ie8: false
      },
      mangle: {
        screw_ie8: false
      },
      output: {
        screw_ie8: false
      }
    })
  );
}

module.exports = webpackConfig;
