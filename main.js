'use strict'

// added localStorage.clear for mobile
var greetings = document.querySelector('#greetings');
greetings.addEventListener('click', () => localStorage.clear());


var music = document.querySelector('#jingle_bells');
//music.play();

// getting html reference
var calendar = document.querySelector("#calendar");
var submitNameBtn = document.querySelector('#submitNameBtn');
var inputName = document.querySelector('input#name');

// create timer instance
var timer = timer();
// create state instance
var state = fetchState();
// create box objects
var boxes = [];
for (let i = 1; i < 25; i++) {
  let boxElement = document.createElement("div");
  boxElement.classList.add('box');
  calendar.appendChild(boxElement);
  boxes.push(box(boxElement, i));
}
// adding boxes elements to calendar
// checking if exists data from previous sections
if (state.getData()) {
  // if data exists
  updateGreetings(state.userName);
  boxes.forEach( (box, i) => {
    if (box.unlock()) {
      addSound('click', box.element, document.querySelector('#gliss'));
    }
    if (state.saved[i].open) {
      box.open();
    }
  });
} else {
  // if data dont exists
  submitNameBtn.addEventListener('click', submitName);

  function submitName (evt) {
    // get name from Form
    var name = inputName.value;
    if (name) {
      let data = {userName: name, saved: []};
      localStorage.setItem('state', JSON.stringify(data));
      state.getData();
      state.save();
      updateGreetings(state.userName);
      submitNameBtn.removeEventListener('click', submitName);
      boxes.forEach( (box) => {
        if (box.unlock()) {
          addSound('click', box.element, document.querySelector('#gliss'));
        }
      });
      // adding clear function for clearing localStorage on mobile
      var greetings = document.querySelector('#greetings');
      greetings.addEventListener('click', () => localStorage.clear());
    }
  }
}

// starting timer
timer.start();
resize();
window.onresize = resize;
