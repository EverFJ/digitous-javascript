var btn = document.getElementById("submit");
var adminBlock = document.getElementById("admin-block");
var commentBtn = document.querySelector("#comment-btn");

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

commentBtn.addEventListener("click", () => {
    let comment = document.querySelector("#comment-input").value;
    document.querySelector("#comment-p").textContent = comment;
})