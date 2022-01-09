window.onload=()=>{
var canvas = document.getElementById('can');
var context = canvas.getContext('2d');
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

img = document.getElementById('frame');
img.addEventListener("click",render);
}

function alterId(id, x){
    var altered = id;
    altered = altered.slice(0, -1);
    altered += x;
    return altered;
}

function alive(id){

    document.getElementById(id).style.opacity = 1;
    document.getElementById(alterId(id, 's')).style.opacity = 0;
    document.getElementById(alterId(id, 'a')).play();   
}

function dead(id){
    document.getElementById(id).style.opacity = 0;
    document.getElementById(alterId(id, 's')).style.opacity = 1;
    document.getElementById(alterId(id, 'a')).pause();
    document.getElementById(alterId(id, 'a')).currentTime = 0;
}

function colorFilter(id){ 
    document.getElementById('can').style.filter = 'grayscale(100%)';

}

function removeFilter(id){
    document.getElementById('can').style.filter = "none";
    
}

function fadeMessage(){
    document.getElementById('message').className = 'hidden';
}

//Geolocation
function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
        alert("Please enable location on your browser.");
    }
}

function showPosition(position){
    alert("Latitude: " + position.coords.latitude + "\n" + "Longitude: " + position.coords.longitude);
}



