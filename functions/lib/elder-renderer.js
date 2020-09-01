const { Elder, Page } = require('@elderjs/elderjs');
const elder = new Elder({ context: 'server' });

module.exports = async function elderRenderer(path, customData) {
  const bootstrappedElder = await elder.bootstrap();
  const requestObject = bootstrappedElder.serverLookupObject[path];
  const route = bootstrappedElder.routes[requestObject.route];
  if (customData) {
    const dataHook = {
      hook: 'data',
      name: 'addData',
      description: 'Adds custom data to data object',
      priority: 50,
      run: ({ data }) => {
        return {
          data: { ...data, ...customData },
        };
      },
    };
    bootstrappedElder.hooks.push(dataHook);
  }

  const page = new Page({
    ...bootstrappedElder,
    request: requestObject,
    route,
  });

  return await page.html();
};
