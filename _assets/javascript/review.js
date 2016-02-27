'use strict';

var hScrolling = require('./h-scrolling.js');
var nav        = require('./nav.js');


document.onreadystatechange = function() {
  if ( document.readyState === 'complete' ) {

    hScrolling.init();
    nav.init();
  
  }
};