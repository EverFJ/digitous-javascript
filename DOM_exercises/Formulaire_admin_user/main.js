document.cookie = "Mon password est 1234"
/* <script>alert(window.password) </script> */
var login = "";
var password = "";
var btn = document.getElementById("submit");
var adminBlock = document.getElementById("admin-block");
var commentBtn = document.querySelector("#comment-btn");
var commentPar = document.querySelector("#comment-p");

// console.log(btn);
// console.log(adminBlock);

btn.onclick = function() {
    login = document.getElementById("login").value;
    password = document.getElementById("password").value;
    // console.log(log, pass);
    if (password === "" || login === "") {
        alert("Enter login and password")
    } else if (login === "admin" && password === "admin") {
        adminBlock.style.display = "block";
    } else {
        adminBlock.style.display = "none"
    }
    console.log(login, password)
};

commentBtn.addEventListener("click", () => {
    let comment = document.querySelector("#comment-input").value;
    // commentPar.textContent = comment;
    document.write(comment);
})