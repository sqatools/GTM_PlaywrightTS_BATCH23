/*
/ Function properties 
- Functions help us to write automation code and reuse a number of times. 
- Now, the next thing is, a function can accept n number of parameters. 
- A function can return the value that we can store in a variable and reuse. 
- We can call the function from one file to another file using an import statement. 
- We can call the function from one function to another function. 

function function_name(parameter) 
{
    code block
}
*/
// Create a function and provide two parameters. 
function addition(n1, n2) {
    var z = 50
    console.log("Addition :", n1+n2)
}

//call the functions and execute the code. 
// There are two ways to provide the value to the function:
//1. Pass by value
addition(40, 50)

//2. Pass by reference
var x = 200
var y = 300
addition(x, y)

console.log("----------------")
var P = 100
for(var Q=1 ; Q<=10; Q++) {
    P += 100
    addition(P, Q)
}

console.log("--------------------------------------")
// Program to get all the even numbers from an array. 
function getEven(Arr1) {
    for(var a of Arr1) {
        if(a%2 == 0) {
            console.log(a)
        }
    }
}

var array1 = [3, 6, 7, 1, 8, 22, 12, 15]
getEven(array1)
/*
6
8
22
12
*/

console.log("-------------------------------------")
// Function with default parameter value
// factorial of 5 : 5*4*3*2*1
function get_factorial(num=5) {
    var fact =1
    for(var i=num; i>0; i--) {
        fact = fact * i
    }
    console.log(`factorial of ${num}:`, fact)
}

// Go with the default value. 
// While calling the function, if we don't provide any value, 
// it will go with the default value is 5 
//get_factorial() // factorial of 5: 120

// override the default value. 
//get_factorial(7) // factorial of 7: 5040
//get_factorial(6) // factorial of 6: 720

console.log("----------------------------------")
//How to return a value from a function? 

function Multiplication(m1, m2) {
    return m1*m2
}

var result = Multiplication(30, 4)
console.log("output :", result)

console.log("-----------------------------------")
// Write a program to get the sum of all the values from 1 to 10. 
function getSum() {
    var sum = 0
    for(var i=1; i<=10; i++) {
        sum += i
    }
    return sum

}

// var result1 = getSum()
// console.log("output :", result1)
// console.log("twice value :", result1*2)
console.log("sum of values :", getSum())


console.log("-------------------------------")
// about function call inside another function 

function add(v1, v2) { return v1+v2 }
function multi(v1, v2) { return v1*v2 }
function divide(v1, v2) { return v1/v2 }
function subtract(v1,v2) { return v1-v2 }

function calculator(value1, value2, operation) {
    if (operation == 1) {
        console.log("Addition value :", add(value1, value2))
    } else if(operation == 2) {
        console.log("multiplication value :", multi(value1, value2))
    }else if(operation == 3) {
        console.log("subtraction value :", subtract(value1, value2))
    }else if(operation == 4) {
        console.log("division value :", divide(value1, value2))
    }
}

calculator(50, 20, 1) // Addition value : 70
calculator(50, 2, 2) // multiplication value : 100
calculator(50, 3, 3) // subtraction value : 47
calculator(50, 5, 4) // division value : 10

console.log("--------------------------------------")
// An arrow function that does not have any body or any name of the 
// function: we declare it with the arrow, 
// and we can call the arrow function anywhere, at any point in time. 
var msgResult = (param) => {
    console.log(`Hello ${param}, good morning`)
} 
msgResult("John")


var sqaure = (n) => {
    console.log("square of n:", n**2)
}

sqaure(30)

console.log("---------------------------")
//call a function as a parameter to another function that is called a callback function. 

//Main
export function CallBackFunction(n, func) {
    func(n) // get_cube(5)
}


// second function
function get_cube(n) {
    console.log(`Cube of ${n} :`, n**3)
}


// CallBackFunction(5, get_cube)

// CallBackFunction(10, (n)=> {
//     for(var val=1; val<=10; val++) {
//             console.log(val, "*", n*val)
//     }
// })

