/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

const navbarListElement = document.querySelector('#navbar__list');
const sectionElements = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// Parse data-nav content from and element
const parseNavDataset = element => element.dataset.nav;

// parse ID from and element
const parseId = element => element.id;

// Convert a Node List to and array
const convertNodeListToArray = nodeList => Array.from(nodeList);

// Build the nav link element based on the informations passed as an object
const buildNavLink = navObject => `<li><a class="menu__link" href="#${navObject.id}" data-link=${navObject.id}>${navObject.navDataset}</a></li>`

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const sectionsArray = convertNodeListToArray(sectionElements);

// Return an array of objects contains the infromations used to build the navLinks
const navLinksInfoArray = sectionsArray.map(sectionElement => {
  return {
    id: parseId(sectionElement),
    navDataset: parseNavDataset(sectionElement)
  }
});

const navLinksElementArray = navLinksInfoArray.map(navObject => buildNavLink(navObject));

navbarListElement.innerHTML = navLinksElementArray.join('');


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollIntoView method
navbarListElement.addEventListener('click', event => {
  event.preventDefault();
  const link = event.target.hasAttribute('data-link') ? event.target : null;
  if (link) {
    const target = document.querySelector(`#${link.dataset.link}`);
    target.scrollIntoView({block: 'end', behavior: 'smooth'});
  }
  return;
})



/**
 * End Main Functions
 * Begin Events
 * 
*/

// Watch and set section and navbar links to active using the IntersectionObserver
let options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.6
}

let observer = new IntersectionObserver(observerCallback, options);
sectionElements.forEach(element => {
  observer.observe(document.querySelector(`#${element.id}`));
})


const observerCallback = entries => {
  entries.forEach(entry => {
    const linkElement = document.querySelector(`.menu__link[data-link='${entry.target.id}']`);
    const section = document.querySelector(`#${entry.target.id}`);
    console.log(linkElement)

    if (entry && entry.isIntersecting) {
      linkElement.classList.add('active');
      section.classList.add('active');
    } else {
      linkElement.classList.remove('active');
      section.classList.remove('active');
    }
  })
}