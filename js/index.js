'use strict';

$('.fittext-dynamic').each(function () {
  var t = $(this),
      width = t.data("width") * 2,
      characters = t.html().length,
      size = width / characters;

  $(this).css('font-size', size + 'vw');
});
