let displayCups = document.querySelector('.display-qty');
const addCups = document.querySelector('.add-qty');
const removeCups = document.querySelector('.rem-qty');
const clearCups = document.querySelector('.clear-qty');

let local = localStorage.getItem('number');
let currValue = displayCups.textContent;
displayCups.textContent = localStorage.getItem('number');

addCups.addEventListener('click', function () {
  currValue++;
  local = localStorage.getItem('number');
  displayCups.textContent = +local + 1;
  localStorage.setItem('number', +displayCups.textContent);

  console.log(currValue);
  console.log(+local);
});
removeCups.addEventListener('click', function () {
  if (!+displayCups.textContent) return;
  currValue--;
  local = localStorage.getItem('number');
  displayCups.textContent = +local - 1;
  localStorage.setItem('number', +displayCups.textContent);
});
clearCups.addEventListener('click', function () {
  currValue = 0;
  displayCups.textContent = currValue;
  console.log(currValue);
  local = localStorage.clear('number');
});
