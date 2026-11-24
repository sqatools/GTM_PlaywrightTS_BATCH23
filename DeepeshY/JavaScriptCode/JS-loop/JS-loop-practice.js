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