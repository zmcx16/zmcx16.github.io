const illustration_img_home = 'illustration.png';
const illustration_img_mahomanga = 'illustration_mahomanga.png';

function pickImg(img_ID, img_List){


}

function loadIllustrationImg(file_name) {
    $(".top-shelf")[0].style.background = 'url(/img/' + file_name + ') no-repeat right bottom';
}

function loadScripts(url_list, index) {

    if (index < url_list.length) {
        jQuery.ajax({
            url: url_list[index],
            dataType: 'script',
            success: loadScripts(url_list, index+1),
            async: true
        });
    }
}

function setBanner(topic, color, list_descr){

    $(".top-shelf .container h1")[0].innerHTML = topic;
    $(".top-shelf h1")[0].style = "color:" + color;

    document.getElementsByClassName("bullet-list-round")[0].innerHTML = '<br>';

    list_descr.forEach(element => {
        document.getElementsByClassName("bullet-list-round")[0].innerHTML += '<li>' + element + '</li>'
    });
}


class SwitchImgsRandom {
    constructor(name) {
        this.name = name;
        this.img_count = $("." + this.name).children().length;
        var demo_img_now = Math.floor(Math.random() * this.img_count)
        $("." + this.name).attr('index_now', demo_img_now);
        for (var i = 0; i < this.img_count; i++) {

            var img = $("." + this.name).children()[i];
            if (i == demo_img_now) {
                $(img).css("position", "relative");
                $(img).css("opacity", 1);
                $(img).css("display", "block");
            } else {
                $(img).css("position", "absolute");
                $(img).css("opacity", 0);
                $(img).css("display", "none");
            }
        }
    }

    doSwitch(speed = 800, opacity = 0.05) {

        var name = this.name;
        var demo_img_now = parseInt($("." + this.name).attr('index_now'));
        var index = 0;
        do {
            index = Math.floor(Math.random() * this.img_count);
        } while (index == demo_img_now);

        var img_now = $("." + this.name).children()[demo_img_now];
        var img_next = $("." + this.name).children()[index];
        $(img_now).fadeTo(speed, opacity, function () {
            $(img_now).css("position", "absolute");
            $(img_now).css("opacity", 0);
            $(img_now).css("display", "none");

            $(img_next).css("position", "relative");
            $(img_next).css("opacity", opacity);
            $(img_next).css("display", "block");

            $("." + name).attr("index_now", index);

            $(img_next).fadeTo(speed, 1);
        });
    }

    run(interval = 7000, speed = 800, opacity = 0.05) {
        setInterval(this.doSwitch.bind(this, speed, opacity), interval);
    }
}


class SwitchImgs {
    constructor(name, img_width, img_height) {
        this.name = name;
        this.timeId = 0;
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

    doSwitch(next = 1, speed = 500) {

        var imgs = $("." + this.name).children();
        for (var i = 0; i < this.img_count; i++) {
            var offset = 0;
            var left_now = parseInt($(imgs[i]).css("left"));

            if (next) {
                if (left_now <= -1 * this.img_width) {
                    offset = this.img_width * (this.img_count - 1 - 1);
                } else {
                    offset = left_now - this.img_width;
                }

                if (left_now == 0 || left_now == this.img_width) {
                    $(imgs[i]).animate({ left: offset + "px" }, speed);
                } else {
                    $(imgs[i]).css("left", offset + "px");
                }
            } else {
                if (left_now >= this.img_width * (this.img_count - 1 - 1)) {
                    offset = -1 * this.img_width;
                } else {
                    offset = left_now + this.img_width;
                }

                if (left_now == -1 * this.img_width || left_now == 0) {
                    $(imgs[i]).animate({ left: offset + "px" }, speed);
                } else {
                    $(imgs[i]).css("left", offset + "px");
                }
            }

        }
    }

    run(interval = 7000, speed = 500) {
        this.timeId = setInterval(this.doSwitch.bind(this, 1, speed), interval);
    }

    stop() {
        clearInterval(this.timeId);
    }
}