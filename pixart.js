var $color_button = $('#set-color');
var $color_input = $('#color-field');
var $movie_input = $('#movie-name');
var $movie_button = $('#set-movie');
var $brush_box = $('.brush');

$color_button.on('click', function(event) {
  event.preventDefault();
  $brush_box.css({
    'background-color': $color_input.val()
  })
});

var $body = $('body')
for (i = 0; i < 1000 ; i++) {
  $body.append( '<div class="square"></div>');
}

var $squares_all = $('.square')
$squares_all.on('mouseover', function(event){
  $(event.target).css({'background-color': $color_input.val()
});
})

// DID NOT FINISH THE BELOW

$color_button.on('click', function(event){
  debugger
  event.preventDefault();
// EXAMPLE: http://omdbapi.com/?t=Jaws&apikey=2f6435d9
  var options = {
    url: 'http://omdbapi.com/',
    method: 'post',
    data: {
      t: $movie_input.val(),
      apikey: '2f6435d9'
    }
  }
  var appendComment = function(response) {
    console.log(response);
    // img- response['Poster']
  }

  $.ajax(options).done(appendComment);

});
