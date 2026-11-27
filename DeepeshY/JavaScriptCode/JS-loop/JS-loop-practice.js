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
var num = 14
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


console.log("--------------------------------")
// Nested for loop : in the nested loop, for one single value of the outer loop, the complete inner loop will execute. 

// outer loop
for(var i=1; i<=4; i++) { // i = 1, 2
    console.log("Address , i:", i) // 1, 2
    // inner loop
    for(var j=1; j<=3; j++) { // 1, 2, 3
        console.log("Package , j:", j)
    }
    console.log("-------------")
}


console.log("--------------------------------------------")
// Write a program to get all the prime numbers from 1 to 100. 
for(var num=1; num<=100; num++) {
    var prime = true
    for(var i=2; i<num; i++) {
        if (num%i == 0) {
            prime = false
            break
        }
    }
    if(prime == true) {
        console.log(num)
    }
}

console.log("-------------------------------------------")

/*

*            i=1
* *          i=2
* * *        i=3
* * * *      i=4
* * * * *    i=5

*/

for(var i=1; i<=5; i++) {//i=1, 2
    var temp = ""
    for(j=1; j<=i; j++) {
        temp = temp + " " + "*"
    }
    console.log(temp)
}


console.log("-------------------")
/*

* * * * * i=1
* * * *   i=2
* * *     i=3
* *       i=4
*         i=5

*/

for(var i=1; i<=5; i++) {//i=1, 2, 3, 4, 5
    var temp = ""
    for(j=1; j<=6-i; j++) { //(1, 5) (1, 4) (1, 3) (1, 2) (1, 1)
        temp = temp + " " + j
    }
    console.log(temp)
}

console.log("--------------------------")

/*

* * * * * * * i=1
      *       i=2
      *       i=3
      *       i=4
      *       i=5
      *       i=6
*/

for(var i=1; i<=6; i++) {
    var temp = ""
    for(var j=1; j<=7; j++) {
        if(i > 1) {
            if(j == 4) {
                temp = temp + " " + j
            } else {
                temp = temp + "  "
             }
        } else {
        temp = temp + " " + j
        }
    }
    console.log(temp)
}

console.log("---------------------------")

/*
*     * * * *  i=1
*     *        i=2
* * * * * * *  i=3
      *     *  i=4
* * * *     *  i=5
*/
//i (1, 5)
//j (1, 7)

for(var i=1; i<=5; i++) {
    var temp = ""
    for(var j=1; j<=7; j++) {
        if(i==1) {
            if(j == 2 || j == 3) {
                temp = temp + "  "
            } else {
                temp = temp + " " +j
            }

        } else if(i==2) {
            if(j == 1 || j == 4) {
                temp = temp + " " + j
            } else {
                temp = temp + "  "
            }

        } else if (i==4) {
            if(j==4 || j== 7) {
                temp = temp + " " + j
            } else { 
                temp = temp + "  "
            }
                
        } else if(i == 5) {
            if(j==5 || j== 6) {
                temp = temp + "  "
            } else { 
                temp = temp + " "+j
            }
        }
        
        else {
            temp = temp + " " +j
        }
    }
    console.log(temp)
}


/*
*         *
*         *
*         *
*         * 
* * * * * *


* * * * *
    *
    * 
    * 
* * * * *
*/

console.log("---------------while condition----------")
/*
A while loop will execute till the condition is true. Once it is false, the loop will automatically terminate. 
while(condition) {
    code block
}

// If you want to execute any program with the `for` loop and/or `while` loop, 
// if the number of occurrences is clear, go for the `for` loop. 
// If the condition is not clear, then go for the `while` loop. 
*/

var num=1
while(num <=10) {
    console.log(num)
    num += 1
}

/*

// Create an infinite while loop. 
var n=1
while(true) {
    console.log(n)
    //n += 1
    ++n
    if(n == 1001) {
        console.log("Loop execution completed")
        break
    }
}

// Write a program to create one calculator. 
while(true) {
    console.log("---------Welcome to Calc App --------")
    const prompt = require("prompt-sync")()
    var num1 = Number(prompt("Enter first value :"))
    var num2 = Number(prompt("Enter Second value:"))
    var opt = prompt("Select operation : \n1. Addition\n2. multiplication\n3.subtraction\n4. division\n")
    if(opt == '1') {
        console.log("addition :", num1+num2)
    } else if(opt == '2') {
        console.log("multiplication :", num1*num2)
    } else if(opt == '3') {
        console.log("subtraction :", num1-num2)
    } else if(opt == '4') {
        console.log("divion :", num1/num2)
    } else {
        break
    }
}
*/

console.log("----------------- do while loop -----------")
// do-while loop : do-while loop program executes at least once, even if the condition is true or false. 
/*
// syntax
do{
    code block
} while(condtion)
*/

var k =1
do {
    console.log(k)
    k += 1 // k = k + 1
} while(k >=10)

console.log("----------------Apply loop on string-----------------")
// on a string using the `in` operator and the `of` operator 

var str1 = "JavaScript"
for(var chr of str1) {
    console.log(chr)
}
// The `in` operator provides you with the index of each character. 
console.log("-------------------")
for(var i in str1) {
    console.log(i, str1[i])
}


console.log("-----------Apply loop on array values----------------")
var arr1 = [45, 'Hello', [5, 7, 8], {a: 123}, true]

for(var v1 of arr1) {
    console.log(v1)
}

console.log("------------------")
for(var i=0; i<=arr1.length; i++) {
    console.log(i, arr1[i])
}
/*
0 45
1 Hello
2 [ 5, 7, 8 ]
3 { a: 123 }
4 true
5 undefined
*/

console.log("------------in operator with array-----")
for(var j in arr1) {
    console.log(j, arr1[j])
}

/*
0 45
1 Hello
2 [ 5, 7, 8 ]
3 { a: 123 }
4 true
*/