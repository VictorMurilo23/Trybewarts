const loginEmail = document.querySelector('#emailInput');
const loginPassword = document.querySelector('#passwordInput');
const loginSubmitBtn = document.querySelector('#inButton');

loginSubmitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (
    loginEmail.value === 'tryber@teste.com'
    && loginPassword.value === '123456'
  ) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

const checkAgreement = document.querySelector('#agreement');
const btnSend = document.querySelector('#submit-btn');

checkAgreement.addEventListener('change', () => {
  if (checkAgreement.checked) {
    btnSend.disabled = false;
  } else {
    btnSend.disabled = true;
  }
});

const textArea = document.querySelector('#textarea');
const counter = document.querySelector('#counter');
counter.innerText = textArea.attributes.maxlength.nodeValue;

textArea.addEventListener('keyup', () => {
  counter.innerText = 500 - textArea.value.length;
});

const savedInfoObj = {};

function saveRate() {
  const rateRadios = document.getElementsByName('rate');

  for (let index = 0; index < rateRadios.length; index += 1) {
    if (rateRadios[index].checked === true) {
      savedInfoObj.rate = rateRadios[index].value;
    }
  }
}

function saveFamily() {
  const familyRadios = document.getElementsByName('family');
  for (let index = 0; index < familyRadios.length; index += 1) {
    if (familyRadios[index].checked === true) {
      savedInfoObj.family = familyRadios[index].value;
    }
  }
}

function saveContent() {
  const contentsArray = [];
  const contentsCheckbox = document.querySelectorAll('.subject');
  for (let index = 0; index < contentsCheckbox.length; index += 1) {
    if (contentsCheckbox[index].checked === true) {
      contentsArray.push(contentsCheckbox[index].value);
    }
    savedInfoObj.contents = contentsArray;
  }
}

function saveBasicInfoAndComment() {
  savedInfoObj.name = document.querySelector('#input-name').value;
  savedInfoObj.lastName = document.querySelector('#input-lastname').value;
  savedInfoObj.email = document.querySelector('#input-email').value;
  savedInfoObj.house = document.querySelector('#house').value;
  savedInfoObj.comment = textArea.value;
}

btnSend.addEventListener('click', () => {
  const form = document.querySelector('#evaluation-form');
  saveBasicInfoAndComment();
  saveRate();
  saveFamily();
  saveContent();
  form.innerHTML = '';
  const div = document.createElement('div');
  div.className = 'savedInfoContainer';
  div.innerHTML = `<p>Nome: ${`${savedInfoObj.name} ${savedInfoObj.lastName}`}</p>
  <p>Email: ${savedInfoObj.email}</p>
  <p>Casa: ${savedInfoObj.house}</p>
  <p>Família: ${savedInfoObj.family}</p>
  <p>Matérias: ${savedInfoObj.contents.join(', ')}</p>
  <p>Avaliação: ${savedInfoObj.rate}</p>
  <p>Observações: ${savedInfoObj.comment}</p>`;
  form.appendChild(div);
});
