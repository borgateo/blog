/*
** images.js
** 
*/

var post = document.getElementsByClassName('post');

// --- Fuctions ---
function setArticleImage( offset ) {
  var image       = document.getElementById('article-image');
  var imageSize   = image.getBoundingClientRect();
  var imageHeight = imageSize.height + offset;

  post[0].setAttribute( 'style', 'margin-top:' + imageHeight + 'px' );
}

function setCaptions() {
  var images = post[0].getElementsByTagName('img');
  images = Array.prototype.slice.call( images, 0 );

  // Creates Captions from Alt tags
  images.forEach(function( img ) {
    if ( img.hasAttribute('alt') ) {
      var wrapper = document.createElement('figure');
      wrapper.className = "image";
      var figcaption = document.createElement('figcaption');
      figcaption.innerHTML = img.getAttribute('alt');
      img.parentNode.insertBefore( wrapper, img );
      wrapper.appendChild( img );
      wrapper.appendChild( figcaption );
    }
  });  
}

module.exports = {
  setArticleImage: setArticleImage,
  setCaptions: setCaptions
};