var myvar = 
'<link rel="stylesheet" type="text/css" href="css/investment-options.css">' +
'<div class=\'main-investment-options\'>' +
'  <iframe src="./plugin-react/options" name="mainframe" width="100%" marginwidth="0" marginheight="0"' +
'    onload="Javascript:SetIFrameHeight()" scrolling="No" frameborder="0" id="mainframe"></iframe>' +
'</div>' ;

document.getElementById('main-plugin-wrap').innerHTML = myvar;

$(document).ready(function () {
  setBanner('Options Valuation', '#465155', ['選擇權估值模型', '給開司一罐啤酒!', '再加一串烤雞肉串~']);
  setInterval(SetIFrameHeight, 100);
});
