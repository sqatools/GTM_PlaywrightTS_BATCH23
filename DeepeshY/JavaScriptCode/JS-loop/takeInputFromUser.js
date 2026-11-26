// Tool to take input from the user 
// npm install prompt-sync

// Always take input from the user in string format only. 
const prompt = require("prompt-sync")({sigint: false})
const username = prompt("Enter your name:")
console.log(username)