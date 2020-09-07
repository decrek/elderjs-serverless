const generateAuthCookie = require('../lib/generateAuthCookie');

exports.handler = async (event, context, callback) => {
  const { httpMethod, body } = event;

  if (httpMethod !== 'POST') {
    callback(null, {
      statusCode: 405,
      headers: {
        Allow: 'POST',
        'Cache-Control': 'no-cache',
      },
      body: `Method: ${httpMethod} is not allowed`,
    });
  }

  const parsedCookie = body.split('&').reduce((out, keyVal) => {
    const keyValSplitted = keyVal.split('=');
    out[keyValSplitted[0]] = keyValSplitted[1];
    return out;
  }, {});

  const cookie = generateAuthCookie({ user: { userName: parsedCookie.userName } });

  callback(null, {
    statusCode: 302,
    headers: {
      Location: '/account/',
      'Set-Cookie': cookie,
    },
  });
};
