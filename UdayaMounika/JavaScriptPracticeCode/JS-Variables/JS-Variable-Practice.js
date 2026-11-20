// var a = 10
// var : keyword to declare a variable
// a : variable name
// 10 : value assigned to the variable
// Three types of variables in JavaScript
// 1. var : global scope variable
// 2. let : block scope variable
// 3. const : block scope variable with constant value

// var variable declaration and their properties
/*
- var variable is accessible throughout the function in which it is declared and also outside of the file as well.
- var it can be re-declared and re-assigned.
- var has function scope and global scope.
*/

// declare a P variable and assign 100 as a value
var p = 100
console.log("value of p:" + p)

// Assign a new value to the variable p
p = 200
console.log("value of p after re-assigning:" + p)

// re-declare the variable p and assign a new value
var p = 300
console.log("value of p after re-declaring:" + p)


console.log("#############")
// let and const variable declaration and their properties
/*
- let variable is accessible only within the block in which it is declared.
- let variable can be re-assigned but cannot be re-declared within the same block.
- const variable is also block scoped and cannot be re-assigned or re-declared.
*/



// Rules to declare a varaible name in JavaScript

// Variable names cannot start with a number
// var 123abc = 100 // invalid variable name

// Variable names can start with a letter, underscore or dollar sign
// var _abc = 100 // valid variable name
// var $abc = 100 // valid variable name
// var abc = 100 // valid variable name
// var abc123 = 200 // valid variable name

// varaiable names cannot contain spaces
// var abc def = 100 // invalid variable name
// var abc_def = 100 // valid variable name

// varaible names are case sensitive


// we can follow camel case to define any variable name

