function preload() {

}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw() {
    image(video, 240, 180, 160, 120);
    stroke(130, 130, 255,);
    fill(130, 130, 255,);
    rect(130, 117, 400, 26);  
    rect(130, 337, 400, 26);  
    rect(117, 117, 26, 220);  
    rect(497, 117, 26, 220);  
    
    stroke(255, 255, 130,);
    fill(255, 255, 130,);
    circle(130, 130, 70);
    circle(510, 130, 70)
    circle(130, 350, 70)
    circle(510, 350, 70)
}


function filter_tint() {
    tint_color = document.getElementById("color_name").value;
}