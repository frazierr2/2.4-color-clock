(function(){
('use strict')
// PULLING THINGS FROM INDEX.HTML
var clock = document.getElementById('clock');
var hexColor; //= document.getElementById('hex-color');
var secondsbar = document.getElementById('secondsbar');



// THIS SECTION ALLOWS FOR THE HOVER OVER TO BE INITIATED
var hoverOverClock; //= false;
clock.addEventListener('mouseover',function(){
  hoverOverClock = true;
});
clock.addEventListener('mouseout',function(){
  hoverOverClock = false;
});


// TIME SECTION FOR DISPLAY
function hexClock() {

var time = new Date();
var hours = (time.getHours() % 12).toString();   // TO STRING IS BECAUSE ITS A NUMBER AND YOU CANT CHECK LENGTH WITH OUT IT BEING A STRING.
var minutes = time.getMinutes().toString();
var seconds = time.getSeconds().toString();
if (hours.length < 2){
  hours = '0' + hours;  //THIS IS TO GET TIME TO SHOW ZERO IN FRONT INCASE ITS 1 DIGIT
}
if (minutes.length <2){
  minutes = '0' + minutes;
}
if (seconds.length <2){
  seconds = '0' + seconds;
}
var colorHex = time.getHours().toString();
if (hours.lenth < 2){
  hours = '0'+ hours;
}


var colorClock = hours + ':' + minutes + ':' + seconds;
var percentageForStatusbar = ((seconds/60)*100).toFixed();
var hexColorStr =  hours + minutes + seconds;

if(hoverOverClock == true){
  clock.textContent = "#" + hexColorStr;
}else{
  clock.textContent = colorClock;
};


console.log(seconds);
document.body.style.backgroundColor = '#' + hexColorStr;
secondsbar.style.width = percentageForStatusbar + '%';

}

hexClock();
setInterval(hexClock, 1000);


}());
