// Mobile menu toggle
const toggle = document.getElementById('menuToggle');
const menu = document.getElementById('mainMenu');

toggle.addEventListener('click', () => {
    menu.classList.toggle('open');
    const icon = toggle.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// Close menu on link click
menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('open');
        toggle.querySelector('i').classList.add('fa-bars');
        toggle.querySelector('i').classList.remove('fa-times');
    });
});

// Fade-in on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add('visible');
            observer.unobserve(e.target);
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));