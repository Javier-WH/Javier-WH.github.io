document.addEventListener('DOMContentLoaded', () => {
    // 1. Navigation Scrolled State
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Typing Effect for Hero Section
    const roles = ["Ingeniero de Software", "Desarrollador Web", "Diseñador Web"];
    let currentRoleIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    const roleElement = document.querySelector('.hero-role');
    
    function typeEffect() {
        const currentRole = roles[currentRoleIndex];
        
        if (isDeleting) {
            roleElement.textContent = currentRole.substring(0, currentCharIndex - 1);
            currentCharIndex--;
            typingSpeed = 50;
        } else {
            roleElement.textContent = currentRole.substring(0, currentCharIndex + 1);
            currentCharIndex++;
            typingSpeed = 150;
        }

        // Add blinking cursor effect manually if desired, but here we just type
        roleElement.innerHTML += '<span style="border-right: 2px solid var(--accent); padding-right: 4px; animation: blink 1s infinite;"></span>';

        if (!isDeleting && currentCharIndex === currentRole.length) {
            isDeleting = true;
            typingSpeed = 2000; // Pause at the end
        } else if (isDeleting && currentCharIndex === 0) {
            isDeleting = false;
            currentRoleIndex = (currentRoleIndex + 1) % roles.length;
            typingSpeed = 500; // Pause before typing next word
        }
        
        setTimeout(typeEffect, typingSpeed);
    }
    
    // Start typing effect
    setTimeout(typeEffect, 1000);

    // 3. Reveal Animations on Scroll (Intersection Observer)
    const revealElements = document.querySelectorAll(
        '.reveal-fade-up, .reveal-fade-right, .reveal-fade-left, .reveal-slide-right, .reveal-slide-left'
    );

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: Stop observing once revealed
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // 4. Parallax Effect logic
    const parallaxBg = document.getElementById('parallax-bg');
    
    window.addEventListener('scroll', () => {
        const scrollValue = window.scrollY;
        
        // Move the background slowly downwards as we scroll down
        if (parallaxBg) {
            parallaxBg.style.transform = `translateY(${scrollValue * 0.4}px)`;
        }
    });

    // 5. Smooth Scroll for Anchor Links (Optional since CSS scroll-behavior does it, 
    // but useful for older browsers and offsets)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            
            if(targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // offset for navbar
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Add blink animation dynamically for the typing cursor
const style = document.createElement('style');
style.innerHTML = `
    @keyframes blink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0; }
    }
`;
document.head.appendChild(style);
