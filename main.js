canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

imgmars=["nasa1.jpg","nasa2.jpg","nasa3.jpg","nasa4.jpg"];

rn = Math.floor( Math.random() * 4 );

rw = 100;
rh = 90;

rx = 400;
ry = 300;

var backimg = imgmars[rn];
var rovimg = "rover.png";

function add(){
imgback=new Image();
imgback.onload = uploadbackground;
imgback.src = backimg;

imgR = new Image();
imgR.onload= uploadRover;
imgR.src=rovimg;
}

function uploadbackground(){
    ctx.drawImage(imgback,0,0,canvas.width,canvas.height);
}

function uploadRover(){
    ctx.drawImage(imgR,rx,ry,rw,rh);
}

window.addEventListener("keydown",kd);

function kd(e){
    ac=e.keyCode;
    console.log(ac);
    if (ac==38) {
        up();   
       }
       if (ac==40) {
        down();   
       }  
       if (ac==37) {
        left();   
       }
       if (ac==39) {
        right();   
       }
}

function up(){
   if (ry>0) {
   ry= ry-10;
   uploadbackground();
   uploadRover();

   } 
}
function down(){
    if (ry<500) {
    ry= ry+10;
    uploadbackground();
    uploadRover();
        
    } 
 }

 function left(){
    if (rx>0) {
    rx= rx-10;
    uploadbackground();
    uploadRover();
        
    } 
 }

 function right(){
    if (rx<700) {
    rx= rx+10;
    uploadbackground();
    uploadRover();
        
    } 
 }