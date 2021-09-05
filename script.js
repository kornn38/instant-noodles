let displayCups = document.querySelector('.display-qty');
const addCups = document.querySelector('.add-qty');
const removeCups = document.querySelector('.rem-qty');
const clearCups = document.querySelector('.clear-qty');

displayCups.value = localStorage.length;

let currValue = displayCups.value;
// console.log(currValue);

const markup = `<h2>${currValue}</h2>`;

addCups.addEventListener('click', function () {
  currValue++;
  displayCups.textContent = currValue;
  //   console.log(currValue);
  localStorage.setItem('number', currValue);
  displayCups.insertAdjacentHTML('afterbegin', markup);
  console.log(currValue);
});
removeCups.addEventListener('click', function () {
  if (!currValue) return;
  currValue--;
  displayCups.textContent = currValue;
  localStorage.setItem('number', currValue);
});
clearCups.addEventListener('click', function () {
  currValue = 0;
  displayCups.textContent = currValue;
  console.log(currValue);
  localStorage.clear('number');
});
