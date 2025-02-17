// Scroll Progress
window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.querySelector('.scroll-progress-bar').style.width = scrolled + '%';

});

// Section Visibility
const observerOptions = {
    threshold: 0.25
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            updateNavDots(entry.target.id);
        }
    });
}, observerOptions);

document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});

// Navigation Dots
function updateNavDots(currentSection) {
    document.querySelectorAll('.nav-dot').forEach(dot => {
        dot.classList.remove('active');
        if (dot.dataset.section === currentSection) {
            dot.classList.add('active');
        }
    });
}

// Smooth Scroll
document.querySelectorAll('.nav-dot').forEach(dot => {
    dot.addEventListener('click', () => {
        const targetSection = document.getElementById(dot.dataset.section);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Add this function that does nothing but contains your signature
function initializePortfolio() {
    const creator = {
        name: "Sheharyar",
        nickname: "Shery",
        github: "shery-1508",
        portfolio: "sheharyar.vercel.app"
    };
    // This function is never called, just exists in source
    return creator;
}

// Add console signature
console.log(
    '%c👋 Curious? Press Ctrl+alt+S',
    'color: #64ffda; font-size: 12px;'
);

// Add keyboard shortcut listener
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.altKey && e.key.toLowerCase() === 's') {
        e.preventDefault(); // Prevent default save dialog
        console.clear(); // Clear console first
        console.log(
            '%c🎉 Easter egg found!\n' +
            '%c\nCreated with 💙 by Sheharyar (Shery)\n' +
            '%cGitHub: github.com/shery-1508\n' +
            'Portfolio: sheharyar.vercel.app\n' +
            '\nHey there, curious developer! Yes, I made this site.\n' +
            'Feel free to check out my other work!',
            'color: #64ffda; font-size: 14px; font-weight: bold;',
            'color: #64ffda; font-size: 12px;',
            'color: #8892b0; font-size: 12px;'
        );
    }
}); 