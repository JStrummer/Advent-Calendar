'use strict'

var state = {
  data: {
    userName: '',
    saved: null
  },

  check () {
    if (localStorage.getItem('userName')) {
      updateGreetings();
      // retrieve state from localStorage
      return getState(localStorage.getItem('state'));
    }
    return false;
  },
  getData () {
    let savedData = localStorage.getItem('state');
    if (savedData) {
      this.data = JSON.parse(savedData);
      return true;
    }
    return false;
  },
  save () {
    if (this.data.userName) {
      this.data.saved = [];
      boxes.forEach( (box) => {
        this.data.saved.push({open: box.isOpen});
      });
      localStorage.setItem('state', JSON.stringify(this.data));
      return true;
    }
    return false;
  }
}

function updateGreetings () {
  // customize welcome message
  greetings.textContent = 'Ciao ' + state.data.userName + '!';
  greetings.style.display = "block";
  submitNameForm.style.display = 'none';
}
