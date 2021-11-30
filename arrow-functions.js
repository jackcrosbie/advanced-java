/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
// function addTwoNumbers(a, b) {
//     // code block
//     return a + b;
// }

// let sum = addTwoNumbers(3, 5); //set function equal to variable
// console.log(sum) //call variable to console

// Arrow Function With Parameters
const addTwoNumbers = (a, b) => {
    // code block
    return a + b;
}

let sum = addTwoNumbers(3, 5); //set function equal to variable
console.log(sum) //call variable to console


// Single Line Arrow Function With Parameters
// const addTwoNumbers2 = (a, b) => a + b; vaild with or without brackets after fat arrow
const addTwoNumbers2 = (a, b) => (a + b);
let sum2 = addTwoNumbers2(6, 4)
console.log(sum2)

// Implicit Returns
const saySomething = message => console.log(message);
saySomething('Hello There!')

const sayHello = () => console.log('Hello');
sayHello()

// Returning Multiple Lines

const returnMultipleLines = () => (
    `<p>
      This is a multiline string!
    </p>`
)
console.log(returnMultipleLines());