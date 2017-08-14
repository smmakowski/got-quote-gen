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
    var tweet = quote + ' ' + char;
    var url = 'https://twitter.com/intent/tweet?hashtags=quotes,GoT&related=freecodecamp&text='
    if (tweet.length > 128) {
      var diff = (128 - tweet.length - 4);
    }
    url += tweet;
    return url;
  }

  $('#get-quote').on('click', function() {
    // GoT Quote API URL => https://github.com/wsizoo/game-of-thrones-quotes
    $.getJSON('https://got-quotes.herokuapp.com/quotes', function(json) {
      var quote = '"<small>' + json.quote + '</small>"';
      var char = '- ' + json.character;
      $('#show-quote').html(quote);
      $('#show-character').text(char);

    // change url for <a> tag to reflect new quote
    // tweet button docs URL => https://dev.twitter.com/web/tweet-button
    var url = genTweetURL(quote, char);
    $('a').attr('href', url);
    });
  });
});
