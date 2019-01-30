
var myvar = '<div class=\'main-MahoMangaDownloader\'>' +
    '    <div class="demo-img">' +
    '        <img src="/img/MahoMangaDownloader_960x566.png"/>' +
    '    </div>' +
    '    <div class="description">' +
    '        <p> MahoMangaDownloader是一款支援多個漫畫網站的漫畫下載器, 提供使用者下載各個網站的漫畫資源, 方便使用者試看漫畫。 MahoMangaDownloader支援以下功能:<br></p>' +
    '            <ul class=\'description-function-list\'>' +
    '                <li>MahoMangaDownloader支援排程 & 多執行緒下載, 方便使用者在電腦空餘時間下載大量漫畫。</li>' +
    '                <li>多列表管理功能可讓使用者建立各類清單管理下載。</li>' +
    '                <li>搜尋功能讓使用者可以在資源網站搜尋作品或作者名, 直接取得相關聯的漫畫列表。</li>' +
    '                <li>追蹤功能可讓使用者建立追蹤清單, 只要執行掃描, 下載器就會去設定好的網址找出新更新或尚未下載的漫畫, 並自動加到設定好的下載清單。</li>' +
    '                <li>剪貼簿偵測功能可改善大量複製漫畫網址時的程序步驟。</li>' +
    '                <li>支援中英語系。</li>' +
    '                <li>線上自動更新功能。</li>' +
    '            </ul><br><br>' +
    '        <p> 針對特定網站, 也提供下列功能:<br></p>' +
    '            <ul class=\'description-function-list\'>' +
    '                <li>針對某些只限內部會員漫畫網站, MahoMangaDownloader也提供使用者設定帳密或cookie的機制支援下載。</li>' +
    '                <li>提供下載未壓縮過的原尺寸圖檔的功能。</li>' +
    '                <li>某些網站會針對下載器的行為進行IP封鎖, 針對這類網站MahoMangaDownloader也提供流量限制偵測以及自動換IP的功能(限動態網路環境下), 讓下載能繼續順利進行。</li>' +
    '            </ul><br><br>' +
    '        <p>希望MahoMangaDownloader下載器能幫助使用者改善線上漫畫的閱覽體驗, 如果試看的漫畫您非常喜歡, 也請麻煩購買正版支持原作者, 讓作家們能繼續創造出下一部更棒的作品。</p>' +
    '    </div>' +
    '    <div class="manga-show">' +
    '        <img src="/img/MahoMangaDownloader_960x566.png" />' +
    '    </div>' +
    '    <div class="download-link">' +
    '        <h2>下載 MahoMangaDownloader{Version}</h2>' +
    '        <ul class=\'download-list\'>' +
    '            <li><a class="link" target="_blank" href="{FilePathX64}"><img src="/img/DownloadStartButton_24x24.png"><p>{FileNameX64} ({FileSizeX64} MB)</p></a></li>' +
    '            <li><a class="link" target="_blank" href="{FilePathX86}"><img src="/img/DownloadStartButton_24x24.png"><p>{FileNameX86} ({FileSizeX86} MB)</p></a></li>' +
    '        </ul>' +
    '    </div>' +
    '    <div class="detail">' +
    '        <h2>說明</h2>' +
    '        <div class="support-websites">' +
    '        </div>' +
    '        <div class="environment">' +
    '        </div>' +
    '        <div class="founction">' +
    '        </div>' +
    '        <div class="notice">' +
    '        </div>' +
    '        <div class="staff">' +
    '        </div>' +
    '        <div class="update-website">' +
    '        </div>' +
    '        <div class="reference">' +
    '        </div>' +
    '        <div class="disclaimer">' +
    '        </div>  ' +
    '    </div>' +
    '</div>';




document.getElementById('main-project-demo-wrap').innerHTML += myvar;

var getPackageInfo = function (platform) {
    $.ajax({
        url: 'http://zmcx16.moe/api/MahoManga/Query' + platform,
        async: true,
        success: function (data, textStatus, xhr) {
            var resp_data = JSON.parse(data);
            if (resp_data) {
                document.getElementById('main-project-demo-wrap').innerHTML = document.getElementById('main-project-demo-wrap').innerHTML.replace("{FileName" + platform + "}", resp_data['FileName']);
                document.getElementById('main-project-demo-wrap').innerHTML = document.getElementById('main-project-demo-wrap').innerHTML.replace("{FileSize" + platform + "}", (parseInt(resp_data['Size']) / 1048576).toFixed(2));
                document.getElementById('main-project-demo-wrap').innerHTML = document.getElementById('main-project-demo-wrap').innerHTML.replace("{FilePath" + platform + "}", "https://drive.google.com/open?id=" + resp_data['FileID']);
            }
            else {
                console.log('get ' + platform + ' package info failed: ' + xhr);
            }
        },
        timeout: 10000
    });    

};

getPackageInfo("X64");
getPackageInfo("X86");

$.ajax({
    url: 'http://zmcx16.moe/api/MahoManga/QueryVersion',
    async: true,
    contentType: 'text/plain',
    success: function (data, textStatus, xhr) {
        if (data) {
            document.getElementById('main-project-demo-wrap').innerHTML = document.getElementById('main-project-demo-wrap').innerHTML.replace("{Version}", "Ver" + data + ":");
        }
        else {
            console.log('get version failed: ' + xhr);
        }
    },
    timeout: 10000
});    