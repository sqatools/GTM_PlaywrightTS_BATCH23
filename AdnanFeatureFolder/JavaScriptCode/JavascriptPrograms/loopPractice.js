// Program to print a value from 1 to 10. Very basic.

for(var i=1; i<=10; i++){
    console.log(i)
}

console.log("*****************************************")
// Write a program to print the value from 10 to 1.

for(var i=10; i>=1; i--){
    console.log(i)
}

console.log("*****************************************")
// Write a program to get the factorial of a given number.

var num = 4
var fact = 1

for(var i=num; i>=1; i--){
    fact = fact * i
}
console.log("Factorial of", num, "is :", fact)

console.log("******************************************")
// Write a program to get all the numbers which are divisible by 3 and 5 from 1 to 100.

for(var i=1; i<=100; i++){
    if(i%3==0 || i%5==0){
        console.log(i)
    }
}

console.log("*******************************************")
// Write a program to check whether a given number is prime or not.

var a = 3
var flag = true

for(var i=2; i<a; i++){
    //console.log(i)
    if(a%i==0){
        flag = false
        break
    }
}
if(flag == true){
    console.log(a, "is prime number.")
}else{
    console.log(a, "is not prime number.")
}

console.log("********************************************")
// Write a program to get all the prime numbers from 1 to 100. 

for(var num=1; num<=100; num++){
    var flag = true
    for(var i=2; i<num; i++){
        if(num%i==0){
            flag = false
            break
        }
    }
    if(flag == true){
        console.log(num,"is prime number.")
    }
}

console.log("*********************************************")

/*

*            i=1
* *          i=2
* * *        i=3
* * * *      i=4
* * * * *    i=5

*/

for(var i=1; i<=5; i++){
    var temp = ""
    for(var j=1; j<=i; j++){
        temp = temp + " " + "*"
    }
    console.log(temp)
}

console.log("**************************************")
/*

* * * * * i=1
* * * *   i=2
* * *     i=3
* *       i=4
*         i=5

*/

for(var i=1; i<=5; i++){
    var temp = ""
    for(var j=1; j<=6-i; j++){
        temp = temp + " " + "*"
    }
    console.log(temp)
}

console.log("********************************************")

/*

* * * * * * * i=1
      *       i=2
      *       i=3
      *       i=4
      *       i=5
      *       i=6
*/

for(var i=1; i<=6; i++){
    var temp = ""
    for(var j=1; j<=7; j++){
        if(i>1){
            if(j==4){
                temp = temp + " " + "*"
            }else{
            temp = temp + "  "
        }
        }else{
        temp = temp + " " + "*"
        }
    }
    console.log(temp)
}


console.log("****************************************")

/*

*     * * * *  i=1
*     *        i=2
* * * * * * *  i=3
      *     *  i=4
* * * *     *  i=5

*/

for(var i=1; i<=5; i++){
    var temp = ""
    for(var j=1; j<=7; j++){
        if(i==1){
            if(j==2 || j==3){
                temp = temp + "  "
            }else{
               temp = temp + " " + "*" 
            }
        }else if(i==2){
            if(j==1 || j==4){
                temp = temp + " " + "*"
            }else{
                temp = temp + "  "
            }
        }else if(i==4){
            if(j==4 || j==7){
                temp = temp + " " + "*"
            }else{
                temp = temp + "  "
            }
        }else if(i==5){
            if(j==5 || j==6){
                temp = temp + "  "
            }else{
                temp = temp + " " + "*"  
            }
        }
        else{
            temp = temp + " " + "*"
        }
        
    }
    console.log(temp)
}

console.log("**********************************************")
/*


*         * i=1
*         * i=2
*         * i=3
*         * i=4
* * * * * * i=5

*/

for(var i=1; i<=5; i++){
    var temp = ""
    for(var j=1; j<=6; j++){
        if(i<5){
            if(j==1 || j==6){
                temp = temp + " " + "*"
            }else{
                temp = temp + "  "
            }
        }
        else{
            temp = temp + " " + "*"
        }
    }
    console.log(temp)
}

console.log("**********************************************")
/*

* * * * *   i=1
    *       i=2
    *       i=3
    *       i=4
* * * * *   i=5
   
*/

for(var i=1; i<=5; i++){
    var temp = ""
    for(var j=1; j<=5; j++){
        if(i>1 && i<5){
            if(j==3){
                temp = temp + " " + "*"
            }else{
                temp = temp +"  "
            }
        }
        else{
            temp = temp + " " + "*"
        }  
    }
    console.log(temp)
}