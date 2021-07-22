const fs = require("fs");

fs.readFile("file.txt", function(err, data) {
    if (err) {
        console.error(err)
        return
    }
    console.log(data);
    console.log("Lecture en différé : " + data.toString())

})

fs.writeFile("test.txt", "Hello World", function(err) {
    if (err) {
        console.error(err)
        return
    }
})

fs.readFile("test.txt", function(err, data) {
    if (err) {
        console.error(err)
        return
    } else {
        console.log("Lecture du fichier test : ")
        console.log(data.toString());
    }
})