const pet = [
    {
        "name": "Jennifer",
        "img": "../../assets/images/slider/jennifer.jpg",
        "type": "Dog",
        "breed": "Labrador",
        "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
        "age": "2 months",
        "inoculations": ["none"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Sophia",
        "img": "../../assets/images/slider/katrine2.jpg",
        "type": "Dog",
        "breed": "Shih tzu",
        "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
        "age": "1 month",
        "inoculations": ["parvovirus"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Woody",
        "img": "../../assets/images/slider/woody.jpg",
        "type": "Dog",
        "breed": "Golden Retriever",
        "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
        "age": "3 years 6 months",
        "inoculations": ["adenovirus", "distemper"],
        "diseases": ["right back leg mobility reduced"],
        "parasites": ["none"]
    },
    {
        "name": "Scarlett",
        "img": "../../assets/images/slider/scarlet.jpg",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
        "age": "3 months",
        "inoculations": ["parainfluenza"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Katrine",
        "img": "../../assets/images/slider/katrine.jpg",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
        "age": "6 months",
        "inoculations": ["panleukopenia"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Timmy",
        "img": "../../assets/images/slider/timmy.jpg",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
        "age": "2 years 3 months",
        "inoculations": ["calicivirus", "viral rhinotracheitis"],
        "diseases": ["kidney stones"],
        "parasites": ["none"]
    },
    {
        "name": "Freddie",
        "img": "../../assets/images/slider/katrine3.jpg",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
        "age": "2 months",
        "inoculations": ["rabies"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Charly",
        "img": "../../assets/images/slider/charly.jpg",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
        "age": "8 years",
        "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
        "diseases": ["deafness", "blindness"],
        "parasites": ["lice", "fleas"]
    },
    {
        "name": "Charly",
        "img": "../../assets/images/slider/charly.jpg",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
        "age": "8 years",
        "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
        "diseases": ["deafness", "blindness"],
        "parasites": ["lice", "fleas"]
    }
];

var list = document.querySelector('.our-friends__list');


var modal = document.querySelector('#myModal');
var body = document.querySelector('body');
var span = document.querySelector(".close");
var modalText = document.querySelector('.modal-text');
var modalImg = document.querySelector('.modal-text img');
var modalTitle = document.querySelector('.pet-info__title');
var modalText = document.querySelector('.pet-info__text');
var modalList = document.querySelector('.pet-info__list');
var listNums = document.querySelector('.our-friend__nums');
var leftDbArrow = document.querySelector('.l-db-arrow__btn');
var leftArrow = document.querySelector('.l-arrow__btn');
var rightDbArrow = document.querySelector('.r-db-arrow__btn');
var rightArrow = document.querySelector('.r-arrow__btn');


function listLoad(start) {
    list.innerHTML = "";
    let i = start;
    while (pet[i]) {
        let newItem = document.createElement("li");
        newItem.className = "our-friends__card";
        newItem.innerHTML = "<img src=\"" + pet[i].img + "\" width=\"270\" alt=\"" + pet[i].name + "\"><h2>" + pet[i].name + "</h2><a class=\"our-friends__btn\">Learn more</a>";
        list.appendChild(newItem);
        i++;
        if (i - start >= 8) break;
    }
    updateEvent(start);
}

function updateStateBtn(temp) {
    if (temp == Math.ceil(pet.length / 8)) {
        leftDbArrow.disabled = false;
        leftArrow.disabled = false;
        rightDbArrow.disabled = true;
        rightArrow.disabled = true;
    }
    if (temp < Math.ceil(pet.length / 8) && temp > 1) {
        leftDbArrow.disabled = false;
        leftArrow.disabled = false;
        rightDbArrow.disabled = false;
        rightArrow.disabled = false;
    }
    if (temp == 1) {
        leftDbArrow.disabled = true;
        leftArrow.disabled = true;
        rightDbArrow.disabled = false;
        rightArrow.disabled = false;
    }
}

rightArrow.addEventListener("click", function () {
    let count = +document.querySelector('.our-friend__nums .active').innerText;
    listLoad(count * 8);
    document.querySelector('.our-friend__nums .active').removeAttribute("class");
    document.querySelectorAll('.our-friend__nums a')[count].className = "active";
    updateStateBtn(count + 1);
});

rightDbArrow.addEventListener("click", function () {
    let count = +document.querySelector('.our-friend__nums a:last-child').innerText;
    listLoad((count - 1) * 8);
    document.querySelector('.our-friend__nums .active').removeAttribute("class");
    document.querySelectorAll('.our-friend__nums a')[(count - 1)].className = "active";
    updateStateBtn(count);
});

leftDbArrow.addEventListener("click", function () {
    let count = +document.querySelector('.our-friend__nums a:first-child').innerText;
    listLoad((count - 1) * 8);
    document.querySelector('.our-friend__nums .active').removeAttribute("class");
    document.querySelectorAll('.our-friend__nums a')[(count - 1)].className = "active";
    updateStateBtn(count);
});

leftArrow.addEventListener("click", function () {
    let count = +document.querySelector('.our-friend__nums .active').innerText;
    listLoad((count - 2) * 8);
    document.querySelector('.our-friend__nums .active').removeAttribute("class");
    document.querySelectorAll('.our-friend__nums a')[count - 2].className = "active";
    updateStateBtn(count - 1);
});


if (pet.length >= 8) {
    let count = Math.ceil(pet.length / 8);
    for (let i = 1; i < count + 1; i++) {
        let num = document.createElement('a');
        if (i == 1) {
            num.className = "active";
        }
        num.innerHTML = i;
        listNums.appendChild(num);
        num.addEventListener("click", function () {
            let temp = +this.innerText;
            document.querySelector('.our-friend__nums .active').removeAttribute("class");
            this.className = "active";
            listLoad((temp - 1) * 8);
            updateStateBtn(temp);
        });
    }
    listLoad(0);
} else {
    listLoad(0);
}

function updateEvent(start) {
    let linkItems = document.querySelectorAll('.our-friends__btn');
    for (let i = 0; i < linkItems.length; i++) {
        linkItems[i].addEventListener("click", function () {
            modal.style.display = "flex";
            modalImg.src = pet[start + i].img;
            modalImg.alt = pet[start + i].name;
            body.style.overflow = "hidden";
            modalTitle.innerHTML = "<h3>" + pet[start + i].name + "</h3><h4>" + pet[start + i].type + " - " + pet[start + i].breed + "</h4>";
            modalText.innerHTML = "<p>" + pet[start + i].description + "</p>";
            modalList.innerHTML = "<ul><li><b>Age:</b> " + pet[start + i].age + "</li><li><b>Inoculations:</b> " + pet[start + i].inoculations + "</li><li><b>Diseases:</b> " + pet[start + i].diseases + "</li><li><b>Parasites:</b> " + pet[start + i].parasites + "</li></ul>";
        });
    }
}


span.onclick = function () {
    modal.style.display = "none";
    modalImg.src = "#";
    modalImg.alt = "#";
    modalTitle.innerHTML = "";
    modalText.innerHTML = "";
    modalList.innerHTML = "";
    body.removeAttribute('style');
};

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        modalImg.src = "#";
        modalImg.alt = "#";
        modalTitle.innerHTML = "";
        modalText.innerHTML = "";
        modalList.innerHTML = "";
        body.removeAttribute('style');
    }
};