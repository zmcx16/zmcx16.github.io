var myvar = 
'<link rel="stylesheet" type="text/css" href="css/investment-stocks.css">' +
'<div class=\'main-investment-stocks\'>' +
'    <div class="demo-img">' +
'        <img src="/img/investment-stocks/trade-kanban_960x435.png" />' +
'    </div>' +
'    <div class="star-indicators-groups">' +
'        <h1> 關注指標 </h1>' +
'        <div class="star-indicators content-block">' +
'            <table id="star-indicators-table">' +
'                <thead>' +
'                    <th class="th-symbol">Symbol</th>' +
'                    <th class="th-price">Price</th>' +
'                    <th class="th-change">Change</th>' +
'                    <th class="th-52w">52W Range</th>' +
'                    <th class="th-52h">52W High</th>' +
'                    <th class="th-52l">52W Low</th>' +
'                    <th class="th-perf-month">Perf Month</th>' +
'                    <th class="th-perf-year">Perf Year</th>' +
'                    <th class="th-perf-ytd">Perf YTD</th>' +
'                </thead>' +
'                <tbody id="star-indicators-tbody">' +
'                </tbody>' +
'            </table>' +
'        </div>' +
'    </div>' +
'    <div class="hold-stocks-groups">' +
'        <h1> 持有個股 </h1>' +
'        <div class="hold-stocks content-block">' +
'            <table id="hold-stocks-table">' +
'                <thead>' +
'                    <th class="th-symbol">Symbol</th>' +
'                    <th class="th-price">Price</th>' +
'                    <th class="th-change">Change</th>' +
'                    <th class="th-52w">52W Range</th>' +
'                    <th class="th-sma20">SMA20</th>' +
'                    <th class="th-sma50">SMA50</th>' +
'                    <th class="th-sma200">SMA200</th>' +
'                    <th class="th-rsi">RSI</th>' +
'                    <th class="th-risk">Risk</th>' +
'                </thead>' +
'                <tbody id="hold-stocks-tbody">' +
'                </tbody>' +
'            </table>' +
'            <div class="sub-table-title">' +
'                <div class="sec-title"><input type="checkbox" id="hold-stocks-sec-show" class="sec-checkbox"><label for="hold-stocks-sec-show"> SEC 文件 (近30天)</label></div>' +
'                <div class="earnings-date-title"><input type="checkbox" id="hold-stocks-earnings-date-show" class="earnings-date-checkbox"><label for="hold-stocks-earnings-date-show"> 近期業績公布日</label></div>' +
'            </div>' +
'            <table id="hold-stocks-sec-table" style="display: none;">' +
'                <thead>' +
'                    <th class="th-date">Date</th>' +
'                    <th class="th-symbol">Symbol</th>' +
'                    <th class="th-filings">Filings</th>' +
'                </thead>' +
'                <tbody id="hold-stocks-sec-tbody">' +
'                </tbody>' +
'            </table>' +
'            <table id="hold-stocks-earnings-date-table" style="display: none;">' +
'                <thead>' +
'                    <th class="th-earnings-date-date">Date</th>' +
'                    <th class="th-earnings-date-symbol">Symbol</th>' +
'                    <th class="th-earnings-date-similar">Similar</th>' +
'                </thead>' +
'                <tbody id="hold-stocks-earnings-date-tbody">' +
'                </tbody>' +
'            </table>' +
'        </div>' +
'    </div>' +
'    <div class="star-stocks-groups">' +
'        <h1> 關注個股 </h1>' +
'        <div class="star-stocks content-block">' +
'            <table id="star-stocks-table">' +
'                <thead>' +
'                    <th class="th-symbol">Symbol</th>' +
'                    <th class="th-price">Price</th>' +
'                    <th class="th-change">Change</th>' +
'                    <th class="th-52w">52W Range</th>' +
'                    <th class="th-sma20">SMA20</th>' +
'                    <th class="th-sma50">SMA50</th>' +
'                    <th class="th-sma200">SMA200</th>' +
'                    <th class="th-rsi">RSI</th>' +
'                    <th class="th-risk">Risk</th>' +
'                </thead>' +
'                <tbody id="star-stocks-tbody">' +
'                </tbody>' +
'            </table>' +
'        </div>' +
'    </div>' +
'    <div class="screener-stocks-groups">' +
'        <h1> 自動選股 (每日) </h1>' +
'        <div class="screener-stocks content-block">' +
'            <table id="screener-stocks-table">' +
'                <thead>' +
'                    <th class="th-symbol">Symbol</th>' +
'                    <th class="th-price">Price</th>' +
'                    <th class="th-change">Change</th>' +
'                    <th class="th-52w">52W Range</th>' +
'                    <th class="th-sma20">SMA20</th>' +
'                    <th class="th-sma50">SMA50</th>' +
'                    <th class="th-sma200">SMA200</th>' +
'                    <th class="th-rsi">RSI</th>' +
'                    <th class="th-risk">Risk</th>' +
'                </thead>' +
'                <tbody id="screener-stocks-tbody">' +
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
'            <a class="link" target="_blank" href="https://www.sec.gov/">SEC</a>' +
'        </div>' +
'    </div>' +
'</div>' ;

document.getElementById('main-plugin-wrap').innerHTML = myvar;

var g_last_closed_price_list = {};

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

function getStockChangeColor(val){
  let sign = Math.sign(parseFloat(val));
  if (sign === 1) {
    return '<span style="color:green;">' + '+' + val + '</span>'
  } else if (sign == -1) {
    return '<span style="color:red;">' + val + '</span>'
  } else {
    return '<span style="color:black;">' + val + '</span>'
  }
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
    '  <td class="td-price symbol-' + stock["symbol"] +'">' + stock["base_info"]["Price"] + '</td>' + 
    '  <td class="td-change symbol-' + stock["symbol"] +'">' + getStockChangeColor(stock["base_info"]["Change"]) + '</td>' + 
    '  <td class="td-52w">' + stock["base_info"]["52W Range"] + '</td>' + 
    '  <td class="td-sma20">' + stock["base_info"]["SMA20"] + '</td>' + 
    '  <td class="td-sma50">' + stock["base_info"]["SMA50"] + '</td>' + 
    '  <td class="td-sma200">' + stock["base_info"]["SMA200"] + '</td>' + 
    '  <td class="td-rsi">' + stock["base_info"]["RSI (14)"] + '</td>' + 
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

    var second_info_key = ["ATR", "Beta", "Market Cap", "Dividend %", "P/E", "P/B", "Forward P/E", "PEG", "Debt/Eq",
      "LT Debt/Eq", "EPS (ttm)", "ROA", "ROE", "ROI", "Gross Margin", "Oper. Margin", "Profit Margin", "Beneish Model"];

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

function buildSECTable(data) {

  var ENABLE_SEC = ["10-Q", "6-K", "10-K", "20-F", "8-K", "6-K", "11-K", "13F", "3", "4", "5"];

  var sec_list = [];
  data.forEach((stock) => {
    if (stock["SEC"] === undefined) {
      return;
    }
    stock["SEC"].forEach((sec)=>{
      ENABLE_SEC.forEach((type)=>{
        if (sec["type"] == type){
          sec["symbol"] = stock["symbol"];
          sec_list.push(sec);
          return;
        }
      });
    });
  });

  sec_list = sec_list.sort(function (a, b) {
    return new Date(a.date) < new Date(b.date) ? 1 : -1;
  });

  var sec_output = "";
  sec_list.forEach((doc) => {
    sec_output +=
      '<tr class="tr-sec main" onclick="window.open(\'' + doc["link"] + '\');">' +
      '  <td class="td-date">' + doc["date"] + '</td>' +
      '  <td class="td-symbol">' + doc["symbol"] + '</td>' +
      '  <td class="td-filings">' + doc["type"] + '</td>' +
      '</tr>';
  });

  return sec_output;
}

function buildEarningsDateTable(data) {

  earningsDate_data = Object.keys(data).filter(key => 
    new Date(data[key]["earningsDate"][0]) > new Date() - 1000 * 60 * 60 * 24 * 3).map(function (key) {
    return {
      "symbol": key,
      "earningsDate": data[key]["earningsDate"],
      "similar": data[key]["similar"],
    }
  });

  earningsDate_data = earningsDate_data.sort(function (a, b) {
    return new Date(a["earningsDate"][0]) > new Date(b["earningsDate"][0]) ? 1 : -1;
  });
  console.log(earningsDate_data)
  var output = "";
  earningsDate_data.forEach((doc) => {
    output +=
      '<tr class="tr-earnings-date main" onclick="window.open(\'' + "https://hk.finance.yahoo.com/quote/" + doc["symbol"] + '\');">' +
      '  <td class="td-earnings-date-date">' + doc["earningsDate"].join(' ~ ') + '</td>' +
      '  <td class="td-earnings-date-symbol">' + doc["symbol"] + '</td>' +
      '  <td class="td-earnings-date-similar">' + doc["similar"] + '</td>' +
      '</tr>';
  });

  return output;
}

function buildIndicatorTable(data) {
  var output = "";
  data.forEach((indicator) => {
    output += 
    '<tr class="tr-indicator main" onclick="window.open(\'' + "https://hk.finance.yahoo.com/quote/" + indicator["symbol"] + '\');">' + 
    '  <td class="td-symbol">' + indicator["symbol"] + '</td>' + 
    '  <td class="td-price symbol-' + indicator["symbol"] +'">' + indicator["Price"] + '</td>' + 
    '  <td class="td-change symbol-' + indicator["symbol"] +'">' + getStockChangeColor(indicator["Change"]) + '</td>' + 
    '  <td class="td-52w">' + indicator["52W Range"] + '</td>' + 
    '  <td class="td-52h">' + getStockChangeColor(indicator["52W High"]) + '</td>' + 
    '  <td class="td-52l">' + getStockChangeColor(indicator["52W Low"]) + '</td>' + 
    '  <td class="td-perf-month">' + getStockChangeColor(indicator["Perf Month"]) + '</td>' + 
    '  <td class="td-perf-year">' + getStockChangeColor(indicator["Perf Year"]) + '</td>' + 
    '  <td class="td-perf-ytd">' + getStockChangeColor(indicator["Perf YTD"]) + '</td>' + 
    '</tr>';
  });
  return output;
}

function preprocessData(json_data, input_key)
{
  var output = []

  if (json_data[input_key] === undefined) {
    return [];
  }

  json_data[input_key].forEach((symbol) => {

    var base_info = {};
    var scan_list = [];

    json_data["data"].forEach((stock) => {

      if (stock["symbol"] == symbol) {
        if (scan_list.length === 0) {
          base_info["Price"] = stock["baseinfo"]["Price"];
          g_last_closed_price_list[symbol] = parseFloat(base_info["Price"]);
          base_info["Change"] = stock["baseinfo"]["Change"];
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
          base_info["P/B"] = stock["baseinfo"]["P/B"];
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
          
          if (json_data["Beneish_Model_v1"][symbol] && Object.keys(json_data["Beneish_Model_v1"][symbol]).length > 0) {
            let bm_year_key = '';
            Object.keys(json_data["Beneish_Model_v1"][symbol]).forEach((year) => {
              if (bm_year_key == '' || year > bm_year_key){
                bm_year_key = year;
              }
            });
            base_info["Beneish Model"] = parseFloat(json_data["Beneish_Model_v1"][symbol][bm_year_key]["M_Score"].toFixed(3));
          }
          else{
            base_info["Beneish Model"] = "-";
          }
        }

        var report = {
          "type": stock["type"],
          "report": stock["report"],
        };

        scan_list.push(report);
      }

    });

    output.push({ "symbol": symbol, "base_info": base_info, "scan_list": scan_list, "news": json_data["news"][symbol], "SEC": json_data["SEC"][symbol] });

  });

  return output;
}

$(document).ready(function () {

  // disable cache
  // $.ajaxSetup({ cache: false });

  setBanner('Money Money', 'gold', ['目前持有 & 關注的個股清單', '往財富自由之路持續前進 ( • ̀ω•́ )', '$$$$$$$$$$$$$$$$$$$$$$$$']);

  Promise.all([
    fetch("zmcx16_investment-stocks-trade-data.json"),
    fetch("earnings_data.json"),
  ])
  .then(json_datas => Promise.all(json_datas.map(r => r.json())) )
  .then(json_datas => {
    
    $("#star-indicators-tbody")[0].innerHTML = buildIndicatorTable(json_datas[0]["indicator_list"]);

    var hold_stocks = preprocessData(json_datas[0], "hold_stock_list");
    var star_stocks = preprocessData(json_datas[0], "star_stock_list");
    var screener_stocks = preprocessData(json_datas[0], "screener_stock_list");

    $("#hold-stocks-tbody")[0].innerHTML = buildTable(hold_stocks);

    $("#hold-stocks-sec-tbody")[0].innerHTML = buildSECTable(hold_stocks);
    $("#hold-stocks-sec-show").click(function (e) {
      if ($("#hold-stocks-sec-show")[0].checked){
        $("#hold-stocks-sec-table").show();
      }else{
        $("#hold-stocks-sec-table").hide();
      }
    });

    $("#hold-stocks-earnings-date-tbody")[0].innerHTML = buildEarningsDateTable(json_datas[1])
    $("#hold-stocks-earnings-date-show").click(function (e) {
      if ($("#hold-stocks-earnings-date-show")[0].checked){
        $("#hold-stocks-earnings-date-table").show();
      }else{
        $("#hold-stocks-earnings-date-table").hide();
      }
    });

    $("#star-stocks-tbody")[0].innerHTML = buildTable(star_stocks);

    $("#screener-stocks-tbody")[0].innerHTML = buildTable(screener_stocks);

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

  // ----- SignalR init connection -----
  var connection = new signalR.HubConnectionBuilder().withUrl("https://zmcx16.moe/hubs/signalRHub").build();
  //var connection = new signalR.HubConnectionBuilder().withUrl("https://localhost:44341/signalRHub").build();

  connection.on("EchoReply", function (message) {
    console.log(message);
  });

  connection.on("GetStockInfo", function (message) {
    //console.log(message);
    /*
    [{ "Key": "PNC", "Value": 119.695 },...]
    */
    var msg_arr = JSON.parse(message);
    msg_arr.forEach((stock) => {
      $($(".td-price.symbol-" + stock["Key"])[0]).fadeOut(500, function () {
        $(this).text(stock["Value"].toString()).fadeIn(500);
      });

      if (stock["Key"] in g_last_closed_price_list){
        $($(".td-change.symbol-" + stock["Key"])[0]).fadeOut(500, function () {
          var change = ((stock["Value"] - g_last_closed_price_list[stock["Key"]]) * 100 / g_last_closed_price_list[stock["Key"]]).toFixed(2);
          $(this).html(getStockChangeColor(change.toString() + '%')).fadeIn(500);
        });

      }
    });

  });

  connection.start().then(function () {
    var message = 'Hello Happy World';
    connection.invoke("Echo", message).catch(function (err) {
      return console.error(err.toString());
    });
  }).catch(function (err) {
    return console.error(err.toString());
  });
  // -----------------------------------

});
