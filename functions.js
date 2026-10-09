console.log("hello")

let number = 5;
let otherNumber = 10;

// let result = number + otherNumber;

//D.R.Y.

// create a function that adds two numbers together an returns the result
function add(firstNumber, secondNumber){
    console.log("this executes when the function runs")
    return firstNumber + secondNumber
    
}


// invocation is a fancy word for callina javascript function's name
let functionOutput = add(2,3)
console.log(functionOutput);

// function declarations vs function expressions
let addTwoNumbers = function(num1, num2){
    return num1 + num2
}

console.log(addTwoNumbers(23, 87))

let arrowFunction = () => {
    console.log("Do the thing!")
}

arrowFunction();

// arrow function only works after being defined
// function works before or after