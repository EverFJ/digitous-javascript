var btn = document.getElementById("submit");
var adminBlock = document.getElementById("admin-block");

// console.log(btn);
// console.log(adminBlock);

btn.onclick = function() {
    var log = document.getElementById("login").value;
    var pass = document.getElementById("password").value;
    // console.log(log, pass);
    if (pass === "" || log === "") {
        alert("Enter login and password")
    } else if (log === "admin" && pass === "admin") {
        adminBlock.style.display = "block";
    } else {
        adminBlock.style.display = "none"
    }
};