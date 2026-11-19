var a = 10
// var : keyowrd
// a : variable name
// 10 : data to be assigned to the variable

// Three types of variables: `var`, `let`, and `const` 

//#########################################
// var variable declarations and their properties 
/*
- var a variable is accessible across the file and outside of the file as well.
- var it can reassign and redeclare. 
- var has function have scope.
*/

// declare a P variable and assign 100 as a value. 
var p = 100
console.log("value of p :", p)

// Re-Assign a value to the `P` variable. 
p = 200
console.log("value of p :", p)


// Re-declaration of p variable
var p = 500
console.log("value of p :", p)

console.log("##################################################")

// `let` variable and `const` variable 
/*
- So, a let variable can be reassigned. 
- Cannot redeclare `let` variable. 
- Let variable has block scope. 

# const
- `const` cannot be redeclared or reassigned. 
- `const` has block scope. 
- And we have to initialize the value whenever we declare a `const` variable. 
*/

// declare variables
// `var` and `let` can be declared without initialization. 
var a1
let b 
// `const` has to be initialized whenever we declare it. 
const c = 40
console.log("value of a :", a1) //undefined
console.log("value of b :", b) // undefined
console.log("value of c :", c) // 40

// Redeclaration and reassignment 
// var can be redeclared and reassigned.
var P1 = 60
P1 =60 // Re-assigment
var P1= 120 // re-declaration 

// `let` can only be reassigned, not declared. 
let x1 = 500
x1 = 600 // re-assignment is allowed
//let x1 = 700 // re-declaration is not allowed for let variable

// `const` cannot be redeclared and reassigned. 
const y1 = 900 // declaration
//y1 = 1000 // re-assignment
// TypeError: Assignment to constant variable.
//const y1 = 11000 // re-declaration
console.log("value of y1:", y1)

console.log("#######################################")
// variable scope

if(true) {
    var j = 100
    let k = 200
    const l = 300
    console.log("var value of j :", j)
    console.log("let value of k :", k)
    console.log("const value of l :", l)

}

// A `const` and `let` variable outside of the scope is not accessible. 
console.log("var value of j outside:", j)
// console.log("let value of k outside:", k) // k is not defined
//console.log("const value of l outside:", l) // l is not defined

console.log("######################################")
// Rules to declare a variable name 

//1. Variable name cannot start with a number. 
//var 123_Var = 400 : invalid
var v1234= 500 // valid

//2. Variable name cannot contain a space in the name. 
//user name = 'rahul' // invalid
var first_name = 'mohit'

//3. Variable name cannot contain special characters except _ and $ 
// var email_address = 'mohit@gmail.com'
// var $username = 'user123'
// var last&name = "Gupta" // invalid

//4. Variable names are case-sensitive. 
var Name = "Rohit"
var NAME = "Virat"
var NAme = "Raghav"
var name1 = "Ravi"
var _name = "Rahul"
console.log(Name, NAME, NAme, name1, _name)
//5. There is no specific length of a variable name. You can define any long name. 
var we_Are_learning_progrmming = "JavaScript"
//6. We can follow camel case to define any variable name. 
var userName = "john123"
var emailAddress = "john@gmail.com"

