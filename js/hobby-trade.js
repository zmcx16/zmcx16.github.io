var myvar = 
'<link rel="stylesheet" type="text/css" href="css/hobby-trade.css">' +
'<div class=\'main-trade\'>' +
'    <div class="demo-img">' +
'        <img src="/img/hobby-trade/trade-kanban_960x435.png" />' +
'    </div>' +
'    <div class="hold-stocks-groups">' +
'        <h1> 持有個股 </h1>' +
'        <table id="hold-stocks-table">' +
'            <thead>' +
'                <th class="th-symbol">Symbol</th>' +
'                <th class="th-price">Price</th>' +
'                <th class="th-52w">52W</th>' +
'                <th class="th-sma20">SMA20</th>' +
'                <th class="th-sma50">SMA50</th>' +
'                <th class="th-sma200">SMA200</th>' +
'                <th class="th-rsi">RSI</th>' +
'                <th class="th-atr">ATR</th>' +
'                <th class="th-risk">Risk</th>' +
'            </thead>' +
'            <tbody id="hold-stocks-tbody">' +
'            </tbody>' +
'        </table>' +
'    </div>' +
'    <h1>網站建置中...</h1>' +
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
        '                  <img class="bomb-image" src="/img/hobby-trade/' + result["image"] +'" />' +
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
    '      <img class="bomb-image" src="/img/hobby-trade/' + stock_result["image"] + '" />' +
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
    '        </div>' +
    '        <div class="scan-list">' +
    '          <table class="scan-table">' +
    '            <thead>' +
    '              <th class="th-type-name">Scan Strategy</th>' +
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

$(document).ready(function () {

  $.getJSON("zmcx16_hobby-trade-data.json", function (json_data) {

    var hold_stocks = []

    json_data["hold_stock_list"].forEach((symbol) => {
   
      var base_info = {};
      var scan_list = [];

      json_data["data"].forEach((stock) => {
        
        if (stock["symbol"] == symbol){
          if (scan_list.length === 0){
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
            "report": stock["report"]
          };

          scan_list.push(report);
        }

      });

      hold_stocks.push({ "symbol": symbol, "base_info": base_info, "scan_list": scan_list});

    });

    $("#hold-stocks-tbody")[0].innerHTML = buildTable(hold_stocks);

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
