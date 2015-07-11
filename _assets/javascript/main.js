/*
** Main JS file for:
** - scrolling parallax effect
** - setting margin-top according to the header height
** - creating the caption for every image if there's attribute 'alt"
** - showing disquss comments when a user clicks on the call-to-action
*/

Zepto(function( $ ) {
  var $window = $(window);
  var $image  = $('.post-image');

  var disqus_shortname = 'blogmatteoborgatocom';
  var el               = $("#show-comments");
  var triggered        = false;

  $window.on('scroll', function() {
    var top = $window.scrollTop();

    if (top < 0 || top > 1500) { return; }
    $image.css('transform', 'translate3d(0px, '+top/2.5+'px, 0px)')
    .css('opacity', 1-Math.max(top/1200, 0));

  });
  $window.trigger('scroll');

  var height = $('.article-image').height();
  $('.post-content').css('margin-top', height + 'px');


  // Creates Captions from Alt tags
  $('.post-content img').each(function() {
    // Let's put a caption if there is one
    if($(this).attr('alt'))
      $(this).wrap('<figure class="image"></figure>')
      .after('<figcaption>'+$(this).attr("alt")+'</figcaption>');
  });

  var initDisqus = function() {
    if ( triggered ) {
     return;
    }
    triggered = true;

    var dsq = document.createElement('script'); 
    dsq.type = 'text/javascript'; 
    dsq.async = true;
    dsq.src = '//'+ disqus_shortname +'.disqus.com/embed.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
  }

  // disqus event
  el.on('click', initDisqus);

  // nav menu
  var logo = $('#toggle-nav');
  var body = $('body');

  logo.on('click', function( ev ) {
    ev.stopPropagation();
    if ( body.is('.active-menu') ) {
      body.removeClass('active-menu');
    } else {
      body.addClass('active-menu');
    }
  });

  // clicking on the link, close the menu
  $('nav.menu').find('a').on('click', function() {
    body.removeClass('active-menu');
  });

  //review page 
  var books     = $('#books');
  var bookList  = books.find('.img-cover');
  var films     = $('#films');
  // var games     = $('#games');
  var bookBox   = books.find('.h-scrollable ul');
  var filmBox   = films.find('.h-scrollable ul');
  // var gameBox   = games.find('.h-scrollable ul');

  var itemWidth = 320;

  bookBox.width( bookList.length * itemWidth );
  filmBox.width( films.find('.film').length * itemWidth );
  // gameBox.width( ( games.find('.book').length * itemWidth ) + 50 );

  bookList.on('click', function( event ) {
    $(this).closest('li').find('div.review').addClass('active');
  });

  $('.close-review').on('click', function() {
    $(this).closest('div.review').removeClass('active');
  });

});
