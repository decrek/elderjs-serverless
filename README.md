# Elder serverless experiment

This is an experiment to see if we can render [ElderJS](https://elderguide.com/tech/elderjs/) in Netlify functions.

See [functions/lib/render-elder-page.js](functions/lib/render-elder-page.js) how ElderJS is used for serverless rendering. And see [functions/account.js](functions/account.js) to see how `render-elder-page.js` is being used.

## Getting started

Note that you need to install Netlify cli globally, `npm install netlify-cli -g`, for local development.

- Install dependencies: `npm install`
- Build ElderJs for production: `npm run build`
- Serve and watch functions with Netlify dev: `netlify dev`
