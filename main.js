function setup(){
canvas = createCanvas(800, 400);
video = createCapture(VIDEO);
video.size(800, 400)
video.hide()
canvas.center()
}
function draw(){
    image(video, 0, 0, 800,400)
}





