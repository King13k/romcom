//var Cover = require('./cover')
// Create variables targetting the relevant DOM elements here 👇
var coverImgSrc = document.querySelector('.cover-image')
var title = document.querySelector('.cover-title')
var tagLine = document.querySelector ('.tagline')
var descriptor1 = document.querySelector('.tagline-1')
var descriptor2 = document.querySelector('.tagline-2')
var randomButton = document.querySelector('.random-cover-button')
var homeView = document.querySelector('.home-view')
var formView = document.querySelector('.form-view')
console.log(formView)
// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover = new Cover(coverImgSrc, title, descriptor1, descriptor2)


// Add your event listeners here👇
window.addEventListener('load', function() {
  randomizeCovers()
  randomizeTitles()
  randomizeTagLine1()
  randomizeTagLine2()
});
randomButton.addEventListener('click', function() {
  randomizeCovers()
  randomizeTitles()
  randomizeTagLine1()
  randomizeTagLine2()
  toggleHome()
})
// Create your event handlers and other functions here 👇
function randomizeCovers() {
  coverImgSrc.src = covers[getRandomIndex(covers)]
}
function randomizeTitles() {
  title.innerText = titles[getRandomIndex(titles)]
}
function randomizeTagLine1() {
  descriptor1.innerText = descriptors[getRandomIndex(descriptors)]
}
function randomizeTagLine2() {
  descriptor2.innerText = descriptors[getRandomIndex(descriptors)]
}
function toggleHome() {
//   if (homeView.contains('view') {
//     homeView.remove('view');
//   } else {
//     homeView.add('view')
//   })
// }
// function toggleFormView() {
//   if ()
// }
// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
