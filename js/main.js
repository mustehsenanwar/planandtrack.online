/**
 * Main JavaScript for Plan & Track SaaS Landing Page
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Handle main email form submission
    const emailForm = document.getElementById('emailForm');
    if (emailForm) {
        emailForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            // Here you would typically send this email to your backend
            alert('Thank you for your interest! We will contact you soon.');
            this.reset();
        });
    }

    // Handle footer newsletter form submission
    const footerForm = document.querySelector('footer form');
    if (footerForm) {
        footerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('email-footer').value;
            // Here you would typically send this email to your backend
            alert('Thank you for subscribing to our newsletter!');
            this.reset();
        });
    }

    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                document.querySelector(targetId).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Initialize scroll-based elements
    initScrollBasedEffects();
});

// Handle scroll-based elements (navbar transparency, scroll-to-top button)
function initScrollBasedEffects() {
    const navbar = document.getElementById('navbar');
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    
    if (navbar && scrollToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                navbar.classList.add('bg-white', 'bg-opacity-70', 'backdrop-filter', 'backdrop-blur-lg', 'shadow-md');
                navbar.classList.remove('bg-transparent');
                scrollToTopBtn.classList.remove('opacity-0', 'invisible');
                scrollToTopBtn.classList.add('opacity-100', 'visible');
            } else {
                navbar.classList.remove('bg-white', 'bg-opacity-70', 'backdrop-filter', 'backdrop-blur-lg', 'shadow-md');
                navbar.classList.add('bg-transparent');
                scrollToTopBtn.classList.add('opacity-0', 'invisible');
                scrollToTopBtn.classList.remove('opacity-100', 'visible');
            }
        });
        
        // Scroll to top when the button is clicked
        scrollToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
} 