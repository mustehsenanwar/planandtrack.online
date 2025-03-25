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

    // Add smooth scrolling
    initSmoothScrolling();
    
    // Initialize scroll-based elements
    initScrollBasedEffects();

    // Form submission handler for contact collection
    const signupForm = document.getElementById('signupForm');
    const formMessage = document.getElementById('formMessage');
    
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            
            const name = nameInput.value.trim();
            const email = emailInput.value.trim();
            
            if (!name || !email) {
                showMessage('Please fill in all fields', 'error');
                return;
            }
            
            // Disable the submit button and show loading state
            const submitButton = signupForm.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.innerHTML;
            submitButton.disabled = true;
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> PROCESSING...';
            
            // Prepare the data
            const data = {
                name: name,
                email: email
            };
            
            // Send the data to the API
            fetch('https://test.dubaicv.ae/api/collect-contact/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
                mode: 'cors',
                credentials: 'include'
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Show success message
                showMessage('Thanks! Your early access has been secured.', 'success');
                
                // Clear the form
                nameInput.value = '';
                emailInput.value = '';
            })
            .catch(error => {
                // Show error message
                showMessage('There was a problem with your submission. Please try again.', 'error');
                console.error('Error:', error);
            })
            .finally(() => {
                // Re-enable the submit button
                submitButton.disabled = false;
                submitButton.innerHTML = originalButtonText;
            });
        });
    }
});

// Helper function to show messages
function showMessage(message, type) {
    const formMessage = document.getElementById('formMessage');
    if (formMessage) {
        formMessage.textContent = message;
        formMessage.classList.remove('hidden', 'text-green-500', 'text-red-500');
        
        if (type === 'success') {
            formMessage.classList.add('text-green-500');
        } else {
            formMessage.classList.add('text-red-500');
        }
        
        // Hide the message after 5 seconds
        setTimeout(() => {
            formMessage.classList.add('hidden');
        }, 5000);
    }
}

// Function to initialize smooth scrolling
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return; // Skip if it's just "#"

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // If it's the home section, scroll all the way to top
                if (targetId === '#home') {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                } else {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80, // Account for fixed header
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// Function to initialize scroll-based effects
function initScrollBasedEffects() {
    const navbar = document.getElementById('navbar');
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    // Handle navbar transparency and scroll to top button visibility
    window.addEventListener('scroll', function () {
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
    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
} 