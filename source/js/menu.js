'use strict';

(function () {
  var navigation = document.querySelector('.nav');
  var logo = document.querySelector('.header__logo');

  var closeNoJsMenu = function () {
    navigation.classList.remove('nav--nojs');
    navigation.classList.add('nav--closed');
    logo.style.fill = window.util.WHITE_COLOR;
  };

  var openMenu = function () {
    navigation.classList.remove('nav--closed');
    navigation.classList.add('nav--opened');
    logo.style.fill = window.util.BLUE_COLOR;
  };

  var closeMenu = function () {
    navigation.classList.remove('nav--opened');
    navigation.classList.add('nav--closed');
    logo.style.fill = window.util.WHITE_COLOR;
  };

  window.menu = {
    closeNoJsMenu: closeNoJsMenu,
    open: openMenu,
    close: closeMenu
  };
})();
