class LoadingImg {

    static doLoading(enable) {
        if (!LoadingImg.init){
            LoadingImg.cmd = enable
            $.ajax({
                url: "./loading/loading.json",
                async: true,
                success: function (data, textStatus, xhr) {
                    if (data) {
                        LoadingImg._init(data);
                        LoadingImg._doLoading(LoadingImg.cmd);
                    }
                    else {
                        console.log('get loading config failed: ' + xhr);
                    }
                },
                timeout: 10000
            });
        }else{
            LoadingImg._doLoading(enable);
        }
    }

    static _init(data){
        LoadingImg.loadingTimeInterval = null;
        LoadingImg.loadingNowStep = 0;
        LoadingImg.loadingImgSize = { w: data.loadingImgSize.w, h: data.loadingImgSize.h };
        LoadingImg.loadingStep = data.loadingStep;
        LoadingImg.loadingDelay = data.loadingDelay;
        LoadingImg.loadingWH = data.loadingWH;

        LoadingImg.block_id = "block-all";
        LoadingImg.loading_id = "loading-img";
        LoadingImg.img_b_id = "loading-backward-gif";
        LoadingImg.img_r_id = "loading-right-gif";
        LoadingImg.img_f_id = "loading-forward-gif";
        LoadingImg.img_l_id = "loading-left-gif";
        
        if ($("body")[0].innerHTML.indexOf('<div id="' + LoadingImg.loading_id + '"') === -1) {
            $("body")[0].insertAdjacentHTML('afterbegin',
                '<div id="' + LoadingImg.block_id + '" style="position:fixed;' +
                '    z-index: 2;' +
                '    top:0; left:0; bottom:0; right:0;' +
                '    background:rgba(0,0,0,.5);' +
                '    display: block;">' +
                '</div>' +
                '<div id="' + LoadingImg.loading_id + '" style="z-index: 3; position: fixed;">' +
                '    <img id="' + LoadingImg.img_l_id + '" src="' + data.gifLeft + '" style="display:none;">' +
                '    <img id="' + LoadingImg.img_r_id + '" src="' + data.gifRight + '" style="display:none;">' +
                '    <img id="' + LoadingImg.img_f_id + '" src="' + data.gifForward + '" style="display:none;">' +
                '    <img id="' + LoadingImg.img_b_id + '" src="' + data.gifBackward + '" style="display:none;">' +
                '</div>');
        }
        LoadingImg.init = true;
    }

    static _doLoading(enable) {
        LoadingImg.cmd = enable;
        if (LoadingImg.cmd) {
            $("#" + LoadingImg.block_id).css("display", "block");
            var center_x = window.innerWidth / 2;
            var center_y = window.innerHeight / 2;

            $("#" + LoadingImg.loading_id)[0].style.top = center_y - LoadingImg.loadingWH / 2 - LoadingImg.loadingImgSize.h / 2 + "px";
            $("#" + LoadingImg.loading_id)[0].style.left = center_x - LoadingImg.loadingWH / 2 - LoadingImg.loadingImgSize.w / 2 + "px";
            LoadingImg.loadingTimeInterval = setInterval(function () {
                LoadingImg.loadingNowStep = (LoadingImg.loadingNowStep + LoadingImg.loadingStep) % (LoadingImg.loadingWH * 4);
                if (LoadingImg.loadingNowStep / LoadingImg.loadingWH < 1) {
                    $("#"+LoadingImg.img_b_id).css("display", "none");
                    $("#"+LoadingImg.img_r_id).css("display", "block");
                    $("#" + LoadingImg.loading_id)[0].style.top = center_y - LoadingImg.loadingWH / 2 - LoadingImg.loadingImgSize.h / 2 + "px";
                    $("#" + LoadingImg.loading_id)[0].style.left = center_x - LoadingImg.loadingWH / 2 - LoadingImg.loadingImgSize.w / 2 + LoadingImg.loadingNowStep % LoadingImg.loadingWH + "px";
                } else if (LoadingImg.loadingNowStep / LoadingImg.loadingWH < 2) {
                    $("#"+LoadingImg.img_r_id).css("display", "none");
                    $("#"+LoadingImg.img_f_id).css("display", "block");
                    $("#" + LoadingImg.loading_id)[0].style.top = center_y - LoadingImg.loadingWH / 2 - LoadingImg.loadingImgSize.h / 2 + LoadingImg.loadingNowStep % LoadingImg.loadingWH + "px";
                    $("#" + LoadingImg.loading_id)[0].style.left = center_x - LoadingImg.loadingWH / 2 - LoadingImg.loadingImgSize.w / 2 + LoadingImg.loadingWH + "px";
                } else if (LoadingImg.loadingNowStep / LoadingImg.loadingWH < 3) {
                    $("#"+LoadingImg.img_f_id).css("display", "none");
                    $("#"+LoadingImg.img_l_id).css("display", "block");
                    $("#" + LoadingImg.loading_id)[0].style.top = center_y - LoadingImg.loadingWH / 2 - LoadingImg.loadingImgSize.h / 2 + LoadingImg.loadingWH + "px";
                    $("#" + LoadingImg.loading_id)[0].style.left = center_x - LoadingImg.loadingWH / 2 - LoadingImg.loadingImgSize.w / 2 + LoadingImg.loadingWH - LoadingImg.loadingNowStep % LoadingImg.loadingWH + "px";
                } else {
                    $("#"+LoadingImg.img_l_id).css("display", "none");
                    $("#"+LoadingImg.img_b_id).css("display", "block");
                    $("#" + LoadingImg.loading_id)[0].style.top = center_y - LoadingImg.loadingWH / 2 - LoadingImg.loadingImgSize.h / 2 + LoadingImg.loadingWH - LoadingImg.loadingNowStep % LoadingImg.loadingWH + "px";
                    $("#" + LoadingImg.loading_id)[0].style.left = center_x - LoadingImg.loadingWH / 2 - LoadingImg.loadingImgSize.w / 2 + "px";
                }
            }, LoadingImg.loadingDelay);
        } else {
            LoadingImg.loadingNowStep = 0;
            clearInterval(LoadingImg.loadingTimeInterval);
            $("#"+LoadingImg.block_id).css("display", "none");
            $("#"+LoadingImg.img_r_id).css("display", "none");
            $("#"+LoadingImg.img_f_id).css("display", "none");
            $("#"+LoadingImg.img_l_id).css("display", "none");
            $("#"+LoadingImg.img_b_id).css("display", "none");
        }
    }
}