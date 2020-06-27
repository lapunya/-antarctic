'use strict';

(function () {
  var navigation = document.querySelector('.nav');

  if (navigation) {
    var closeNoJsMenu = function () {
      navigation.classList.remove('nav--nojs');
      navigation.classList.add('nav--closed');
    };

    var openMenu = function () {
      navigation.classList.remove('nav--closed');
      navigation.classList.add('nav--opened');
    };

    var closeMenu = function () {
      navigation.classList.remove('nav--opened');
      navigation.classList.add('nav--closed');
    };
  }

  window.menu = {
    closeNoJsMenu: closeNoJsMenu,
    open: openMenu,
    close: closeMenu
  };
})();
