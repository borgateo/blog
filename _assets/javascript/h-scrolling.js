module.exports = function() {

  var viewWidth   = window.innerWidth;
  var booksObj    = {};
  var filmsObj    = {};

  var books       = $('#books');
  var films       = $('#films');
  var bookList    = books.find('.img-cover');
  var filmList    = films.find('.img-cover');

  var bookBox     = books.find('.h-scrollable ul');
  var filmBox     = films.find('.h-scrollable ul');

  $('.open-review').on( 'click', handleClick );
  $('.close-review').on( 'click', handleClose );

  books.find('.h-scrollable').scroll( handleScrollBooks );
  films.find('.h-scrollable').scroll( handleScrollFilms );

  init();


  function init() {
    var itemWidth     = 320;
    var bookListWidth = bookList.length * itemWidth;
    var filmListWidth = filmList.length * itemWidth;

    bookBox.width( bookListWidth );
    filmBox.width( filmListWidth );

    //var visibleFilms  = Math.ceil( viewWidth / itemWidth );

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


  // ----- Events ------

  function handleScrollBooks( e ) {
    var sx = $(this).scrollLeft();
    var checkPages = ( booksObj.pageLoaded < booksObj.pages );
    var checkPos = ( sx > booksObj.size * ( booksObj.itemsPerPage / 2 ) * booksObj.pageLoaded );

    if ( checkPages && checkPos ) {
      pagination( bookList.slice( booksObj.itemsPerPage * booksObj.pageLoaded, booksObj.itemsPerPage * ( booksObj.pageLoaded + 1 ) ) );
      booksObj.pageLoaded++;
    }
  }

  function handleScrollFilms( e ) {
    var sx = $(this).scrollLeft();
    var checkPages = ( filmsObj.pageLoaded < filmsObj.pages );
    var checkPos = ( sx > filmsObj.size * ( filmsObj.itemsPerPage / 2 ) * filmsObj.pageLoaded );

    if ( checkPages && checkPos ) {
      pagination( filmList.slice( filmsObj.itemsPerPage * filmsObj.pageLoaded, filmsObj.itemsPerPage * ( filmsObj.pageLoaded + 1 ) ) );
      filmsObj.pageLoaded++;
    }
  }



  function handleClick() {
    $(this)
      .closest('li')
      .find('div.review')
      .addClass('active')
    ;
  }

  function handleClose() {
    $(this)
      .closest('div.review')
      .removeClass('active')
    ;
  }

  // ----- Helpers -------
  function loadImages( img ) {
    var downloadingImage = new Image();
    downloadingImage.src = $( img ).attr('data-src');
    downloadingImage.onload = function() {
      img.src = this.src;
      $( img ).addClass('loaded');
    };
  }

  function pagination( list ) {
    list.each(function() {
      loadImages( this );
    });
  }

};