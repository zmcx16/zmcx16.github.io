var myvar = 
'<link rel="stylesheet" type="text/css" href="css/investment-monitor.css">' +
'<div class=\'main-investment-monitor\'>' +
'  <iframe src="./plugin-react/monitor" name="mainframe" width="100%" marginwidth="0" marginheight="0" onload="Javascript:SetIFrameHeight()"' +
'    scrolling="No" frameborder="0" id="mainframe"></iframe>' +
'</div>' ;

document.getElementById('main-plugin-wrap').innerHTML = myvar;

$(document).ready(function () {
  setBanner('Real-Time Monitoring Stocks', '#83ff78', ['這頁是拿來撿寶用的', '暫不對外開放使用', '俺のドリルは天を創るドリルだ！！！！']);
  setInterval(SetIFrameHeight, 100);
});
