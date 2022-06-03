/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2
function add(number1, number2) {
    return number1 + number2;
}
// Step 2: In the function, return the sum of the parameters number1 and number2

// Step 3: Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function
function addNumbers() {
    let addend1 = parseInt(document.getElementById("addend1").value);
    let addend2 = parseInt(document.getElementById("addend2").value);
    let sumOfAddition = add(addend1, addend2);
    document.querySelector("#sum").value = sumOfAddition;
}
// Step 4: Assign the return value to an HTML form element with an ID of sum

// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function
document.querySelector("#addNumbers").addEventListener("click", addNumbers);
// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers
const subtract = function(number1, number2) {
    return number1 - number2;
}

const subtractNumbers = function() {
    let minuend = parseInt(document.getElementById("minuend").value);
    let subtrahend = parseInt(document.getElementById("subtrahend").value);
    let difference = subtract(minuend, subtrahend);
    document.querySelector("#difference").value = difference;
}
document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);
// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers
const multiply = (number1, number2) => number1 * number2

const multiplyNumbers = () => {
    let factor1 = parseInt(document.getElementById("factor1").value);
    let factor2 = parseInt(document.getElementById("factor2").value);
    let product = multiply(factor1, factor2)
    document.querySelector("#product").value = product
}
document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers)
// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers
function divide(number1, number2) {
    return number1 / number2
}

function divideNumbers() {
    let dividend = parseInt(document.getElementById("dividend").value);
    let divisor = parseInt(document.getElementById("divisor").value);
    let quotient = divide(dividend, divisor);
    document.querySelector("#quotient").value = quotient
}
document.querySelector("#divideNumbers").addEventListener("click", divideNumbers)
// Step 9: Test all of the mathematical functionality of the task3.html page.


/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date
const currentDate = new Date();
// Step 2: Declare a variable to hold the current year
let currentYear;
// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2
currentYear = currentDate.getFullYear();
// Step 4: Assign the current year variable to an HTML form element with an ID of year
document.querySelector("#year").textContent = currentYear;

/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25
const numberArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"
document.querySelector('#array').textContent = numberArray;
// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the result to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )
const oddResults = numberArray.filter(number => number % 2 == 1);
document.querySelector("#odds").textContent = oddResults;
// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"
const evenResults = numberArray.filter(number => number % 2 == 0);
document.querySelector("#evens").textContent = evenResults;
// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"
const initialValue = 0;
const sum = numberArray.reduce((previous, current) => previous + current, initialValue);
document.querySelector("#sumOfArray").textContent = sum;
// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"
const map = numberArray.map(number => number * 2);
document.querySelector("#multiplied").textContent = map;
// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"
const map2 = numberArray.map(number => number * 2);
const sumOfMultiplied = map2.reduce((total, item) => total + item, initialValue);
document.querySelector("#sumOfMultiplied").textContent = sumOfMultiplied;