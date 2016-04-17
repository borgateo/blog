/*
** disqus.js
**
*/

var disqus_shortname = 'blogmatteoborgatocom';
var showComments     = document.getElementById('show-comments');
var triggered        = false;

// disqus event
function init() {
  showComments.addEventListener('click', setDisqus, false);
}

function setDisqus() {
  if ( triggered ) {
   return;
  }
  triggered = true;

  var dsq = document.createElement('script'); 
  dsq.type = 'text/javascript'; 
  dsq.async = true;
  dsq.src = '//'+ disqus_shortname +'.disqus.com/embed.js';
  ( document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0] ).appendChild( dsq );
}

module.exports = {
  init: init
};