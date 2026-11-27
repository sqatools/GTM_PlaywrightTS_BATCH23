// Create a function and provide two parameters. 
function addition(n1, n2){
    console.log("Addition of", n1, "and", n2, "is :", n1+n2)
}

addition(40, 60)

var x = 200
var y = 23
addition(x, y)

console.log("*****************************************")
// Program to get all the even numbers from an array.

function getEvenNum(arr1){
    console.log("Even numbers from an array are : ")
    for(var ele of arr1){
        if(ele%2==0){
            console.log(ele)
        }
    }
}

var array = [5, 6, 9, 33, 56, 87, 98, 1, 2]
getEvenNum(array)