$(document).ready(function() {
  function getQuote() {
    $('#get-quote').prop('disabled', true);
    $('#show-quote').fadeOut(function() {
      $('#show-character').fadeOut(function() {
        var url = 'https://twitter.com/intent/tweet?hashtags=quotes,GoT&related=freecodecamp&text=';
        $.getJSON('https://got-quotes.herokuapp.com/quotes', function(json) {
          $('#show-quote').text(json.quote);
          $('#show-character').text(json.character);

          url += '"' + json.quote + '"' + ' - ' + json.character;
          $('a').attr('href', url);
          $('#show-quote').fadeIn(function() {
            $('#show-character').fadeIn(function() {
              $('#get-quote').prop('disabled', false);
            });
          });
        });
      });
    });
  }

  $('#get-quote').on('click', function() {
    getQuote();
  });

  getQuote();
});
