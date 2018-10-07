// ==UserScript==
// @name     Skip Disliked Videos
// @version  1
// @require https://code.jquery.com/jquery-3.3.1.min.js
// ==/UserScript==

var interval;
var notFoundCounter = 0;

//checks whether this skript is outdated
function checkOutdated(){
    if(window.location.href.indexOf("youtube.com/watch") !== -1)
        if(notFoundCounter++ > 120)
            alert("YouYube-Skip-Skript may be outdated");
}

function checkLoaded(){
    if($('div#top-level-buttons.style-scope.ytd-menu-renderer '+
        'ytd-toggle-button-renderer.style-scope.ytd-menu-renderer.style-text.force-icon-button '+
        'a.style-scope.ytd-toggle-button-renderer '+
        'yt-icon-button#button.style-scope.ytd-toggle-button-renderer.style-text').length>0){
        if($('#top-level-buttons>:nth-child(2) .style-default-active').length >0){
            console.log("skipped");
            $(".ytp-next-button")[0].click();
        }
        notFoundCounter=0;
    } else checkOutdated();
}

function startInterval(){
    interval = setInterval(checkLoaded, 1000);
}

if(window.location.href.indexOf("youtube.com") !== -1)
    startInterval();

