/*
** main.js
**
** index page -- footer.html
**
*/

var nav = require('./nav.js');

document.onreadystatechange = function() {
	if ( document.readyState === 'complete' ) {

		nav.init();

	}
};

