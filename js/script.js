document.addEventListener('DOMContentLoaded', () => {

    // --- DYNAMIC NAVIGATION BAR ---
    // Hides the navbar on scroll down and shows it on scroll up.
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) { // Add glass class only after some scroll
            header.classList.add('glass');
        } else {
            header.classList.remove('glass');
        }

        if (lastScrollY < window.scrollY) {
            header.classList.add('hidden');
        } else {
            header.classList.remove('hidden');
        }
        lastScrollY = window.scrollY;
    });

    // --- RESPONSIVE HAMBURGER MENU ---
    // Toggles the mobile navigation menu.
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // --- SCROLL-TRIGGERED FADE-IN ANIMATIONS ---
    // Uses Intersection Observer for better performance.
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Animate only once
            }
        });
    }, {
        root: null, // observes intersections relative to the viewport
        threshold: 0.1, // trigger when 10% of the element is visible
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
    
    // --- CONTACT FORM ---
    // Prevents default submission. For a real project, you would
    // connect this to a backend service like EmailJS, Formspree, or a custom server.
    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! This is a demo form.');
        contactForm.reset();
    });

});