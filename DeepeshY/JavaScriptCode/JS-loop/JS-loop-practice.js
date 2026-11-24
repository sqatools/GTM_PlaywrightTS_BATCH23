// for loop
/*
for(var initialization; check condition; increment/decrement) {
    code block
}

*/

// Program to print a value from 1 to 10. Very basic. 

for(var i=1; i<=10; i++) {
    console.log(i)
}

console.log("-----------------------")
// Write a program to print the value from 10 to 1. 
for(var j=10; j>=1; j--) {
    console.log(j);
}

console.log("--------------------------")
// Write a program to get the factorial of a given number. 
// factorial 5 : 5*4*3*2*1
var x = 6
var fact = 1 
for(var i=x; i>=1; i--) { //i = 5, 4, 3, 2, 1
    fact = fact * i // 1*5 = 5; 5*4 = 20; 20*3 = 60; 60*2 = 120, 120*1 = 120
}
console.log("factorial output :", fact)


console.log("--------------------------")
// Write a program to get all the numbers which are divisible by 3 and 5 from 1 to 100. 

for(var num =1; num<=100; num++) {
    if(num%3 == 0 && num%5 == 0) {
        console.log(num)
    }
}

console.log("--------------------------")
// Write a program to check whether a given number is prime or not. 
var num = 17
var prime = true
for(var i=2; i<num; i++) {
    console.log(i)
    if(num%i == 0) {
        prime = false
        // Keyword: terminate the loop execution immediately. 
        break
    }
}
if(prime == true) {
    console.log("this is prime number :", num)
} else {
    console.log("this is not prime number :", num)
}