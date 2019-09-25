
var myvar = '<link rel="stylesheet" type="text/css" href="css/sideprojects.css">' +
    '<link rel="stylesheet" type="text/css" href="css/particles-style.css">' +
    '<div class=\'main-Projects\'>' +
    '    <div id=\'main-container-body\'></div>' +
    '    <div class=\'main-container layout-block layout-right-rail\'>' +
    '        <div class="projects container">' +
    '            <h2><br></h2>' +
    '            <h2>zmcx16\'s Side Projects</h2>' +
    '            <div class="featured"></div>' +
    '            <h2><br></h2>' +
    '            <h2>Starred Open Source Projects</h2>' +
    '            <div class="not-featured">' +
    '                <ul>' +
    '                    <li>' +
    '                        <div class="starred_1">' +
    '                            <h2 style="font-style:italic;">AI / ML</h2>' +
    '                            <div class="AI_ML"></div>' +
    '                        </div>' +
    '                    </li>' +
    '                    <li>' +
    '                        <div class="starred_2">' +
    '                            <h2 style="font-style:italic;">Trade</h2>' +
    '                            <div class="Trade"></div>' +
    '                        </div>' +
    '                    </li>' +
    '                    <li>' +
    '                        <div class="starred_3">' +
    '                            <h2 style="font-style:italic;">Application Framework</h2>' +
    '                            <div class="Application_Framework"></div>' +
    '                        </div>' +
    '                    </li>' +
    '                </ul>' +
    '            </div>' +
    '        </div>' +
    '    </div>' +
    '</div>';

document.getElementById('main-plugin-wrap').innerHTML = myvar;

var canvas_timeId = 0;

function canvasProjectContainer() {
/*
    if (typeof repos_loaded_completed !== 'undefined' && repos_loaded_completed && document.readyState == 'complete') {

        document.getElementById("main-container-body").style.height = document.querySelector('.main-container').clientHeight + 'px';
        particlesJS.load('main-container-body', 'particles.json', function () {
            console.log('particles.js config loaded');
        });

        clearInterval(canvas_timeId);
    }
*/
}  

$(document).ready(function () {
    setBanner('zmcx16\'s Side Projects', 'darkorange', ['這個網站是某宅宅工程師亂點技能樹下的產物', '認真說起來, 做網站最麻煩的總是素材阿...']);
    loadScripts(["js/projects.js", "js/particles-fps-limit.js"], 0);
    canvas_timeId = setInterval(function () { canvasProjectContainer() }, 100);
});

//# sourceURL=js/sideprojects.js