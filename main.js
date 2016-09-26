(function(){
('use strict')
// PULLING THINGS FROM INDEX.HTML
var clock = document.getElementById('clock');
var hexColor; //= document.getElementById('hex-color');
var secondsbar = document.getElementById('secondsbar');

//***ADDED IN CLASS***
var background = document.querySelector('.container');

// //***ADDED IN CLASS****
var hoursContainer = document.querySelector('.hours');
var minutesContainer = document.querySelector('.minutes');
var secondsContainer = document.querySelector('.seconds');


// THIS SECTION ALLOWS FOR THE HOVER OVER TO BE INITIATED
var hoverOverClock = false;
background.addEventListener('mouseover',function(){
  hoverOverClock = true;
});
background.addEventListener('mouseout',function(){
  hoverOverClock = false;
});


// TIME SECTION FOR DISPLAY
function hexClock() {

var time = new Date();
var hours = (time.getHours() % 12);   // TO STRING IS BECAUSE ITS A NUMBER AND YOU CANT CHECK LENGTH WITH OUT IT BEING A STRING.
var minutes = time.getMinutes();
var seconds = time.getSeconds();       //**** THIS IS HOW YOU GET TIME *******
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

//***ADDED IN CLASS***
// COLOR BACKGROUND HEX
var currentRed = ( '0' + hours.toString(16)).slice(-2);
var currentGreen = ('0' + minutes.toString(16)).slice(-2);
var currentBlue = ('0' + seconds.toString(16)).slice(-2);
var colorCode = '#' + currentRed + currentGreen + currentBlue;
background.style.backgroundColor = colorCode;


var colorClock = hours + ':' + minutes + ':' + seconds;
var percentageForStatusbar = ((seconds/60)*100).toFixed();
// var hexColorStr =  hours  + minutes + seconds;


//***EDITED IN CLASS******
if(hoverOverClock == true){
  // clock.textContent =  colorCode;
  hoursContainer.textContent = currentRed;
  minutesContainer.textContent = currentGreen;
  secondsContainer.textContent = currentBlue;

}else{
  // clock.textContent = colorClock;
  hoursContainer.textContent = ( '0' + hours).slice(-2);
  minutesContainer.textContent = ('0' + minutes).slice(-2);
  secondsContainer.textContent = ('0' + seconds).slice(-2);
};


// console.log(seconds);
// document.body.style.backgroundColor = '#' + hexColorStr;
secondsbar.style.width = percentageForStatusbar + '%';

}

hexClock();
window.setInterval(hexClock, 1000);


}());
