// Consider modules to be the same as JavaScript libraries.
// A set of functions you want to include in your application.

console.log()
// This is an example of core module because we havent't made it.
// This is defined by default.



// Global are those kinds of module whom we don't have to import.
// example is console because we don't have to import console.

const fs = require('fs');

fs.writeFileSync("hello.txt", "Hello this is Abhinav Kumar learning Node js");

// This has create a file named hello.txt in which we have written the text hello this.......
// This is an example of non-global module

