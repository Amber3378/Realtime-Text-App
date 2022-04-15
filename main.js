difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);


    canvas = createCanvas(550, 400);
    canvas.position(550, 200);


    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("PoseNet is initialized");
   
}

function gotPoses(results)
{
    if (results.length > 0)
    {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX + " rightWridtX = "+ rightWristX + " difference = " + difference);
    }
}

function draw()
{
    background('#696969');
    document.getElementById("font_size").innerHTML = "Width And Height Of The Text Will Be = " + difference + "px";
    textSize(difference);
    fill('#FFE787');
    text('Amber', 50, 400);
}








