var myvar = 
'<link rel="stylesheet" type="text/css" href="css/investment-stocks.css">' +
'<div class=\'main-investment-stocks\'>' +
'    <div class="demo-img">' +
'        <img src="/img/investment-stocks/trade-kanban_960x435.png" />' +
'    </div>' +
'    <div class="hold-stocks-groups">' +
'        <h1> 持有清單 </h1>' +
'        <div class="hold-stocks content-block">' +
'            <table id="hold-stocks-table">' +
'                <thead>' +
'                    <th class="th-symbol">Symbol</th>' +
'                    <th class="th-price">Price</th>' +
'                    <th class="th-52w">52W</th>' +
'                    <th class="th-sma20">SMA20</th>' +
'                    <th class="th-sma50">SMA50</th>' +
'                    <th class="th-sma200">SMA200</th>' +
'                    <th class="th-rsi">RSI</th>' +
'                    <th class="th-atr">ATR</th>' +
'                    <th class="th-risk">Risk</th>' +
'                </thead>' +
'                <tbody id="hold-stocks-tbody">' +
'                </tbody>' +
'            </table>' +
'        </div>' +
'    </div>' +
'    <div class="star-stocks-groups">' +
'        <h1> 關注清單 </h1>' +
'        <div class="star-stocks content-block">' +
'            <table id="star-stocks-table">' +
'                <thead>' +
'                    <th class="th-symbol">Symbol</th>' +
'                    <th class="th-price">Price</th>' +
'                    <th class="th-52w">52W</th>' +
'                    <th class="th-sma20">SMA20</th>' +
'                    <th class="th-sma50">SMA50</th>' +
'                    <th class="th-sma200">SMA200</th>' +
'                    <th class="th-rsi">RSI</th>' +
'                    <th class="th-atr">ATR</th>' +
'                    <th class="th-risk">Risk</th>' +
'                </thead>' +
'                <tbody id="star-stocks-tbody">' +
'                </tbody>' +
'            </table>' +
'        </div>' +
'    </div>' +
'    <div class="data-source groups">' +
'        <h1> 數據源 </h1>' +
'        <div class="data-source content-block">' +
'            <a class="link" target="_blank" href="https://norn-minehunter.zmcx16.moe/">Norn-Minehunter</a>' +
'            <a class="link" target="_blank" href="https://finance.yahoo.com/">Yahoo Finance</a>' +
'            <a class="link" target="_blank" href="https://finviz.com/">Finviz</a>' +
'            <a class="link" target="_blank" href="https://newsapi.org/">NewsAPI</a>' +
'        </div>' +
'    </div>' +
'</div>' ;

document.getElementById('main-plugin-wrap').innerHTML = myvar;

function getScoreAndMappingImg(score_dict){

  var score = Math.round(score_dict["fail"] / (score_dict["pass"] + score_dict["fail"]) * 100);

  var bomb_img;
  if (isNaN(score)) {
    bomb_img = "bomb3.png";
  } else if (score < 100 * (1 / 5.0)) {
    bomb_img = "bomb1.png";
  } else if (score < 100 * (2 / 5.0)) {
    bomb_img = "bomb2.png";
  } else if (score < 100 * (3 / 5.0)) {
    bomb_img = "bomb3.png";
  } else if (score < 100 * (4 / 5.0)) {
    bomb_img = "bomb4.png";
  } else {
    bomb_img = "bomb5.png";
  }

  return { "score": score, "image": bomb_img};
}

function buildTable(data){
  var output = "";

  data.forEach((stock) => {

    var stock_output = "";
    var stock_score_dict = { "pass": 0, "fail": 0, "nodata": 0 };

    var scan_output = "";

    stock["scan_list"].forEach((report) => {

      var score_dict = { "pass": 0, "fail": 0, "nodata": 0 };
      var report_detail = "";

      if (report["report"]) {

        report["report"].forEach((arg) => {
          if (arg["pass"] === -1) {
            report_detail += '<span style="color: red;">[Fail] </span>';
            score_dict["fail"] += 1;
            stock_score_dict["fail"] += 1;
          } else if (arg["pass"] === 1) {
            report_detail += '<span style="color: limegreen;">[Pass] </span>';
            score_dict["pass"] += 1;
            stock_score_dict["pass"] += 1;
          } else {
            report_detail += '<span>[No Data] </span>';
            score_dict["nodata"] += 1;
            stock_score_dict["nodata"] += 1;
          }
          report_detail += arg["msg"] + "\n";
        });
      } else {
        report_detail = "Get Scan Report Failed.";
      }

      var result = getScoreAndMappingImg(score_dict)

      scan_output +=
        '            <tr class="tr-scan main">' +
        '              <td class="td-type-name">' + report["type"] + '</td>' +
        '              <td class="td-risk">' +
        '                <div>' +
        '                  <img class="bomb-image" src="/img/investment-stocks/' + result["image"] +'" />' +
        '                  <span> (' + result["score"] +'%) </span>' +
        '                </div>' +
        '              </td>' +
        '            </tr>' +
        '            <tr class="tr-scan second" style="display: none;">' +
        '              <td class="td-scan-name-group group-td" colspan="2">' +
        '                <div class="scan-output">';

      scan_output += report_detail;
      scan_output += 
        '                                                </div>' +
        '                                            </td>' +
        '                                        </tr>';
    });

    var stock_result = getScoreAndMappingImg(stock_score_dict);

    stock_output += 
    '<tr class="tr-stock main">' + 
    '  <td class="td-symbol">' + stock["symbol"] + '</td>' + 
    '  <td class="td-price">' + stock["base_info"]["Price"] + '</td>' + 
    '  <td class="td-52w">' + stock["base_info"]["52W Range"] + '</td>' + 
    '  <td class="td-sma20">' + stock["base_info"]["SMA20"] + '</td>' + 
    '  <td class="td-sma50">' + stock["base_info"]["SMA50"] + '</td>' + 
    '  <td class="td-sma200">' + stock["base_info"]["SMA200"] + '</td>' + 
    '  <td class="td-rsi">' + stock["base_info"]["RSI (14)"] + '</td>' + 
    '  <td class="td-atr">' + stock["base_info"]["ATR"] + '</td>' + 
    '  <td class="td-risk">' +
    '    <div>' +
    '      <img class="bomb-image" src="/img/investment-stocks/' + stock_result["image"] + '" />' +
    '      <span> (' + stock_result["score"] +'%) </span>' +
    '    </div>' +
    '  </td>' +
    '</tr>' + 
    '<tr class="tr-stock second" style="display: none;">' + 
    '  <td class="td-second-group group-td" colspan="9">' +
    '    <div class="stock-detail">' +
    '      <div class="stock-statistics">';

    var second_info_key = ["Beta", "Market Cap", "Dividend %", "P/E", "Forward P/E", "PEG", "Debt/Eq",
      "LT Debt/Eq", "EPS (ttm)", "ROA", "ROE", "ROI", "Gross Margin", "Oper. Margin", "Profit Margin"];

    second_info_key.forEach((key) => {
      stock_output += 
      '        <div class="base-data">' +
      '          <span class="span-12px base-data-key"> ' + key +' :</span>' +
      '          <span class="span-12px base-data-value">' + stock["base_info"][key] + '</span>' +
      '        </div>' +
      '        <div></div>';
    });
    stock_output +=
    '        </div>';

    // --- news ---
    stock_output += 
    '        <div class="news-list">';

    if (stock["news"]){
      stock["news"].forEach((news) => {
        let news_url = news["url"];
        let news_img = news["urlToImage"] === null ? './img/zmcx16_logo.png' : news["urlToImage"];
        let news_src = news["source"]["name"];
        let news_date = (new Date(news["publishedAt"])).toDateString();
        let news_title = news["title"];
        let news_description = String(news["description"]).replace(/<[^>]*>?/gm, ''); // prevent description include html tag

        stock_output += 
        '          <a style="display:block; text-decoration: inherit; color: inherit;" href="' + news_url + '">' +
        '            <div class="news-block">' +
        '              <div class="news-img"><img style="max-width: 100%; max-height: 100%; min-width: auto; min-height: auto;" src="' + news_img + '" onerror="this.onerror=null; this.src=\'./img/zmcx16_logo.png\'" ></div>' +
        '              <div class="news-content">' +
        '                <div class="news-src">' + news_src + ' - ' + news_date + '</div>' + 
        '                <div class="news-title">' + news_title + '</div>' +
        '                <div class="news-description">' + news_description + '</div>' +  
        '              </div>' +
        '            </div>' + 
        '          </a>';
      });
    }

    stock_output += 
    '        </div>';
    // ----------

    // --- scan report ---
    stock_output += 
    '        <div class="scan-list">' +
    '          <table class="scan-table">' +
    '            <thead>' +
    '              <th class="th-type-name">Scan Tactic</th>' +
    '              <th class="th-risk">Risk</th>' +
    '            </thead>' +    
    '            <tbody class="scan-tbody">';
    
    stock_output += scan_output;
    stock_output += 

      '                                    </tbody>' +
      '                                </table>' +
      '                            </div>' +
      '                        </div>' +
      '                    </td>' +
      '                </tr>';
    
    output += stock_output;
    
  });

  return output;
}

function preprocessData(json_data, input_key)
{
  var output = []

  json_data[input_key].forEach((symbol) => {

    var base_info = {};
    var scan_list = [];

    json_data["data"].forEach((stock) => {

      if (stock["symbol"] == symbol) {
        if (scan_list.length === 0) {
          base_info["Price"] = stock["baseinfo"]["Price"];
          base_info["52W Range"] = stock["baseinfo"]["52W Range"];
          base_info["SMA20"] = stock["baseinfo"]["SMA20"];
          base_info["SMA50"] = stock["baseinfo"]["SMA50"];
          base_info["SMA200"] = stock["baseinfo"]["SMA200"];
          base_info["RSI (14)"] = stock["baseinfo"]["RSI (14)"];
          base_info["ATR"] = stock["baseinfo"]["ATR"];
          base_info["Beta"] = stock["baseinfo"]["Beta"];
          base_info["Market Cap"] = stock["baseinfo"]["Market Cap"];
          base_info["Dividend %"] = stock["baseinfo"]["Dividend %"];
          base_info["P/E"] = stock["baseinfo"]["P/E"];
          base_info["Forward P/E"] = stock["baseinfo"]["Forward P/E"];
          base_info["PEG"] = stock["baseinfo"]["PEG"];
          base_info["Debt/Eq"] = stock["baseinfo"]["Debt/Eq"];
          base_info["LT Debt/Eq"] = stock["baseinfo"]["LT Debt/Eq"];
          base_info["EPS (ttm)"] = stock["baseinfo"]["EPS (ttm)"];
          base_info["ROA"] = stock["baseinfo"]["ROA"];
          base_info["ROE"] = stock["baseinfo"]["ROE"];
          base_info["ROI"] = stock["baseinfo"]["ROI"];
          base_info["Gross Margin"] = stock["baseinfo"]["Gross Margin"];
          base_info["Oper. Margin"] = stock["baseinfo"]["Oper. Margin"];
          base_info["Profit Margin"] = stock["baseinfo"]["Profit Margin"];
        }

        var report = {
          "type": stock["type"],
          "report": stock["report"],
        };

        scan_list.push(report);
      }

    });

    output.push({ "symbol": symbol, "base_info": base_info, "scan_list": scan_list, "news": json_data["news"][symbol] });

  });

  return output;
}

$(document).ready(function () {

  // disable cache
  // $.ajaxSetup({ cache: false });

  setBanner('Money Money', 'gold', ['目前持有 & 關注的個股清單', '往財富自由之路持續前進 ( • ̀ω•́ )', '$$$$$$$$$$$$$$$$$$$$$$$$']);

  $.getJSON("zmcx16_investment-stocks-trade-data.json", function (json_data) {

    var hold_stocks = preprocessData(json_data, "hold_stock_list");
    var star_stocks = preprocessData(json_data, "star_stock_list");

    $("#hold-stocks-tbody")[0].innerHTML = buildTable(hold_stocks);
    $("#star-stocks-tbody")[0].innerHTML = buildTable(star_stocks);

    $(".tr-stock.main, .tr-scan.main").click(function (e) {
      var second = $(this).next();
      if (second.css("display") == "none"){
        second.css("display", "table-row");
      }
      else{
        second.css("display", "none");
      }
    });

  });
});
