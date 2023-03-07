import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

form.addEventListener('submit', onformSubmit);
form.addEventListener('input', throttle (currentValue, 500));

saveValue();

function currentValue(eve) {
  const value = {
    email: eve.target.value,
    msg: eve.target.value,
  };
  const jValue = JSON.stringify(value);
  localStorage.setItem(STORAGE_KEY, jValue);
}

function onformSubmit(event) {
  event.preventDefault();
  if (
    event.currentTarget.email.value.length === 0 ||
    event.currentTarget.message.value.length === 0
  ) {
    alert('Всі поля повинні бути заповнені!!!');
  } else {
    const loginInfo = {
      message: event.currentTarget.message.value,
      email: event.currentTarget.email.value,
    };

    console.log(loginInfo);

    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
  }
}

function saveValue() {
  const localStorageValue = localStorage.getItem(STORAGE_KEY);
  const valueForLoad = JSON.parse(localStorageValue);


  if (localStorageValue) {
    form.message.value = valueForLoad.msg;
    form.email.value = valueForLoad.email;
  }
}
