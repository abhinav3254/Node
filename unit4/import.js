// How to import

const a = require('./export')

console.log(a)

// if we require only one value then we have to write 
console.log("Specific value from the exports.js is as follows")
console.log(a.x);

console.log(a.z())