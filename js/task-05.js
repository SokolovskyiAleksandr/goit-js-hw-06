const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output')

input.addEventListener('input', inputSpan);

function inputSpan({ currentTarget: { value }}) {
    output.textContent = value
        ? value
        : 'Anonymous';
}