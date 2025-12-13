const fs = require('fs-extra')
const path = require('path')

const config = require('./src/common/config')

exports.onPostBuild = function () {
  let public_src_path = path.join(__dirname, 'public')
  let public_output_path = path.join(__dirname, '..', '..', 'plugin-react')
  let ai_analysis_path = path.join(public_output_path, 'ai-analysis')
  let ai_analysis_backup_path = path.join(__dirname, 'ai-analysis-backup')

  // dump config.js monitor_config to monitor_config.json
  fs.writeFileSync(path.join(public_src_path, 'monitor_config.json'), JSON.stringify(config.getMonitorConfig()))
  fs.writeFileSync(path.join(public_src_path, 'market_config.json'), JSON.stringify(config.getMarketConfig()))
  fs.writeFileSync(path.join(public_src_path, 'forecast_config.json'), JSON.stringify(config.getForecastConfig()))

  // Backup ai-analysis directory if it exists
  if (fs.existsSync(ai_analysis_path)) {
    fs.copySync(ai_analysis_path, ai_analysis_backup_path)
  }

  // Remove old plugin-react directory and copy new build
  fs.removeSync(public_output_path)
  fs.copySync(public_src_path, public_output_path)

  // Restore ai-analysis directory if backup exists
  if (fs.existsSync(ai_analysis_backup_path)) {
    fs.copySync(ai_analysis_backup_path, ai_analysis_path)
    fs.removeSync(ai_analysis_backup_path)
  }
}
