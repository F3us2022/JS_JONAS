'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//

//

//
//

//**----------------------------------------------- PAGE NAVIGATION ----------------------------------------------------*/

//

//

//-------------------****************** PAGE NAVIGATION WITHOUT DELAGATION *****************----/

/*

document.querySelectorAll('.nav__link').forEach(function (elem) {
  elem.addEventListener('click', function (e) { 
    e.preventDefault();

    const id = this.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({behavior:'smooth'});
  })
 })

  */

//-------------------****************** PAGE NAVIGATION WITH DELAGATION *****************----/

// STEP 1 --> ADD event listener to the common arent element 
// STEP 2 --> Determine what element originated the event 

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  console.log(e);

  //Matching the nav__link
  
  if (e.target.classList.contains('nav__link')) { 
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({behavior:'smooth'});
  }
 })

//

//

//
//

//**----------------------------------------------- BUILDING TABBED COMPONENT ---------------------------------------------*/

//

//

const tabs = document.querySelectorAll('.operations__tab'); 

const tabsContainer= document.querySelector('.operations__tab-container');

const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) { 
  e.preventDefault();

  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);

  //GUARD CLAUSE

  if (!clicked) return;


  //----------*********************  REMOVE ALL THE ACTIVE TAB  *****************---/
  
  tabs.forEach(function (eleTab)
  {
    eleTab.classList.remove('operations__tab--active');
  })
  tabsContent.forEach(function (eleContent) { 
        eleContent.classList.remove('operations__content--active');

  })
  
  //----------*********************  ACTIVE TAB  ********************************---/

  clicked.classList.add('operations__tab--active');

  //----------*********************  ACTIVATE CONTENT ***************************---/
  console.log(clicked.dataset.tab);
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
})
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//

//**------------------------------------ SELECTING / CREATING AND DELETING ELEMENTS -------------------------------------*/

//

//

//--------*************** SELECTING ELEMENTS *******************--/

/*
const elem = document.querySelector('.header');
console.log(elem);
const allSelec = document.querySelectorAll('.section'); // not live thats why represented by NODES
console.log(allSelec);
const idSelec = document.getElementById('section--1');
console.log(idSelec);
const tagSelec = document.getElementsByTagName('button'); //Live elements thats why have collection of elements
console.log(tagSelec);
const classSelec = document.getElementsByClassName('btn'); //Live elements thats why have collection of elements
console.log(classSelec);
*/

//---------************* CREATING ELEMENTS *********************--/

// Method 1-- > .insertAdjacentHTML

// Method 2-- >

//--Create New Element
const message = document.createElement('div');
//Add attribute to the New Element
message.classList.add('cookie-message');
message.innerHTML=`We use cookie for improved functionality and analytic . <button class="btn btn--close-cookie">Got It!</button> `
//Get the Element where the New element to be inserted
const hdr = document.querySelector('.header');
//add the new element -- (Several places to append the new element)
//hdr.prepend(message);
hdr.append(message);
//hdr.append(message.cloneNode(true));
//hdr.before(message);
//hdr.after(message);

//
//---------************* DELETING ELEMENTS *********************--/
//

//--- Method --> 1
//const clsBtn = document.querySelector('.btn--close-cookie');
// console.log(clsBtn);
// clsBtn.addEventListener('click', function () { 
//   message.remove();
// });


//--- Method --> 2

document.querySelector('.btn--close-cookie').addEventListener('click', () => message.parentElement.removeChild(message));

//

//

//

//**---------------------------------------------- STYLE / ATTRIBUTE AND CLASSES ------------------------------------------*/

//

//

/*

//--------*************** STYLE ELEMENTS *******************--/

message.style.backgroundColor = '#37383d';
message.style.width = '120%';

//

//--------*************** READ STYLE USING (GETCOMPUTEDSTYLE) PROPERTY ***********---/

console.log(message.style.color);
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).backgroundColor);
console.log(message.style.height);
console.log(getComputedStyle(message).height);

//

//------*********** ADD STYLE TO THE EXISTING STYLE *************--/

message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

//------*********** CHANGING THE ROOT STYLE VALUES *******--/

document.documentElement.style.setProperty('--color-primary', 'Teal');

//

//------******************* ATTRIBUTES *******************--/

//-- READING AND SETTING ATTRIBUTES --> (STANDARD ATTRIBUTES)

const logo = document.querySelector('.nav__logo');
console.log(logo.src);
console.log(logo.alt);
console.log(logo.className);
logo.alt = 'Beautiful Minimalist Logo';

//-- READING AND SETTING ATTRIBUTES --> (NON-STANDARD ATTRIBUTES)

console.log(logo.designer); // THIS DOESNT WORK AS THE ATTRIBUTE IS NON-STANDARD ATTRIBUTE,SO BELOW IS SOLUTION.
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'bankist');
console.log(logo.getAttribute('src'));

//-- READING AND SETTING ATTRIBUTES --> (DATA ATTRIBUTES)

console.log(logo.dataset.versionNumber);

//

//------********************* CLASSES *********************--/

//

logo.classList.add('a');
logo.classList.remove('b');
logo.classList.toggle('c');
logo.classList.contains('d');

*/

//

//

//

//**---------------------------------------------- IMPLEMENTING SMOOTH SCROLLING ------------------------------------------*/

//

//

// STEP 1 --> GET THE PROPERTY OF THE LINK AND THE SECTION TO WHICH GOING TO SCROLL TO

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

// STEP 2 --> CALL EVENT LISTNER ON THE LINK

btnScrollTo.addEventListener('click', function (e) { 

/*
  //STEP 2 (a) --> applying the scrolling befaviour using OLD WAYS.

  //STEP 2 (a1) --> Get the coordinates
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log('Current Scroll (X/Y)', window.pageXOffset, window.pageYOffset);
  
  console.log('Height/Width viewport', document.documentElement.clientHeight, document.documentElement.clientWidth);

  //STEP 2 (a2) --> Apply scrolling (3 WAYS)

  //window.scrollTo(s1coords.left, s1coords.top); // but this only works when page is at top and not in middle.
  //window.scrollTo(s1coords.left + window.pageXOffset, s1coords.top + window.pageYOffset); // this works when page is at any position.
  window.scrollTo({
    left:s1coords.left+window.pageXOffset,
    top:s1coords.top+window.pageYOffset,
    behavior:'smooth'
  })
  
*/
  //

  //STEP 2 (b) --> applying the scrolling befaviour using OLD WAYS.

  section1.scrollIntoView({ behavior: 'smooth' });

})

//

//

//

//**------------------------------------------- TYPES OF EVENTS AND EVENT HANDLERS -----------------------------------------*/

//

//

/*
const h1 = document.querySelector('h1');
*/

//

//---------**************** Method --> 1 (OLD WAYS) ***********************--/


// h1.onmouseenter = function (e) { alert('addEventListener: Great! You are reading the HEADING.') };


//---------**************** Method --> 2 (MODERN WAYS) *********************--/

/*
h1.addEventListener('mouseenter', function () { 
  alert('addEventListener: Great! You are reading the HEADING.')
})
*/

//---------**************** Method --> 3 (REMOVING EVENT Method-1) **********--/

/*
const alertH1 = function (e) {
  alert('addEventListener: Great! You are reading the HEADING.');

  h1.removeEventListener('mouseenter', alertH1);
};

h1.addEventListener('mouseenter',alertH1);
*/

//---------**************** Method --> 4 (REMOVING EVENT Method-2) ***********--/

/*
const alertH1 = function (e) {
  alert('addEventListener: Great! You are reading the HEADING.');
};

h1.addEventListener('mouseenter',alertH1);

setTimeout(() => {
  h1.removeEventListener('mouseenter', alertH1);
}, 4000);

*/

//

//

//

//**---------------------------------- EVENT PROPOGATION -BUBBLING/CAPTUIRNG IN PRACTICE  --------------------------------*/

//

//

/*

const randomInt = function (min, max) { return Math.floor(Math.random() * (max - min + 1) + min) };
console.log(randomInt(0, 7));

const randomColor = function () {
  return `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`
};
console.log(randomColor());
*/

//---------------******************** EVENT BUBBLING PROPAGATION *************************

/*

//child-level-2
document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('LINK - ','Target : ',e.target,'Current-Target',e.currentTarget);
  console.log('this',this);
});

//child-level-1
document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('CONTAINER - ','Target : ',e.target,'Current-Target',e.currentTarget);
  console.log('this',this);});

//parent
document.querySelector('nav').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('NAV PARENT - ','Target : ',e.target,'Current-Target',e.currentTarget);
  console.log('this',this);});

*/

//---------------******************** STOP EVENT BUBBLING PROPAGATION *************************

/*

//child-level-2
document.querySelector('.nav__link').addEventListener('click', function (e) { this.style.backgroundColor = randomColor(); e.stopPropagation(); });

//child-level-1
document.querySelector('.nav__links').addEventListener('click', function (e) { this.style.backgroundColor = randomColor(); e.stopPropagation(); });

//parent
document.querySelector('nav').addEventListener('click', function (e) { this.style.backgroundColor = randomColor(); });

*/

//---------------******************** EVENT CAPTURING PROPAGATION *************************

/*

//child-level-2
document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('LINK - ','Target : ',e.target,'Current-Target',e.currentTarget);
  console.log('this',this);
});

//child-level-1
document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('CONTAINER - ','Target : ',e.target,'Current-Target',e.currentTarget);
  console.log('this',this);});

//parent
document.querySelector('nav').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('NAV PARENT - ','Target : ',e.target,'Current-Target',e.currentTarget);
  console.log('this',this);},true);

*/

//

//

//

//**------------------------------------------------- DOM TRAVERSING --------------------------------------------------*/

//

//

/*

const h1Traverse = document.querySelector('h1');
console.log(h1Traverse);
const h1Child = document.querySelectorAll('h1Traverse');
console.log(h1Child);

//---------------***************** Going DOWNWARD : CHILDREN **************---/
console.log(h1Traverse.querySelectorAll('.highlight'));
console.log(h1Traverse.childNodes);
console.log(h1Traverse.children);
h1Traverse.firstElementChild.style.color = 'white';
h1Traverse.lastElementChild.style.color = 'teal';

//---------------***************** Going UPWARDS : PARENT *****************---/

console.log(h1Traverse.parentElement);
console.log(h1Traverse.parentNode);

h1Traverse.closest('.header').style.background = 'var(--gradient-secondary)';

//---------------***************** Going SIDEWAYS: SIBLINGS ****************---/

console.log(h1Traverse.previousElementSibling);
console.log(h1Traverse.nextElementSibling);

*/

//

//

//

//**-------------------------------------------------  --------------------------------------------------*/

//

//

