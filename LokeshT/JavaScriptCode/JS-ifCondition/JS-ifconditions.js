var a=20;
var b=20;
if(a==b){
    console.log("a is equal to b")
} else{
    console.log("a value is other than b");
}
//check number is even or odd
var c=30;
if(c%2===0){
    console.log("c is even number");
} else{
    console.log("c is odd number");
}
///check number isdivisible by 3 or 5
var d=15;
if(d%3===0 && d%5===0){
console.log(" d is divisible by 3 and 5");
} else {
console.log("d is not divisibl by 3 and 5");
}
//check which number grater than each other
var e=10;
var f=20;
var g=40;
if(e>f && e>g){
    console.log("e is greater than f and g");
} else if(f>e &&f>g){
  console.log("f is greater than e and g");
}
  else if(g>e && g>f){
    console.log("g is greater than e and f");  
  } else {
    console.log("no number is grater than each other");
  }
//write programe wright nested if condition
var r1="pass";
var r2="pass";
var r3="pass";
if(r1=="pass"){
    console.log("r1 round is pass");
    if(r2=="pass"){
        console.log("r2 round is pass");
        if(r3=="pass"){
            console.log("r3 round is pass");
        } else {
            console.log("r3 round is fail");
        }
    } else {
        console.log("r2 round is fail");
    }
} else {
    console.log("r1 round is fail");
}
//Tertory oprator
var num =20;
result=(num%2==0)?"num is even":"num is odd";
console.log(result);
