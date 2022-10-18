/*Scroll suave*/

const menuItems = document.querySelectorAll('#menu');

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

function isEmail(email) {
  return /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(
    email,
  );
}

//Carregar página - loading//

save_btn = document.querySelector('.save-btn');
save_btn.onclick = function () {
  this.innerHTML = "<div class='loader'></div>";
  setTimeout(() => {
    this.innerHTML = 'Enviar';
    // this.style = 'background: #f1f5f4; color: #333';
  }, 2000);
};

//Menu Mobile

const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

// Opacidade Header - Scroll

var div = $('#header');
$(window).scroll(function () {
  if ($(document).scrollTop() > 1000) {
    var percent =
      $(document).scrollTop() / ($(document).height() - $(window).height());
    div.css('opacity', 1 - percent);
  } else {
    div.css('opacity', 1);
  }
});

// Botão Votlar ao Topo 

const scrollAnima = document.querySelector('[data-anima=scroll]');

const metadeWindow = window.innerHeight * 4.0;

function animarScroll() {
  const topoItem = scrollAnima.getBoundingClientRect().top;
  const itemVisivel = topoItem - metadeWindow < 0;
  if (itemVisivel) {
    scrollAnima.classList.add('show-button');
  } else {
    scrollAnima.classList.remove('show-button');
  }
}

window.addEventListener('scroll', animarScroll);

