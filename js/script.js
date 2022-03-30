const burgerButton = document.querySelector('.header__burger-button');
const menu = document.querySelector('.header__menu-wrapper');
const headerLogo = document.querySelector('.header__logo');

function chengeClassList (nameFordel, nameForAdd) {
  burgerButton.classList.remove(nameFordel);
  burgerButton.classList.add(nameForAdd);
}

burgerButton.onclick = function(event) {
  if (this.classList.contains('header__burger-button_type_close')) {
    chengeClassList('header__burger-button_type_close', 'header__burger-button_type_open');
  } else {
    chengeClassList('header__burger-button_type_open', 'header__burger-button_type_close');
  }
  menu.classList.toggle('header__menu-wrapper_active');

  if (window.innerWidth > 767) {
    if (!headerLogo.classList.contains('header__logo_hide')) {
      headerLogo.classList.add('header__logo_hide');
    } else {
      headerLogo.classList.remove('header__logo_hide');
    }
  }
}