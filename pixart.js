var $color_button = $('#set-color');
var $input = $('#color-field');
var $brush_box = $('.brush');

$color_button.on('click', function(event) {
  event.preventDefault();
  $brush_box.css({
    'background-color': $input.val()
  })
});

var $body = $('body')
for (i = 0; i < 1000 ; i++) {
  $body.append( '<div class="square"></div>');
}

var $squares_all = $('.square')
$squares_all.on('mouseover', function(event){
  $(event.target).css({'background-color': $input.val()
});
})
