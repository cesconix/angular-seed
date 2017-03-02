const webpackConfig = require('./webpack.config');

module.exports = function (config) {
  config.set({
    basePath: '',

    frameworks: ['jasmine'],

    files: [
      'node_modules/babel-polyfill/dist/polyfill.js',
      'src/tests.conf.js'
    ],

    preprocessors: {
      'src/tests.conf.js': ['webpack', 'sourcemap']
    },

    reporters: ['spec', 'coverage'],

    browsers: ['PhantomJS'],

    webpack: webpackConfig,

    webpackMiddleware: {
      stats: 'errors-only'
    },

    coverageReporter: {
      reporters: [
        { type: 'html' },
        { type: 'text-summary' }
      ]
    },
  });
};
