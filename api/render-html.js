require('dotenv').config();
const { Elder, Page } = require('@elderjs/elderjs');
const elder = new Elder({ context: 'server' });

module.exports = async (req, res) => {
  const bootstrappedElder = await elder.bootstrap();
  const requestObject = bootstrappedElder.serverLookupObject['/'];

  const page = new Page({
    request: requestObject,
    route: bootstrappedElder.routes[requestObject.route],
    ...bootstrappedElder,
  });

  res.send(await page.html());
};
