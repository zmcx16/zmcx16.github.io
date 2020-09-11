var myvar = 
'<link rel="stylesheet" type="text/css" href="css/investment-formula.css">' +
'<div class=\'main-investment-formula\'>' +
'    <div class="demo-img">' +
'        <img src="/img/investment-formula/Etz haChayim-gold.png" />' +
'    </div>' +
'    <div class="formula-groups" style="display:none;">' +
'        <div class="formula-component">' +
'            <fieldset class="formula-block formula-group">' +
'                <legend class="formula-block">凱利公式</legend>' +
'                <div id="kelly-formula-val" style="pointer-events:none;"></div>' +
'                <div id="kelly-formula-description" style="pointer-events:none;"></div>' +
'                <fieldset class="formula-block formula-group arg-input">' +
'                    <legend class="formula-block arg-input">手動輸入</legend>' +
'                    <div class="kelly-formula-input-block1">' +
'                        <div>賠率:</div>' +
'                        <div></div>' +
'                        <input type="text" id="kelly-b-input" name="kelly-b-input">' +
'                        <div></div>' +
'                        <div>獲利機率:</div>' +
'                        <div></div>' +
'                        <input type="text" id="kelly-p-input" name="kelly-p-input">' +
'                        <div></div>' +
'                        <div>虧損機率:</div>' +
'                        <div></div>' +
'                        <input type="text" id="kelly-q-input" name="kelly-q-input">' +
'                        <div></div>' +
'                        <button id="kelly-manual-calc-btn" class="click-btn">計算</button>' +
'                        <div></div>' +
'                    </div>' +
'                </fieldset>' +
'                <br><br><br>' +
'                <fieldset class="formula-block formula-group arg-input">' +
'                    <legend class="formula-block arg-input">自動取得(區間計算)</legend>' +
'                    <div class="kelly-formula-input-block2">' +
'                        <div>股票代號:</div>' +
'                        <div></div>' +
'                        <input type="text" id="kelly-symbol-input" name="kelly-symbol-input">' +
'                        <div></div>' +
'                        <div>資料天數:</div>' +
'                        <div></div>' +
'                        <input type="text" id="kelly-date-input" value="180" name="kelly-date-input">' +
'                        <div></div>' +
'                        <button id="kelly-auto-range-calc-btn" class="click-btn">計算</button>' +
'                        <div></div>' +
'                    </div>' +
'                </fieldset>' +
'            </fieldset>' +
'        </div>' +
'    </div>' +
'</div>' ;

document.getElementById('main-plugin-wrap').innerHTML = myvar;

var kelly_formula = 'f^* = \\frac{bp-q}{b} = p - \\frac{q}{b}';

function runMathJax(target){
  MathJax.Hub.Queue(
    () => { 
      LoadingImg.doLoading(true);
      $(target).hide();
    }, 
    ["Typeset", MathJax.Hub, $(".formula-groups")[0]], 
    () => { 
      $(target).show(); 
      LoadingImg.doLoading(false); 
    }
  );
}

function calcKelly(){

  let target = '#kelly-formula-val';
  let b = $('#kelly-b-input').val();
  let p = $('#kelly-p-input').val();
  let q = $('#kelly-q-input').val();

  if (isNaN(b) || b <= 0){
    $(target)[0].innerHTML = '$$' + kelly_formula + ' = {\\color{red}{Error!!\\enspace賠率須為正實數}}' + '$$';
    runMathJax(target);
    return;
  }
  if (isNaN(p) || p <= 0 || p > 1) {
    $(target)[0].innerHTML = '$$' + kelly_formula + ' = {\\color{red}{Error!!\\enspace獲利機率須為小於或等於1的正實數}}' + '$$';
    runMathJax(target);
    return;
  }
  if (isNaN(q) || q <= 0 || q > 1) {
    $(target)[0].innerHTML = '$$' + kelly_formula + ' = {\\color{red}{Error!!\\enspace虧損機率須為小於或等於1的正實數}}' + '$$';
    runMathJax(target);
    return;
  }

  let result = (p - (q / b))*100;
  if (result <= 0){
    $(target)[0].innerHTML = '$$' + kelly_formula + ' = {\\color{Orange}{' + parseFloat(result.toFixed(2)) + '\\%\\enspace(期望值小於等於0, 要不玩就趁現在了!)}}' + '$$';
  }else{
    $(target)[0].innerHTML = '$$' + kelly_formula + ' = {\\color{LimeGreen}{' + parseFloat(result.toFixed(2)) + '\\%}}' + '$$';
  }

  runMathJax(target);
}

$(document).ready(function () {

  // disable cache
  // $.ajaxSetup({ cache: false });

  setBanner('Unlimited Formula Works', 'gold', ['好用的公式整理', 'Etz haChayim', 'El Psy Congroo']);

  $("#kelly-formula-val")[0].innerHTML = '$$' + kelly_formula + '$$';
  $("#kelly-formula-description")[0].innerHTML = '$$f^*: 下注比率 \\qquad b: 賠率 = \\cfrac{獲利金額}{虧損金額} \\qquad p: 獲利機率 \\qquad q: 虧損機率 $$'

  $('#kelly-manual-calc-btn').click(()=>{
    calcKelly();
  });

  runMathJax(".formula-groups");

});
