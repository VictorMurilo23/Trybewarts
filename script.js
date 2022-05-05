const frm = document.querySelector('form');
console.log(frm);

frm.addEventListener('click', (e) => {
  e.preventDefault();
  const placeHolderEmail = frm.inEmail.value;
  console.log(placeHolderEmail);
  const placeHolderPassword = Number(frm.inPassword.value);
  console.log(placeHolderPassword);
  if (placeHolderEmail === 'tryber@teste.com' && placeHolderPassword === 123456) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos');
  }
});
