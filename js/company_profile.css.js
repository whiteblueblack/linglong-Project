/**
 * Created by hanghang on 2016/12/7.
 */
window.onload= function(){
    var oBgimg = document.getElementsByClassName("bgimg")[0];
    var oMain_box = document.getElementsByClassName("main-box")[0];
    window.onscroll = function(){
        // oBgimg.style.position="fixed";
        var offTop=oMain_box.offsetTop;
        var oScrollTop = document.documentElement.scrollTop||
            document.body.scrollTop;
        var Top = offTop+oScrollTop;
        oMain_box.style.top = Top+"px";
    }
};