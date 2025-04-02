// Mobile Menu Toggle
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    content.classList.toggle('blur-active');
});

// Scrolling Animation
const fadeElems = document.querySelectorAll('.fade-in');

function checkFade() {
    fadeElems.forEach(elem => {
        const elemTop = elem.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight * 0.8;
        
        if (elemTop < triggerPoint) {
            elem.classList.add('active');
        }
    });
}

// Form submission animation
const contactForm = document.getElementById('contact-form');
const sendBtn = document.querySelector('.send-btn');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Check if form is valid
    if (contactForm.checkValidity()) {
        // Show success animation
        sendBtn.classList.add('success');
        
        // Reset form after delay
        setTimeout(() => {
            contactForm.reset();
            setTimeout(() => {
                sendBtn.classList.remove('success');
            }, 2000);
        }, 1500);
    } else {
        // Trigger browser's default validation UI
        contactForm.reportValidity();
    }
});

// Initialize
window.addEventListener('load', checkFade);
window.addEventListener('scroll', checkFade);

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        }
    });
});

// Initial animation trigger
setTimeout(() => {
    document.querySelectorAll('.hero-content > *').forEach(el => {
        el.classList.add('active');
    });
}, 300);
