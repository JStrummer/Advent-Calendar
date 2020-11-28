'use strict'



if (state.getData()) {
  updateGreetings();
  let savedBox = state.data.saved;
  boxes.forEach((box, i) => {
    box.unlock();
    if (savedBox[i].open) {
      box.open();
      box.element.removeEventListener('click', openBox);
      box.element.addEventListener('click', openGift);
    }
  });
} else {
  submitNameBtn.addEventListener('click', submitName);
}

updateTimer();
resize();
window.onresize = resize;

function submitName (evt) {
  var name = inputName.value;
  if (name) {
    state.data.userName = name;
    state.save();
    updateGreetings();
    submitNameBtn.removeEventListener('click', submitName);
  }
}
