var myvar = 
'<link rel="stylesheet" type="text/css" href="css/sideprojects.css">' +
'<link rel="stylesheet" type="text/css" href="css/particles-style.css">' +
'<div class=\'main-Projects\'>' +
'    <div id=\'main-container-body\'></div>' +
'    <div class=\'main-container layout-block layout-right-rail\'>' +
'        <div class="projects container">' +
'            <h2><br></h2>' +
'            <div class="featured"><h2 class="featured-title">zmcx16\'s Side Projects</h2></div>' +
'            <h2><br></h2>' +
'            <div class="not-featured">' +
'                <h2 class="not-featured-title">Starred Open Source Projects</h2>' +
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
'</div>' ;

document.getElementById('main-plugin-wrap').innerHTML = myvar;

var canvas_timeId = 0;

function canvasProjectContainer(hasParticlesJS) {

    if (typeof repos_loaded_completed !== 'undefined' && repos_loaded_completed && document.readyState == 'complete') {

        if (hasParticlesJS) {
            document.getElementById("main-container-body").style.height = document.querySelector('.main-container').clientHeight + 'px';
            particlesJS.load('main-container-body', 'particles.json', function () {
                console.log('particles.js config loaded');
            });
        }

        clearInterval(canvas_timeId);

        // RWD
        var width = window.screen.width;
        if (width < 960) {
            var repo_left = (960 - 885) / 2;
            $('li.bullet-list-content').css('font-size', 'x-large');
            $('li.bullet-list-content').css('line-height', 'normal');
            $('.project.island.featured-project').css('height', '800px');
            $('.projects.container').css('padding-left', repo_left + 'px');

            // featured repos
            $('.projects .featured-title').css('display', 'none');
            $('.featured .project.island').css('width', '885px');
            $('.featured .project.island').css('margin-bottom', '100px');
            $('.project .island-item.featured-image').css('height', '450px');
            $('.island-item.content').css('font-size', 'xx-large');
            $('.island-item.content').css('line-height', 'normal');
            $('.repo-description').css('color', '#DDD');
            $('h3 a').css('width', 'auto');
            $('h3 a').css('font-size', 'xx-large');
            $('h3 a').css('line-height', 'normal');
            $('.project .repo-info').css('font-size', 'smaller');
            $('.octicon.octicon-star').css('font-size', 'inherit');
            $('.octicon.octicon-repo-forked').css('font-size', 'inherit');
            $('.project .bottom-links a').css('font-size', 'x-large');
            $('.octicon').css('font-size', 'inherit');
            $('.online-website').css('margin-left', '30px');
            $('.project .bottom-links').css('width', '380px');

            // not-featured repos
            $('.not-featured').css('display', 'none'); // hidden starred repos

        }
    }
}

$(document).ready(function () {

    setBanner('zmcx16\'s Side Projects', 'darkorange', ['這個網站是某宅宅工程師亂點技能樹下的產物', '認真說起來, 做網站最麻煩的總是素材阿...']);
    if (!mobileAndTabletcheck()) {
        loadScripts(["js/projects.js", "js/particles-fps-limit.js"], 0);
        canvas_timeId = setInterval(function () { canvasProjectContainer(true) }, 100);
    } else {
        loadScripts(["js/projects.js"], 0);
        canvas_timeId = setInterval(function () { canvasProjectContainer(false) }, 100);
        $('.main-Projects').css('background-color', '#110E19');
    }
});

//# sourceURL=js/sideprojects.js