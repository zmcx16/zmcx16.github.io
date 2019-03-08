
var myvar = '<link rel="stylesheet" type="text/css" href="css/SideProjects.css">' +
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
    '                </ul>' +
    '            </div>' +
    '        </div>' +
    '    </div>' +
    '</div>';

document.getElementById('main-plugin-wrap').innerHTML = myvar;

$.loadScript("js/projects.js", function () { });
$.loadScript("js/orgs.js", function () { });
$.loadScript("js/repos.js", function () { });
$.loadScript("js/loaders.js", function () { });
$.loadScript("js/opensource-site.js", function () { });
$.loadScript("js/particles.js", function () { });

var canvas_timeId = 0;

function canvasProjectContainer() {

    if (typeof repos_loaded_count !== 'undefined' && repos_loaded_count >= repos_completed_count && document.readyState == 'complete') {

        document.getElementById("main-container-body").style.height = document.querySelector('.main-container').clientHeight + 'px';
        particlesJS.load('main-container-body', 'particles.json', function () {
            console.log('particles.js config loaded');
        });

        clearInterval(canvas_timeId);
    }

}  

canvas_timeId = setInterval(function () { canvasProjectContainer() }, 100);