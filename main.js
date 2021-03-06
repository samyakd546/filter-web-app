NoseX=0;
NoseY=0;
function preload(){
    mustache=loadImage("download.png");
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    PoseNet=ml5.poseNet(video,modelLoaded);
    PoseNet.on('pose',gotPoses);
}

function draw(){
    image(video,0,0,300,300);
    image(mustache,NoseX,NoseY,50,20);
}

function take_snapshot(){
    save("my_image.png");
}

function modelLoaded(){
    console.log("poseNet is initialized");
}

function gotPoses(results){
if(results.length > 0){
    console.log(results);
    NoseX=results[0].pose.nose.x-25;
    NoseY=results[0].pose.nose.y- -5;
    console.log("Nose x = "+NoseX );
    console.log("Nose y = "+NoseY );
}
}