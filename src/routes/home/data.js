const { hookInterface } = require('@elderjs/elderjs');
module.exports = ({ request, data }) => {
  data.aapje = 'aapje';
  return data;
};
