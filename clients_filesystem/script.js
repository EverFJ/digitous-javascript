const fs = require("fs");

var fileText

fs.readFile("clients.txt", function(err, data) {
    if (err) {
        console.error(err);
        return
    }
    fileText = data.toString();
    console.log("readFile fileText :\n" + fileText);
    // let filesSplit = [];
    // filesSplit = fileText.split(" ");
    // console.log("readFile fileSplit :\n");
    // console.log(filesSplit)

});