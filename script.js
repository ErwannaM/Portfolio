// Reveal animations on scroll
function reveal() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add("active");
        }
    });
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

// Header state on scroll
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 20) {
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,0.05)";
        header.style.padding = "10px 0";
    } else {
        header.style.boxShadow = "none";
        header.style.padding = "15px 0";
    }
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Close mobile menu on link click
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const element = document.querySelector(targetId);
        if (element) {
            const offset = 80;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});
