'use strict'

function checkData() {
  if (localStorage.getItem('userName')) {
    greetings.textContent = 'CIAO ' + localStorage.getItem('userName');
    submitNameForm.style.display = 'none';
  } else {
    greetings.textContent = 'BENVENUTO!!';
  }
}

function submitName (evt) {
  var name = inputName.value;
  if (name) {
    localStorage.setItem('userName', name);
    submitNameForm.style.display = 'none';
    checkData();
  }
}

submitNameBtn.addEventListener('click', submitName);
