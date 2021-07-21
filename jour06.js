// 01 FORMAT

console.log("Format : ");
function formatDate(string) {
    let array = string.split("-");
    let year = array[0];
    let month = array[1];
    let day = array[2];
    
    let date = `${day}/${month}/${year}`
    return date
}

var date = new Date("2021-05-06");

console.log(formatDate("2021-05-06") + "\n\n");


// 02 AGE

console.log("Age : ");




// 03 VALIDATOR

console.log("Validator : ");