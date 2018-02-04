// ==UserScript==
// @name     Skip Disliked Videos
// @version  1
// @require https://code.jquery.com/jquery-3.3.1.min.js
// ==/UserScript==

var interval;
var notFoundCounter = 0;
function checkLoaded(){
    console.log("checking");
    if($('div#top-level-buttons.style-scope.ytd-menu-renderer '+
        'ytd-toggle-button-renderer.style-scope.ytd-menu-renderer.style-text.force-icon-button '+
        'a.style-scope.ytd-toggle-button-renderer '+
        'yt-icon-button#button.style-scope.ytd-toggle-button-renderer.style-text').length>0){
        if($('#top-level-buttons>:nth-child(2) *[aria-pressed="false"]').length < 1)
            alert("YouYube-Skip-Skript may be outdated");
        if($('#top-level-buttons>:nth-child(2) *[aria-pressed="true"]').length >0){
            console.log("skipped");
            $(".ytp-next-button")[0].click();
        }
        notFoundCounter=0;
    }
    else if(notFoundCounter++ > 120)
        alert("YouYube-Skip-Skript may be outdated");
}

function startInterval(){
    interval = setInterval(checkLoaded, 1000);
}

if(window.location.href.indexOf("youtube.com/watch") !== -1)
    startInterval();

