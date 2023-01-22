const illustration_img_home = 'illustration.png';
const illustration_img_mahomanga = 'illustration_mahomanga.png';

function loadIllustrationImg(file_name) {
    $(".top-shelf")[0].style.background = '#ffffff url(/img/' + file_name + ') no-repeat right bottom';
}

function mobileAndTabletcheck() {
    var check = false;
    (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
};


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
        document.getElementsByClassName("bullet-list-round")[0].innerHTML += '<li class="bullet-list-content">' + element + '</li>'
    });
}

class SwitchImgsRandom {
    constructor(name) {
        this.name = name;
        this.timeId = 0;
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

    run(interval = 5000, speed = 800, opacity = 0.05) {
        this.timeId = setInterval(this.doSwitch.bind(this, speed, opacity), interval);
    }

    stop() {
        clearInterval(this.timeId);
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

        for (var i = 0; i < this.img_count; i++) {
            if (parseInt($($("." + this.name).children()[i]).css("left")) % this.img_width != 0){
                return;
            }
        }

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

function convert2KMBTString(n, precision) {
  if (n < 1e3) return n;
  if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(precision) + "K";
  if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(precision) + "M";
  if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(precision) + "B";
  if (n >= 1e12) return +(n / 1e12).toFixed(precision) + "T";
}

function createCookie(name, value, days) {
    var expires;

    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    } else {
        expires = "";
    }
    document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = encodeURIComponent(name) + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ')
            c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0)
            return decodeURIComponent(c.substring(nameEQ.length, c.length));
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name, "", -1);
}

function SetIFrameHeight() {
    var iframeid = document.getElementById("mainframe");
    if (document.getElementById) {
        if (iframeid && !window.opera) {
            if (iframeid.contentDocument && iframeid.contentDocument.body && iframeid.contentDocument.body.offsetHeight && iframeid.height != iframeid.contentDocument.body.offsetHeight) {
                iframeid.height = iframeid.contentDocument.body.offsetHeight;
            } else if (iframeid.Document && iframeid.Document.body && iframeid.Document.body.scrollHeight && iframeid.height != iframeid.Document.body.scrollHeight) {
                iframeid.height = iframeid.Document.body.scrollHeight;
            }
        }
    }
}

function getStockChangeColor(val) {
    let sign = Math.sign(parseFloat(val));
    if (sign === 1) {
        return '<span style="color:green;">' + '+' + val + '</span>'
    } else if (sign == -1) {
        return '<span style="color:red;">' + val + '</span>'
    } else {
        return '<span style="color:black;">' + val + '</span>'
    }
}