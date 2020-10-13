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
'                    <legend class="formula-block arg-input">自動取得(區間盤整個股)</legend>' +
'                    <div class="kelly-formula-input-block2">' +
'                        <div>股票代號:</div>' +
'                        <div></div>' +
'                        <input type="text" id="kelly-symbol-input" name="kelly-symbol-input">' +
'                        <div></div>' +
'                        <div>資料天數:</div>' +
'                        <div></div>' +
'                        <input type="text" id="kelly-days-input" value="180" name="kelly-days-input">' +
'                        <div></div>' +
'                        <button id="kelly-auto-range-v1-calc-btn" class="click-btn">計算</button>' +
'                        <div></div>' +
'                    </div>' +
'                </fieldset>' +
'            </fieldset>' +
'        </div>' +
'    </div>' +
'    <div class="hold-stocks-groups">' +
'        <h1> 持有清單 </h1>' +
'        <div class="hold-stocks content-block">' +
'            <table id="hold-stocks-table">' +
'                <thead>' +
'                    <th class="th-symbol">Symbol</th>' +
'                    <th class="th-price">Price</th>' +
'                    <th class="th-180d">180 days</th>' +
'                    <th class="th-avg_cost">Avg Cost</th>' +
'                    <th class="th-profit_now">Profit (now)</th>' +
'                    <th class="th-position_now">Position (now)</th>' +
'                    <th class="th-position_kelly">Position [Kelly Formula]</th>' +
'                </thead>' +
'                <tbody id="hold-stocks-tbody">' +
'                </tbody>' +
'            </table>' +
'        </div>' +
'    </div>' +
'    <div class="data-source groups">' +
'        <h1> 數據源 </h1>' +
'        <div class="data-source content-block">' +
'            <a class="link" target="_blank" href="https://norn-minehunter.zmcx16.moe/">Norn-Minehunter</a>' +
'            <a class="link" target="_blank" href="https://www.alphavantage.co/">Alpha Vantage</a>' +
'        </div>' +
'    </div>' +
'</div>' ;

document.getElementById('main-plugin-wrap').innerHTML = myvar;

var kelly_formula = 'f^* = \\frac{bp-q}{b} = p - \\frac{q}{b}';

function runMathJax(target, jump=true){
  MathJax.Hub.Queue(
    () => { 
      LoadingImg.doLoading(true);
      $(target).hide();
    }, 
    ["Typeset", MathJax.Hub, $(".formula-groups")[0]], 
    () => { 
      $(target).show(); 
      LoadingImg.doLoading(false); 
    },
    ()=>{
      if (jump){
        $(target)[0].scrollIntoView({ behavior: "smooth" });
      }
    }
  );
}

function kellyFormula(b, p ,q){
  return (p - (q / b));
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

  let result = kellyFormula(b, p, q) * 100;
  if (result <= 0){
    $(target)[0].innerHTML = '$$' + kelly_formula + ' = {\\color{Orange}{' + parseFloat(result.toFixed(2)) + '\\%\\enspace(期望值小於等於0, 要不玩就趁現在了!)}}' + '$$';
  }else{
    $(target)[0].innerHTML = '$$' + kelly_formula + ' = {\\color{LimeGreen}{' + parseFloat(result.toFixed(2)) + '\\%}}' + '$$';
  }

  runMathJax(target);
}

function getKellyAutoRangeV1(){

  let symbol = $("#kelly-symbol-input").val();
  let days = $("#kelly-days-input").val();

  if (!symbol) {
    $('#kelly-formula-val')[0].innerHTML = '$$' + kelly_formula + ' = {\\color{red}{Error!!\\enspace非法股票代號}}' + '$$';
    runMathJax('#kelly-formula-val');
    return;
  }

  if (isNaN(days) || days <= 0) {
    $('#kelly-formula-val')[0].innerHTML = '$$' + kelly_formula + ' = {\\color{red}{Error!!\\enspace資料天數須為正整數}}' + '$$';
    runMathJax('#kelly-formula-val');
    return;
  }

  var data = [
    {
      'type': 'KellyFormula_Range_v1',
      'name': '',
      'target': [symbol],
      'args': {
        'days': days
      }
    }
  ];

  LoadingImg.doLoading(true);

  $.ajax({
    type: 'POST',
    url: 'https://zmcx16.moe/stock-minehunter/api/task/calc-formula',
    async: true,
    data: "=" + JSON.stringify({ "data": data }),
    cache: false,
    success: function (resp_data, textStatus, xhr) {
      LoadingImg.doLoading(false);
      if (resp_data) {
        console.log(resp_data);
        if (resp_data["ret"] !== 0 || resp_data["data"][0]["result"] === null) {
          $('#kelly-formula-val')[0].innerHTML = '$$' + kelly_formula + ' = {\\color{red}{Error!!\\enspace取得資料失敗...}}' + '$$';
          runMathJax('#kelly-formula-val');
        }else{
          $('#kelly-b-input').val((resp_data["data"][0]["result"]["profit"] / resp_data["data"][0]["result"]["loss"]).toFixed(2));
          $('#kelly-p-input').val((resp_data["data"][0]["result"]["p"]).toFixed(2));
          $('#kelly-q-input').val((resp_data["data"][0]["result"]["q"]).toFixed(2));
          calcKelly();
        }
      }
      else {
        console.log('get scan reports failed: ' + xhr);
        $('#kelly-formula-val')[0].innerHTML = '$$' + kelly_formula + ' = {\\color{red}{Error!!\\enspace取得資料失敗...}}' + '$$';
        runMathJax('#kelly-formula-val');
      }
    },
    error: function (xhr, textStatus, errorThrown) {
      LoadingImg.doLoading(false);
      console.log('Get scan reports failed: ' + xhr);
      console.log('Get scan reports failed: ' + textStatus);
      console.log('Get scan reports failed: ' + errorThrown);
      $('#kelly-formula-val')[0].innerHTML = '$$' + kelly_formula + ' = {\\color{red}{Error!!\\enspace取得資料失敗...}}' + '$$';
      runMathJax('#kelly-formula-val');
    },
    timeout: 300000
  });
}

function buildTable(data){

  let total_postion_kelly = 0;
  data["hold_stock_list"].forEach((symbol) => {
    let kelly_result = data["KellyFormula_Range_v1"][symbol];
    if (kelly_result === null) {
      console.log('symbol ' + symbol + ' data is null');
      return;
    }

    let score = kellyFormula(kelly_result['profit'] / kelly_result['loss'], kelly_result['p'], kelly_result['q']);
    if (score>0)
      total_postion_kelly += score;
  });

  let output = "";
  data["hold_stock_list"].forEach((symbol) => {
    let kelly_result = data["KellyFormula_Range_v1"][symbol];
    if (kelly_result === null){
      console.log('symbol ' + symbol + ' data is null');
      return;
    }

    let price = kelly_result['close'];
    let days = kelly_result['min_close'].toFixed(2) + ' - ' + kelly_result['max_close'].toFixed(2);
    let score = kellyFormula(kelly_result['profit'] / kelly_result['loss'], kelly_result['p'], kelly_result['q']);
    let avg_cost = data["portfolio"][symbol]["cost_p"];
    let profit_now = data["portfolio"][symbol]["profit_%"].toFixed(2);
    let position_now = data["portfolio"][symbol]["position_%"].toFixed(2);
    let position_kelly = score > 0 ? (score / total_postion_kelly * 100).toFixed(2) : 0;
    output += 
    '<tr class="tr-stock main">' + 
    '  <td class="td-symbol">' + symbol + '</td>' + 
    '  <td class="td-price">' + price + '</td>' + 
    '  <td class="td-180d">' + days + '</td>' + 
    '  <td class="td-avg_cost">' + avg_cost + '</td>' + 
    '  <td class="td-profit_now">' + profit_now + '%</td>' + 
    '  <td class="td-position_now">' + position_now + '%</td>' + 
    '  <td class="td-position_kelly">' + position_kelly + '%</td>' + 
    '</tr>';
  });

  return output;
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

  $('#kelly-auto-range-v1-calc-btn').click(() => {
    getKellyAutoRangeV1();
  });

  runMathJax(".formula-groups", false);

  // load hold stocks data
  $.getJSON("zmcx16_investment-formula-trade-data.json", function (json_data) {
    $("#hold-stocks-tbody")[0].innerHTML = buildTable(json_data);
  });

});
