
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
