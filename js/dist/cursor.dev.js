"use strict";

var mouseCursor = document.querySelector(".cursor");
var gridColumns = document.querySelectorAll(".grid-column");
var footer = document.querySelector("footer");
window.addEventListener("mousemove", cursor);

function cursor(e) {
  mouseCursor.style.top = e.pageY + 'px';
  mouseCursor.style.left = e.pageX + 'px';
}

gridColumns.forEach(function (gridColumn) {
  gridColumn.addEventListener("mouseover", function () {
    mouseCursor.classList.add("link-grow");
    gridColumn.classList.add("hovered-Link");
  });
  gridColumn.addEventListener("mouseleave", function () {
    mouseCursor.classList.remove("link-grow");
    gridColumn.classList.remove("hovered-Link");
  });
});