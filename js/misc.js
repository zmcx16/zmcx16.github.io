
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
    '    <div class="map-editor">' +
    '        <h1>2.5D地圖編輯器<br></h1>' +
    '        <p>大學時有陣子很閒, 剛好手邊有破解幾個懷舊遊戲的data, 而且個人又很喜歡45度角這類2.5D的遊戲, 就花了大概一個月左右做了這個小工具~。<br></p>' +
    '        <p>不過說實話, 原本是為了以後自製遊戲先開發的小工具, 結果做完工具後還沒開始做遊戲就進入考試地獄, 自製2.5遊戲的小夢想就這樣一直沒有下文...。不如說現在都只會想玩遊戲, 想到做遊戲得花的功夫就完全不想動了阿XD<br><br></p>' +
    '        <h2>Demo</h1>' +
    '        <div class="map-editor-show">' +
    '            <img class="img-map-editor" src="/img/Misc/MapEditor1.png" />' +
    '            <img class="img-map-editor" src="/img/Misc/MapEditor2.png" />' +
    '            <img class="img-map-editor" src="/img/Misc/MapEditor3.png" />' +
    '            <img class="img-map-editor" src="/img/Misc/MapEditor4.png" />' +
    '        </div>' +
    '    </div>' +
    '</div>';


document.getElementById('main-plugin-wrap').innerHTML = myvar;

var switch_demo_imgs = 0;

$(document).ready(function () {
    switch_demo_imgs = new SwitchImgs("img-misc-wrap", 960, 499);
    switch_map_editor_imgs_random = new SwitchImgsRandom("map-editor-show");

    switch_demo_imgs.run();

    $('#main-plugin-wrap').on('mouseover', '.misc-show', function () { switch_demo_imgs.stop(); });
    $('#main-plugin-wrap').on('mouseout', '.misc-show', function () { switch_demo_imgs.run(); });
    $('#main-plugin-wrap').on('click', '#img-prev', function () { switch_demo_imgs.doSwitch(0, 500); });
    $('#main-plugin-wrap').on('click', '#img-next', function () { switch_demo_imgs.doSwitch(1, 500); });

});

//# sourceURL=js/misc.js

