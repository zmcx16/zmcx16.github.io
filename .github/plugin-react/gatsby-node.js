const fs = require('fs-extra')
const path = require('path')
const rimraf = require("rimraf")

const config = require('./src/common/config')

exports.onPostBuild = function () {
  let public_src_path = path.join(__dirname, 'public')
  let public_output_path = path.join(__dirname, '..', '..', 'plugin-react')

  // dump config.js to config.json
  fs.writeFileSync(path.join(public_src_path, 'config.json'), JSON.stringify(config.getMonitorConfig()))

  rimraf.sync(public_output_path)
  fs.copySync(public_src_path, public_output_path)
}
