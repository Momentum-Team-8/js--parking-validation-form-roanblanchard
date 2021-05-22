

// boolean for checking if the form is valid
let formIsValid

const form = document.querySelector("#parking-form")
const carYearInput = document.querySelector("#car-year")
const daysInput = document.querySelector("#days")
const ccInput = document.querySelector("#credit-card")
const ccNumber = document.querySelector('input[id="credit-card"]')


// runs all functions for validating the different fields
form.addEventListener('submit', event => {
    event.preventDefault()
    validateCarYear()
    validateDate()
    validateCardNumber()

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


    console.log(!regex.test(ccNumber.value))
    console.log(ccNumber.value)
    console.log(luhnCheck(ccNumber.value))
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



// document.addEventListener ('click', event => {
//     console.log(days.value)
// })





// valid cc number = 4111111111111111


//  STEP 5 NONESENSE THAT DOES NOT WORK YET AND IS VERY BAD LMAO    

// let dateControl = document.querySelector('input[type="date"]')
// let myDate = new Date(dateControl)
// let weekday = myDate.getDay()
// document.addEventListener ('click', event => {
//     console.log(myDate)
// })

// August 19, 1975 23:15:30

// 'input[type="date"]'