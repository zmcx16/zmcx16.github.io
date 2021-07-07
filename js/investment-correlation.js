var myvar = 
'<link rel="stylesheet" type="text/css" href="css/investment-monitor.css">' +
'<div class=\'main-investment-monitor\'>' +
'  <iframe src="./plugin-react/monitor" name="mainframe" width="100%" marginwidth="0" marginheight="0" onload="Javascript:SetIFrameHeight()"' +
'    scrolling="No" frameborder="0" id="mainframe"></iframe>' +
'</div>' ;

document.getElementById('main-plugin-wrap').innerHTML = myvar;

$(document).ready(function () {
  setBanner('Correlation Matrix', 'rgb(46, 233, 255)', ['皮爾森相關係數', '過去的相關性也不能代表未來', '所以這頁某方面來說是做好玩的~']);
  setInterval(SetIFrameHeight, 100);
});
