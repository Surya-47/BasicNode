const xyz = require('./people')

// require is user to run another file from the current file 

setTimeout(() => {
    console.log("Time is out")
    clearInterval(exp)
}, 4000);

// setTimeout, setInterval , clearInterval is available in node js

const exp = setInterval(() => {
    console.log("Time")
}, 1000);

console.log(xyz) // it will return an empty object... to make xyz have an value we need to add module.exports=poeple which means we can export something from the current file to the file that calls it 


// console.log(people) // it will give an error because we cannot access variables defined in another file 

const os = require('os') // can get the details about os
console.log(os.platform())