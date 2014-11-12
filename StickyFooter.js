var $=function(sId){return document.getElementById(sId);};
window.onload = function () {
    $("stickyFooter").onresize = StickyResize;
};
function StickyResize() {
    var oRect = $("stickyFooter").getBoundingClientRect();
    var sHeight = (oRect.bottom - oRect.top).toString() + "px";
    $("footerMargin").style.height = sHeight;
    $("wrap").style.marginBottom = "-" + sHeight;
}