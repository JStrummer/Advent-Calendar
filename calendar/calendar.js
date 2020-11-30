'use strict'

var boxes = [];

//create boxes
for (let i = 1; i < 25; i++) {
  let boxElement = document.createElement("div");
  boxElement.classList.add('box');
  boxes.push(box(boxElement, i));
 }
