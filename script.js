/* ===========================
   LOADER
=========================== */

window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
    loader.style.opacity = "0";

    setTimeout(() => {
        loader.style.display = "none";
    }, 500);
});

/* ===========================
   DARK MODE
=========================== */

const themeBtn = document.getElementById("theme-toggle");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");

    const icon = themeBtn.querySelector("i");

    if (document.body.classList.contains("light")) {

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

    } else {

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

    }

});

/* ===========================
   TYPING EFFECT
=========================== */

const words = [

"Software Developer",

"Python Developer",

"Power BI Developer",

"Front-End Developer",

"Graphic Designer"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.querySelector(".typing");

function typeEffect(){

    const current = words[wordIndex];

    if(!deleting){

        typing.textContent = current.substring(0,charIndex++);

        if(charIndex > current.length){

            deleting = true;

            setTimeout(typeEffect,1500);

            return;

        }

    }

    else{

        typing.textContent = current.substring(0,charIndex--);

        if(charIndex < 0){

            deleting = false;

            wordIndex++;

            if(wordIndex >= words.length){

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect,deleting?50:100);

}

typeEffect();

/* ===========================
   CUSTOM CURSOR
=========================== */

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px";

cursor.style.top=e.clientY+"px";

});

/* ===========================
   BACK TO TOP
=========================== */

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};
/* ===========================
   SCROLL PROGRESS BAR
=========================== */

const progressBar = document.querySelector(".progress-bar");

window.addEventListener("scroll", () => {

const totalHeight =
document.documentElement.scrollHeight -
window.innerHeight;

const progress =
(window.pageYOffset / totalHeight) * 100;

progressBar.style.width = progress + "%";

});

/* ===========================
   ACTIVE NAVBAR LINK
=========================== */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const sectionTop = section.offsetTop - 150;

const sectionHeight = section.clientHeight;

if (pageYOffset >= sectionTop) {

current = section.getAttribute("id");

}

});

navLinks.forEach(link => {

link.classList.remove("active");

if (link.getAttribute("href") === "#" + current) {

link.classList.add("active");

}

});

});

/* ===========================
   MOBILE MENU
=========================== */

const menuBtn = document.querySelector(".menu-btn");

const navMenu = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

navMenu.classList.toggle("show");

});

/* ===========================
   SCROLL REVEAL ANIMATION
=========================== */

const revealElements = document.querySelectorAll(

".hero,.about,.skills,.projects,.education,.contact,.project-card,.skill-card,.timeline-item"

);

function revealOnScroll() {

const trigger = window.innerHeight * 0.85;

revealElements.forEach(el => {

const top = el.getBoundingClientRect().top;

if (top < trigger) {

el.classList.add("show");

}

});

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

/* ===========================
   STATS COUNTER
=========================== */

const counters = document.querySelectorAll(".card h2");

const speed = 120;

const animateCounter = () => {

counters.forEach(counter => {

const target = parseInt(counter.innerText);

let count = 0;

const update = () => {

const increment = Math.ceil(target / speed);

count += increment;

if (count < target) {

counter.innerText = count + "+";

requestAnimationFrame(update);

} else {

counter.innerText = target + "+";

}

};

update();

});

};

animateCounter();

/* ===========================
   SMOOTH SCROLL
=========================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function (e) {

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior: "smooth"

});

});

});

/* ===========================
   GLASS HOVER EFFECT
=========================== */

const cards = document.querySelectorAll(

".project-card,.skill-card,.card,.info-box"

);

cards.forEach(card => {

card.addEventListener("mousemove", e => {

const rect = card.getBoundingClientRect();

const x = e.clientX - rect.left;

const y = e.clientY - rect.top;

card.style.background =

`radial-gradient(circle at ${x}px ${y}px,
rgba(59,130,246,.18),
rgba(255,255,255,.05))`;

});

card.addEventListener("mouseleave", () => {

card.style.background = "rgba(255,255,255,.05)";

});

});

/* ===========================
   CONSOLE MESSAGE
=========================== */

console.log(
"%cDesigned & Developed by Shubhi Sharma",
"color:#06b6d4;font-size:18px;font-weight:bold;"
);
