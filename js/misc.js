
var myvar = '<link rel="stylesheet" type="text/css" href="css/misc.css">' +
    '<div class=\'main-misc\'>' +
    '    <div class="misc-show">' +
    '        <div class="img-arrow-wrap">' +
    '            <div class="img-arrow-wrap-2">' +
    '                <img class="img-arrow" id="img-prev" src="/img/prev.png" />' +
    '                <img class="img-arrow" id="img-next" src="/img/next.png" />' +
    '            </div>     ' +
    '        </div>' +
    '        <div class="img-misc-wrap">' +
    '            <img class="img-misc" src="/img/MahoMangaDownloader/demo2/manga1.png" />' +
    '            <img class="img-misc" src="/img/MahoMangaDownloader/demo2/manga2.png" />' +
    '            <img class="img-misc" src="/img/MahoMangaDownloader/demo2/manga3.png" />' +
    '        </div>' +
    '    </div>' +
    '</div>';

document.getElementById('main-plugin-wrap').innerHTML = myvar;

var switch_demo_imgs = new SwitchImgs("img-misc-wrap", 960, 499);
switch_demo_imgs.run();

$('.misc-show').hover(function (ev) {
    switch_demo_imgs.stop();
}, function (ev) {
    switch_demo_imgs.run();
});

$("#img-prev").click(function () {
    switch_demo_imgs.doSwitch(0, 500);
});
$("#img-next").click(function () {
    switch_demo_imgs.doSwitch(1, 500);
});
