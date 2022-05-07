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

const salvado = {};
const conteudos = [];

function salvarNota() {
  for (let index = 0; index < document.getElementsByName('rate').length; index += 1) {
    if (document.getElementsByName('rate')[index].checked === true) {
      salvado.avaliacao = document.getElementsByName('rate')[index].value;
    }
  }
}

function salvarFamilia() {
  for (let index = 0; index < document.getElementsByName('family').length; index += 1) {
    if (document.getElementsByName('family')[index].checked === true) {
      salvado.familia = document.getElementsByName('family')[index].value;
    }
  }
}

function salvarMaterias() {
  for (let index = 0; index < document.querySelectorAll('.subject').length; index += 1) {
    if (document.querySelectorAll('.subject')[index].checked === true) {
      conteudos.push(document.querySelectorAll('.subject')[index].value);
    }
    salvado.aprender = conteudos;
  }
}

function salvarResto() {
  salvado.nome = document.querySelector('#input-name').value;
  salvado.sobrenome = document.querySelector('#input-lastname').value;
  salvado.email = document.querySelector('#input-email').value;
  salvado.casa = document.querySelector('#house').value;
  salvado.comentario = textArea.value;
}

btnSend.addEventListener('click', () => {
  const form = document.querySelector('#evaluation-form');
  salvarResto();
  salvarNota();
  salvarFamilia();
  salvarMaterias();
  form.innerText = `Nome: ${`${salvado.nome} ${salvado.sobrenome}`}
  Email: ${salvado.email}
  Casa: ${salvado.casa}
  Família: ${salvado.familia}
  Matérias: ${salvado.aprender.join(', ')}
  Avaliação: ${salvado.avaliacao}
  Observações: ${salvado.comentario}`;
});
