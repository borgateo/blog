/*
 * Main JS file for Casper behaviours
 */

Zepto(function( $ ) {
  console.log('.....INIT......');

  var $window    = $(window);
  var $image     = $('.post-image');

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
  $(".post-content img").each(function() {
    // Let's put a caption if there is one
    if($(this).attr("alt"))
      $(this).wrap('<figure class="image"></figure>')
      .after('<figcaption>'+$(this).attr("alt")+'</figcaption>');
  });

  var initDisqus = function() {
    if ( triggered ) {
     return;
    }
    triggered = true;

    console.log('DISQ');

    var dsq = document.createElement('script'); 
    dsq.type = 'text/javascript'; 
    dsq.async = true;
    dsq.src = '//'+ disqus_shortname +'.disqus.com/embed.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
  }

  // disqus event
  el.on("click", initDisqus);

});
