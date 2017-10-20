$color_button = $('#set-color');
$input = $('#color-field');
$brush_box = $('.brush');



$color_button.on('click', function(event) {
  event.preventDefault();
  $brush_box.css({'background-color': $input.val()
})
});
