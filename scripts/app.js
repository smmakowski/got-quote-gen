$(document).ready(function() {
  $('#get-quote').on('click', function() {
    var url = 'https://twitter.com/intent/tweet?hashtags=quotes,GoT&related=freecodecamp&text=';

    $.getJSON('https://got-quotes.herokuapp.com/quotes', function(json) {
      $('small').text(json.quote);
      $('#show-character').text('- ' + json.character);

      url += '"' + json.quote + '"' + ' - ' + json.character;

      $('a').attr('href', url);
    });
  });
});
