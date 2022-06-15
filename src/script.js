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

function enviado() {
  swal({
    title: 'Mensagem Enviada com Sucesso!',
    text: 'Agradecemos o contato!',
    icon: 'success',
    button: 'Aww yiss!',    
  });
}
