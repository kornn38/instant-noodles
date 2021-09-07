let displayCups = document.querySelector('.display-qty');
const addCups = document.querySelector('.add-qty');
const removeCups = document.querySelector('.rem-qty');
const clearCups = document.querySelector('.clear-qty');

// displayCups.value = localStorage.length;
let local = 0;
let currValue = displayCups.textContent;
localStorage.setItem('accu', local);
// console.log(currValue);

const markup = `<h2>${localStorage.getItem('accu')}</h2>`;
// console.log(currValue);

addCups.addEventListener('click', function () {
  currValue++;
  displayCups.textContent = currValue;

  localStorage.setItem('number', currValue);
  local = localStorage.getItem('number');
  console.log(currValue);
  console.log(local);
});
removeCups.addEventListener('click', function () {
  if (!currValue) return;
  currValue--;
  displayCups.textContent = currValue;
  local = localStorage.setItem('number', currValue);
});
clearCups.addEventListener('click', function () {
  currValue = 0;
  displayCups.textContent = currValue;
  console.log(currValue);
  local = localStorage.clear('number');
});

console.log('TEST');
