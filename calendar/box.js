'use strict'

function box (element, date, open = false) {
  var date = new Date(2020, 10, date);
  var isOpen = open;
  var isLocked = locked;

  element.textContent = date.getDate();

  return {
    get isOpen () {
      return isOpen;
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
