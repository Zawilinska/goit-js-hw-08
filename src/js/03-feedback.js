import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';
const { email, message } = form.elements;

window.addEventListener('load', () => {
  const savedData = localStorage.getItem(LOCALSTORAGE_KEY);
  if (savedData) {
    const inputData = JSON.parse(savedData);
    email.value = inputData.email;
    message.value = inputData.message;
  }
});

form.addEventListener('input', throttle(getInputData, 500));
form.addEventListener('submit', getEmailData);

function getInputData() {
  const inputData = { email: email.value, message: message.value };
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(inputData));
}

function getEmailData(event) {
  event.preventDefault();
  console.log({ email: email.value, message: message.value });
  form.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
}
