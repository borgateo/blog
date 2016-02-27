/*
** h-scrolling.js
**
*/

var trav = require('./_traversing.js');
var ajax = require('./_ajax.js');

var viewWidth   = window.innerWidth;
var booksObj    = {};
var filmsObj    = {};

var books       = document.getElementById('books');
var films       = document.getElementById('films');
var bookList    = books.getElementsByClassName('img-cover');
var filmList    = films.getElementsByClassName('img-cover');
var openReview  = document.getElementsByClassName('open-review');
var closeReview = document.getElementsByClassName('close-review');

var bookScroll  = books.getElementsByClassName('h-scrollable');
var filmScroll  = films.getElementsByClassName('h-scrollable');
var bookBox     = bookScroll[0].getElementsByTagName('ul');
var filmBox     = filmScroll[0].getElementsByTagName('ul');

// Get Arrays
bookList        = Array.prototype.slice.call( bookList, 0 );
filmList        = Array.prototype.slice.call( filmList, 0 );
openReview      = Array.prototype.slice.call( openReview, 0 );
closeReview     = Array.prototype.slice.call( closeReview, 0 );


// Listeners
openReview.forEach(function( item ) {
  item.addEventListener( 'click', handleClick, false );
})

closeReview.forEach(function( item ) {
  item.addEventListener( 'click', handleClose, false );
})

bookScroll[0].addEventListener( 'scroll', handleScrollBooks );
filmScroll[0].addEventListener( 'scroll', handleScrollFilms );


// ===== Public functions =====

function init() {
  var itemWidth     = 320;
  var bookListWidth = bookList.length * itemWidth;
  var filmListWidth = filmList.length * itemWidth;

  bookBox[0].setAttribute( 'style', 'width:' + bookListWidth + 'px' );
  filmBox[0].setAttribute( 'style', 'width:' + filmListWidth + 'px' );

  booksObj = {
    pageLoaded: 1,
    size: itemWidth,
    itemsPerPage: Math.ceil( viewWidth / itemWidth ),
  };
  booksObj.pages = Math.ceil( bookList.length / booksObj.itemsPerPage );

  filmsObj = {
    pageLoaded: 1,
    size: itemWidth,
    itemsPerPage: Math.ceil( viewWidth / itemWidth ),
  };
  filmsObj.pages = Math.ceil( filmList.length / filmsObj.itemsPerPage );

  // show visibile items
  pagination( bookList.slice( 0, booksObj.itemsPerPage ) );
  pagination( filmList.slice( 0, filmsObj.itemsPerPage ) );
}


// ===== Private functions =====

// ----- Events ------

function handleScrollBooks( e ) {
  var sx = this.scrollLeft;
  var checkPages = ( booksObj.pageLoaded < booksObj.pages );
  var checkPos = ( sx > booksObj.size * ( booksObj.itemsPerPage / 2 ) * booksObj.pageLoaded );

  if ( checkPages && checkPos ) {
    pagination( bookList.slice( booksObj.itemsPerPage * booksObj.pageLoaded, booksObj.itemsPerPage * ( booksObj.pageLoaded + 1 ) ) );
    booksObj.pageLoaded++;
  }
}

function handleScrollFilms( e ) {
  var sx = this.scrollLeft;
  var checkPages = ( filmsObj.pageLoaded < filmsObj.pages );
  var checkPos = ( sx > filmsObj.size * ( filmsObj.itemsPerPage / 2 ) * filmsObj.pageLoaded );

  if ( checkPages && checkPos ) {
    pagination( filmList.slice( filmsObj.itemsPerPage * filmsObj.pageLoaded, filmsObj.itemsPerPage * ( filmsObj.pageLoaded + 1 ) ) );
    filmsObj.pageLoaded++;
  }
}

// open the review
function handleClick() {
  var closest = trav.getClosest( this, 'li' );
  closest.getElementsByClassName('review')[0].className += ' active';
}

// close the review (X)
function handleClose() {
  var closest = trav.getClosest( this, 'li' );
  closest.getElementsByClassName('review')[0].className = closest.getElementsByClassName('review')[0].className.replace('active', '');
}

// ----- Helpers -------

function pagination( list ) {

  list.forEach(function( item ) {
    ajax.lazyLoadImages( item );
  });

}


module.exports = {
  init: init
}