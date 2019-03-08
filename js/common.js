const illustration_img_home = 'illustration.png';
const illustration_img_mahomanga = 'illustration_mahomanga.png';

function pickImg(img_ID, img_List){


}

function loadIllustrationImg(file_name) {
    $(".top-shelf")[0].style.background = 'url(/img/' + file_name + ') no-repeat right bottom';
}

jQuery.loadScript = function (url, callback_success) {
    jQuery.ajax({
        url: url,
        dataType: 'script',
        success: callback_success,
        async: true
    });
}