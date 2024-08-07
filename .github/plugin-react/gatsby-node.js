const fs = require('fs-extra')
const path = require('path')
const rimraf = require("rimraf")

const config = require('./src/common/config')

exports.onPostBuild = function () {
  let public_src_path = path.join(__dirname, 'public')
  let public_output_path = path.join(__dirname, '..', '..', 'plugin-react')

  // dump config.js monitor_config to monitor_config.json
  fs.writeFileSync(path.join(public_src_path, 'monitor_config.json'), JSON.stringify(config.getMonitorConfig()))
  fs.writeFileSync(path.join(public_src_path, 'market_config.json'), JSON.stringify(config.getMarketConfig()))
  fs.writeFileSync(path.join(public_src_path, 'forecast_config.json'), JSON.stringify(config.getForecastConfig()))

  rimraf.sync(public_output_path)
  fs.copySync(public_src_path, public_output_path)
}
