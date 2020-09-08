require('dotenv').config();
const cookie = require('cookie');
const jwt = require('jsonwebtoken');
const COOKIE_NAME = 'jwt';
const renderElderPage = require('../lib/render-elder-page');
const glob = require('fast-glob');

exports.handler = async (event) => {
  console.log('__dirname', __dirname);
  console.log('__filename', __filename);
  console.log('ELDER compiled', await glob(['**/___ELDER___/*.*']));
  console.log('src', await glob(['**/src/*.*']));

  if (event.headers.cookie) {
    const parsedCookie = cookie.parse(event.headers.cookie);
    try {
      const decoded = jwt.verify(parsedCookie[COOKIE_NAME], process.env.JWT_SECRET);
      if (decoded) {
        const html = await renderElderPage('/account/', decoded.data);
        return {
          statusCode: 200,
          body: html,
        };
      }
    } catch (e) {
      console.log('Something went wrong, falling back to login page', e);
    }
  }

  const html = await renderElderPage('/login/', { errorMessage: 'You need to login first' });
  return {
    statusCode: 200,
    body: html,
  };
};
