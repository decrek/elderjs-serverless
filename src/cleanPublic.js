const path = require('path');
const del = require('del');
const { getConfig } = require('@elderjs/elderjs');

const { locations } = getConfig();

console.log('Clearing out public folder.');
del.sync(`${path.resolve(locations.rootDir, locations.public)}*`);
