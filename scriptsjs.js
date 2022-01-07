
window.onload=()=>{
 
var canvas = document.getElementById('can');
var context=canvas.getContext('2d');
var video = document.getElementById('video');
var width = 350;
var height = 200;

  navigator.mediaDevices.getUserMedia({
    video: true,
    audio: false
}).then((stream)=>{
    video.srcObject=stream;
video.play();
});
function computeClearFrame(){
    context.drawImage(video, -30, -30, width, height);
}
function render(){
    computeClearFrame();
    setTimeout(() => {
        render();
    }, 0);
}

img = document.getElementById('image');
img.addEventListener("click",render);


}
