for(var i=1;i<=5;i++){
var temp="";
for(var j=1;j<=i;j++){
temp=temp+" "+"*";
console.log(temp);
}
}
console.log("-------------------")

for(var i=1;i<=5;i++){
var temp="";
for(var j=1;j<=6-i;j++){
temp=temp+" "+j;
}
console.log(temp);
}
console.log("-----------Apply loop on string---------------")
var str1="javaScript";
for(var chr of str1){
    console.log(chr);
}
console.log("--------------------------")
for(var i in str1){
    console.log(i, str1[i]);
}
console.log("-------------Apply loop on array values-------------")
var aar1=[45,'Hello',[5,7,8],{a:123},true]
for(var v1 of aar1){
console.log(v1);
}