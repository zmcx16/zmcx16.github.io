
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


const demo_img_length = 3;
const demo_img_width = 960;
const demo_img_height = 499;

var demo_img_now = 0;

for (var i=0; i<demo_img_length; i++)
{
    if(i<demo_img_length-1){
        document.getElementById("img-misc"+i).style = "top:" + demo_img_height * i *-1 + "px; left:" + demo_img_width * i + "px";
    }
    else{
        document.getElementById("img-misc"+i).style = "top:" + demo_img_height * i *-1 + "px; left:" + -1 * demo_img_width + "px";
    }
}   

function switchDemoImg(turn_left=1, speed=500) {

    for (var i=0; i<demo_img_length; i++)
    {
        var offset = 0;
        var left_now = parseInt($("#img-misc"+i).css("left"));
        if( turn_left){
            if(left_now >= demo_img_width * (demo_img_length-1-1)){
                offset = -1*demo_img_width;
            }else{
                offset = left_now + demo_img_width;
            }

            if( left_now == -1*demo_img_width || left_now == 0){
                $("#img-misc"+i).animate({left: offset + "px"} , speed);
            }else{
                document.getElementById("img-misc"+i).style = "top:" + demo_img_height * i *-1 + "px; left:" + offset + "px";
            }
            
        }else{
            if(left_now <= -1 * demo_img_width){
                offset = demo_img_width * (demo_img_length-1-1);
            }else{
                offset = left_now - demo_img_width;
            }

            if( left_now == 0 || left_now == demo_img_width){
                $("#img-misc"+i).animate({left: offset + "px"} , speed);
            }else{
                document.getElementById("img-misc"+i).style = "top:" + demo_img_height * i *-1 + "px; left:" + offset + "px";
            }          
        }
        
    }      
}

$("#img-prev").click(function () {
    switchDemoImg(0, 500);
});
$("#img-next").click(function () {

    switchDemoImg(1, 500);
});

/*
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

document.getElementById("myBtn").onclick = function () { displayDate() };
*/