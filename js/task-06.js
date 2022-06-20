const textInput = document.querySelector("#validation-input");
const lengthData = document.querySelector('input[data-length]');
const inputLength = lengthData.dataset.length;

textInput.addEventListener('blur', (text) => {

    if (text.currentTarget.value.length < inputLength || text.currentTarget.value.length > inputLength) {
        textInput.classList.remove('valid');
        textInput.classList.add('invalid');
    }
    else {
        textInput.classList.remove('invalid');
        textInput.classList.add('valid');
    }
}
)