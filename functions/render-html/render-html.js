require('dotenv').config();
const express = require('express');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');
const fastGlob = require('fast-glob');

const { Elder, Page } = require('@elderjs/elderjs');
const elder = new Elder({ context: 'server' });

app.use(bodyParser.json());

app.use('/render-html', async (req, res, next) => {
  const bootstrappedElder = await elder.bootstrap();
  console.log(bootstrappedElder);
  console.log(process.env.LAMBDA_TASK_ROOT);
  console.log(await fastGlob(['**/*.*'], { cwd: __dirname }));

  const requestObject = bootstrappedElder.serverLookupObject[req.url];
  const page = new Page({
    request: req,
    route: bootstrappedElder.routes[requestObject.route],
    ...bootstrappedElder,
  });
  // console.log(await page.html());
  elder.server(req, res, next);
});

module.exports = app;
module.exports.handler = serverless(app);
