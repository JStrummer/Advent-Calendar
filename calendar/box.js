'use strict'

function box (element, date) {
  var date = new Date(2020, 10, date);
  var day = date.getDate();
  var isOpen = false;
  var isLocked = true;
  var gift = gifts.get(day);
  element.dataset.date = day;
  // setting image for the date
  var img = document.createElement('img');
  img.src = "graphic/img/dates/" + day + ".png";
  img.classList.add('date');
  // setting image for the gift
  var giftImage = document.createElement('img');
  giftImage.classList.add('giftImage');
  giftImage.src = gift.src;

  element.appendChild(img);
  element.appendChild(giftImage);

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
        img.style.display = 'none';
        giftImage.classList.add('show');
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
