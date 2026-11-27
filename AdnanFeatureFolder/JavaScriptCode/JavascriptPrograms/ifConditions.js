//Write a program to compare the value of two numbers. 
var x = 30
var y = 30
if(x==y){
    console.log("Both x and y values are same.", "x =",x, "y =",y)
}else{
    console.log("Both x and y values are different.", "x =",x, "y =", y)
}

console.log("*********************************************")

// Write a program to check whether the given number is even or odd.
var a = 11
if(a%2 == 0){
    console.log("Given number", a, "is even number.")
}else{
    console.log("Given number", a, "is odd number.")
}

console.log("*********************************************")
// Write a program to check if the given number is divisible by 3 and 5.
var b = 15
if(b%3 == 0 && b%5 == 0){
    console.log("Given number", b, "is divisible by 3 and 5.")
}else{
    console.log("Given number", b, "is not divisible by 3 and 5.")
}

console.log("**********************************************")
//Write a program to find out the bigger number among three numbers.
var p = 65
var q = 40
var r = 40

if(p>q && p>r){
    console.log("Value of p is greater. p =",p)
}else if(q>p && q>r){
    console.log("Value of q is greater. q =",q)
}else if(r>p && r>q){
    console.log("Value of r is greater. r =",r)
}else if(p==q){
    console.log("Value of p and q are equal. p=",p, "and q=",q)
}else if(q==r){
    console.log("Value of q and r are equal. q=",q, "and r=",r)
}else if(p==r){
    console.log("Value of p and r are equal. p=",p, "and r=",r)
}
else{
    console.log("All the values are equal.")
}