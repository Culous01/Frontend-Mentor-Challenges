const firstName = document.getElementById('first-name');
const firstNameError = document.getElementById('first_error');
const lastName = document.getElementById('last-name');
const lastNameError = document.getElementById('last_error');
const textArea = document.getElementById('message');
const generalSupport = document.querySelectorAll('.radio-type');
const email = document.getElementById('email');
const emailError = document.getElementById('email_error');
const radioError = document.getElementById('radio_error');
const textArea_error = document.getElementById('textarea-error');
const typeGroup = document.querySelectorAll(".Type-group");
const checkError = document.getElementById('check_error');

const successMessage = document.querySelector('.success-check')

// Select the first form element
const formDetails = document.querySelector('form');

// select the checkbox
generalSupport.forEach((radio) => {
    radio.addEventListener("click", function () {
        typeGroup.forEach((group) => {
            group.style.backgroundColor = "";
        });
        this.closest(".Type-group").style.backgroundColor = "hsl(148, 38%, 91%)";
    });
});

const submitBtn = (e) => {
    let valid = true;
    e.preventDefault();

    // firstName error check
    if (firstName.value.trim() === '') {
        firstName.style.border = '1px solid red';
        firstNameError.innerHTML = "This field is required";
        firstNameError.style.color = 'red';
        firstName.setAttribute('placeholder', 'i.e JOHN')
        valid = false;
    } else {
        firstNameError.innerHTML = '';
        firstName.style.border = '1px solid hsl(169, 82%, 27%)';
    }

    // lastName error check
    if (lastName.value.trim() === '') {
        lastName.style.border = '1px solid red';
        lastNameError.innerHTML = "This field is required";
        lastNameError.style.color = 'red';
        lastName.setAttribute('placeholder', 'i.e MIKE')
        valid = false;
    } else {
        lastNameError.innerHTML = '';
        lastName.style.border = '1px solid hsl(169, 82%, 27%)';
    }

    // email error check
    if (email.value.trim() === '') {
        email.style.border = '1px solid red';
        emailError.innerHTML = "This field is required";
        emailError.style.color = 'red';
        email.setAttribute('placeholder', 'example@gmail.com')
        valid = false;
    } else {
        emailError.innerHTML = '';
        email.style.border = '1px solid hsl(169, 82%, 27%)';
    }

    // radioType error check
    const selected = document.querySelector('input[name="query-type"]:checked');
    if (!selected) {
        radioError.innerHTML = "Please select a query type";
        radioError.style.color = 'red';
        valid = false; 
    } else {
        radioError.innerHTML = "";
    }

    // Message error check
    if (textArea.value.trim() === '') {
        textArea.style.border = '1px solid red';
        textArea_error.innerHTML = "This field is required";
        textArea_error.style.color = 'red';
        textArea.setAttribute('placeholder', 'i.e LEAVE US A MESSAGE.')
        valid = false;
    } else {
        textArea_error.innerHTML = '';
        textArea.style.border = '1px solid hsl(169, 82%, 27%)';
    }

    // CheckBox error check
    const check = document.querySelector('input[type="checkbox"]:checked');
    if (!check) {
        checkError.innerHTML = "To submit this form, please consent to being contacted";
        checkError.style.color = 'red';
        valid = false;
    } else {
        checkError.innerHTML = '';
    }

    // Form successful popUp message
    if (valid) {
        successMessage.classList.add('success-checking')
        formDetails.reset();
    } else {
        successMessage.classList.remove('success-checking');
    }
};

formDetails.addEventListener("submit", submitBtn);



