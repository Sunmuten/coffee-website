// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Get all navigation buttons
    const navButtons = document.querySelectorAll('.nav-btn');
    
    // Get section containers
    const b2cSection = document.getElementById('b2c-section');
    const b2bSection = document.getElementById('b2b-section');
    
    // Add click event listeners to navigation buttons
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Get the section to show from data attribute
            const sectionToShow = this.getAttribute('data-section');
            
            // Remove active class from all buttons
            navButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Show/hide sections based on button clicked
            if (sectionToShow === 'b2c') {
                b2cSection.classList.remove('hidden');
                b2bSection.classList.add('hidden');
            } else if (sectionToShow === 'b2b') {
                b2cSection.classList.add('hidden');
                b2bSection.classList.remove('hidden');
            }
            
            // Scroll to top smoothly
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });
    
    // Optional: Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Optional: Log when page is ready
    console.log('咖啡網站已載入完成！');
});
