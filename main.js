difference=0;
right_wrist=0;
left_wrist=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    
    canvas=createCanvas(550,550);
    canvas.position(560,150);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    background('#FFFACD');
    document.getElementById("font-size").innerHTML="font size of the text will be- "+ difference+ "px";
    textSize(difference);
    fill("green");
    text('aariz', 50, 400);
}

function modelLoaded(){
    console.log("poseNet is initialized");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX);
        console.log("leftWristX="+ leftWristX+ "rightWristX="+rightWristX+"difference="+difference);
    }
}