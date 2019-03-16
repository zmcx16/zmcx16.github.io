
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
    '            <img class="img-misc" id="img-misc0" src="/img/MahoMangaDownloader/manga1.png" />' +
    '            <img class="img-misc" id="img-misc1" src="/img/MahoMangaDownloader/manga2.png" />' +
    '            <img class="img-misc" id="img-misc2" src="/img/MahoMangaDownloader/manga3.png" />' +
    '        </div>' +
    '    </div>' +
    '</div>';

document.getElementById('main-plugin-wrap').innerHTML = myvar;


class SwitchImgs {
    constructor(name, img_width, img_height) {
        this.name = name;
        this.img_width = img_width;
        this.img_height = img_height;
        this.img_count = $("." + name).children().length;
        for (var i = 0; i < this.img_count; i++) {
            var img = $("." + this.name).children()[i];
            if (i < this.img_count - 1) {
                $(img).css("left", this.img_width * i + "px");
                
            }
            else {
                $(img).css("left", -1 * this.img_width + "px");
            }
        }  
    }

    doSwitch(turn_left=1, speed=500) {

        var imgs = $("." + this.name).children();
        for (var i = 0; i < this.img_count; i++)
        {
            var offset = 0;
            var left_now = parseInt($(imgs[i]).css("left"));
            
            if( turn_left){
                if (left_now >= this.img_width * (this.img_count-1-1)){
                    offset = -1 * this.img_width;
                }else{
                    offset = left_now + this.img_width;
                }

                if (left_now == -1 * this.img_width || left_now == 0){
                    $(imgs[i]).animate({left: offset + "px"} , speed);
                }else{
                    $(imgs[i]).css("left", offset + "px");
                }
                
            }else{
                if (left_now <= -1 * this.img_width){
                    offset = this.img_width * (this.img_count-1-1);
                }else{
                    offset = left_now - this.img_width;
                }

                if (left_now == 0 || left_now == this.img_width){
                    $(imgs[i]).animate({left: offset + "px"} , speed);
                }else{
                    $(imgs[i]).css("left", offset + "px");
                }          
            }
            
        }      
    }
}


var switch_demo_imgs = new SwitchImgs("img-misc-wrap", 960, 499);


$("#img-prev").click(function () {
    switch_demo_imgs.doSwitch(0, 500);
});
$("#img-next").click(function () {
    switch_demo_imgs.doSwitch(1, 500);
});
