// console.log('Add validation!');

// boolean for checking if the form is valid
let formIsValid

const form = document.querySelector("#parking-form")
const carYearInput = document.querySelector("#car-year")
const daysInput = document.querySelector("#days")



// runs all functions for validating the different fields
form.addEventListener('submit', event => {
    event.preventDefault()
    validateCarYear()
    validateDate()

    if (formIsValid) {
        const total = document.createElement('div')
        let totalCost = daysInput.value * 5
        // make the input label and border of the input green by adding input-valid on the parent div
        document.querySelector("#car-field").classList.add('input-valid')
        document.querySelector(".input-group").classList.add('input-valid')
        document.querySelector("#days-field").classList.add('input-valid')
        document.querySelector("#cvv-field").classList.add('input-valid')

        document.querySelector('#total').appendChild(total).innerHTML = "The total cost is $" + totalCost + "."

    }
    // console.log('content inside email input', emailInput.value)
})


// checks if the car year is greater than 1900
function validateCarYear () {
    if (carYearInput.value < 1900 ) {
        const error = document.createElement('div')

        // make the input label and border of the input red by adding input-valid on the parent div
        document.querySelector(".input-group").classList.add('input-invalid')
        // add an error message to the bottom of the input
        document.querySelector('#car-field').appendChild(error).innerHTML = 'Year of car must be later than 1900.'
    } else {
        formIsValid = true
    }
}

// checks if the date is between 1 and 30
function validateDate () {
    if (daysInput.value < 1 || daysInput.value > 30) {
        const error = document.createElement('div')

        // make the input label and border of the input red by adding input-valid on the parent div
        document.querySelector("#days-field").classList.add('input-invalid')
        // add an error message to the bottom of the input
        document.querySelector('#days-field').appendChild(error).innerHTML = 'Number of days must be between 1 and 30.'
    } else {
        formIsValid = true
    }
}

