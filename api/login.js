const generateAuthCookie = require('./lib/generateAuthCookie');

exports.handler = async (event, context, callback) => {
  const { httpMethod } = event;

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

  console.log('event', event.body);
  // TODO: do actual authentication
  const cookie = generateAuthCookie();

  callback(null, {
    statusCode: 302,
    headers: {
      Location: '/account/',
      'Set-Cookie': cookie,
    },
  });
};
