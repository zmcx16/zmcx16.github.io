var myvar = 
'<link rel="stylesheet" type="text/css" href="css/ai-analysis.css">' +
'<div class=\'main-ai-analysis\'>' +
'  <iframe src="./plugin-react/ai-analysis" name="mainframe" width="100%" marginwidth="0" marginheight="0"' +
'    onload="Javascript:SetIFrameHeight()" scrolling="No" frameborder="0" id="mainframe"></iframe>' +
'</div>' ;

document.getElementById('main-plugin-wrap').innerHTML = myvar;

$(document).ready(function () {
  setBanner('AI Analysis', '#A05781', ['AI 分析報告', 'Ex-Machina', '確率論にゼロはない']);
  setInterval(SetIFrameHeight, 100);
});

