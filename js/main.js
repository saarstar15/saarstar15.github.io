

/**
$('.playbtn a').click(
  function(){
    $('.hide').fadeOut(500);
    $( $(this).attr('#gamescreen') ).fadeIn(750);
  }
)
**/



$('.playbtn').click(
  function(){
    $('#splashscreen').addClass('hide')
    $('#gamescreen').removeClass('hide')
  }
)

$('.item').click(
  function(){
    $(this).toggleClass('moved')
  }
)

$('.fin a ').click(
  function() {
    $('#gamescreen').addClass('hide')
    $('#endscreen').removeClass("hide")
  }
)

$('.quit a ').click(function() {
    location.reload();
});

$('.res a ').click(function() {
    $('#gamescreen').REFRESH();
});


/** TIME OUT AFTER 5 MINUTES?
$('.wrapper').setTimeout(function() {
 location.reload()
  },5000);
    });



/** PAGE REFRESH
$'#gamescreen a'.click(
  function(){
    $(this).location.reload(true)
  }
)
**/

/**
$('.playbtn a').click(
  function(){
    $(gamescreen).removeClass('hide')
  }
)
**/
