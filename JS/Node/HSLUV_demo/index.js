"use strict";
import hsluv from './node_modules/hsluv'

console.log(hsluvToRgb(10,10,10))


var rows = 20;
var hueIncrement = 130;

var container = document.getElementById('container');

// create divs, push into array
for (var i = 0; i < rows; i++) {
  var Hue = getHue(i, hueIncrement);
  
  var mainDiv = document.createElement("div");
  mainDiv.innerHTML = i;
  var lightDiv = document.createElement("div");
  lightDiv.innerHTML = i;
  var darkDiv = document.createElement("div");
  darkDiv.innerHTML = i;
  
  mainDiv.setAttribute("style", `height: 40px; width: 60px;text-align: center; vertical-align: middle; line-height: 40px; background-color: hsl(${Hue},75%, 60%); grid-column: 1`)
  lightDiv.setAttribute("style", `height: 40px; width: 60px;text-align: center; vertical-align: middle; line-height: 40px; background-color: hsl(${Hue}, 60%, 70%); grid-column: 2`)
  darkDiv.setAttribute("style", `height: 40px; width: 60px;text-align: center; vertical-align: middle; line-height: 40px; background-color: hsl(${Hue}, 100%, 40%); grid-column: 3`)

  container.appendChild(mainDiv)
  container.appendChild(lightDiv)
  container.appendChild(darkDiv)
  
}


container.setAttribute("style",  `grid-template-columns: 1fr 1fr 1fr; grid-template-rows: repeat(${rows}, 1fr)`);


function getHue(index, increment) {
  return (((index*increment)/360) - Math.floor((index*increment)/360)) *360
}