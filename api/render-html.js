require('dotenv').config();
const { Elder, Page, getConfig } = require('@elderjs/elderjs');
const elder = new Elder({ context: 'server' });

module.exports = async (req, res) => {
  const bootstrappedElder = await elder.bootstrap();
  const requestObject = bootstrappedElder.serverLookupObject['/'];
  console.log({ __dirname });
  console.log('config', getConfig('server'));
  console.log('routes', bootstrappedElder.routes);

  const route = bootstrappedElder.routes[requestObject.route];
  const dataHook = {
    hook: 'data',
    name: 'addUser',
    description: 'Adds user to data object',
    priority: 50,
    run: ({ data }) => {
      const user = 'Logged in as Declan';
      return {
        data: { ...data, user },
      };
    },
  };
  bootstrappedElder.hooks.push(dataHook);
  const page = new Page({
    ...bootstrappedElder,
    request: requestObject,
    route,
  });

  res.send(await page.html());
};
