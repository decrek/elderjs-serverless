const { hookInterface } = require('@elderjs/elderjs');
module.exports = ({ request, data }) => {
  data.hookInterface = hookInterface;
  data.aapje = 'aapje';
  return data;
};
