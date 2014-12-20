"use strict";

Zepto(function( $ ) {
  var triggered  = false;
  var initDisqus = function() {
    if ( triggered ) {
     return;
    }
    triggered = true;

    var dsq = document.createElement('script'); 
    dsq.type = 'text/javascript'; 
    dsq.async = true;
    dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
  }

  // disqus event
  var el = $("#show-comments");
  el.on("click", initDisqus);
});