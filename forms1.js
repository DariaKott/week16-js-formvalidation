const form = document.forms.registrationForm;
const nameInput = form.elements.name;
const emailInput = form.elements.email;
const ageInput = form.elements.age;
const genderInputs = form.querySelectorAll('input[name="gender"]');
const professionSelect = form.elements.profession;
const passwordInput = form.elements.password;
const confirmPasswordInput = form.elements.confirmPassword;
const agreeInput = form.elements.agree;

form.addEventListener('submit', function (event) {
    event.preventDefault();

    clearErrors();

    let isValid = true;

    if (!nameInput.validity.valid) {
        const nameError = document.getElementById("name-error");
        nameError.textContent = "Имя введено неверно";
        nameError.classList.add("error");
        isValid = false;
    }

    if (!emailInput.validity.valid) {
        const emailError = document.getElementById("email-error");
        emailError.textContent = "Ваш e-mail введен неверно";
        emailError.classList.add("error");
        isValid = false;
    }

    if (!ageInput.validity.valid) {
        const ageError = document.getElementById("age-error");
        ageError.textContent = "Ваш возраст введен неверно";
        ageError.classList.add("error");
        isValid = false;
    }

    function validateGender() {
        let isChecked = false;

        for (let genderInput of genderInputs) {
            if (genderInput.checked) {
                isChecked = true;
                break;
            }
        }

        if (!isChecked) {
            isValid = false;
            const genderError = document.getElementById("gender-error");
            genderError.textContent = "Выберите ваш пол";
            genderError.classList.add("error");
        }
    }
    validateGender();

    if (professionSelect.selectedIndex === 0) {
        isValid = false;
        const professionError = document.getElementById("profession-error");
        professionError.textContent = "Выберите профессию";
        professionError.classList.add("error");
    }
    if (!passwordInput.validity.valid) {
        const passwordError = document.getElementById("password-error");
        passwordError.textContent = "Пароль должен содержать не меньше 8 символов, иметь одну заглавную, одну строчную буквы и одну цифру";
        passwordError.classList.add("error");
        isValid = false;
    }
    if (passwordInput.value !== confirmPasswordInput.value) {
        const confirmPasswordError = document.getElementById("confirmPassword-error");
        confirmPasswordError.textContent = "Пароли не совпадают";
        confirmPasswordError.classList.add("error");
        isValid = false;
    }
    if (!agreeInput.checked) {
        isValid = false;
        const agreeError = document.getElementById("agree-error");
        agreeError.textContent = "Вы должны согласиться с обработкой персональных данных";
        agreeError.classList.add("error");
    }

    if (isValid) {
        console.log("Проверка пройдена");
        console.log("Имя:", nameInput.value);
        console.log("Email:", emailInput.value);
        console.log("Возраст:", ageInput.value);
        console.log("Пол:", getSelectedGender(genderInputs));
        console.log("Профессия:", professionSelect.value);
        alert("Ваши данные отправлены");
        form.reset();

    }
    else {
        console.log("Ошибка валидации")
    }

})

function clearErrors() {
    const errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach(function (message) {
        message.textContent = "";
    })

    const errorFields = document.querySelectorAll(".error");
    errorFields.forEach(function (field) {
        field.classList.remove("error");
    });
}

function getSelectedGender(genderInputs) {
    for (const genderInput of genderInputs) {
        if (genderInput.checked) {
            return genderInput.value;
        }
    }
}
