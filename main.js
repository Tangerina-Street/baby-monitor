status="";
objects = [];

function preload()
{
    audio = loadAudio("mixkit-classic-alarm-995.wav");
}

function setup()
{
    canvas = createCanvas(640,420);
    canvas.center();
    babyDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Baby";

}
function draw()
{
    image(img, 0, 0, 640, 420);
    if (status != "")
    {
        for(i=0; i < objects.length; i++)
        {
            document.getElementById("status").innerHTML = "Status: Baby detected";
            audio.stop();
        }
    
    }
    else
    {
        document.getElementById("status").innerHTML= "Status: Baby not detected";
        audio.play();
    }
}
function modelLoaded()
{
    console.log("Model Loaded");
    status= true;
    objectDetector.detect(video,gotResult);
}
function gotResult(error, results)
{
    if (error) 
    {
        console.log(error);
    }
    console.log(results);
    objects = results;
}