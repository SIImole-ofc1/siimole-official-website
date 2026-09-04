// Simple navigation and interactivity

document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.querySelector('.back-to-top');
    let returningToTop = false;

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add hover effects to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Active nav link highlighting
    window.addEventListener('scroll', function() {
        if (window.scrollY <= 400) {
            returningToTop = false;
            backToTopButton.classList.remove('visible');
        } else if (!returningToTop) {
            backToTopButton.classList.add('visible');
        }

        const sections = document.querySelectorAll('section[id]');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop - 200 && window.scrollY < sectionTop + sectionHeight - 200) {
                const navLinks = document.querySelectorAll('.nav-link');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + section.id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });

    backToTopButton.addEventListener('click', function() {
        returningToTop = true;
        backToTopButton.classList.remove('visible');
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Cursor glow on hero (main page only)
    const hero = document.querySelector('.hero');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    // Soft follow-glow works on any fine pointer; trail is skipped when OS asks to reduce motion
    // (common on Windows when "Animation effects" is off).
    if (hero && canHover) {
        let lastTrailX = null;
        let lastTrailY = null;
        const trailGap = 4;

        hero.addEventListener('mousemove', function(e) {
            const rect = hero.getBoundingClientRect();
            const xPx = e.clientX - rect.left;
            const yPx = e.clientY - rect.top;
            const x = (xPx / rect.width) * 100;
            const y = (yPx / rect.height) * 100;
            hero.style.setProperty('--glow-x', x + '%');
            hero.style.setProperty('--glow-y', y + '%');
            hero.classList.add('is-glowing');

            if (prefersReducedMotion) return;

            if (lastTrailX === null || lastTrailY === null) {
                lastTrailX = xPx;
                lastTrailY = yPx;
                return;
            }

            const dx = xPx - lastTrailX;
            const dy = yPx - lastTrailY;
            const distSq = dx * dx + dy * dy;
            if (distSq < trailGap * trailGap) return;

            const length = Math.sqrt(distSq);
            const angle = Math.atan2(dy, dx) * (180 / Math.PI);

            const trail = document.createElement('span');
            trail.className = 'hero-glow-trail';
            trail.setAttribute('aria-hidden', 'true');
            trail.style.left = lastTrailX + 'px';
            trail.style.top = lastTrailY + 'px';
            trail.style.width = length + 'px';
            trail.style.transform = 'rotate(' + angle + 'deg)';
            hero.appendChild(trail);

            lastTrailX = xPx;
            lastTrailY = yPx;

            trail.addEventListener('animationend', function() {
                trail.remove();
            });
            // Fallback cleanup if animationend does not fire
            setTimeout(function() {
                if (trail.parentNode) trail.remove();
            }, 700);
        });

        hero.addEventListener('mouseleave', function() {
            hero.classList.remove('is-glowing');
            lastTrailX = null;
            lastTrailY = null;
        });
    }
});
