// author by removef
// https://removeif.github.io/

function isNightFun() {
    var isNightTemp = localStorage.getExpire('night');

    // 第一次进来判断是白天还是晚上
    if (isNightTemp == null || isNightTemp == undefined) {
        isNightTemp = 'false';
        localStorage.setExpire("night", isNightTemp, expireTime1H);
    }
}

var isNight=isNightFun();
// 参考自 https://www.imaegoo.com/
var nightNav;
var nightIcon;

function applyNight(value) {
    if (value == 'true') {
        document.body.className += ' night'
        if (nightIcon) {
            nightIcon.className = nightIcon.className.replace(/ fa-moon/g, '') + ' fa-lightbulb'
        }
    } else {
        document.body.className = document.body.className.replace(/ night/g, '')
        if (nightIcon) {
            nightIcon.className = nightIcon.className.replace(/ fa-lightbulb/g, '') + ' fa-moon'
        }
    }
}

function findNightIcon() {
    nightNav = document.getElementById('night-nav');
    nightIcon = document.getElementById('night-icon');
    if (!nightNav || !nightIcon) {
        setTimeout(findNightIcon, 100);
    } else {
        nightNav.addEventListener('click', switchNight);
        if (isNight) {
            nightIcon.className = nightIcon.className.replace(/ fa-moon/g, '') + ' fa-lightbulb'
        } else {
            nightIcon.className = nightIcon.className.replace(/ fa-lightbulb/g, '') + ' fa-moon'
        }
    }
}

function switchNight() {

    if (isNight == 'false') {
        isNight = 'true';
    } else {
        isNight = 'false';
    }
    
    applyNight(isNight);
    localStorage.setExpire('night', isNight, expireTime1H);
    if(typeof loadUtterances == 'function'){
        loadUtterances();
    }
}

findNightIcon();
applyNight(isNight);