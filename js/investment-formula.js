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
'        <div class="formula-component">' +
'            <fieldset class="formula-block formula-group">' +
'                <legend class="formula-block">Beneish M-Score模型</legend>' +
'                <div id="beneish-formula-val" style="pointer-events:none;"></div>' +
'                <div id="beneish-formula-description" style="pointer-events:none;"></div>' +
'                <fieldset class="formula-block formula-group arg-input">' +
'                    <legend class="formula-block arg-input">手動輸入</legend>' +
'                    <div class="beneish-formula-input-block1">' +
'                        <div>DSRI:</div>' +
'                        <div></div>' +
'                        <input type="text" id="beneish-DSRI-input" name="beneish-DSRI-input">' +
'                        <div></div>' +
'                        <div>GMI:</div>' +
'                        <div></div>' +
'                        <input type="text" id="beneish-GMI-input" name="beneish-GMI-input">' +
'                        <div></div>' +
'                        <div>AQI:</div>' +
'                        <div></div>' +
'                        <input type="text" id="beneish-AQI-input" name="beneish-AQI-input">' +
'                        <div></div>' +
'                        <div>SGI:</div>' +
'                        <div></div>' +
'                        <input type="text" id="beneish-SGI-input" name="beneish-SGI-input">' +
'                        <div></div>' +
'                        <div>DEPI:</div>' +
'                        <div></div>' +
'                        <input type="text" id="beneish-DEPI-input" name="beneish-DEPI-input">' +
'                        <div></div>' +
'                        <div>SGAI:</div>' +
'                        <div></div>' +
'                        <input type="text" id="beneish-SGAI-input" name="beneish-SGAI-input">' +
'                        <div></div>' +
'                        <div>LVGI:</div>' +
'                        <div></div>' +
'                        <input type="text" id="beneish-LVGI-input" name="beneish-LVGI-input">' +
'                        <div></div>' +
'                        <div>TATA:</div>' +
'                        <div></div>' +
'                        <input type="text" id="beneish-TATA-input" name="beneish-TATA-input">' +
'                        <div></div>' +
'                    </div>' +
'                    <div class="beneish-formula-input-block1-1">' +
'                        <div></div>' +
'                        <button id="beneish-manual-calc-btn" class="click-btn">計算</button>' +
'                        <div></div>' +
'                    </div>' +
'                </fieldset>' +
'                <br><br><br>' +
'                <fieldset class="formula-block formula-group arg-input">' +
'                    <legend class="formula-block arg-input">自動取得</legend>' +
'                    <div class="beneish-formula-input-block2">' +
'                        <div>股票代號:</div>' +
'                        <div></div>' +
'                        <input type="text" id="beneish-symbol-input" name="beneish-symbol-input">' +
'                        <div></div>' +
'                        <div>比較年度:</div>' +
'                        <div></div>' +
'                        <input type="text" id="beneish-year-input" name="beneish-year-input">' +
'                        <div></div>' +
'                        <button id="beneish-auto-range-v1-calc-btn" class="click-btn">計算</button>' +
'                        <div></div>' +
'                    </div>' +
'                </fieldset>' +
'            </fieldset>' +
'        </div>' +
'        <div class="formula-component">' +
'            <fieldset class="formula-block formula-group">' +
'                <legend class="formula-block">多因子交互選股模型</legend>' +
'                <div id="factor-intersectional-formula-val" style="pointer-events:none;"></div>' +
'                <div id="factor-intersectional-formula-description" style="pointer-events:none;"></div>' +
'                <fieldset class="formula-block formula-group arg-input">' +
'                    <legend class="formula-block arg-input">輸入參數</legend>' +
'                    <div class="factor-intersectional-formula-input-block1">' +
'                        <div>輸出個股數:</div>' +
'                        <div></div>' +
'                        <input type="text" id="factor-intersectional-TopN-input" value="30" name="factor-intersectional-TopN-input">' +
'                        <div></div>' +
'                        <div>公司市值(百萬美元):</div>' +
'                        <div></div>' +
'                        <input type="text" id="factor-intersectional-M-input" value="300" name="factor-intersectional-M-input">' +
'                        <div></div>' +
'                        <div>盈餘殖利率權重:</div>' +
'                        <div></div>' +
'                        <input type="text" id="factor-intersectional-EPw-input" value="1.0" name="factor-intersectional-EPw-input">' +
'                        <div></div>' +
'                        <div>股價淨值比倒數權重:</div>' +
'                        <div></div>' +
'                        <input type="text" id="factor-intersectional-BPw-input" value="1.0" name="factor-intersectional-BPw-input">' +
'                        <div></div>' +
'                        <div>市銷率倒數權重:</div>' +
'                        <div></div>' +
'                        <input type="text" id="factor-intersectional-SPw-input" value="1.0" name="factor-intersectional-SPw-input">' +
'                        <div></div>' +
'                        <div>股價自由現金流比倒數權重:</div>' +
'                        <div></div>' +
'                        <input type="text" id="factor-intersectional-FCFPw-input" value="0.5" name="factor-intersectional-FCFPw-input">' +
'                        <div></div>' +
'                        <div>股東權益報酬率權重:</div>' +
'                        <div></div>' +
'                        <input type="text" id="factor-intersectional-ROEw-input" value="1.0" name="factor-intersectional-ROEw-input">' +
'                        <div></div>' +
'                        <div>資產報酬率權重:</div>' +
'                        <div></div>' +
'                        <input type="text" id="factor-intersectional-ROAw-input" value="1.0" name="factor-intersectional-ROAw-input">' +
'                        <div></div>' +
'                        <div>投資回報率權重:</div>' +
'                        <div></div>' +
'                        <input type="text" id="factor-intersectional-ROIw-input" value="1.0" name="factor-intersectional-ROIw-input">' +
'                        <div></div>' +
'                        <div>股息率權重:</div>' +
'                        <div></div>' +
'                        <input type="text" id="factor-intersectional-DIVw-input" value="0.1" name="factor-intersectional-DIVw-input">' +
'                        <div></div>' +
'                        <div>內部人持股權重:</div>' +
'                        <div></div>' +
'                        <input type="text" id="factor-intersectional-InsiderOwnw-input" value="0.2" name="factor-intersectional-InsiderOwnw-input">' +
'                        <div></div>' +
'                        <div>內部人交易權重:</div>' +
'                        <div></div>' +
'                        <input type="text" id="factor-intersectional-InsiderTransw-input" value="1" name="factor-intersectional-InsiderTransw-input">' +
'                        <div></div>' +
'                        <div>機構持股權重:</div>' +
'                        <div></div>' +
'                        <input type="text" id="factor-intersectional-InstOwnw-input" value="0.2" name="factor-intersectional-InstOwnw-input">' +
'                        <div></div>' +
'                        <div>機構交易權重:</div>' +
'                        <div></div>' +
'                        <input type="text" id="factor-intersectional-InstTransw-input" value="1" name="factor-intersectional-InstTransw-input">' +
'                        <div></div>' +
'                        <div>目標價現價差權重:</div>' +
'                        <div></div>' +
'                        <input type="text" id="factor-intersectional-TgtPrice-input" value="0.5" name="factor-intersectional-TgtPrice-input">' +
'                        <div></div>' +
'                        <div>做空比率權重:</div>' +
'                        <div></div>' +
'                        <input type="text" id="factor-intersectional-ShortFloat-input" value="0" name="factor-intersectional-ShortFloat-input">' +
'                        <div></div>' +
'                        <div>做空回補天數權重:</div>' +
'                        <div></div>' +
'                        <input type="text" id="factor-intersectional-ShortRatio-input" value="0" name="factor-intersectional-ShortRatio-input">' +
'                        <div></div>' +
'                        <div>盈餘殖利率權重(LastQ):</div>' +
'                        <div></div>' +
'                        <input type="text" id="factor-intersectional-EQPw-input" value="1.0" name="factor-intersectional-EQPw-input">' +
'                        <div></div>' +
'                        <div>股價區間權重(52W):</div>' +
'                        <div></div>' +
'                        <input type="text" id="factor-intersectional-Range52W-input" value="0.2" name="factor-intersectional-Range52W-input">' +
'                        <div></div>' +
'                        <div>對外流通股變動權重(6M):</div>' +
'                        <div></div>' +
'                        <input type="text" id="factor-intersectional-ShareOutstandingHalfYear-input" value="0" name="factor-intersectional-ShareOutstandingHalfYear-input">' +
'                        <div></div>' +
'                        <div>對外流通股變動權重(1Y):</div>' +
'                        <div></div>' +
'                        <input type="text" id="factor-intersectional-ShareOutstandingOneYear-input" value="0" name="factor-intersectional-ShareOutstandingOneYear-input">' +
'                        <div></div>' +
'                    </div>' +
'                    <div class="factor-intersectional-formula-input-block1-0">' +
'                        <div class="sector-industry-title">' +
'                            <div class="sector-title">' +
'                                <input type="checkbox" id="factor-intersectional-sector-filter" class="factor-checkbox">' +
'                                <label for="factor-intersectional-sector-filter">過濾部門</label>' +
'                                <a class="link" target="_blank" href="https://finviz.com/groups.ashx?g=sector&v=152&o=-perf1w&c=0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26">(指標數據)</a>' +
'                            </div>' +
'                            <div class="industry-title">' +
'                                <input type="checkbox" id="factor-intersectional-industry-filter" class="factor-checkbox">' +
'                                <label for="factor-intersectional-industry-filter">過濾行業</label>' +
'                                <a class="link" target="_blank" href="https://finviz.com/groups.ashx?g=industry&v=152&o=-perf1w&c=0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26">(指標數據)</a>' +
'                            </div>' +
'                        </div>' +
'                        <div class="sector-industry-content">' +
'                            <fieldset class="sector-industry-block sector-industry-group arg2-input" id="factor-intersectional-sector-block" style="display:none;">' +
'                                <legend class="sector-industry-block arg2-input">Sectors</legend>' +
'                                <div class="sector-industry-input-block" id="factor-intersectional-sector">' +
'                                </div>' +
'                            </fieldset>' +
'                            <fieldset class="sector-industry-block sector-industry-group arg2-input" id="factor-intersectional-industry-block" style="display:none;">' +
'                                <legend class="sector-industry-block arg2-input">Industries</legend>' +
'                                <div class="sector-industry-input-block" id="factor-intersectional-industry">' +
'                                </div>' +
'                            </fieldset>' +
'                        </div>' +
'                    </div>' +
'                    <div class="factor-intersectional-formula-input-block1-1">' +
'                        <div></div>' +
'                        <button id="factor-intersectional-get-btn" class="click-btn">計算</button>' +
'                        <div></div>' +
'                    </div>' +
'                </fieldset>' +
'                <div class="factor-intersectional-formula content-block">' +
'                    <table id="factor-intersectional-formula-table" style="display:none;">' +
'                        <thead>' +
'                            <th class="th-symbol">Symbol</th>' +
'                            <th class="th-market">Market Cap</th>' +
'                            <th class="th-price">Price</th>' +
'                            <th class="th-52w">52 weeks</th>' +
'                            <th class="th-pe">P/E</th>' +
'                            <th class="th-roa">ROA</th>' +
'                            <th class="th-score">Score</th>' +
'                        </thead>' +
'                        <tbody id="factor-intersectional-formula-tbody">' +
'                        </tbody>' +
'                    </table>' +
'                </div>' +
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
'                    <th class="th-profit_now">Profit</th>' +
'                    <th class="th-position_now">Position</th>' +
'                    <th class="th-position_kelly">Position<br>[Kelly bet]</th>' +
'                    <th class="th-mf_score">Multi-Factor Rank</th>' +
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
var beneish_formula1 = 'M = -4.84+0.920 \\times DSRI+0.528 \\times GMI+0.404 \\times AQI+0.892 \\times SGI+';
var beneish_formula2 = '0.115 \\times DEPI–0.172 \\times SGAI–0.327 \\times LVGI+4.697 \\times TATA';
var factor_intersectional_formula = 'S = \\sum_{i=1}^n w_i \\times (c - f^*_i)'

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


// kelly
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
    data: JSON.stringify({ "data": data }),
    dataType: 'json',
    contentType: 'application/json',
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
        console.log('get formula reports failed: ' + xhr);
        $('#kelly-formula-val')[0].innerHTML = '$$' + kelly_formula + ' = {\\color{red}{Error!!\\enspace取得資料失敗...}}' + '$$';
        runMathJax('#kelly-formula-val');
      }
    },
    error: function (xhr, textStatus, errorThrown) {
      LoadingImg.doLoading(false);
      console.log('Get formula reports failed: ' + xhr);
      console.log('Get formula reports failed: ' + textStatus);
      console.log('Get formula reports failed: ' + errorThrown);
      $('#kelly-formula-val')[0].innerHTML = '$$' + kelly_formula + ' = {\\color{red}{Error!!\\enspace取得資料失敗...}}' + '$$';
      runMathJax('#kelly-formula-val');
    },
    timeout: 300000
  });
}

// beneish
function beneishFormula(DSRI, GMI, AQI, SGI, DEPI, SGAI, LVGI, TATA) {
  return -4.84 + 0.92 * DSRI + 0.528 * GMI + 0.404 * AQI + 0.892 * SGI + 0.115 * DEPI - 0.172 * SGAI - 0.327 * LVGI + 4.679 * TATA;
}

function calcBeneish() {

  let target = '#beneish-formula-val';
  let DSRI = $('#beneish-DSRI-input').val();
  let GMI = $('#beneish-GMI-input').val();
  let AQI = $('#beneish-AQI-input').val();
  let SGI = $('#beneish-SGI-input').val();
  let DEPI = $('#beneish-DEPI-input').val();
  let SGAI = $('#beneish-SGAI-input').val();
  let LVGI = $('#beneish-LVGI-input').val();
  let TATA = $('#beneish-TATA-input').val();

  if (isNaN(TATA)) {
    $(target)[0].innerHTML = '$$' + beneish_formula1 + '$$' + '$$' + beneish_formula2 + '$$$${\\color{red}{Error!!\\enspace不合法參數}}' + '$$';
    runMathJax(target);
    return;
  }

  if (isNaN(DSRI)){
    DSRI = 1.0;
  }
  if (isNaN(GMI)) {
    GMI = 1.0;
  }
  if (isNaN(AQI)) {
    AQI = 1.0;
  }
  if (isNaN(SGI)) {
    SGI = 1.0;
  }
  if (isNaN(DEPI)) {
    DEPI = 1.0;
  }
  if (isNaN(SGAI)) {
    SGAI = 1.0;
  }
  if (isNaN(LVGI)) {
    LVGI = 1.0;
  }

  let result = beneishFormula(DSRI, GMI, AQI, SGI, DEPI, SGAI, LVGI, TATA);
  if (result <= -2.22) {
    $(target)[0].innerHTML = '$$' + beneish_formula1 + '$$' + '$$' + beneish_formula2 + ' = {\\color{LimeGreen}{' + parseFloat(result.toFixed(5)) + '}}' + '$$$${\\color{LimeGreen}{財報造假機率低}}$$';
  } else if (result >= -1.78) {
    $(target)[0].innerHTML = '$$' + beneish_formula1 + '$$' + '$$' + beneish_formula2 + ' = {\\color{red}{' + parseFloat(result.toFixed(5)) + '}}' + '$$$${\\color{red}{財報造假可能性高}}$$';
  } else {
    $(target)[0].innerHTML = '$$' + beneish_formula1 + '$$' + '$$' + beneish_formula2 + ' = {\\color{Orange}{' + parseFloat(result.toFixed(5)) + '}}' + '$$$${\\color{Orange}{進行一些財務操作可能性高}}$$';
  }

  runMathJax(target);
}

function getBeneishAutoRangeV1() {

  let symbol = $("#beneish-symbol-input").val();
  let year = $("#beneish-year-input").val();

  if (!symbol) {
    $('#beneish-formula-val')[0].innerHTML = '$$' + beneish_formula1 + '$$' + '$$' + beneish_formula2 + '$$$${\\color{red}{Error!!\\enspace非法股票代號}}' + '$$';
    runMathJax('#beneish-formula-val');
    return;
  }

  if (isNaN(year) || year <= 0) {
    $('#beneish-formula-val')[0].innerHTML = '$$' + beneish_formula1 + '$$' + '$$' + beneish_formula2 + '$$$${\\color{red}{Error!!\\enspace比較年度須為正整數}}' + '$$';
    runMathJax('#beneish-formula-val');
    return;
  }

  var data = [
    {
      'type': 'Beneish_Model_v1',
      'name': '',
      'target': [symbol],
      'args': {
        'year': year
      }
    }
  ];

  LoadingImg.doLoading(true);

  $.ajax({
    type: 'POST',
    url: 'https://zmcx16.moe/stock-minehunter/api/task/calc-formula',
    async: true,
    data: JSON.stringify({ "data": data }),
    dataType: 'json',
    contentType: 'application/json',
    cache: false,
    success: function (resp_data, textStatus, xhr) {
      LoadingImg.doLoading(false);
      if (resp_data) {
        console.log(resp_data);
        if (resp_data["ret"] !== 0 || resp_data["data"][0]["result"] === null) {
          $('#beneish-formula-val')[0].innerHTML = '$$' + beneish_formula1 + '$$' + '$$' + beneish_formula2 + '$$$${\\color{red}{Error!!\\enspace取得資料失敗...}}' + '$$';
          runMathJax('#beneish-formula-val');
        } else {
          $('#beneish-DSRI-input').val((resp_data["data"][0]["result"][year]["DSRI"]));
          $('#beneish-GMI-input').val((resp_data["data"][0]["result"][year]["GMI"]));
          $('#beneish-AQI-input').val((resp_data["data"][0]["result"][year]["AQI"]));
          $('#beneish-SGI-input').val((resp_data["data"][0]["result"][year]["SGI"]));
          $('#beneish-DEPI-input').val((resp_data["data"][0]["result"][year]["DEPI"]));
          $('#beneish-SGAI-input').val((resp_data["data"][0]["result"][year]["SGAI"]));
          $('#beneish-LVGI-input').val((resp_data["data"][0]["result"][year]["LVGI"]));
          $('#beneish-TATA-input').val((resp_data["data"][0]["result"][year]["TATA"]));
          calcBeneish();
        }
      }
      else {
        console.log('get formula reports failed: ' + xhr);
        $('#beneish-formula-val')[0].innerHTML = '$$' + beneish_formula1 + '$$' + '$$' + beneish_formula2 + '$$$${\\color{red}{Error!!\\enspace取得資料失敗...}}' + '$$';
        runMathJax('#beneish-formula-val');
      }
    },
    error: function (xhr, textStatus, errorThrown) {
      LoadingImg.doLoading(false);
      console.log('Get formula reports failed: ' + xhr);
      console.log('Get formula reports failed: ' + textStatus);
      console.log('Get formula reports failed: ' + errorThrown);
      $('#beneish-formula-val')[0].innerHTML = '$$' + beneish_formula1 + '$$' + '$$' + beneish_formula2 + '$$$${\\color{red}{Error!!\\enspace取得資料失敗...}}' + '$$';
      runMathJax('#beneish-formula-val');
    },
    timeout: 300000
  });
}

function getFactorIntersectionalFIF(){

  let fif_output = { sectors: [], industries: []};
  let getFIFArgs = (src, targetID)=>{
    let enabled_list = []
    Object.keys(src).forEach((key) => {
      let id = targetID + "_" + key;
      if ($("#" + id).hasClass('enabled')) {
        enabled_list.push(key)
      }
    });
    return enabled_list;
  };

  if ($("#factor-intersectional-sector-filter")[0].checked) {
    fif_output.sectors = getFIFArgs(StockSectorDict, "factor-intersectional-sector")
  }
  if ($("#factor-intersectional-industry-filter")[0].checked) {
    fif_output.industries = getFIFArgs(StockIndustryDict, "factor-intersectional-industry")
  }

  return fif_output;
}

function getFactorIntersectionalV1() {

  let topN = $('#factor-intersectional-TopN-input').val();
  let M = $('#factor-intersectional-M-input').val();
  let EPw = $('#factor-intersectional-EPw-input').val();
  let BPw = $('#factor-intersectional-BPw-input').val();
  let SPw = $('#factor-intersectional-SPw-input').val();
  let FCFPw = $('#factor-intersectional-FCFPw-input').val();
  let ROEw = $('#factor-intersectional-ROEw-input').val();
  let ROAw = $('#factor-intersectional-ROAw-input').val();
  let ROIw = $('#factor-intersectional-ROIw-input').val();
  let DIVw = $('#factor-intersectional-DIVw-input').val();
  let InsiderOwnw = $('#factor-intersectional-InsiderOwnw-input').val();
  let InsiderTransw = $('#factor-intersectional-InsiderTransw-input').val();
  let InstOwnw = $('#factor-intersectional-InstOwnw-input').val();
  let InstTransw = $('#factor-intersectional-InstTransw-input').val();
  let TgtPricew = $('#factor-intersectional-TgtPrice-input').val();
  let ShortFloatw = $('#factor-intersectional-ShortFloat-input').val();
  let ShortRatiow = $('#factor-intersectional-ShortRatio-input').val();
  let EQPw = $('#factor-intersectional-EQPw-input').val();
  let Range52Ww = $('#factor-intersectional-Range52W-input').val();
  let ShareOutstandingHalfYearw = $('#factor-intersectional-ShareOutstandingHalfYear-input').val();
  let ShareOutstandingOneYearw = $('#factor-intersectional-ShareOutstandingOneYear-input').val();
  let FIF = getFactorIntersectionalFIF();

  if (isNaN(topN) || topN <= 0 || isNaN(M) || M <= 0 || isNaN(EPw) || isNaN(BPw) || isNaN(SPw) || isNaN(FCFPw) || 
    isNaN(ROEw) || isNaN(ROAw) || isNaN(ROIw) || isNaN(DIVw) || isNaN(InsiderOwnw) || isNaN(InsiderTransw) || 
    isNaN(InstOwnw) || isNaN(InstTransw) || isNaN(TgtPricew) || isNaN(ShortFloatw) || isNaN(ShortRatiow) || 
    isNaN(EQPw) || isNaN(Range52Ww)|| isNaN(ShareOutstandingHalfYearw)|| isNaN(ShareOutstandingOneYearw)) {
    return;
  }

  var data = {
    'type': 'Factor_Intersectional_v1',
    'args': {
      'Top_N': topN,
      'Market Cap': M,
      'E/P_w': EPw,
      'B/P_w': BPw,
      'S/P_w': SPw,
      'FCF/P_w': FCFPw,
      'ROE_w': ROEw,
      'ROA_w': ROAw,
      'ROI_w': ROIw,
      'DIV_w': DIVw,
      'InsiderOwn_w': InsiderOwnw,
      'InsiderTrans_w': InsiderTransw,
      'InstOwn_w': InstOwnw,
      'InstTrans_w': InstTransw,
      'TgtPrice_w': TgtPricew,
      'Sectors': FIF.sectors,
      'Industries': FIF.industries,
      'ShortFloat_w': ShortFloatw,
      'ShortRatio_w': ShortRatiow,
      'E_Q/P_w': EQPw,
      'Range52W_w': Range52Ww,
      'ShareOutstandingHalfYear_w': ShareOutstandingHalfYearw,
      'ShareOutstandingOneYear_w': ShareOutstandingOneYearw,
    }
  };

  LoadingImg.doLoading(true);

  $.ajax({
    type: 'POST',
    url: 'https://zmcx16.moe/stock-minehunter/api/task/calc-formula2',
    async: true,
    data: JSON.stringify({ "data": data }),
    dataType: 'json',
    contentType: 'application/json',
    cache: false,
    success: function (resp_data, textStatus, xhr) {
      LoadingImg.doLoading(false);
      if (resp_data) {
        console.log(resp_data);
        if (resp_data["ret"] !== 0) {
          console.log('Get factor intersectional result failed: ' + resp_data);
        } else {
          $("#factor-intersectional-formula-tbody")[0].innerHTML = buildFactorIntersectionalTable(resp_data["result"]["data"])
        }
      }
      else {
        console.log('Get factor intersectional result failed: ' + xhr);
      }
    },
    error: function (xhr, textStatus, errorThrown) {
      LoadingImg.doLoading(false);
      console.log('Get factor intersectional result failed: ' + xhr);
      console.log('Get factor intersectional result failed: ' + textStatus);
      console.log('Get factor intersectional result failed: ' + errorThrown);
    },
    timeout: 300000
  });
}

function buildFactorIntersectionalTable(data) {

  let output = "";
  if (!data || data.length <= 0){
    $('#factor-intersectional-formula-table').css("display", "none");
    return "";
  }

  data.forEach((stock) => {
    output +=
      '<tr class="tr-stock main link" onclick="window.open(\'https://finviz.com/quote.ashx?t=' + stock['symbol'] + '\',\'_blank\',\'noopener\');">' + 
      '  <td class="td-symbol">' + stock['symbol'] + '</td>' +
      '  <td class="td-market">' + convert2KMBTString(stock['Market Cap'], 3) + '</td>' +
      '  <td class="td-price">' + stock['Price'] + '</td>' +
      '  <td class="td-52w">' + stock['52W Range'] + '</td>' +
      '  <td class="td-pe">' + stock['P/E'] + '</td>' +
      '  <td class="td-roa">' + (stock['ROA'] * 100).toFixed(2) + '%</td>' +
      '  <td class="td-score">' + stock['Score'].toFixed(0) + '</td>' +
      '</tr>';
  });

  $('#factor-intersectional-formula-table').css("display", "table");
  return output;
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

  let mf_data_dict = {}
  data["Factor_Intersectional_v1"].forEach((v, i) => {
    mf_data_dict[v["symbol"]] = {"rank": i+1, "score": v["Score"]};
  });
  $(".th-mf_score")[0].innerText = "Multi-Factor Rank\n[Total: " + data["Factor_Intersectional_v1"].length + "]";

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
    let profit_color = data["portfolio"][symbol]["profit_%"] > 0 ? "limegreen;" : "orangered";
    let position_now = data["portfolio"][symbol]["position_%"].toFixed(2);
    let position_kelly = score > 0 ? (score / total_postion_kelly * 100).toFixed(2) : 0;
    let mf_score = symbol in mf_data_dict ? mf_data_dict[symbol]["rank"] + " (" + mf_data_dict[symbol]["score"].toFixed(0) + ")" : "-&nbsp;";
    output += 
    '<tr class="tr-stock main link" onclick="window.open(\'https://finviz.com/quote.ashx?t=' + symbol + '\',\'_blank\',\'noopener\');">' + 
    '  <td class="td-symbol">' + symbol + '</td>' + 
    '  <td class="td-price">' + price + '</td>' + 
    '  <td class="td-180d">' + days + '</td>' + 
    '  <td class="td-avg_cost">' + avg_cost + '</td>' + 
    '  <td class="td-profit_now" style="font-weight: bold; color: ' + profit_color + '">' + profit_now + '%</td>' + 
    '  <td class="td-position_now">' + position_now + '%</td>' + 
    '  <td class="td-position_kelly">' + position_kelly + '%</td>' + 
    '  <td class="td-mf_score">' + mf_score + '</td>' + 
    '</tr>';
  });

  return output;
}

$(document).ready(function () {

  // disable cache
  // $.ajaxSetup({ cache: false });

  setBanner('Unlimited Formula Works', 'gold', ['好用的公式整理', 'Etz haChayim', 'El Psy Congroo']);

  // kelly
  $("#kelly-formula-val")[0].innerHTML = '$$' + kelly_formula + '$$';
  $("#kelly-formula-description")[0].innerHTML = '$$f^*: 下注比率 \\qquad b: 賠率 = \\cfrac{獲利金額}{虧損金額} \\qquad p: 獲利機率 \\qquad q: 虧損機率 $$';

  $('#kelly-manual-calc-btn').click(()=>{
    calcKelly();
  });

  $('#kelly-auto-range-v1-calc-btn').click(() => {
    getKellyAutoRangeV1();
  });

  // beneish (workaround: mathjax break line not work problem )
  $("#beneish-formula-val")[0].innerHTML = '$$' + beneish_formula1 + '$$' + '$$' + beneish_formula2 + '$$';
  $("#beneish-formula-description")[0].innerHTML = '$$' + 'DSRI(應收帳款指數): \\cfrac{本期應收帳款佔銷售收入比例}{上期應收帳款佔銷售收入比例} \\qquad GMI(毛利率指數): \\cfrac{上期毛利率}{本期毛利率}' + '$$' +
    '$$' + 'AQI(資產質量指數): \\cfrac{本期非流動資產占比}{上期非流動資產占比} \\qquad SGI(營業收入指數): \\cfrac{本期銷貨收入}{上期銷貨收入}' + '$$' + 
    '$$' + 'DEPI(折舊率指數): \\cfrac{上期折舊率}{本期折舊率} \\qquad SGAI(銷售管理費用指數): \\cfrac{本期銷售管理費用占銷售收入比例}{上期銷售管理費用占銷售收入比例}' + '$$' +
    '$$' + 'LVGI(財務杠桿指數): \\cfrac{本期資產負債率}{上期資產負債率} \\qquad TATA(應計系數): \\cfrac{淨收入 - 營運現金流量}{總資產}' + '$$';

  $('#beneish-manual-calc-btn').click(() => {
    calcBeneish();
  });

  $('#beneish-auto-range-v1-calc-btn').click(() => {
    getBeneishAutoRangeV1();
  });

  // factor-intersectional
  $("#factor-intersectional-formula-val")[0].innerHTML = '$$' + factor_intersectional_formula + '$$';
  $("#factor-intersectional-formula-description")[0].innerHTML = '$$' + 'S: 個股分數 \\qquad w: 因子權重 \\qquad n: 因子個數 \\qquad c: 市值M以上個股數 \\qquad f^*: 因子排行值' + '$$' + 
    '$$' + 'f_i: 盈餘殖利率(\\cfrac{每股盈餘}{股價}) \\qquad 股價淨值比倒數(\\cfrac{每股淨值}{股價}) \\qquad 市銷率倒數(\\cfrac{每股營收}{股價})' + '$$' + 
    '$$' + '股東權益報酬率(ROE) \\qquad 資產報酬率(ROA) \\qquad 投資回報率(ROI) \\qquad 股息率(\\%)  \\qquad 股價區間(52W)' + '$$' + 
    '$$' + '股價自由現金流比倒數(\\cfrac{自由現金流}{股價}) \\qquad 目標價現價差(\\%) \\qquad 內部人持股(\\%) \\qquad 內部人交易(\\%, 6M)' + '$$' + 
    '$$' + '機構持股(\\%) \\qquad 機構交易(\\%, 3M) \\qquad 做空比率(\\%) \\qquad 做空回補天數(Days) \\qquad 盈餘殖利率(Last Q)(\\cfrac{每股盈餘}{股價})' + '$$' + 
    '$$' + '對外流通股變動(\\%, 6M) \\qquad 對外流通股變動(\\%, 1Y)' + '$$';

  $('#factor-intersectional-get-btn').click(() => {
    getFactorIntersectionalV1();
  });

  runMathJax(".formula-groups", false);

  // build factor-intersectional filter pannel
  let buildFIF = (dictData, targetID)=>{
    var data_list = Object.keys(dictData).map(function (key) {
      return [key, dictData[key]];
    });

    data_list.sort(function (first, second) {
      var orderBool = first[1] > second[1];
      return orderBool ? 1 : -1;
    });
    
    let body = "";
    data_list.forEach((data) => {
      if (data[0] !== "-1") {
        body += '<button class="selectable-button disabled" id="' + targetID +'_' + data[0] + '">' + data[1] +'</button>';
      }
    });

    $("#" + targetID)[0].innerHTML = body;
  }
  buildFIF(StockSectorDict, "factor-intersectional-sector");
  buildFIF(StockIndustryDict, "factor-intersectional-industry");

  $(".selectable-button").click((e) => {
    if ($(e.target).hasClass('disabled')){
      $(e.target).removeClass('disabled');
      $(e.target).addClass('enabled');
    } else {
      $(e.target).removeClass('enabled');
      $(e.target).addClass('disabled');
    }
  });

  $("#factor-intersectional-sector-filter").click(function (e) {
    if ($("#factor-intersectional-sector-filter")[0].checked) {
      $("#factor-intersectional-sector-block").show();
    } else {
      $("#factor-intersectional-sector-block").hide();
    }
  });

  $("#factor-intersectional-industry-filter").click(function (e) {
    if ($("#factor-intersectional-industry-filter")[0].checked) {
      $("#factor-intersectional-industry-block").show();
    } else {
      $("#factor-intersectional-industry-block").hide();
    }
  });

  // load hold stocks data
  $.getJSON("zmcx16_investment-formula-trade-data.json", function (json_data) {
    $("#hold-stocks-tbody")[0].innerHTML = buildTable(json_data);
  });

});
