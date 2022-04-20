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

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//

//**------------------------------------ SELECTING / CREATING AND DELETING ELEMENTS -------------------------------------*/

//

//

//--------*************** SELECTING ELEMENTS *******************--/

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

