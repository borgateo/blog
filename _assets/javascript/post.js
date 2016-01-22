/* post.js
** 
** Used on post pages
** - scrolling parallax effect
** - setting margin-top according to the header height
*/

var nav = require('./nav.js');


Zepto(function( $ ) {
  'use strict';

  nav();

  var $window = $(window);
  var $image  = $('.post-image');

  var disqus_shortname = 'blogmatteoborgatocom';
  var el               = $('#show-comments');
  var triggered        = false;

  // $window.on('scroll', function() {
  //   var top = $window.scrollTop();

  //   if ( top < 0 || top > 1500 ) { 
  //     return; 
  //   }

    
  //   $image
  //     //.css('transform', 'translate3d(0, '+top/10.5+'px, 0)')
  //     //.css('opacity', 1-Math.max(top/1000, 0));
  //     .css('transform', 'rotateY(' +top/10.5 + 'deg)');
      
  // });

  // $window.trigger('scroll');

  var height = $('#article-image').height() + 75;
  $('.post').css('margin-top', height + 'px');


  // Creates Captions from Alt tags
  $('.post-content img').each(function() {
    // Let's put a caption if there is one
    if( $(this).attr('alt') )
      $(this).wrap('<figure class="image"></figure>')
      .after('<figcaption>' +$(this).attr('alt')+ '</figcaption>');
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
  };

  // disqus event
  el.on('click', initDisqus);


  var fb       = $('#share-it');
  var fbSource = fb.find('.facebook-share').attr('data-source');
  var shares   = Math.floor( Math.random() * (5 - 3) + 1 );

  var updateShares = function( s ) {
    fb.find('.share-counter span').html( s );
  };

  $.ajax({
    type: 'GET',
    url: fbSource,
    // type of data we are expecting in return:
    dataType: 'json',
    timeout: 300,
    context: $('body'),
    success: function( data ) {
      if ( data && data.shares && data.shares > shares ) {
        shares = data.shares;
      }
      updateShares( shares );
    },
    error: function( xhr, type ){
      console.log('error', type);
      updateShares( shares );
    }
  });

  updateShares( shares );


});
