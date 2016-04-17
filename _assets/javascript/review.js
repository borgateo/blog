
'use strict';

var ajax       = require('./_ajax.js');
var hScrolling = require('./h-scrolling.js');
var nav        = require('./nav.js');
var mustache   = require('mustache');
var templates  = require('./templates.js');

var dataURL   = 'https://dl.dropboxusercontent.com/s/mwl7tnt8i83lebh/recensioni.json';

document.onreadystatechange = function() {
  
  if ( document.readyState === 'complete' ) {
  	init();
  }
  
};



function init() {

	ajax.get( dataURL, function( data ) {
		if ( !data ) {
			console.error( 'No data available. Check the URL!' );
			return;
		}
		data = JSON.parse( data );

		renderTemplates( 'films', data );
		renderTemplates( 'books', data );

    hScrolling.init();
    nav.init();

	});
}

function renderTemplates( type, data ) {

	var map = {
		films: {
			tpl: templates.films,
			id: 'films'
		},
		books: {
			tpl: templates.books,
			id: 'books'
		},
	};

	var output = mustache.render( map[ type ].tpl, data );
	var element = document.getElementById( map[ type ].id );

  element.innerHTML = output ;
}
