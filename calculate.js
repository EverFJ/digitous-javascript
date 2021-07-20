// 01 Calculator

const arguments = process.argv.splice(2);
let firstArgument = parseInt(arguments[0]);
let secondArgument = arguments[1];
let thirdArgument = parseInt(arguments[2]);

function calculate(nb, operand, nb2) {

    switch (operand) {
        case "+":
            return nb + nb2;
            break;
        case "-":
            return nb - nb2;
            break;
        case "x":
            return nb * nb2;
            break;
        case "/":
            return nb / nb2;
            break;
        case "%":
            return nb % nb2;
            break;
        default:
            return "Error ! Invalid operand\nYou must use + - x / or %."
    }
};

if (arguments.length != 3) {
    console.log("Error ! This is a calculator\nYou must enter 3 arguments!\nExample : 4 * 10")
    return false
}
else {
    console.log(calculate(firstArgument, secondArgument, thirdArgument));
}

