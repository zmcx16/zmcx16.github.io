var myvar = 
'<link rel="stylesheet" type="text/css" href="css/investment-formula.css">' +
'<div class=\'main-investment-formula\'>' +
'    <div class="demo-img">' +
'        <img src="/img/investment-formula/Etz haChayim-gold.png" />' +
'    </div>' +
'    <div class="formula-groups">' +
'        <div class="formula-component">' +
'            <fieldset class="formula-block formula-group">' +
'                <legend class="formula-block">Kelly formula</legend>' +
'                <div id="kelly-formula-page" style="pointer-events:none;">' +
'                </div>' +
'            </fieldset>' +
'        </div>' +
'    </div>' +
'</div>' ;

document.getElementById('main-plugin-wrap').innerHTML = myvar;

$(document).ready(function () {

  // disable cache
  // $.ajaxSetup({ cache: false });

  setBanner('Money Money', 'gold', ['好用的公式整理', 'Etz haChayim', 'El Psy Congroo']);

  $("#kelly-formula-page")[0].innerHTML = '<p>$$f^* = \\frac{bp-q}{b} = p - \\frac{q}{b}$$</p>';
  MathJax.Hub.Queue(["Typeset", MathJax.Hub, $("#kelly-formula-page")[0]]);

});
