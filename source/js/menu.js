'use strict';

var navigation = document.querySelector('.nav');
var navButton = document.querySelector('.nav__toggle');
var logo = document.querySelector('.header__logo');


navigation.classList.remove('nav--nojs');
navigation.classList.add('nav--closed');
logo.style.fill = '#F9FBFD';

navButton.addEventListener('click', function () {
  if (navigation.classList.contains('nav--closed')) {
    navigation.classList.remove('nav--closed');
    navigation.classList.add('nav--opened');
    logo.style.fill = '#011C40';
  } else {
    navigation.classList.remove('nav--opened');
    navigation.classList.add('nav--closed');
    logo.style.fill = '#F9FBFD';
  }
});
