"use strict";

var menu = document.getElementById('icono');
var enlaces = document.getElementById('enlaces');
menu.addEventListener('click', function () {
  enlaces.classList.toggle("dos");
});
window.addEventListener('clicl', function (e) {
  if (enlaces.classList.contains("dos") && e.target != menu && e.target != document.querySelector("a")) {
    enlaces.classList.toggle("dos");
  }
});