var img=""
var status=""

function preload(){
    img=loadImage("LivingRoom.jpg")
}

function setup(){
    canvas=createCanvas(640,420);
    canvas.center()
    objectDetector= ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Objects";
}

function draw(){
    image(img,0,0,640,420);
}
function modelLoaded(){
    console.log("model is loaded");
    status = true
    objectDetector.detect(img,gotResult);
}

function gotResult(error,results){
    if(error){
        console.log("error")
    }
    else{
        console.log(results)
    }
}

function back(){
    window.location="index.html"
}