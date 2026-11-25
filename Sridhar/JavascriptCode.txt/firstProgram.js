console.log("Hello world")
var a = 10;
console.log("Value of a is: " + a)
a = 20;
console.log("Value of a is: " + a)
var a = 30;
console.log("Value of a is: " + a)
a = 40;
console.log("Value of a is: " + a)

var x
let y
const z = 50;
console.log("Value of x is: " + x)
console.log("Value of y is: " + y)
console.log("Value of z is: " + z)

var p=10;
console.log("Value of p is: " + p)
p=20;
console.log("Value of p is: " + p)
var p=30;
console.log("Value of p is: " + p)

let q=10;
console.log("Value of q is: " + q)
q=20;
console.log("Value of q is: " + q) 

const r=10;
console.log("Value of r is: " + r)  
r =20;
console.log("Value of r is: " + r)  

if(true){
    var a = 100;
    let b = 200;
    const c = 300;
    console.log("Value of a is: " + a)
    console.log("Value of b is: " + b)
    console.log("Value of c is: " + c)
}
    console.log("Value of a outside is: " + a)
    console.log("Value of b outside is: " + b)
    console.log("Value of c outside is: " + c)

    //Int 
    var intNum = 10;
    console.log("Value of intNum is: " + intNum)
    console.log("Type of intNum is: " + typeof(intNum)) 

    //string
    var str = "Hello World";
    console.log("Value of str is: " + str)
    console.log("Type of str is: " + typeof(str))
    console.log("Length of str is: " + str.length)
    console.log("Character at index 0 is: " + str[0])

    //boolean
    var bool = true;
    var bool2 = false;
    console.log("Value of bool is: " + bool)
    console.log("Value of bool2 is: " + bool2)
    console.log(bool == bool2)
    console.log("Type of bool2 is: " + typeof(bool2)) 

    //undefined
    var und
    console.log("Value of und is: " + und)
    console.log("Type of und is: " + typeof(und))

    //null
    var n = null;
    console.log("Value of n is: " + n)
    console.log("Type of n is: " + typeof(n))

    //arry
    var arr = [1,2,3,4,5];
    var arr2 = ["a","b","c","d"];
    var arr3 = [1,"a",true,null,undefined,[1,2,3]];
    var arr4 = [[1,2,3],[4,5,6],[7,8,9]];
    console.log("Value of arr is: " + arr[0])
    console.log("Value of arr2 is: " + arr2[1])
    console.log("Value of arr3 is: " + arr3[5][2])    
    console.log("Value of arr4 is: " + arr4[2][1])

    //object
    var userdetails = {
        name: "Sridhar",
        age: 30,
        email: "sridhar@example.com"
    };
    userdetails.name = "Sridhar Reddy";
    console.log("Value of userdetails is: " + userdetails.name)
    console.log("Value of userdetails is: " + userdetails.age)
    console.log("Value of userdetails is: " + userdetails.email)
    userdetails.phone = "1234567890";
    console.log("Value of userdetails is: " + userdetails.phone)    
    console.log(userdetails)

    var arry = [1,2,3,3,4,5,7,7,8,9,10,10];
    var set = new Set(arry);
    console.log("Value of arry is: " + arry)
    console.log(set)
    console.log("Value of set is: " + set.size)

function greeting(){
    console.log("welcome to Java Script programming");
}

greeting();
greeting();

function add(a,b){
    console.log("Value of a is: " + a)
    console.log("Value of b is: " + b)
    console.log("Sum of a and b is: " + (a + b))
}   

add(10,20);
add(30,40);

//Addition
var a = 10;
var b = 20;     
console.log("Sum of a and b is: " + (a + b))
var c = a + b;
console.log("Value of c is: " + c)  
var d = a + b + c;
console.log("Value of d is: " + d)

//Subtraction
var a = 30;
var b = 20;     
console.log("Subtraction of a and b is: " + (a - b))

//multiplication
var a = 10;
var b = 20;     
console.log("Multiplication of a and b is: " + (a * b)) 

//division
var a = 20;
var b = 10;     
console.log("Division of a and b is: " + (a / b))

//remainder
var a = 20;
var b = 3;     
console.log("Remainder of a and b is: " + (a % b))  

//exponentiation
var a = 2;
var b = 3;     
console.log("Exponentiation of a and b is: " + (a ** b))
console.log("Square of 5 is : " + (5 ** 2))
console.log("Cube of 6 is : " + (6 ** 3))
console.log("Age of user is: " + a + " and he is " + b + " years old")

//Assignment operators
//1. += 
var x = 10;
x += 5; // equivalent to x = x + 5
console.log("Value of x is: " + x)  

//2. -=
var m = 15;
m -= 5; // equivalent to m = m - 5
console.log("Value of m is: " + m )

//3. *=
var n = 5;
n *= 2; // equivalent to n = n * 2
console.log("Value of n is: " + n ) 

//4. /=
var p = 22;
p /= 4; // equivalent to p = p / 4
console.log("Value of p is: " + p )

//5. %=
var q = 22;
q %= 4; // equivalent to q = q % 4
console.log("Value of q is: " + q )


//comparison operators
var a = 10;
var b = 20;
var c = "10";
console.log("Is a equal to b? " + (a == b))
console.log("Is a equal to c? " + (a == c))
console.log("Is a equal to c? " + (a === c))

console.log("Is a not equal to b? " + (a != b))
console.log("Is a not equal to c? " + (a != c))
console.log("Is a not equal to c? " + (a !== c))

console.log("Is a less than b? " + (a < b))
console.log("Is a greater than b? " + (a > b))

console.log("Is a less than or equal to b? " + (a <= b))
console.log("Is a greater than or equal to b? " + (a >= b))

//Logical operators
/*
TRUE && TRUE = TRUE
TRUE && FALSE = FALSE
FALSE && TRUE = FALSE
FALSE && FALSE = FALSE

TRUE || TRUE = TRUE
TRUE || FALSE = TRUE
FALSE || TRUE = TRUE
FALSE || FALSE = FALSE
*/

var a = 20;
var b = 30;
var c = 40;

//TRUE && FALSE = FALSE
console.log("Is a less than b and b Greater than c? " + (a < b && b > c))