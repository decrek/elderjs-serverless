require('dotenv').config();
const cookie = require('cookie');
const generateJWT = require('./generate-jwt');
const COOKIE_NAME = 'jwt';

module.exports = function generateAuthCookie(data) {
  const token = generateJWT(data);
  const twoWeeks = 14 * 24 * 3600000;

  return cookie.serialize(COOKIE_NAME, token, {
    secure: process.env.LOCAL_DEV !== 'true',
    httpOnly: true,
    sameSite: 'strict',
    path: '/',
    maxAge: twoWeeks,
  });
};
