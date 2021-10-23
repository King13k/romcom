// Create variables targetting the relevant DOM elements here 👇
//Parameters that get passed in for the cover
var coverSrc = document.querySelector('.cover-image')
var coverTitle = document.querySelector('.cover-title')
var tagline = document.querySelector ('.tagline')
var descriptorOne = document.querySelector('.tagline-1')
var descriptorTwo = document.querySelector('.tagline-2')
//Buttons
var randomButton = document.querySelector('.random-cover-button')
var makeCoverButton = document.querySelector('.make-new-button')
var saveCoverButton = document.querySelector('.save-cover-button')
var viewCoversButton = document.querySelector('.view-saved-button')
var homeButton = document.querySelector('.home-button')
var newBookButton = document.querySelector('.create-new-book-button')
//Screen Views
var homeView = document.querySelector('.home-view')
var formView = document.querySelector('.form-view')
var savedView = document.querySelector('.saved-view')
//Inputs for form
var coverInput = document.querySelector('.user-cover')
var titleInput = document.querySelector('.user-title')
var descriptor1Input = document.querySelector('.user-desc1')
var descriptor2Input = document.querySelector('.user-desc2')
var mainCover = document.querySelector('.main-cover')
var form = document.querySelector('form')
// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;


// Add your event listeners here👇
window.addEventListener('load', generateBook)
randomButton.addEventListener('click', generateBook)
makeCoverButton.addEventListener('click', showForm)
viewCoversButton.addEventListener('click', showSavedCovers)
homeButton.addEventListener('click', showHome)
newBookButton.addEventListener('click',createBook)

// Create your event handlers and other functions here 👇
function generateBook() {
  currentCover = new Cover(covers[getRandomIndex(covers)], titles[getRandomIndex(titles)], descriptors[getRandomIndex(descriptors)], descriptors[getRandomIndex(descriptors)])
  displayBook(currentCover)
}
function displayBook() {
  coverSrc.src = currentCover.cover
  coverTitle.innerText = currentCover.title
  descriptorOne.innerText = currentCover.tagline1
  descriptorTwo.innerText = currentCover.tagline2

}
function showForm() {
  homeView.classList.add('hidden')
  formView.classList.remove('hidden')
  saveCoverButton.classList.add('hidden')
  randomButton.classList.add('hidden')
  homeButton.classList.remove('hidden')
}
function showSavedCovers() {
  homeView.classList.add('hidden')
  savedView.classList.remove('hidden')
  randomButton.classList.add('hidden')
  saveCoverButton.classList.add('hidden')
  homeButton.classList.remove('hidden')
}
function showHome() {
  homeView.classList.remove('hidden')
  savedView.classList.add('hidden')
  formView.classList.add('hidden')
  randomButton.classList.remove('hidden')
  saveCoverButton.classList.remove('hidden')
}
function submitFormInputs() {
  covers.push(coverInput.value)
  titles.push(titleInput.value)
  descriptors.push(descriptor1Input.value)
  descriptors.push(descriptor2Input.value)
}
function createBook(){
  event.preventDefault()
  coverSrc.src = coverInput.value
  coverTitle.innerText = titleInput.value
  descriptorOne.innerText = descriptor1Input.value
  descriptorTwo.innerText = descriptor2Input.value
  currentCover = new Cover (coverSrc.src, coverTitle.innerText, descriptorOne.innerText, descriptorTwo.innerText)
  submitFormInputs()
  showHome()
}

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
