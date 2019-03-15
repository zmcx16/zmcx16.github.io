
var myvar = '<link rel="stylesheet" type="text/css" href="css/misc.css">' +
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


var switch_demo_imgs = new switchImgs("img-misc", 960, 499, 3);

class switchImgs {
    constructor(base_img_id, img_width, img_height, img_count) {
        this.base_img_id = base_img_id;
        this.img_width = img_width;
        this.img_height = img_height;
        this.img_count = img_count;

        for (var i = 0; i < this.img_count; i++) {
            if (i < this.img_count - 1) {
                document.getElementById(base_img_id + i).style = "top:" + this.img_height * i * -1 + "px; left:" + this.img_width  * i + "px";
            }
            else {
                document.getElementById(base_img_id + i).style = "top:" + this.img_height * i * -1 + "px; left:" + -1 * this.img_width  + "px";
            }
        }  
    }

    switch(turn_left=1, speed=500) {

        for (var i = 0; i < this.img_count; i++)
        {
            var offset = 0;
            var left_now = parseInt($("#" + this.base_img_id + i).css("left"));
            if( turn_left){
                if (left_now >= this.img_width * (this.img_count-1-1)){
                    offset = -1 * this.img_width;
                }else{
                    offset = left_now + this.img_width;
                }

                if (left_now == -1 * this.img_width || left_now == 0){
                    $("#" + this.base_img_id + i).animate({left: offset + "px"} , speed);
                }else{
                    document.getElementById(this.base_img_id + i).style = "top:" + this.img_height * i *-1 + "px; left:" + offset + "px";
                }
                
            }else{
                if (left_now <= -1 * this.img_width){
                    offset = this.img_width * (this.img_count-1-1);
                }else{
                    offset = left_now - this.img_width;
                }

                if (left_now == 0 || left_now == this.img_width){
                    $("#" + this.base_img_id + i).animate({left: offset + "px"} , speed);
                }else{
                    document.getElementById(this.base_img_id + i).style = "top:" + this.img_height * i *-1 + "px; left:" + offset + "px";
                }          
            }
            
        }      
    }
}


$("#img-prev").click(function () {
    switch_demo_imgs.switch(0, 500);
});
$("#img-next").click(function () {
    switch_demo_imgs.switch(1, 500);
});
