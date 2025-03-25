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
    
    // Pricing toggle functionality
    initPricingToggle();
});

/**
 * Initialize the pricing toggle between monthly and annual plans
 */
function initPricingToggle() {
    const monthlyButton = document.getElementById('monthly-pricing');
    const annualButton = document.getElementById('annual-pricing');
    
    if (!monthlyButton || !annualButton) return;
    
    // Monthly prices (original)
    const monthlyPrices = {
        starter: 'Free',
        pro: '$49',
        proOriginal: '$99',
        enterprise: '$149',
        enterpriseOriginal: '$299'
    };
    
    // Annual prices (20% discount shown monthly)
    const annualPrices = {
        starter: 'Free',
        pro: '$39',
        proOriginal: '$79',
        enterprise: '$119',
        enterpriseOriginal: '$239'
    };
    
    // Add active state to monthly by default
    monthlyButton.classList.add('active-pricing');
    
    // Price elements
    const starterPrice = document.querySelector('[data-price="starter"]');
    const proPrice = document.querySelector('[data-price="pro"]');
    const proOriginal = document.querySelector('[data-price="pro-original"]');
    const enterprisePrice = document.querySelector('[data-price="enterprise"]');
    const enterpriseOriginal = document.querySelector('[data-price="enterprise-original"]');
    
    // Period text elements
    const periodTexts = document.querySelectorAll('.pricing-period');
    
    // Handle monthly button click
    monthlyButton.addEventListener('click', function() {
        if (this.classList.contains('active-pricing')) return;
        
        // Update UI
        annualButton.classList.remove('active-pricing');
        this.classList.add('active-pricing');
        
        // Update prices with animation
        updatePrices(monthlyPrices);
        
        // Update period text
        periodTexts.forEach(el => {
            el.textContent = '/month';
        });
    });
    
    // Handle annual button click
    annualButton.addEventListener('click', function() {
        if (this.classList.contains('active-pricing')) return;
        
        // Update UI
        monthlyButton.classList.remove('active-pricing');
        this.classList.add('active-pricing');
        
        // Update prices with animation
        updatePrices(annualPrices);
        
        // Update period text - still show /month since discount is calculated monthly
        periodTexts.forEach(el => {
            el.textContent = '/month (billed annually)';
        });
    });
    
    /**
     * Update pricing with smooth animation
     */
    function updatePrices(prices) {
        if (starterPrice) animatePrice(starterPrice, prices.starter);
        if (proPrice) animatePrice(proPrice, prices.pro);
        if (proOriginal) animatePrice(proOriginal, prices.proOriginal);
        if (enterprisePrice) animatePrice(enterprisePrice, prices.enterprise);
        if (enterpriseOriginal) animatePrice(enterpriseOriginal, prices.enterpriseOriginal);
    }
    
    /**
     * Animate price change
     */
    function animatePrice(element, newPrice) {
        // Add fade-out class
        element.classList.add('price-fade');
        
        // Change price after fade out
        setTimeout(() => {
            element.textContent = newPrice;
            element.classList.remove('price-fade');
        }, 200);
    }
} 