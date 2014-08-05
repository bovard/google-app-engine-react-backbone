
// This file reads an md file and exports the file as an array
// then include that array anywhere you wanted the mark up file!

// this is sad and hacky, but I couldn't find another way to do it

// to run: node mdAsArray.js

var fs = require('fs');

var FILE = './home.md'; // goes to Home.jsx
// var FILE = './uploadHelp.md' // goes to uploadHelp.js

var fileContents = fs.readFileSync(FILE);

fileContents = fileContents.toString().split('\n');

console.log(fileContents);
