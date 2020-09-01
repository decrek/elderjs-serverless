require('dotenv').config();
const cookie = require('cookie');
const jwt = require('jsonwebtoken');
const COOKIE_NAME = 'jwt';
const elderRenderer = require('./lib/elder-renderer');

exports.handler = async (event, context, callback) => {
  if (event.headers.cookie) {
    const parsedCookie = cookie.parse(event.headers.cookie);
    if (parsedCookie[COOKIE_NAME]) {
      jwt.verify(parsedCookie[COOKIE_NAME], process.env.JWT_SECRET, async (err, decoded) => {
        if (err) {
          const html = await elderRenderer('/login/');
          callback(null, {
            statusCode: 401,
            body: html,
          });
        }

        const html = await elderRenderer('/account/', decoded.data);
        callback(null, {
          statusCode: 200,
          body: html,
        });
      });
    }
  }

  const html = await elderRenderer('/login/');

  callback(null, {
    statusCode: 200,
    body: html,
  });
};
