$(document).ready(function() {
  // json char to
  // var chars = {
  //   Bronn: {
  //     name: 'Ser Bronn of the Blackwater',
  //     photo: 'https://en.wikipedia.org/wiki/Bronn_(character)#/media/File:Bronn-Jerome_Flynn.jpg',
  //   },
  //   'Brynden Tully': {
  //     name: 'Brynden Tully',
  //     photo: ''
  //   },
  //   Cersei: {
  //
  //   },
  //   'The Hound': {
  //
  //   },
  //   'Jaime Lannister': '',
  //   Littlefinger: '',
  //   'Olenna Tyrell': '',
  //   'Renly Baratheon': '',
  //   Tyrion: '',
  //   Varys: '',
  // }
  function genTweetURL(quote, char) {
    var tweet = quote + char;
    var url = 'https://twitter.com/intent/tweet?hashtags=quotes,GoT&related=freecodecamp&text='
    if (tweet.length > 128) {
      var truncated = tweet.slice() // make sure
    }
    return url;
  }

  $('#get-quote').on('click', function() {
    // GoT Quote API URL => https://github.com/wsizoo/game-of-thrones-quotes
    $.getJSON('https://got-quotes.herokuapp.com/quotes', function(json) {
      var quote = '"' + json.quote + '"';
      var char = '- ' + json.character;
      $('#show-quote').text(quote);
      $('#show-character').text(char);

    // change url for <a> tag to reflect new quote
    // tweet button docs URL => https://dev.twitter.com/web/tweet-button

    $('a').attr('href', 'http://www.bk.com');
    });
  });
});
