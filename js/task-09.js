function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btn = document.querySelector('.change-color');
const bgcBody = document.querySelector('body');
const colorValue = document.querySelector('.color');

btn.addEventListener('click', () => {
  const color = getRandomHexColor();
  bgcBody.style.backgroundColor = color;
  colorValue.textContent = color;
});
