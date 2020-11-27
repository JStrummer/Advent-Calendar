'use strict'

function box (element, date) {
  var date = new Date(2020, 10, date);
  var isOpen = false;
  var isLocked = true;
  var gift = gifts.get(date.getDate());
  element.dataset.date = date.getDate();
  var img = document.createElement('img');
  img.src = "graphic/img/dates/" + date.getDate() + ".png";
  img.classList.add('date');
  element.appendChild(img);


  return {
    get gift () {
      return gift;
    },
    get isOpen () {
      return isOpen;
    },
    get isLocked () {
      return isLocked;
    },
    get date() {
      return date;
    },
    get element () {
      return element;
    },
    unlock () {
      if (isLocked && checkDate()) {
        isLocked = false;
        this.element.classList.add('unlocked');
      }
      return !isLocked;
    },
    open () {
      if (!isLocked && !isOpen) {
        isOpen = true;
        this.element.classList.add('open');
        this.element.classList.remove('unlocked');
        // change image to show the gift
        var img = this.element.firstElementChild;
        img.src = boxes[date.getDate() - 1].gift.src;
        return true;
      }
      return false;
    }
  }

  // check if you can open the box
  function checkDate () {
    if (Date.now() >= date) {
      return true;
    } else {
      return false;
    }
  }
}
