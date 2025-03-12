// Navigation handling
function initializeNavigation() {
    const sections = {
        home: document.getElementById('home'),
        news: document.getElementById('news'),
        research: document.getElementById('research'),
        advising: document.getElementById('advising'),
        teaching: document.getElementById('teaching'),
        positions: document.getElementById('positions')
    };

    document.querySelectorAll('.nav a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = e.target.getAttribute('href').substring(1);
            
            // Hide all sections
            Object.values(sections).forEach(s => {
                if (s) s.style.display = 'none';
            });
            
            // Show selected section
            if (sections[section]) {
                sections[section].style.display = 'block';
            }
        });
    });
}

// Add smooth scrolling
function addSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeNavigation();
    addSmoothScrolling();
}); 