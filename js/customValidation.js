/** @format */

const Firstname = document.getElementById('username'),
  form = document.getElementById('form'),
  elem = document.createElement('div'),
  Email = document.getElementById('email'),
  NMail = document.createElement('div'),
  PhoneNumb = document.getElementById('phone'),
  elemPhone = document.createElement('div'),
  toursBtn = document.querySelector('.tours-btn'),
  body = document.querySelector('body');

const appendElem = (div, textId) => {
  div.id = textId;
  div.style.display = 'none';
  form.appendChild(div);
};

const customValid = (div, text, event) => {
  event.preventDefault();

  if (!event.target.validity.valid) {
    div.textContent = text;
    div.style.display = 'block';
  }
};

const deleteElem = (div) => {
  if ('block' === div.style.display) {
    div.style.display = 'none';
  }
};

const valFunc = () => {
  event.preventDefault();
  const val = PhoneNumb.value;
  if (val.length != 18 || val === '+38(0__) ___-__-__') {
    elemPhone.textContent = 'Введите номер телефона';
    elemPhone.style.display = 'block';
  }
};

Firstname.addEventListener(
  'invalid',
  customValid.bind(null, elem, 'Введите имя'),
);

Firstname.addEventListener('input', deleteElem.bind(null, elem));

Email.addEventListener(
  'invalid',
  customValid.bind(null, NMail, 'Введите E-mail'),
);

Email.addEventListener('input', deleteElem.bind(null, NMail));

PhoneNumb.addEventListener('invalid', valFunc);

PhoneNumb.addEventListener('input', deleteElem.bind(null, elemPhone));

toursBtn.addEventListener('submit', (event) => {
  event.preventDefault();
});

appendElem(elem, 'notify');
appendElem(NMail, 'notifyMail');
appendElem(elemPhone, 'notify-phone');

body.addEventListener('click', (event) => {
  if (!event.target.closest('#form')) {
    PhoneNumb.value = '';
  }
});
