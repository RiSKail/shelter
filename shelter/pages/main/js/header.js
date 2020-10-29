var header = document.querySelector("#myHeader");
var x = document.querySelector("#myLinks");
var btn = document.querySelector(".dropbtn");
var html = document.documentElement;
var flag = false;

function removeAtribute() {
    x.classList.remove('myLinks-active');
    html.removeAttribute('class');
    flag = false;
    btn.style.position = null;
    btn.style.transform = null;
    x.style.display = "none";
}

function dropMenu() {
    if (flag !== false) {
        x.classList.remove('myLinks-active');
        html.removeAttribute('class');
        flag = false;
        btn.style.transform = "rotate(0deg)";
        btn.style.position = null;
        //x.style.animation = "animate2 0.8s";
        // x.style.animation = "animateBtnWidth2 0.8s";
    } else {
        flag = true;
        //x.style.animation = "animate 0.8s";
        // x.style.display = "block";
        // x.style.margin = "0 320px 0 0";
        // x.style.animation = "animateBtnWidth 0.8s";
        btn.style.transform = "rotate(90deg)";
        btn.style.position = "fixed";
        btn.style.right = "5px";
        x.classList.add('myLinks-active');
        html.classList.add('html-active');
    }
}


window.onresize = function (event) {
    if (window.outerWidth > 680) {
        removeAtribute();
    }
};

document.querySelector(".dropbtn").addEventListener("click", dropMenu);
html.onclick = function (event) {
    if (event.target === html) {
        removeAtribute();
    }
};
