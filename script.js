/*======================================
LOADER
======================================*/

window.addEventListener("load", () => {

const loader = document.querySelector(".loader");

setTimeout(() => {

loader.style.opacity = "0";

loader.style.visibility = "hidden";

},800);

});

/*======================================
AOS
======================================*/

AOS.init({

duration:1000,

once:true,

offset:120

});

/*======================================
TYPING EFFECT
======================================*/

new Typed(".typing",{

strings:[

"Software Developer",

"Power BI Developer",

"Data Analyst",

"Graphic Designer",

"Web Developer"

],

typeSpeed:70,

backSpeed:40,

backDelay:1800,

loop:true

});

/*======================================
DARK MODE
======================================*/

const toggle=document.getElementById("theme-toggle");

toggle.onclick=()=>{

document.body.classList.toggle("light-mode");

if(document.body.classList.contains("light-mode")){

toggle.innerHTML='<i class="fas fa-sun"></i>';

}else{

toggle.innerHTML='<i class="fas fa-moon"></i>';

}

};

/*======================================
CUSTOM CURSOR
======================================*/

const cursor=document.querySelector(".cursor");

document.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px";

cursor.style.top=e.clientY+"px";

});

/*======================================
SCROLL PROGRESS
======================================*/

window.addEventListener("scroll",()=>{

const scrollTop=document.documentElement.scrollTop;

const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

const progress=(scrollTop/height)*100;

document.querySelector(".progress-bar").style.width=progress+"%";

});
/*======================================
MOBILE MENU
======================================*/

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {

        menuBtn.innerHTML = '<i class="fas fa-times"></i>';

    } else {

        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';

    }

});

/*======================================
CLOSE MENU ON LINK CLICK
======================================*/

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';

    });

});

/*======================================
BACK TO TOP BUTTON
======================================*/

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.style.display = "flex";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/*======================================
SMOOTH SCROLL
======================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

/*======================================
ACTIVE NAV LINK
======================================*/

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});
/*======================================
NAVBAR SHADOW
======================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.25)";

    } else {

        header.style.boxShadow = "none";

    }

});

/*======================================
REVEAL ANIMATION
======================================*/

const revealItems = document.querySelectorAll(
    ".card,.skill-card,.project-card,.timeline-item,.certificate-card,.resume-box,.info-box"
);

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("fade-up");

        }

    });

}, {
    threshold: 0.15
});

revealItems.forEach(item => {

    revealObserver.observe(item);

});

/*======================================
CONTACT FORM
======================================*/

const contactForm = document.querySelector(".contact-form form");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("Thank you! Your message has been received.");

        contactForm.reset();

    });

}

/*======================================
CURRENT YEAR
======================================*/

const copyright = document.querySelector(".copyright");

if (copyright) {

    copyright.innerHTML =
        `© ${new Date().getFullYear()} Shubhi Sharma. All Rights Reserved.`;

}

/*======================================
PRELOAD IMAGES
======================================*/

[
    "images/profile.jpg",
    "images/project1.png",
    "images/project2.png",
    "images/project3.png",
    "images/project4.png"
].forEach(src => {

    const img = new Image();

    img.src = src;

});

/*======================================
CONSOLE MESSAGE
======================================*/

console.log("%cWelcome to Shubhi Sharma's Portfolio 🚀",
"color:#c084fc;font-size:18px;font-weight:bold;");
