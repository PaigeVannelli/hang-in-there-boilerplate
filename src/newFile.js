// Query Selectors

document.getElementById('html-id')
// or
document.querySelector('.html-id')

const myElements = document.querySelectorAll('.bar')

// you can query just the parent element for their children elements 
// improves performance rather than having to go through the entire doc

myElement.querySelector('input[type="submit"]')
// query selector doesn't update when you dynamically add an element 

// Event Listeners 

window.addEventListener('event', handler)

// common events: click, dblclick, load

// Event Handler 

function handler(event) {
  if (event.target.id === 'html-id') {
    newFunction()
  }
}

// Hide Webpages 

function hidden(element, hidden) {
  if (hidden) {
    document.querySelector(element).classList.add("hidden");
  } else {
    document.querySelector(element).classList.remove("hidden");
  }
}

myElement.classList.toggle('baz')

function addHidden(id) {
  document.getElementById(id).classList.add("hidden");
}

function removeHidden(id) {
  document.getElementById(id).classList.remove("hidden");
}

//OR
// to hide an element 
elem.style.display = 'none';
//  to show an element 
elem.style.display = 'block';

// Target Form Values 

let formValue = document.getElementById('poster-image-url').value

document.getElementById('id').value = 'something'

myElement.value = null

// setAttribute, getAttribute etc are more expeinsive since they manipulate the html attirbutes as 
// opposed to the dom properties 

// Set multiple properties using Object.assign()
Object.assign(myElement, {
  value: 'foo',
  id: 'bar'
})

// create snd append element 
const newElement = document.createElement('div')
document.body.appendChild(newElement)
elements1.length === elements2.length // false

// do something with each element 


// Query Selectors

document.getElementById('html-id')
// or
document.querySelector('.html-id')

const myElements = document.querySelectorAll('.bar')

// you can query just the parent element for their children elements 
// improves performance rather than having to go through the entire doc

myElement.querySelector('input[type="submit"]')
// query selector doesn't update when you dynamically add an element 

// Event Listeners 

window.addEventListener('event', handler)

// common events: click, dblclick, load

// Event Handler 

function handler(event) {
  if (event.target.id === 'html-id') {
    newFunction()
  }
}

// Hide Webpages 

function hidden(element, hidden) {
  if (hidden) {
    document.querySelector(element).classList.add("hidden");
  } else {
    document.querySelector(element).classList.remove("hidden");
  }
}

myElement.classList.toggle('baz')

function addHidden(id) {
  document.getElementById(id).classList.add("hidden");
}

function removeHidden(id) {
  document.getElementById(id).classList.remove("hidden");
}

//OR
// to hide an element 
elem.style.display = 'none';
//  to show an element 
elem.style.display = 'block';

// Target Form Values 

let formValue = document.getElementById('poster-image-url').value

document.getElementById('id').value = 'something'

myElement.value = null

// setAttribute, getAttribute etc are more expeinsive since they manipulate the html attirbutes as 
// opposed to the dom properties 

// Set multiple properties using Object.assign()
Object.assign(myElement, {
  value: 'foo',
  id: 'bar'
})

// create snd append element 
const newElement = document.createElement('div')
document.body.appendChild(newElement)
elements1.length === elements2.length // false

// do something with each element 

Array.from(myElements).forEach(doSomethingWithEachElement)

//get css style on an element based on value 
console.log(window.getComputedStyle(posterImg).getPropertyValue('margin'))


// Create an element code and append it 
const myElementClone = myElement.cloneNode()
myParentElement.appendChild(myElementClone)

// Append element1 as the last child of element2
element1.appendChild(element2)

// Insert element2 as child of element 1, right before element3
element1.insertBefore(element2, element3)



Array.from(myElements).forEach(doSomethingWithEachElement)

//get css style on an element based on value 
console.log(window.getComputedStyle(posterImg).getPropertyValue('margin'))


// Create an element code and append it 
const myElementClone = myElement.cloneNode()
myParentElement.appendChild(myElementClone)

// Append element1 as the last child of element2
element1.appendChild(element2)

// Insert element2 as child of element 1, right before element3
element1.insertBefore(element2, element3)


