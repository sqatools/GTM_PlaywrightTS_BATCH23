//print 1 to 10 number\
for(var i=1;i<=10;i++){
console.log(i);
}
//print 10 to 1 number
for(var j=10; j>=1;j--){
console.log(j);
}
//factorial of a number
var x=6;
var fact=1;
for(var i=x;i>=1;i--){
 fact=fact*i;
}
console.log("Factorail number is:",fact);
//print number which divisible by 3 and 5
for(var n=1;n<=100;i++){
if(n%3==0 && n%5==0){
    console.log(n);
    break;
}
//check number is prime or not
var n1=15;
var prime=true;
for(var i=2;i<=n1;i++){
console.log(i);
if(n1%i==0){
    prime=false;
    break;
}

}
if(prime==false){
console.log("prime number is :" ,n1);
} else{
   console.log("prime number is not :" ,n1); 
}
}