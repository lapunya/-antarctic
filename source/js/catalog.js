'use strict';

(function () {
  var items = document.querySelectorAll('.catalog__item');

  for (var i = 0; i < items.length; i++) {
    var currentItem = items[i];
    (function () {
      var popup = currentItem.querySelector('.catalog__popup');

      var showCard = function () {
        popup.style = 'display: flex;';
      };

      var hideCard = function () {
        popup.style = 'display: none;';
      };

      currentItem.addEventListener('mouseover', showCard);
      currentItem.addEventListener('mouseout', hideCard);
    })();
  }
})();
