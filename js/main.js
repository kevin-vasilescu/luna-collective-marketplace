// Scroll to section smoothly
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Close cart when clicking outside
document.addEventListener('click', function(event) {
    const cartSidebar = document.getElementById('cartSidebar');
    const cartIcon = document.querySelector('.cart-icon');
    
    if (!cartSidebar.contains(event.target) && !cartIcon.contains(event.target)) {
        cartSidebar.classList.remove('active');
    }
});

// Handle responsive menu
window.addEventListener('resize', function() {
    // Adjust layout for different screen sizes
    const cartSidebar = document.getElementById('cartSidebar');
    if (window.innerWidth > 768) {
        cartSidebar.classList.remove('active');
    }
});

// Log analytics (placeholder)
function logEvent(eventName, eventData) {
    console.log(`Event: ${eventName}`, eventData);
}

// Track page views
window.addEventListener('load', function() {
    logEvent('page_view', {
        page: 'marketplace_home',
        timestamp: new Date()
    });
});