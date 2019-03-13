
var myvar = '<link rel="stylesheet" type="text/css" href="css/Misc.css">' +
    '<div class=\'main-misc\'>' +
    '    <div class="misc-show">' +
    '        <div class="img-arrow-wrap">' +
    '            <div class="img-arrow-wrap-2">' +
    '                <img class="img-arrow" id="img-prev" src="/img/prev.png" />' +
    '                <img class="img-arrow" id="img-next" src="/img/next.png" />' +
    '            </div>     ' +
    '        </div>' +
    '        <img class="img-misc" id="img-misc0" src="/img/MahoMangaDownloader/manga1.png" />' +
    '        <img class="img-misc" id="img-misc1" src="/img/MahoMangaDownloader/manga2.png" />' +
    '        <img class="img-misc" id="img-misc2" src="/img/MahoMangaDownloader/manga3.png" />' +
    '    </div>' +
    '</div>';

document.getElementById('main-plugin-wrap').innerHTML = myvar;

const img_num = 3;
var demo_img_now = 0;
document.getElementById("img-misc" + demo_img_now).style = "position:relative; opacity:1; display: block";

function changeDemoImg() {
    var previous_img_index = demo_img_now;
    demo_img_now = (demo_img_now + 1) % img_num;

    $("#img-misc" + previous_img_index).fadeTo(800, 0.05, function () {
        document.getElementById("img-misc" + previous_img_index).style = "position:absolute; opacity:0; display: none";
        document.getElementById("img-misc" + demo_img_now).style = "position:relative; opacity:0.05; display: block";
        $("#img-misc" + demo_img_now).fadeTo(800, 1);
    });

}

setInterval(changeDemoImg, 7000);