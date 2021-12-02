var myvar = 
'<link rel="stylesheet" type="text/css" href="css/investment-forecast.css">' +
'<div class=\'main-investment-forecast\'>' +
'  <iframe src="./plugin-react/forecast" name="mainframe" width="100%" marginwidth="0" marginheight="0"' +
'    onload="Javascript:SetIFrameHeight()" scrolling="No" frameborder="0" id="mainframe"></iframe>' +
'</div>' ;

document.getElementById('main-plugin-wrap').innerHTML = myvar;

$(document).ready(function () {
  setBanner('Stocks & Markets Forecasting', '#6633cc', ['持股&相關指數趨勢預測', '這頁算做來玩的, 純粹參考用~', 'エンディングが、見えた']);
  setInterval(SetIFrameHeight, 100);
});
