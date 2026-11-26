/*
if (condition) {
    code block
} else {
    code block
}
*/

//Write a program to compare the value of two numbers. 
var x = 40
var y = 40
if(x == y) {
    console.log("Both have equal value:", x, y)
} else {
    console.log("Both numbers has different value:", x, y)
}

console.log("-----------------------")
// Write a program to check whether the given number is even or odd. 
var z = 26
if (z%2 == 0) {
    console.log("This is even number:", z)
} else {
    console.log("This is odd number :", z)
}

// This is odd number : 23
// This is even number: 26


console.log("-------------------------------")
// Write a program to check if the given number is divisible by 3 and 5. 
var P = 30
if(P%3 == 0 && P%5 == 0) {
    console.log("This is divisible by 3 and 5 :", P)
} else {
    console.log("This is not divisible by 3 and 5 :", P)
}

console.log("---------------------------------")
// Write a program to check if the given number is divisible by 7 or 11. 
var m = 77
if (m%7 == 0 || m%11 == 0 ) {
    console.log("Number is divisible by 7 or 11 :", m)
} else {
    console.log("Number is not divisible by 7 or 11 :", m)
}

console.log("---------- if-elseif - else -------------")
/*
if (condition1) {
    code block
} else if (condition2) {
    code block
} else if (condition3 ) {
    code block
} else {
    code    
}
*/

//Write a program to find out the bigger number among three numbers. 

var J = 80
var K = 80 
var L = 60

if(J > K && J > L) {
    console.log("J has greater value: ", J)
} else if(K > J && K > L) {
    console.log("K has greater value :", K)
}
else if (L > J && L > K) {
      console.log("L has greater value", L)
} else {
    console.log("No one has greate value")
}


console.log("------------------ Nested if condition -----------------")
// If one condition is dependent on another condition, then it is called a nested if condition. 
/*
if(condition1) {
    code block
    if(condition2) {
        code block
        if(condition3) {
            code block
        } else {
            code block
        }
    } else {
        code block
    }
} else {
    
    code block
}
*/

// Write a program to simulate a nested if condition with an interview process. 
var round1 = 'pass'
var round2 = 'pass'
var round3 = 'pass'

if(round1 == 'pass') {
    console.log("congrats 1st round is clear")
    if(round2 == 'pass') {
         console.log("congrats 2nd round is clear")
         if(round3 == 'pass') {
            console.log("congrats you are selected")
         } else {
            console.log("sorry failed in 3rd round")
         }
    } else {
        console.log("sorry failed in 2nd round")
    }
} else {
     console.log("sorry failed in 1st round")
}


console.log("---------------------Ternary Operator ---------------------")
// var result = condition ? true output : false output

var num = 21
result = num%2 == 0 ? "This is even number": "This is odd number"
console.log(result)

var m1 = 28
console.log(m1%3 == 0? "this is divisle by 3" : "this is not divisible by 3") 

