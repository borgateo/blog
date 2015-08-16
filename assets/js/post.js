(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

module.exports = function() {
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

};

},{}],2:[function(require,module,exports){
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

  $window.on('scroll', function() {
    var top = $window.scrollTop();

    if ( top < 0 || top > 1500 ) { 
      return; 
    }

    $image
      .css('transform', 'translate3d(0, '+top/2.5+'px, 0)')
      .css('opacity', 1-Math.max(top/1200, 0));
  });

  $window.trigger('scroll');

  var height = $('#article-image').height();
  $('.post-content').css('margin-top', height + 'px');


  // Creates Captions from Alt tags
  $('.post-content img').each(function() {
    // Let's put a caption if there is one
    if( $(this).attr('alt') )
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
  };

  // disqus event
  el.on('click', initDisqus);


  var fb       = $('#share-it');
  var fbSource = fb.find('.facebook-share').attr('data-source');
  var shares   = Math.floor( Math.random() * (13 - 11) + 11 );

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
    success: function(data){
      if ( data && data.shares && data.shares > shares ) {
        shares = data.shares;
      }
      updateShares( shares );
    },
    error: function(xhr, type){
      console.log('error', type);
      updateShares( shares );
    }
  });

  updateShares( shares );


});

},{"./nav.js":1}]},{},[2]);
