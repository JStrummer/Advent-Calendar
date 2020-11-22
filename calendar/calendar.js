'use strict'

var boxes = [];

//create boxes
for (let i = 1; i < 25; i++) {
  var boxElement = document.createElement("div");
  calendar.appendChild(boxElement);
  boxElement.classList.add('box');
  boxes.push(box(boxElement, i));
  let currentBox = boxes[boxes.length - 1];
  if (currentBox.unlock()) {
    boxElement.addEventListener('click', openBox);
  }
 }

var b = boxes[0];

function openBox(evt){
  var index = evt.target.textContent - 1;
  boxes[index].open();
}
