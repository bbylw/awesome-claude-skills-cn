/**
 * Obsidian Emerald v3.0 - High Definition UI
 * Precision Grid & Dynamic Interactions
 */

document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');
    const sections = document.querySelectorAll('main .section-header');
    const navLinks = document.querySelectorAll('nav a');
    const backToTop = document.getElementById('backToTop');

    // 1. Dynamic Header & Scroll Tracking
    window.addEventListener('scroll', () => {
        const isScrolled = window.scrollY > 40;
        header.classList.toggle('scrolled', isScrolled);
        backToTop.classList.toggle('visible', window.scrollY > 600);

        // Active section tracking with refined viewport offset
        let activeId = "";
        sections.forEach(section => {
            const top = section.offsetTop - 200;
            if (window.pageYOffset >= top) {
                activeId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            const targetId = link.getAttribute('href').substring(1);
            link.classList.toggle('active', targetId === activeId);
        });
    });

    // 2. High-Precision Card Interaction
    const cards = document.querySelectorAll('.skill-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            card.style.setProperty('--x', `${x}%`);
            card.style.setProperty('--y', `${y}%`);
        });
    });

    // 3. Optimized Reveal Lifecycle
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' });

    const itemsToReveal = document.querySelectorAll('.skill-card, .guide-card, .section-header');
    itemsToReveal.forEach((item, i) => {
        item.classList.add('reveal-item');
        item.style.transitionDelay = `${Math.min((i % 3) * 0.08, 0.5)}s`;
        revealObserver.observe(item);
    });

    // 4. Global Action Handlers
    document.querySelectorAll('nav a, #backToTop, .logo').forEach(el => {
        el.addEventListener('click', (e) => {
            const href = el.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href === '#' ? 'body' : href);
                if (target) {
                    const offset = 100;
                    const top = target.getBoundingClientRect().top + window.pageYOffset - (href === '#' ? 0 : offset);
                    window.scrollTo({ top, behavior: 'smooth' });
                }
            }
        });
    });

    // 5. Minimalist Injection for Animations
    const animStyles = document.createElement('style');
    animStyles.textContent = `
        .reveal-item {
            opacity: 0;
            transform: translateY(30px) scale(0.98);
            transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), 
                        transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .reveal-item.revealed {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
    `;
    document.head.appendChild(animStyles);
});
