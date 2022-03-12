'use strict';
/*
// Grabbing the classes from the DOM and storing them in variables
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');

function showModal() {
  // removing classes
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

for (let i = 0; i < btnShowModal.length; i++) {
  // listening to event on the show-modal btn
  btnShowModal[i].addEventListener('click', showModal);
}

function closeModal() {
  // Adding back the classes
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

// listening to events on the close-modal btn
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
*/

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');
console.log(btnShowModal);

function showModal() {
  // Removing the hidden class from the modal and overlay
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

for (let i = 0; i < btnShowModal.length; i++) {
  console.log(btnShowModal[i].addEventListener('click', showModal));
}

function closeModal() {
  // Adding the hidden class to the modal and overlay
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}
// Listening to events on the close-modal btn
btnCloseModal.addEventListener('click', closeModal);
