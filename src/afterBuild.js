const glob = require('glob');
const { getConfig } = require('@elderjs/elderjs');
const path = require('path');

const { locations, debug } = getConfig();
if (debug.build) {
  console.log(glob.sync(path.join(locations.rootDir, locations.public) + '/*/**'));
  // console.log(glob.sync(path.join(process.cwd()) + '/**/**'));
}
