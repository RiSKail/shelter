var width = 340; // ширина изображения
var count = 1; // количество изображений
var tempN = 3; // количество изображений по умолчанию
var temp = 3;
var list = document.querySelector('.our-friends-list');
var listElems = document.querySelectorAll(".our-friends__card");
var position = 0; // текущий сдвиг влево

var nextBtn = document.querySelector(".r-arrow__btn");
var prevBtn = document.querySelector(".l-arrow__btn");
var next320 = document.querySelector(".our-friends-320__arrows .r-arrow__btn");
var prev320 = document.querySelector(".our-friends-320__arrows .l-arrow__btn");

function updateParam() {
    list.style.marginLeft = "0";
    position = 0;
    prevBtn.disabled = true;
    prev320.disabled = true;
    nextBtn.disabled = false;
    next320.disabled = false;
    if (window.outerWidth <= 1260) {
        width = 310;
        temp = 2;
        tempN = 2;
    }
    if (window.outerWidth > 1260) {
        width = 340;
        temp = 3;
        tempN = 3;
    }
    if (window.outerWidth <= 740) {
        width = 310;
        temp = 1;
        tempN = 1;
    }
}

function next() {
    prevBtn.disabled = false;
    prev320.disabled = false;
    position = Math.max(position - width * count, -width * (listElems.length - count));
    list.style.marginLeft = position + "px";
    temp++;
    if (listElems.length == temp) {
        nextBtn.disabled = true;
        next320.disabled = true;
    } else {
        nextBtn.disabled = false;
        next320.disabled = false;
    }
}

function prev() {
    nextBtn.disabled = false;
    next320.disabled = false;
    position = Math.min(position + width * count, 0);
    list.style.marginLeft = position + "px";
    temp--;
    if (temp == tempN) {
        prevBtn.disabled = true;
        prev320.disabled = true;
    } else {
        prevBtn.disabled = false;
        prev320.disabled = false;
    }
}

nextBtn.addEventListener("click", next);
prevBtn.addEventListener("click", prev);
next320.addEventListener("click", next);
prev320.addEventListener("click", prev);

window.onresize = function () {
    updateParam();
};

window.onload = function () {
    updateParam();
};