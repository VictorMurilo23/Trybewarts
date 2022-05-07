const frm = document.querySelector('.trybewarts-login');
console.log(frm);

frm.inButton.addEventListener('click', (e) => {
  e.preventDefault();
  const placeHolderEmail = frm.inEmail.value;
  console.log(placeHolderEmail === 'tryber@teste.com');
  const placeHolderPassword = frm.inPassword.value;
  console.log(placeHolderPassword === '123456');
  if (placeHolderEmail === 'tryber@teste.com' && placeHolderPassword === '123456') {
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
  }
});

const textArea = document.querySelector('#textarea');
const counter = document.querySelector('#counter');
counter.innerText = textArea.attributes.maxlength.nodeValue;

textArea.addEventListener('keyup', () => {
  counter.innerText = 500 - textArea.value.length;
});