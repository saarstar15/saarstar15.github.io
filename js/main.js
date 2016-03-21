$("#audio").click( function (){
    $("#music").prop('muted', !$("#music").prop('muted'));
});

$('.playbtn').click(
  function(){
    $('#splashscreen').addClass('hide')
    $('#gamescreen').removeClass('hide noBkg')
    $('.endscreen').addClass('hide')
    $('.items').removeClass('hide')
    $('.game-nav').removeClass('hide')
  }
)

$('.item').click(
  function(){
    $(this).toggleClass('moved')
  }
)

$('.quit a ').click(function() {
    location.reload();
});

$('.res a ').click(function() {
    $('.item').removeClass('moved');
});

$('.fin a').click(
  function() {
    $('#gamescreen').addClass('noBkg')
    $('.game-nav').addClass('hide')
    $('.endscreen').removeClass('hide')
    $('.end-nav').removeClass('hide')
    $('.clickblock').removeClass('hide')
  }
)

$('.playagain a').click(
  function() {
    location.reload();
  }
)


/** IF COMMAND FOR .ITEMS?
if($('.item')).hasClass('moved'))
  $('this').addClass('hide');
**/


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
