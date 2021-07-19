function multiply(nb) {
    for (i = 1; i <= 10; i++) {
        console.log(nb * i);
    }
};

function addition(nb) {
    for (i = 1; i <= 10; i++) {
        console.log(nb + i);
    }
};

module.exports = {
    multiply,
    addition,
};