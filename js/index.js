/**
 * Created by hanghang on 2016/11/15.
 */
document.onmousemove = function Move(){
    var oDiv = document.getElementById("wrap");
    var width = window.innerWidth;
    var height =window.innerHeight;
    if(!oDiv){
        return;
    }

    var intX = ((window.event.clientX)/width);
    // var intY = ((window.event.clientY)/height);

    // oDiv.style.left = intX*40+"px";
    // oDiv.style.top = intY*30 +"px";
};