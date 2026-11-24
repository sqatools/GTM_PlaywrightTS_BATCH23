// Arithmetic operators 
// 1. + addition
var a = 10
var b = 30
console.log("Addition :", a+b)
var c = a+50
console.log("Addition output2:", c)

// 2. - subtraction
console.log("Subtraction :", b -a);

// 3. * multiplication
console.log("Multiplication :", b*3)

// 4. / division
console.log("division :", b/3)

// 5. % remainder operator
console.log("Division :", b%4)

// 6. ** : exponentials
console.log("Square 2:", 2**2)

console.log("Cube of 5 :", 5**3)

console.log("----------------- Assignment operator ------------")
// = : Assignment operator
var a = 15

// 1. +=  // increase existing value by +5 
a += 5 
console.log("a += 5 :", a)// 20

// 2. -= // decrease existing values by 7
a -= 7
console.log("a -= 7:",a) // 13

// 3. *= // multiply values 5
a *= 5
console.log("a *= 5:", a) // 65

//4. /=
a /= 10
console.log("a /= 10 :", a) // 6.5

// %= : remainder value
a %= 3
console.log("a %= 3 :", a) // 0.5

console.log("#########################################")
// comparision is an operator 
var x = 40
var y = "40"
var z = 50
//1. == : Compare the values. 
console.log("x == y :", x == y) // true

//2. === : Compare the values and their data types. (strict)
console.log("x === y :", x === y) // false

//3. != : not requal
console.log(" x != y:", x != y) // false

//4. !== : Strict not equal 
console.log(" x !== y:", x !== y) // true

const A = 30
const B = 40
//5. > : greater than operator 
console.log("B > A :", B > A) // true

//6. < : less than operator
console.log("B < A :", B < A) //  false

const C = 40
//7. >= : greater-than-or-equal-to operator 
console.log(" B >= C :", B >= C) // true

//8. <= : less-than-or-equal-to operator 
console.log("B <= C:", B <= C) // true


/*
AND (&&) logical operator 
cond1 && cond2
true && false : false
false && true : false
true && true : true
false && false : false

OR (||) logical operator 
cond1 || cond2

true || false : true
false || true : true
true || true : true
false || false : false

*/
console.log("-------------------")
var P = 20
var Q = 30
var R = 40

//true && false : false
console.log("Q > P && P > R :", Q > P && P > R)

//false && true : false
console.log("P > Q && R > P:", P > Q && R > P)

//true && true : true
console.log("R > Q && Q > P :", R > Q && Q > P)

//false && false : false
console.log("Q > R && P > Q :", Q > R && P > Q )




console.log("-------------------")
//true || false : true
console.log("Q > P || P > R :", Q > P || P > R)

//false || true : true
console.log("P > Q || R > P:", P > Q || R > P)

//true || true : true
console.log("R > Q || Q > P :", R > Q || Q > P)

//false || false : false
console.log("Q > R || P > Q :", Q > R || P > Q )

console.log("########################### Increment operator ####################")

// ++ , --
// post increment : those increment conditions: first, it will give priority to the number value, and later it will increase it. 
var R = 20
console.log("post increment :", R++) // post increment : 20
console.log("updated value :", R) // updated value : 21
console.log("post decrement :", R--) // 21
console.log("updated value :", R)

console.log("------------------")
// preincrement : in pre-decrement, the value is going to update first, and then it will print. 
var W = 25
console.log("pre-increment value :", ++W) // 26
console.log("pre-decrement :", --W) // 25