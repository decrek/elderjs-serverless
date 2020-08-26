require('dotenv').config();
const path = require('path');
const currentDir = process.env.LAMBDA_TASK_ROOT ? process.env.LAMBDA_TASK_ROOT : './';

module.exports = {
  server: {
    prefix: '',
  },
  build: {},
  locations: {
    assets: './aapje/',
    public: './public/',
    svelte: {
      ssrComponents: './___ELDER___/compiled/',
      clientComponents: './public/dist/svelte/',
    },
    systemJs: '/dist/static/s.min.js',
    intersectionObserverPoly: '/dist/static/intersection-observer.js',
  },
  debug: {
    stacks: false,
    hooks: false,
    performance: false,
    build: false,
    automagic: false,
  },
  hooks: {
    // disable: ['elderWriteHtmlFileToPublic'], // this is used to disable internal hooks. Uncommenting this would disabled writing your files on build.
  },
  plugins: {},
};
