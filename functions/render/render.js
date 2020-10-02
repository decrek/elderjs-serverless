require('dotenv').config();
const renderElderPage = require('./lib/render-elder-page');

exports.handler = async (request) => {
  const html = await renderElderPage(request.path);
  return {
    statusCode: 200,
    body: html,
  };
};
