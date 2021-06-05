const fs = require('fs-extra');
const path = require('path');
const rimraf = require("rimraf");

exports.onPostBuild = function () {
  rimraf.sync(path.join(__dirname, '..', '..', 'plugin-react'));
  fs.copySync(path.join(__dirname, 'public'), path.join(__dirname, '..', '..', 'plugin-react'));
};
