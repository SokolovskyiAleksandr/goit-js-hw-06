const form = document.querySelector('.login-form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
event.preventDefault();
const {
    elements: { email, password },
} = event.currentTarget;

    if (email.value === '' && password.value === '') {
        return alert('Please fill in all fields!');
    }
    else
        if (email.value === '') {
            return alert('please add email!');
        } else
            if (password.value === '') {
                return alert('Please add password!');
            }

const valueObj = {
    email: email.value,
    password: password.value,
};

console.log(valueObj);
event.currentTarget.reset();
}
