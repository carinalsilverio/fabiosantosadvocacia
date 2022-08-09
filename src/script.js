/*Scroll suave*/

const menuItems = document.querySelectorAll('.nav-link');

menuItems.forEach((item) => {
  item.addEventListener('click', scrollToIdOnClick);
});

function scrollToIdOnClick(event) {
  event.preventDefault(); /*retirar evento padrão*/
  const element = event.target;
  const id = element.getAttribute('href');
  const to = document.querySelector(id).offsetTop;

  window.scroll({
    top: to,
    behavior: 'smooth',
  });
}

/*Confirmação envio de mensagem*/

// function enviado() {
//   swal({
//     title: 'Mensagem Enviada com Sucesso!',
//     text: 'Agradecemos o contato!',
//     icon: 'success',
//     button: 'Fechar!',
//   });
// }

/*Formulário*/

// const form = document.getElementById('form');
// const username = document.getElementById('username');
// const email = document.getElementById('email');

// form.addEventListener('submit', (e) => {
//   e.preventDefault();

//   checkInputs();
// });

// function checkInputs() {
//   const usernameValue = username.value.trim();
//   const emailValue = email.value.trim();

//   if (usernameValue === '') {
//     // mostrar erro
//     // add classe
//     setErrorFor(username, 'Preencha esse campo');
//   } else {
//     // adicionar a classe de sucesso
//     setSuccessFor(username);
//   }

//   if (emailValue === '') {
//     // mostrar erro
//     // add classe
//     setErrorFor(email, 'Preencha esse campo');
//   } else if (!isEmail(emailValue)) {
//     setErrorFor(email, 'Email inválido');
//   } else {
//     // adicionar a classe de sucesso
//     setSuccessFor(email);
//   }
// }

// function setErrorFor(input, message) {
//   const formGroup = input.parentElement;
//   const small = formGroup.querySelector('small');

//   small.innerText = message;

//   formGroup.className = 'form-group error';
// }

// function setSuccessFor(input) {
//   const formGroup = input.parentElement;

//   formGroup.className = 'form-group success';
//   // alert('Mensagem enviada com sucesso! Agradecemos o contato!');
// }

function isEmail(email) {
  return /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(
    email,
  );
}
