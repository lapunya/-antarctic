'use strict';

(function () {
  var navigation = document.querySelector('.nav');
  var navButton = document.querySelector('.nav__toggle');

  window.menu.closeNoJsMenu();

  navButton.addEventListener('click', function () {
    if (navigation.classList.contains('nav--closed')) {
      window.menu.open();
    } else {
      window.menu.close();
    }
  });
})();
