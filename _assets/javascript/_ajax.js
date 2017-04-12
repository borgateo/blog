/*
** --------------
** --- Helper ---
** --------------
**
** _ajax.js
**
*/

function lazyLoadImages( img, callback ) {
  
  var downloadingImage = new Image();
  downloadingImage.src = img.getAttribute('data-src');
  downloadingImage.onload = function() {
    img.src = this.src;
    img.className += ' loaded';
    callback();
  };

}

function lazyLoadGif( img, index, callback) {
  
  // the trick is to change STATIC to ANIMATED and load the heavy GIF
  var src = img.getAttribute('src').replace("STATIC", "ANIMATED");
  
  var downloadingImage = new Image();
  downloadingImage.src = src;
  downloadingImage.onload = function() {
    img.src = this.src;
    img.className += ' loaded';
    callback();
  };
  
}

function get( url, success ) {

  var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
  xhr.open('GET', url);
  xhr.onreadystatechange = function() {
    if ( xhr.readyState > 3 && xhr.status == 200 ) {
      success( xhr.responseText );
    }
  };
  xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
  xhr.send();
  return xhr;

}

module.exports = {
  lazyLoadImages: lazyLoadImages,
  lazyLoadGif: lazyLoadGif,
  get: get
}