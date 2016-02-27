/*
** shares.js
**
*/

var ajax = require('./_ajax.js');

var fb        = document.getElementById('share-it');
var fbSource  = fb.getElementsByClassName('facebook-share')[0].getAttribute('data-source');
var minShares = 18;


function init() {
  ajax.get( fbSource, updateShares );
}


function updateShares( data ) {
  var json = JSON.parse(data);
  var sharesNumber = ( json.shares && json.shares > minShares ) ? json.shares : minShares;

  var counter = fb.getElementsByClassName('share-counter');
  var span = counter[0].getElementsByTagName('span');
  span[0].innerHTML = sharesNumber;
};


module.exports = {
  init: init
}