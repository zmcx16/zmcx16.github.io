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