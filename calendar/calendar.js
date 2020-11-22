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

function openBox (evt) {
  if (state) {
    var box = evt.target;
    var index = box.textContent - 1;
    boxes[index].open();
    state = saveState();
    localStorage.setItem('state', state);
    box.removeEventListener('click', openBox);
  }
}
