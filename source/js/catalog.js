'use strict';

(function () {
  var items = document.querySelectorAll('.catalog__item');
  var popups = document.querySelectorAll('.catalog__popup');

  for (var i = 0; i < items.length; i++) {
    var currentItem = items[i];
    (function () {
      var index = i;

      var showCard = function () {
        popups[index].style = 'display: flex;';
      };

      var hideCard = function () {
        popups[index].style = 'display: none;';
      };

      currentItem.addEventListener('mouseover', showCard);
      currentItem.addEventListener('mouseout', hideCard);
    })();
  }
})();
