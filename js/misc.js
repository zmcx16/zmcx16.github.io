
var myvar = '<link rel="stylesheet" type="text/css" href="css/misc.css">' +
    '<div class=\'main-misc\'>' +
    '    <div class="switch-imgs-show image-show-misc">' +
    '        <div class="img-arrow-wrap">' +
    '            <div class="img-arrow-wrap-2">' +
    '                <img class="img-arrow-prev" id="img-prev-0" src="/img/prev.png" />' +
    '                <img class="img-arrow-next" id="img-next-0" src="/img/next.png" />' +
    '            </div>     ' +
    '        </div>' +
    '        <div class="img-misc-wrap">' +
    '            <img class="img-misc" src="/img/misc/misc1.png" />' +
    '            <img class="img-misc" src="/img/misc/misc2.png" />' +
    '        </div>' +
    '    </div>' +
    '    <div class="description">' +
    '        <p>這頁主要介紹一些學生時代做的東西, 包含一些奇怪的黑歷史(?), 不過真的太過恐怖的黑歷史不會放上來就是了...。<br></p>' +
    '    </div>' +
    '    <div class="map-editor">' +
    '        <h1>2.5D地圖編輯器<br></h1>' +
    '        <p>大學時有陣子很閒, 剛好手邊有破解幾個懷舊遊戲的data, 而且個人又很喜歡45度角這類2.5D的遊戲, 就花了大概一個月左右做了這個小工具~。<br></p>' +
    '        <p>不過說實話, 原本是為了以後自製遊戲先開發的小工具, 結果做完工具後還沒開始做遊戲就進入考試地獄, 自製2.5遊戲的小夢想就這樣一直沒有下文...。不如說現在都只會想玩遊戲, 想到做遊戲得花的功夫就完全不想動了阿XD<br><br></p>' +
    '        <div class="tab-page map-editor-tab">' +
    '            <ul class="tabs">' +
    '                <li><a href="#tab-map-editor-img">Images</a></li>' +
    '                <li><a href="#tab-map-editor-video">Video</a></li>' +
    '            </ul>' +
    '    ' +
    '            <div class="tab_container">' +
    '                <div id="tab-map-editor-img" class="tab_content">' +
    '                    <div class="switch-imgs-show image-show-map-editor">' +
    '                        <div class="img-arrow-wrap">' +
    '                            <div class="img-arrow-wrap-2">' +
    '                                <img class="img-arrow-prev" id="img-prev-map-editor" src="/img/prev.png" />' +
    '                                <img class="img-arrow-next" id="img-next-map-editor" src="/img/next.png" />' +
    '                            </div>' +
    '                        </div>' +
    '                        <div class="img-map-editor-wrap">' +
    '                            <img class="img-map-editor" src="/img/Misc/MapEditor1.png" />' +
    '                            <img class="img-map-editor" src="/img/Misc/MapEditor2.png" />' +
    '                            <img class="img-map-editor" src="/img/Misc/MapEditor3.png" />' +
    '                            <img class="img-map-editor" src="/img/Misc/MapEditor4.png" />' +
    '                        </div>' +
    '                    </div>' +
    '                </div>' +
    '                <div id="tab-map-editor-video" class="tab_content">' +
    '                    <iframe width="920" height="518" src="https://www.youtube.com/embed/mG8fzL0wNcY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"' +
    '                        allowfullscreen></iframe>' +
    '                </div>' +
    '            </div>' +
    '        </div>' +
    '    </div>' +
    '</div>';

document.getElementById('main-plugin-wrap').innerHTML = myvar;

var switch_demo_imgs = 0;
var switch_demo_imgs_map_editor = 0;

$(document).ready(function () {
    switch_demo_imgs = new SwitchImgs("img-misc-wrap", 960, 499);
    switch_demo_imgs.run();
    $('#main-plugin-wrap').on('mouseover', '.image-show-misc', function () { switch_demo_imgs.stop(); });
    $('#main-plugin-wrap').on('mouseout', '.image-show-misc', function () { switch_demo_imgs.run(); });
    $('#main-plugin-wrap').on('click', '#img-prev-0', function () { switch_demo_imgs.doSwitch(0, 500); });
    $('#main-plugin-wrap').on('click', '#img-next-0', function () { switch_demo_imgs.doSwitch(1, 500); });

    switch_demo_imgs_map_editor = new SwitchImgs("img-map-editor-wrap", 920, 710);
    switch_demo_imgs_map_editor.run();    
    $('#main-plugin-wrap').on('mouseover', '.image-show-map-editor', function () { switch_demo_imgs_map_editor.stop(); });
    $('#main-plugin-wrap').on('mouseout', '.image-show-map-editor', function () { switch_demo_imgs_map_editor.run(); });
    $('#main-plugin-wrap').on('click', '#img-prev-map-editor', function () { switch_demo_imgs_map_editor.doSwitch(0, 500); });
    $('#main-plugin-wrap').on('click', '#img-next-map-editor', function () { switch_demo_imgs_map_editor.doSwitch(1, 500); });


    $(function () {
        var _showTab = 0;
        $('.tab-page').each(function () {

            var $tab = $(this);
            var $defaultLi = $('ul.tabs li', $tab).eq(_showTab).addClass('active');
            $($defaultLi.find('a').attr('href')).siblings().hide();

            $('ul.tabs li', $tab).click(function () {

                var $this = $(this),
                    _clickTab = $this.find('a').attr('href');

                $this.addClass('active').siblings('.active').removeClass('active');
                $(_clickTab).stop(false, true).fadeIn().siblings().hide();

                return false;
            }).find('a').focus(function () {
                this.blur();
            });
        });
    });

});





//# sourceURL=js/misc.js

