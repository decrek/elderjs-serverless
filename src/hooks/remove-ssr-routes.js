const path = require('path');
const fs= require('fs');
const fsPromises = fs.promises;

module.exports = {
  hook: 'bootstrap',
  name: 'removeSsrRoutes',
  description: 'Removes routes that are only rendered server side',
  priority: 1,
  run: async ({ routes, settings, helpers }) => {
    Object.keys(routes).forEach((routeName) => {
      const route = routes[routeName];
      if (route.ssrOnly) {
        route.all().forEach(async (url) => {
          const staticRouteDir = path.join(settings.locations.public, url.slug);
          removeStaticRouteDir(staticRouteDir);
          // createSSRFunction({ routeName, locations: settings.locations });
        });
      }
    });
  },
};

async function removeStaticRouteDir(staticRouteDir) {
  const resolvedStaticRouteDir = path.resolve(staticRouteDir);
  if (fs.existsSync(resolvedStaticRouteDir)) {
    return removeDirectory(resolvedStaticRouteDir);
  } else {
    // TODO: build doesn't seem to be really complete as files don't exist yet so using timeout for now
    setTimeout(() => {
      return removeDirectory(resolvedStaticRouteDir);
    }, 1000);
  }
}

function createSSRFunction({ routeName, locations }) {
  console.log(routeName, locations);
  const srcFilename = `${routeName.toLowerCase()}.ssr.js`;
  const srcFile = path.join(locations.srcFolder, 'routes', routeName, srcFilename);
  const destFilename = `${routeName.toLowerCase()}.js`;
  const destFileDirectory = path.join(locations.srcFolder, 'functions');
  const destFile = path.join(destFileDirectory, destFilename);
  return fs.promises.mkdir(destFileDirectory, { recursive: true }).then(() => {
    return fsPromises.copyFile(srcFile, destFile);
  });
}

function removeDirectory(path) {
  return fsPromises
    .rmdir(path, { recursive: true })
    .then(() => console.log(`Deleted pregenerated ${path} as it is marked as SSR only.`))
    .catch(onBuildError);
}

function onBuildError(err) {
  console.error(err);
  process.exitCode = 1;
}
