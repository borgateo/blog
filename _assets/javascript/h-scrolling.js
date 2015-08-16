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