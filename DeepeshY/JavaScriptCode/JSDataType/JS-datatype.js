// There are two types of data types. 
//1. Primitive : 
// primitive data types are those data types which can hold only a single 
// value at a time and are immutable in nature. 
/*
1. Number
2. String
3. Boolean
4. Undefined
5. Null
6. BigInt

*/
console.log("------------------")
//1. Number : when we want to store any whole number or pointer (negative or positive value), then we'll use number data. 
// So, the specific range of the Number data type: max range is (2^53 - 1). 
// Negative range is -(2^53 - 1). 
var a = 10
var b = 4.5
var c = 6786876876
var d = -5060


// 2. String : when we want to store a value in a single quote, double quote, or empty string, then it is called a string data type. 
 
let s1 = ""
let s2 = "H"
let s3 = 'we Are learning JavaScript &^&676872634 1333'
let s4 = "We are learning JavaScript, \n and it's easy to learn."

console.log("s1 :", s1, ":", typeof s1)
console.log("s2 :", s2, ":", typeof s2)
console.log("s3 :", s3, ":", typeof s3)
console.log("s4 :", s4,  ":",typeof s4)

//String follows index. 

var s5 = "Hello"

//  0  1  2  3  4
//  H  e  l  l  o
console.log("value at index 2 :", s5[2]) // l
console.log("value at index 0 :", s5[0]) // H


console.log("-----------------")
// 3. Boolean : Boolean is the data type that has only two values: true and false. Generally, Boolean is the output of any condition. 
var A1 = true
var B1 = false
console.log("A1 :", A1, typeof A1) // true boolean
console.log("B1 :", B1, typeof B1) // false boolean
var P1 = 300
var Q1 = 400
var R1 = 300
console.log(P1 == Q1, P1 == R1) // false true
console.log(Q1 == R1) // false

console.log("-----------------")
// 4. Undefined : `undefined`: Whenever we declare any variable and don't assign a value, the default value is `undefined`. 
var K1 
var Y1 
console.log("value of K1 :", K1) // value of K1 : undefined
console.log("value of Y1:", Y1) // value of Y1: undefined

console.log("--------------------")
// 5. Null : when we want to keep it an empty value intentionally.
var M1 = null
console.log("value of M1 :", M1) // value of M1 : null

console.log("--------------------")
// 6. BigInt : number, which is greater than the Number data type, right? A value more than 2^53 is considered a BigInt. 
var bign = 68768767868768768766876786n
console.log(bign, ":", typeof bign)
// 68768767868768768766876786n : bigint



//2. Non-primitive: primitive data types are those data types which can handle 
// multiple values at a time, and they are mutable in nature. 

/*
1. Array data type 
2. Then object datatype 
3. Set data type. 
4. Function data type 

*/
