
const http = require('http');

http.createServer((request, response) => {
    response.write("Hello This is Abhinav Jha");
    response.end();
}).listen(4500);

// The above shows how to make a simple server and we have create a server and this is simply accessed
// on the browser simply write localhost:4500 this is the port number.

http.createServer((request, response) => {
    response.write("<h1>Hello This is Abhinav Jha</h1>");
    response.end();
}).listen(4500);

// This above shows we have used HTML with this example and created a server and used h1 tags
// Rerun the server and reload the web page

// Now we are elaborating this function and implementing in cleaner way
// Without use of an arrow function

function dataControl(request, response) {
    response.write("<h1>Hello This is Abhinav Jha learning node js</h1>");
    response.end();
}

http.createServer(dataControl).listen(4500);

// Here we can see that in createServer function we have a function
// And instead of writing two functions we have used one function only.


// creating a arrow function

function test(a) {
    return a * 10;
}

// Changing this into an arrow function

const test = (a) => a * 10;