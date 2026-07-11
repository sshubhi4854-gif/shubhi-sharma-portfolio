// 1. Dynamic Typing Animation (Hero Section)
document.addEventListener("DOMContentLoaded", function () {
    new Typed("#typing-effect", {
        strings: [
            "Software Developer", 
            "Data Analyst", 
            "Front-End Developer", 
            "Graphic Designer"
        ],
        typeSpeed: 60,
        backSpeed: 40,
        loop: true
    });
});

// 2. Premium Light/Dark Theme Switcher Logic
const themeToggleBtn = document.getElementById("theme-toggle");
const sunIcon = document.getElementById("sun-icon");
const moonIcon = document.getElementById("moon-icon");

// System parameters verification or previous settings check
const currentTheme = localStorage.getItem("theme") || "dark";
if (currentTheme === "light") {
    document.body.classList.remove("dark-theme");
    sunIcon.style.display = "none";
    moonIcon.style.display = "inline-block";
}

themeToggleBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");
    
    let theme = "light";
    if (document.body.classList.contains("dark-theme")) {
        theme = "dark";
        sunIcon.style.display = "inline-block";
        moonIcon.style.display = "none";
    } else {
        sunIcon.style.display = "none";
        moonIcon.style.display = "inline-block";
    }
    localStorage.setItem("theme", theme);
});

// 3. Active Link State handling on Scroll
const sections = document.querySelectorAll("section, header");
const navLinks = document.querySelectorAll(".nav-links li a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 180) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((a) => {
        a.classList.remove("active");
        if (a.getAttribute("href").includes(current)) {
            a.classList.add("active");
        }
    });
});
