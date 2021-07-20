var arguments = process.argv.splice(2)
console.log(process.argv)


console.log(`arguments : ${arguments}`)

console.log("type : " + typeof(arguments))

let firstArgument = arguments[0];
let secondArgument = arguments[1];
let thirdArgument = arguments[2];

console.log(firstArgument);

var argumentsNumber = parseInt(process.argv.splice(2));