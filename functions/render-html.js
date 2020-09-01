require('dotenv').config();
const elderRenderer = require('./lib/elder-renderer');

exports.handler = async (event, context, callback) => {
  const html = await elderRenderer('/', { user: 'Loggedin as Declan' });

  callback(null, {
    statusCode: 200,
    body: html,
  });
};
