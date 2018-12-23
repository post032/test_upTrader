// var navMain = document.querySelector(".main-nav");
// var navToggle = document.querySelector(".main-nav__toggle");
//
// navMain.classList.remove("main-nav--nojs");
//
// navToggle.addEventListener("click", function() {
//   if (navMain.classList.contains("main-nav--closed")) {
//     navMain.classList.remove("main-nav--closed");
//     navMain.classList.add("main-nav--opened");
//   } else {
//     navMain.classList.add("main-nav--closed");
//     navMain.classList.remove("main-nav--opened");
//   }
// });


var openBlock = document.querySelector(".investment__link--one");
var openBlockTwo = document.querySelector(".investment__link--two");
var openBlockThree = document.querySelector(".investment__link--three");
var manual = document.querySelector(".investment__manual");
var background = document.querySelector(".page-main");
var animationBlock = document.querySelector(".page-header__link");
var backgroundHeader = document.querySelector(".page-header");
var exitBlock = document.querySelector(".page-header__exit");
var title =  document.querySelector(".page-header__choice");
var blocks = document.querySelector(".page-header__blocks");
var linkHover = document.querySelector(".investment__link--color");
var titleHover = document.querySelector(".investment__title");
var titleHeader = document.querySelector(".page-header__title");
 // manual.classList.remove("investment__manual--nojs");

openBlock.addEventListener('click', function(){
  if (manual.classList.contains("investment__manual--closed")) {
    manual.classList.remove("investment__manual--closed");
    manual.classList.add("investment__manual--opened");
    background.classList.remove("page-main--close");
    background.classList.add("page-main--open");
    openBlock.classList.remove("investment__link--open");
    openBlock.classList.add("investment__link--close");
  } else {
    manual.classList.remove("investment__manual--opened");
    manual.classList.add("investment__manual--closed");
    background.classList.remove("page-main--open");
    background.classList.add("page-main--close");
    openBlock.classList.add("investment__link--open");
    openBlock.classList.remove("investment__link--close");
  }
});

animationBlock.addEventListener('click', function(){
  backgroundHeader.classList.add("page-header__dissolution");
  title.classList.add("page-header__exit--title");
  blocks.classList.add("page-header__exit");
  manual.classList.add("investment__manual--opened");
  openBlock.classList.add("investment__link--color");
  titleHover.classList.add("investment__desktop--color");
  titleHeader.classList.add("investment__desktop--color");
});
