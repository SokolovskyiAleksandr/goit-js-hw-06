const clickValue = document.querySelector('#value');
const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');
let counterValue = 0;

decrement.addEventListener('click', () => {
    counterValue -= 1;
    clickValue.textContent = counterValue;
});
increment.addEventListener('click', () => {
    counterValue += 1;
    clickValue.textContent = counterValue
});