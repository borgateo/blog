(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function() {

  // ====== review page ======

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

  bookList.on('click', function() {
    $(this).closest('li').find('div.review').addClass('active');
  });

  $('.close-review').on('click', function() {
    $(this).closest('div.review').removeClass('active');
  });

  

  var loadImages = function( img ) {
    var downloadingImage = new Image();
    downloadingImage.src = $( img ).attr('data-src');
    downloadingImage.onload = function() {
      img.src = this.src;
      $( img ).addClass('loaded');
    };
  };

  var pagination = function( list ) {
    list.each(function() {
      loadImages( this );
    });
  };
  
  var loaded = false;
  books.find('.h-scrollable').scroll(function( e ) {
    var sx = $(this).scrollLeft();
    if ( !loaded && sx > 800 ) {
      pagination( bookList.slice(5, 10) );
      loaded = true;
    }
  });

  // show visibile books (first 5)
  pagination( bookList.slice(0, 5) );

};
},{}],2:[function(require,module,exports){

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

},{}],3:[function(require,module,exports){
var hScrolling = require('./h-scrolling.js');
var nav        = require('./nav.js');


Zepto(function( $ ) {
  'use strict';

  hScrolling();
  nav();

});

},{"./h-scrolling.js":1,"./nav.js":2}]},{},[3]);
