$(document).ready(function() {
  function getQuote() {
    var url = 'https://twitter.com/intent/tweet?hashtags=quotes,GoT&related=freecodecamp&text=';

    $.getJSON('https://got-quotes.herokuapp.com/quotes', function(json) {
      $('#show-quote').text(json.quote);
      $('#show-character').text(json.character);

      url += '"' + json.quote + '"' + ' - ' + json.character;

      $('a').attr('href', url);
    });
  }

  $('#get-quote').on('click', function() {
    getQuote();
  });

  getQuote();
});
