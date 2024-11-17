'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

const StaticSiteJson = require('broccoli-static-site-json');

const pageTree = new StaticSiteJson('pages', {
  type: 'page',
  attributes: [
    'canonical',
    'date',
    'excerpt',
    'featured',
    'image',
    'imageMeta',
    'language',
    'meta',
    'meta_description',
    'meta_title',
    'page',
    'status',
    'title',
    'uuid',
  ],
  contentFolder: 'pages',
  collate: true,
  collationFileName: 'pages.json',
});

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {});

  const { Webpack } = require('@embroider/webpack');
  return require('@embroider/compat').compatBuild(app, Webpack, {
    extraPublicTrees: [pageTree],
    skipBabel: [
      {
        package: 'qunit',
      },
    ],
    packagerOptions: {
      webpackConfig: {
        module: {
          rules: [
            {
              test: /\.css$/i,
              use: [
                {
                  loader: 'postcss-loader',
                  options: {
                    postcssOptions: {
                      config: 'postcss.config.js',
                    },
                  },
                },
              ],
            },
          ],
        },
      },
    },
  });
};
