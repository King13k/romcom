//var Cover = require('./cover')
// Create variables targetting the relevant DOM elements here 👇
var coverImgSrc = document.querySelector('.cover-image')
var title = document.querySelector('.cover-title')
var tagLine = document.querySelector ('.tagline')
var descriptor1 = document.querySelector('.tagline-1')
var descriptor2 = document.querySelector('.tagline-2')
var randomButton = document.querySelector('.random-cover-button')
<<<<<<< HEAD
var makeCoverButton = document.querySelector('.make-new-button')

=======
var homeView = document.querySelector('.home-view')
var formView = document.querySelector('.form-view')
console.log(formView)
>>>>>>> main
// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover = new Cover(coverImgSrc, title, descriptor1, descriptor2)


// Add your event listeners here👇
window.addEventListener('load', generateBook)

randomButton.addEventListener('click', generateBook)


// Create your event handlers and other functions here 👇
function generateBook() {
  newCover = new Cover(covers[getRandomIndex(covers)], titles[getRandomIndex(titles)], descriptor1[getRandomIndex(descriptors)], descriptor2[getRandomIndex(descriptors)])
  coverImgSrc.src = newCover.cover
  title.innerText = newCover.title
  descriptor1.innerText = newCover.tagline1
  descriptor2.innerText = newCover.tagline2
}

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
