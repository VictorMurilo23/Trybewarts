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
