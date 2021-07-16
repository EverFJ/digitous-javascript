var btn = document.getElementById("submit");
var adminBlock = document.getElementById("admin-block");

var isAdmin;

// console.log(btn);
// console.log(adminBlock);

btn.onclick = function() {
    var log = document.getElementById("login").value;
    var pass = document.getElementById("password").value;
    // console.log(log, pass);
    if (pass === "" || log === "") {
        alert("Enter login and password")
    } else if (log === "admin" && pass === "admin") {
        isAdmin = true;
        adminBlock.style.display = "block";
    } else {
        isAdmin = false;
    }
};

if (isAdmin != true) {
    adminBlock.style.display = "none";
} else {
    adminBlock.style.display = "block";
}