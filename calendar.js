'use strict'

// global reference
var calendar = document.querySelector("#calendar");

var boxes = [];

//create boxes
for (let i = 1; i < 25; i++) {
  var boxElement = document.createElement("div");
  calendar.appendChild(boxElement);
  boxElement.classList.add('box');
  boxes.push(box(boxElement, i));
 }

function box (element, date) {
  var date = date;
  element.textContent = date;
  
  return {
    date: date,
    el: element
  }
}