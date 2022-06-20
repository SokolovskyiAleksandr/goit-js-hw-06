const inputSize = document.querySelector('input#font-size-control');
const textOutput = document.querySelector('span#text');

inputSize.addEventListener('input', () => {
    textOutput.style.fontSize = inputSize.value + 'px';
});