
function init() {
var canv = document.getElementById("myCanvas");
var ctx = canv.getContext("2d");




ctverce=[];
/*for(let i=0;i<10;i++){
    const num = Math.floor(Math.random() * canv.width);
    const size = Math.floor(Math.random() * 10)+5;
    let cv = new Ctverec(num,0,size,size);
    ctverce.push(cv);
}
*/
let sinus = 0;
let max =50;
let bg = new Image();
bg.src="sakuratree.jpg";
let dpi=window.devicePixelRatio;
function Ctverec(x,y,width,height){
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;
    this.posunuti=1.25;
    this.angle=90;
    
}
function fixDpi(){
    let style_height=+getComputedStyle(canv).getPropertyValue("height").slice(0,-2);
    let style_width=+getComputedStyle(canv).getPropertyValue("width").slice(0,-2);
    canv.setAttribute("width",style_width*dpi);
    canv.setAttribute("height",style_height*dpi);
}
function moveObjects(){
    
    if(ctverce.length<max)addCtverec();
    drawCtverce();
}
function createRandomCtverec(){
    const num = Math.floor(Math.random() * canv.width);
    const size1 = Math.floor(Math.random() *10)+1;
    let cv = new Ctverec(num,0,size1,size1*2/3);
    cv.posunuti=((Math.random()*1.25)+0.5);
    cv.angle=Math.random()*90;
    return cv;
}
function addCtverec(){
    
    ctverce.push(createRandomCtverec());
}var a=0;
function drawCtverce(){
    fixDpi();
    if(a!==359)a++;
    else a=0;
    document.querySelector('.rotator').style.transform
                       = 'rotateX('+a+'deg)';
    ctx.fillStyle = "rgba(255, 179, 255,0.8)";
    ctx.drawImage(bg,0,0,canv.width,canv.height);
    sinus+=0.02;
    
    for(let i=0;i<ctverce.length;i++){
        
        
        ctx.beginPath();
        
        ctx.ellipse(ctverce[i].x+=Math.sin(sinus), ctverce[i].y+=ctverce[i].posunuti, ctverce[i].width,ctverce[i].height,Math.sin(ctverce[i].angle+sinus), Math.PI*2, 0,false);
        ctx.fill();
        
        if(ctverce[i].y>canv.height){
            ctverce.splice(i,1);
        }
    }
    /*for(let [index,ctv] of ctverce.entries()){
        
        //
        ctx.fillRect(ctv.x, ctv.y, ctv.width, ctv.height);
        if(ctv.y>canv.height){
            ctverce.splice(index,1);
        }
    
    
    
    }*/
}





    setInterval(moveObjects,20);




};
window.onload=init;
window.onload=animateSin;

function animateSin(){
    function sinPiece(cnt,sign){
    this.cnt=cnt;
    this.sign=sign;
    
    
    this.resetSign = function (){

        this.sign=-1*this.sign;
        }
    }
sinusoid = [];
for (const element of document.getElementsByClassName("as")){
    sinusoid.push(new sinPiece(parseInt(element.innerHTML),1));
}
sinusoid[0].sign=-1;

function animate(){
    
    
    let counter=0;
    for (const element of document.getElementsByClassName("as")){



        element.style.transform="translateY("+sinusoid[counter].cnt*10+"px)";
        if(sinusoid[counter].cnt===7 ||sinusoid[counter].cnt===1){
            sinusoid[counter].resetSign();
            
        }
        sinusoid[counter].cnt+=sinusoid[counter].sign;
        counter++;
        console.log(sinusoid);
    }
}


    

setInterval(animate,60);
};
