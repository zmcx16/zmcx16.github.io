
var myvar = '<link rel="stylesheet" type="text/css" href="css/about-donate.css">' +
    '<div class=\'main-donate\'>' +
    '  <div class="description">' +
    '      <div class="default-donate opay">' +
    '        <a href="https://payment.opay.tw/Broadcaster/Donate/0655E9805FCA244F815EA4DDF097EB61"><img src="https://payment.opay.tw/Content/themes/WebStyle201404/images/allpay.png" /></a>' +
    '      </div>' +
    '      <div class="default-donate paypal">' +
    '        <a href="https://www.paypal.me/zmcx16"><img src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/PP_logo_h_150x38.png" /></a>' +
    '      </div>' +
    '      <div class="gif-donate opay">' +
    '        <a href="https://payment.opay.tw/Broadcaster/Donate/0655E9805FCA244F815EA4DDF097EB61"><img src="/img/donate/opay-gif400x400.gif" /></a>' +
    '      </div>' +
    '      <div class="gif-donate paypal">' +
    '        <a href="https://www.paypal.me/zmcx16"><img src="/img/donate/paypal-gif400x400.gif" /></a>' +
    '      </div>' +
    '      <div class="image-donate opay">' +
    '        <a href="https://payment.opay.tw/Broadcaster/Donate/0655E9805FCA244F815EA4DDF097EB61"><img src="/img/donate/opay-image400x400.png" /></a>' +
    '      </div>' +
    '      <div class="image-donate paypal">' +
    '        <a href="https://www.paypal.me/zmcx16"><img src="/img/donate/paypal-image400x400.png" /></a>' +
    '      </div>' +
    '      <div class="disclaimer">' +
    '        <h3>由於支付平台不一定支持直接退款的功能, 考慮到各種麻煩因素不接受退款, 真的要抖內麻煩請考慮清楚喔。</h3>' +
    '      </div>' +
    '  </div>' +
    '</div>';


document.getElementById('main-plugin-wrap').innerHTML = myvar;


$(document).ready(function () {

    setBanner('Donate Note', 'aliceblue', ['歡迎抖內$$支持作者', '按讚跟留言也是支持作者的動力喔~', '人生收到第一筆抖內是$10800 P幣!!!']);
    // RWD
    var width = window.screen.width;
    if (width < 960) {
        $('li.bullet-list-content').css('font-size', 'x-large');
        $('li.bullet-list-content').css('line-height', 'normal');
        $('h3').css('font-size', 'x-large');
        
    }
});

//# sourceURL=js/about-donate.js