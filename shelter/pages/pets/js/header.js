window.onscroll = function () { myFunction() };

var header = document.querySelector("#myHeader");
var x = document.querySelector("#myLinks");
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset >= 20 && x.style.display !== "block") {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

function dropMenu() {
    if (x.style.display === "block") {
        x.style.display = "none";
        x.style.opacity = "0";

        if (window.pageYOffset >= 20) {
            header.classList.add("sticky");
        }
    } else {
        header.classList.remove("sticky");
        x.style.display = "block";
        x.style.animation = "animate 0.8s";
        x.style.opacity = "1";

    }
}

window.onresize = function (event) {
    if (window.outerWidth > 782) {
        x.style.display = "none";
    }
};

document.querySelector(".dropbtn").addEventListener("click", dropMenu);