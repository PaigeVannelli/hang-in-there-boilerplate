// query selector variables go here 👇

 const posterImg = document.getElementById('poster-img')

// we've provided you with some data to work with 👇

var images = [
  "./assets/bees.jpg",
  "./assets/bridge.jpg",
  "./assets/butterfly.jpg",
  "./assets/cliff.jpg",
  "./assets/elephant.jpg",
  "./assets/flock.jpg",
  "./assets/fox.jpg",
  "./assets/frog.jpg",
  "./assets/horse.jpg",
  "./assets/lion.jpg",
  "./assets/mountain.jpg",
  "./assets/pier.jpg",
  "./assets/puffins.jpg",
  "./assets/pug.jpg",
  "./assets/runner.jpg",
  "./assets/squirrel.jpg",
  "./assets/tiger.jpg",
  "./assets/turtle.jpg"
];
var titles = [
  "determination",
  "success",
  "inspiration",
  "perspiration",
  "grit",
  "empathy",
  "feelings",
  "hope",
  "believe",
  "try",
  "conviction",
  "accomplishment",
  "achievement",
  "ambition",
  "clarity",
  "challenge",
  "commitment",
  "confidence",
  "action",
  "courage",
  "focus",
  "breathe",
  "gratitude",
  "imagination",
  "kindness",
  "mindfulness",
  "knowledge",
  "opportunity",
  "passion",
  "patience",
  "practice",
  "smile",
  "trust",
  "understanding",
  "wisdom"
];
var quotes = [
  "Don’t downgrade your dream just to fit your reality, upgrade your conviction to match your destiny.",
  "You are braver than you believe, stronger than you seem and smarter than you think.",
  "You are confined only by the walls you build yourself.",
  "The one who has confidence gains the confidence of others.",
  "Act as if what you do makes a difference. It does.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Never bend your head. Always hold it high. Look the world straight in the eye.",
  "What you get by achieving your goals is not as important as what you become by achieving your goals.",
  "Believe you can and you're halfway there.",
  "When you have a dream, you've got to grab it and never let go.",
  "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
  "No matter what you're going through, there's a light at the end of the tunnel.",
  "It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.",
  "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.",
  'Limit your "always" and your "nevers."',
  "You are never too old to set another goal or to dream a new dream.",
  "Try to be a rainbow in someone else's cloud.",
  "You do not find the happy life. You make it.",
  "Inspiration comes from within yourself. One has to be positive. When you're positive, good things happen.",
  "Sometimes you will never know the value of a moment, until it becomes a memory.",
  "The most wasted of days is one without laughter.",
  "You must do the things you think you cannot do.",
  "It isn't where you came from. It's where you're going that counts.",
  "It is never too late to be what you might have been.",
  "Happiness often sneaks in through a door you didn't know you left open.",
  "We must be willing to let go of the life we planned so as to have the life that is waiting for us.",
  "Never limit yourself because of others’ limited imagination; never limit others because of your own limited imagination.",
  "Be the change that you wish to see in the world.",
  "Let us make our future now, and let us make our dreams tomorrow's reality.",
  "You don't always need a plan. Sometimes you just need to breathe, trust, let go, and see what happens.",
  "If I cannot do great things, I can do small things in a great way.",
  "Don't wait. The time will never be just right.",
  "With the right kind of coaching and determination you can accomplish anything.",
  "If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.",
  "No matter what people tell you, words and ideas can change the world.",
  "Each person must live their life as a model for others.",
  "A champion is defined not by their wins but by how they can recover when they fall."
];
var savedPosters = [];
var currentPoster = {};

// event listeners go here 👇

window.addEventListener('load', changePoster)
window.addEventListener('click', manageClickEvents)
document.getElementById('saved-posters-grid').addEventListener('dblclick', deletePoster)

// functions and event handlers go here 👇

function manageClickEvents(event) {
  if (event.target.id === 'show-random-button') {
    changePoster()
  } else if (event.target.id === 'show-form-button') {
    displayForm()
  } else if (event.target.id === 'show-main-button' || event.target.id === 'back-to-main-button') {
    showMain()
  } else if (event.target.id === 'show-saved-button') {
    showSavedPosters()
  } else if (event.target.id === 'make-poster-button') {
    makePoster()
  } else if (event.target.id === 'save-poster-button') {
    savePoster()
  }
}

// function changePoster() {
//   currentPoster.image = returnRandomData(images)
//   currentPoster.title = returnRandomData(titles)
//   currentPoster.quote = returnRandomData(quotes)
//   displayPoster()
// }

function changePoster() {
  currentPoster = new Poster(
    returnRandomData(images),
    returnRandomData(titles),
    returnRandomData(quotes)
  )
  displayPoster()
}

function displayPoster() {
  const posterImg = document.getElementById('poster-img')
  const posterTitle = document.getElementById('poster-title')
  const posterQuote = document.getElementById('poster-quote')
  // currentPoster = {
    
  // }
  posterImg.src = currentPoster.image
  posterTitle.innerText = currentPoster.title
  posterQuote.innerText = currentPoster.quote
}

function returnRandomData(data) {
  return random = data[getRandomIndex(data)]
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function displayForm() {
  hide('main-poster')
  show('poster-form')
}

function showMain() {
  hide('poster-form')
  show('main-poster')
}

function showSavedPosters() {
  hide('main-poster')
  show('saved-posters')
}

function hide(id) {
  document.getElementById(id).classList.add("hidden");
}

function show(id) {
  document.getElementById(id).classList.remove("hidden");
}

function makePoster() {
  event.preventDefault()
  const image = document.getElementById('poster-image-url-input').value
  const title = document.getElementById('poster-title-input').value
  const quote = document.getElementById('poster-quote-input').value
  let createdPoster = new Poster(image, title, quote)
  currentPoster = createdPoster
  // savedPosters.push(currentPoster)
  addPosterDetails(image, title, quote)
  displayPoster()
  showMain()
}

function addPosterDetails(image, title, quote) {
  images.push(image)
  titles.push(title)
  quotes.push(quote)
}

class Poster {
  constructor(image, title, quote) {
    this.id = Date.now()
    this.image = image
    this.title = title
    this.quote = quote
  }
}

function savePoster() {
  if (!savedPosters.includes(currentPoster)) {
    savedPosters.push(currentPoster)
  }
  displaySavedPosters()
  showSaved()
}

function displaySavedPosters() {
  const allPosters = document.getElementById('saved-posters-grid')
  allPosters.innerHTML = ''
  savedPosters.forEach(poster => {
    let posterHTML = 
    `<article class='mini-poster' id='${poster.id}'>
      <img src='${poster.image}'>
      <h2>${poster.title}</h2><br>
      <h4> ${poster.quote}</h4>
    </article>`
    allPosters.innerHTML += posterHTML
  })
}

function showSaved() {
  hide('main-poster')
  show('saved-posters')
}

function deletePoster(event) {
  if (event.target.closest.id !== 'saved-posters-grid') {
    for (let i = 0; i < savedPosters.length; i++) {
      if (savedPosters[i].id === parseInt(event.target.closest('article').id)) {
        savedPosters.splice(i, 1)
      }
    }
  }
  displaySavedPosters()
}

