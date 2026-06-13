'use strict';

// --- Scribbles: draw-line & draw-circle (Webflow-Konvention) ---
const SCRIBBLE_PATHS = {
    line:   { viewBox: '0 0 200 18', d: 'M4 10 C 50 16, 100 4, 148 10 S 188 13, 196 7' },
    circle: { viewBox: '0 0 200 74', d: 'M52 11 C 95 3, 152 6, 179 18 C 199 28, 201 45, 178 56 C 148 70, 82 72, 47 62 C 15 53, 2 38, 17 25 C 27 16, 46 11, 68 9' }
};
const SVG_NS = 'http://www.w3.org/2000/svg';

const drawObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-drawn');
            drawObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.draw-line, .draw-circle').forEach(el => {
    if (el.querySelector('svg')) return;
    const cfg = el.classList.contains('draw-circle') ? SCRIBBLE_PATHS.circle : SCRIBBLE_PATHS.line;
    const svg = document.createElementNS(SVG_NS, 'svg');
    svg.setAttribute('viewBox', cfg.viewBox);
    svg.setAttribute('preserveAspectRatio', 'none');
    svg.setAttribute('aria-hidden', 'true');
    const path = document.createElementNS(SVG_NS, 'path');
    path.setAttribute('d', cfg.d);
    path.setAttribute('pathLength', '100');
    svg.appendChild(path);
    el.appendChild(svg);
    drawObserver.observe(el);
});

// --- Copy to Clipboard ---
function copyToClipboard(text, button) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    button.classList.add('copied');
    const originalText = button.innerHTML;
    button.innerHTML = '✓ Kopiert!';
    setTimeout(() => {
        button.innerHTML = originalText;
        button.classList.remove('copied');
    }, 1500);
}

// --- Smooth Scroll for Navigation (offset für sticky nav) ---
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (!target) return;
        const navHeight = document.querySelector('.nav')?.offsetHeight || 0;
        window.scrollTo({
            top: target.offsetTop - navHeight - 20,
            behavior: 'smooth'
        });
    });
});

// --- Active Nav Link on Scroll ---
const navSections = document.querySelectorAll('[id]');
const navLinks    = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    navSections.forEach(section => {
        if (window.pageYOffset >= section.offsetTop - 120) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
}, { passive: true });

// --- Card Fade-In on Scroll ---
const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -80px 0px' });

document.querySelectorAll([
    '.color-card',
    '.value-card',
    '.story-block',
    '.card',
    '.logo-item',
    '.jobster-item',
    '.imagery-item',
    '.tone-card',
    '.tone-principle',
    '.application-card',
].join(', ')).forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    cardObserver.observe(el);
});

console.log('🎨 HeyJobs Brand Guidelines v2.0');
console.log('📊 Design System · B2B · Berlin');
