$(document).ready(function() {
  // GoT Quote API URL => https://github.com/wsizoo/game-of-thrones-quotes
  $('#get-quote').on('click', function() {
    $.getJSON('https://got-quotes.herokuapp.com/quotes', function(json) {

    });
  });
});
