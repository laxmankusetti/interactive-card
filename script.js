const formElement = document.getElementById('form');

function showError(inputElement, message) {
    const errorElement = document.getElementById(inputElement.id + "Error");
    errorElement.textContent = message;
    errorElement.style.display = 'block';
    inputElement.classList.add('error');
}

function hideError(inputElement) {
    const errorElement = document.getElementById(inputElement.id + "Error");
    errorElement.textContent = '';
    errorElement.style.display = 'none';
    inputElement.classList.remove('error');
}

function success() {
    formElement.style.display = 'none';
    document.querySelector('.success').style.display = 'block';
}
function cntue() {
    formElement.style.display = 'block';
    document.querySelector('.success').style.display = 'none';
    location.reload()
}

function validateForm(e) {
    e.preventDefault()
    let isFormValid = true

    const nameInput = document.getElementById('holder-name');
    const numberInput = document.getElementById('card-no');
    const monthInput = document.getElementById('month');
    const yearInput = document.getElementById('year');
    const cvcInput = document.getElementById('cvc');

    if(!nameInput.value.trim()){
        showError(nameInput, "can't be empty")
        isFormValid = false
    } else{
        hideError(nameInput)
    }

    if(!numberInput.value.trim()){
        showError(numberInput, "can't be empty")
        isFormValid = false
    } else if(/^\d{16}$/.test(numberInput.value.trim())){
        showError(numberInput, 'input should be exact 16 digits')
        isFormValid = false
    } else{
        hideError(numberInput)
    }

    if(!monthInput.value.trim()){
        showError(monthInput, "can't be empty")
        isFormValid = false
    } else if(monthInput.value.trim() < 1 || monthInput.value.trim() > 12){
        showError(monthInput, 'input must be valid')
        isFormValid = false
    } else{
        hideError(monthInput)
    }

    if(!yearInput.value.trim()){
        showError(yearInput, "can't be empty")
        isFormValid = false
    } else if(yearInput.value.trim() < 2015 || yearInput.value.trim() > 2030){
        showError(yearInput, 'input must be valid')
        isFormValid = false
    } else{
        hideError(yearInput)
    }

    if(!cvcInput.value.trim()){
        showError(cvcInput, "can't be empty")
        isFormValid = false
    } else if(cvcInput.value.trim().length < 3  || cvcInput.value.trim().length > 3){
        showError(cvcInput, 'input must be valid')
        isFormValid = false
    } else{
        hideError(cvcInput)
    }

    if(isFormValid){
        document.querySelector('.cn').innerText = numberInput.value
        document.querySelector('.name').innerText = nameInput.value
        document.querySelector('.date').innerText = monthInput.value + '/' + yearInput.value

        success()
    }
}

formElement.addEventListener('submit', validateForm)
