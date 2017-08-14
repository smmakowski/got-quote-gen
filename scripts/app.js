$(document).ready(function() {
  var chars = {
    bronn: '',
    brynden: '',
    cersei: '',
    hound: '',
    jaime: '',
    littlefinger: '',
    olenna: '',
    renly: '',
    tyrion: '',
  }
  // GoT Quote API URL => https://github.com/wsizoo/game-of-thrones-quotes
  $('#get-quote').on('click', function() {
    $.getJSON('https://got-quotes.herokuapp.com/quotes', function(json) {
      $('#show-quote').text('"' + json.quote + '"');
      $('#show-character').text('- ' + json.character);
    });
  });
});
