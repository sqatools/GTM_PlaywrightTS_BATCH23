/*

*       *
*       *
*       *
*       *
* * * * *

*/

// write a program to print number 1 to 5 in the above pattern using for loop in javascript
var n = 5;
for (var i = 1; i <= n; i++) {
    for (var j = 1; j <= n; j++) {
        if (i == 1 || j == 1 || i == n || j == n) {
            process.stdout.write("* ");
        }
        else {
            process.stdout.write("  ");
        }
    }
    console.log();
}

console.log("-----------------------")
// create an infinite while loop in javascript
var n = 1
while(true) {
    console.log(n)
    n += 1
    if(n==1001){
        console.log("loop execution completed")
        break
        }
}
