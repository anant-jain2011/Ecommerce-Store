let str = "MyPw123"
let inp = document.getElementById("inp").value;
let btn = document.getElementById("btn");
let para = document.getElementById("para");

function logic() {
    if (inp == str) {
        para.innerHTML = "Anant Jain"
    }
}

document.getElementById("inp").onchange = logic();
alert("oye ho gyi")