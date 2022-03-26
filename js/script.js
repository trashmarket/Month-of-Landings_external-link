const burgerButton = document.querySelector('.header__burger-button');
const menu = document.querySelector('.header__menu-wrapper');

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
}