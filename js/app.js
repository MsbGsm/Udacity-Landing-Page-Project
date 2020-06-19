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

const parseNavDataset = element => element.dataset.nav;

const parseId = element => element.id;

const convertNodeListToArray = nodeList => Array.from(nodeList);

const buildNavLink = navObject => `<li><a class="menu__link" href="#${navObject.id}">${navObject.navDataset}</a></li>`

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const sectionsArray = convertNodeListToArray(sectionElements);

const navLinksInfoArray = sectionsArray.map(sectionElement => {
  return {
    id: parseId(sectionElement),
    navDataset: parseNavDataset(sectionElement)
  }
});

const navLinksElementArray = navLinksInfoArray.map(navObject => buildNavLink(navObject));

navbarListElement.innerHTML = navLinksElementArray.join('');


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


