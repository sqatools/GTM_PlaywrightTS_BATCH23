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


