var myvar = 
'<link rel="stylesheet" type="text/css" href="css/investment-formula.css">' +
'<div class=\'main-investment-formula\'>' +
'    <div class="demo-img">' +
'        <img src="/img/investment-formula/Etz haChayim-org.png" />' +
'    </div>' +
'    <div class="formula-groups">' +
'    </div>' +
'</div>' ;

document.getElementById('main-plugin-wrap').innerHTML = myvar;

$(document).ready(function () {

  // disable cache
  // $.ajaxSetup({ cache: false });

  setBanner('Money Money', 'gold', ['好用的公式整理', 'Etz haChayim', 'El Psy Congroo']);
});
