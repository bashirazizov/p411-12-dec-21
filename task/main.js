let nameInput = document.querySelector("#name");
let surnameInput = document.querySelector("#surname");
let button = document.querySelector("#button");
let inputs = document.querySelector("#inputs");
let welcome = document.querySelector("#welcome");


if (localStorage.getItem("name") != null) {
    inputs.classList.add("d-none")
    welcome.innerHTML = "Salam, "+localStorage.getItem("name");
}

button.addEventListener("click", function () {
    if (nameInput.value == ""||surnameInput.value == "") {
        alert("please fill fields.");
        return;
    }
    localStorage.setItem("name",nameInput.value+" "+surnameInput.value);

    inputs.classList.add("d-none")
    welcome.innerHTML = "Salam, "+localStorage.getItem("name");
})