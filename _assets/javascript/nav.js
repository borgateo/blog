/*
** mav.js
**
*/

"use strict";

var trav = require('./_traversing.js');

var body = document.body;
var logo = document.getElementById('toggle-nav');
var menu = document.getElementsByClassName('menu');
var links;


function init() {
  // open / close menu drawer
  if ( logo ) {
    logo.addEventListener("click", handleClickMenu, false);
  }

  // close drawer when one clicks on the menu links
  if ( menu.length ) {
    links = menu[0].getElementsByTagName('a');
    links = Array.prototype.slice.call( links, 0 );

    links.forEach(function( link ) {
      link.addEventListener('click', handleClickMenu, false);
    });
  }

}

function handleClickMenu() {
  body.className = trav.hasClass( body, 'active-menu' ) === true ? '' : 'active-menu';
}


module.exports = {
  init: init
};