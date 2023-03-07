// import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

form.addEventListener('submit', onformSubmit);
form.addEventListener('input', currentValue);

saveValue();

function currentValue(event) {
  const value = {
    email: event.currentTarget.email.value,
    msg: event.currentTarget.message.value,
  };
  const jValue = JSON.stringify(value);
  localStorage.setItem('feedback-form-state', jValue);
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
    localStorage.clear();
  }
}

function saveValue() {
  const va = localStorage.getItem('feedback-form-state');
  const vo = JSON.parse(va);


  if (va) {
    form.message.value = vo.msg;
    form.email.value = vo.email;
  }
}
