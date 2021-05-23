

// boolean for checking if the form is valid
let formIsValid

const form = document.querySelector("#parking-form")
const carYearInput = document.querySelector("#car-year")
const daysInput = document.querySelector("#days")
const ccNumber = document.querySelector('input[id="credit-card"]')
const expDate = document.querySelector('input[id="expiration"]')


// runs all functions for validating the different fields
form.addEventListener('submit', event => {
    event.preventDefault()
    validateCarYear()
    validateDate()
    validateCardNumber()
    validateExpirationDate()

    if (formIsValid) {
        const total = document.createElement('div')
        let totalCost = daysInput.value * 5
        // make the input label and border of the input green by adding input-valid on the parent div
        document.querySelector("#car-field").classList.add('input-valid')
        document.querySelector(".input-group").classList.add('input-valid')
        document.querySelector("#days-field").classList.add('input-valid')
        document.querySelector("#cvv-field").classList.add('input-valid')
        document.querySelector("#credit-card-field").classList.add('input-valid')
        document.querySelector("#name-field").classList.add('input-valid')
        document.querySelector("#expiration-field").classList.add('input-valid')

        document.querySelector('#total').appendChild(total).innerHTML = "The total cost is $" + totalCost + "."

    }
    // console.log('content inside email input', emailInput.value)
})


// checks if the car year is greater than 1900
function validateCarYear () {
    if (carYearInput.value < 1900 || carYearInput.value > 2021 ) {
        const error = document.createElement('div')

        // make the input label and border of the input red by adding input-valid on the parent div
        document.querySelector(".input-group").classList.add('input-invalid')
        // add an error message to the bottom of the input
        document.querySelector('#car-field').appendChild(error).innerHTML = 'Year of car must be later than 1900.'
        formIsValid = false
    } else {
        formIsValid = true
    }
}

// checks if the number of days is between 1 and 30
function validateDate () {
    if (daysInput.value < 1 || daysInput.value > 30) {
        const error = document.createElement('div')

        // make the input label and border of the input red by adding input-valid on the parent div
        document.querySelector("#days-field").classList.add('input-invalid')
        // add an error message to the bottom of the input
        document.querySelector('#days-field').appendChild(error).innerHTML = 'Number of days must be between 1 and 30.'
        formIsValid = false
    } else {
        formIsValid = true
    }
}


// checks if the credit card number is valid
function validateCardNumber() {
    var regex = new RegExp("^[0-9]{16}$");
    if (!regex.test(ccNumber.value) == true && luhnCheck(ccNumber.value) == false) {
        // const error = document.createElement('div')
        document.querySelector("#credit-card-field").classList.add('input-invalid')
        formIsValid = false
    } else if (!regex.test(ccNumber.value) == false && luhnCheck(ccNumber.value) == true){
        formIsValid = true
    }
}

function luhnCheck(val) {
    var sum = 0;
    for (var i = 0; i < val.length; i++) {
        var intVal = parseInt(val.substr(i, 1));
        if (i % 2 == 0) {
            intVal *= 2;
            if (intVal > 9) {
                intVal = 1 + (intVal % 10);
            }
        }
        sum += intVal;
    }
    return (sum % 10) == 0;
}
// end of cc check


function validateExpirationDate () {
    let regex = new RegExp("^(0[1-9]|1[0-2])\/?([0-9]{2})$")
    if (!regex.test(expDate.value) == true) {
        document.querySelector("#expiration-field").classList.add('input-invalid')
        formIsValid = false
    } else if (expDate.value[1] < 5 || expDate.value[4] < 1) {
        // sloppy, does not work totally right, I will make it better later lmao but hey it kinda works for now  ¯\_(ツ)_/¯
        const error = document.createElement('div')
        document.querySelector("#expiration-field").classList.add('input-invalid')
        document.querySelector('#expiration-field').appendChild(error).innerHTML = 'Expiration date cannot be in the past.'
        formIsValid = false
    } else {
        formIsValid = true
    }
}






//  BELOW IS STEP 5 NONESENSE THAT DOES NOT WORK YET AND IS VERY BAD LMAO    

// let dateControl = document.querySelector('input[type="date"]')
// let myDate = new Date(dateControl)
// let weekday = myDate.getDay()
// document.addEventListener ('click', event => {
//     console.log(myDate)
// })

// August 19, 1975 23:15:30

// 'input[type="date"]'