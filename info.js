var tablinks = document.getElementsByClassName("tablinks");
var tabcontents = document.getElementsByClassName("tabcontents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("activelink");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("activetab");
    }
    event.currentTarget.classList.add("activelink");
    document.getElementById(tabname).classList.add("activetab");
}

var submit = document.querySelector("#submit");
var form = document.getElementById("form");
submit.onclick = function () {
    form.action = "https://httpbin.org/post";
    form.method = "POST";
    form.target = "_blank";
};

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200";
}