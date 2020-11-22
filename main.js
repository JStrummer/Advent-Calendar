'use strict'


if (state) {
  boxes.forEach((box, i) => {
    box.unlock();
    if (state[i].open) {
      box.open();
    }
  });
}

updateTimer();
resize();
window.onresize = resize;
