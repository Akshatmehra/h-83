var mouseevent="empty"; 
var lastpositionofx,lastpositionofy;

canvas=document.getElementById("write");
ctx=canvas.getContext("2d");
colour="yellow";
line_width=2;





canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){
    colour=document.getElementById("colour").value;
    mousex=e.clientX-canvas.offsetLeft;
    mousey=e.clientY-canvas.offsetTop;
    

    mouseevent="mousedown";


}
canvas.addEventListener("mouseup",mymouseup);
function mymouseup(e){
    

    mouseevent="mouseup";


}

canvas.addEventListener("mouseleave",mymouseleave);
function mymouseleave(e){
    

    mouseevent="mouseleave";


    
}

canvas.addEventListener("mousemove",mymousemove);
function mymousemove(e){
    

currentpox=e.clientX-canvas.offsetLeft;
currentpoY=e.clientY-canvas.offsetTop;
if(mouseevent=="mousedown"){


    ctx.beginPath();
    ctx.strokeStyle=colour
    ctx.lineWidth=line_width;
    console.log ("x="+lastpositionofx+"y="+lastpositionofy);
    ctx.moveTo(lastpositionofx,lastpositionofy)

    console.log ("x="+currentpox+"y="+currentpoY);
    ctx.lineTo(currentpox,currentpoY);
    ctx.stroke();

}
lastpositionofx=currentpox;
lastpositionofy=currentpoY;


}



    
