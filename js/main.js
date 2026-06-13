// Copy to Clipboard Function
function copyToClipboard(text, button) {
    // Create temporary textarea
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    
    // Select and copy
    textarea.select();
    document.execCommand('copy');
    
    // Remove textarea
    document.body.removeChild(textarea);
    
    // Visual feedback
    button.classList.add('copied');
    const originalText = button.innerHTML;
    button.innerHTML = '✓ Kopiert!';
    
    setTimeout(() => {
        button.innerHTML = originalText;
        button.classList.remove('copied');
    }, 1500);
}

// Smooth Scroll for Navigation
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const navHeight = document.querySelector('.nav').offsetHeight;
            const targetPosition = targetSection.offsetTop - navHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Active Navigation on Scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe cards and components
document.querySelectorAll('.color-card, .card, .font-card, .logo-item, .download-card, .jobster-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Scribbles — draw-line & draw-circle (Webflow-Konvention)
// Findet Spans mit .draw-line / .draw-circle, injiziert das SVG
// und zeichnet den Stroke ein, sobald das Element im Viewport ist.
const SCRIBBLE_PATHS = {
    line: {
        viewBox: '0 0 200 18',
        d: 'M4 10 C 50 16, 100 4, 148 10 S 188 13, 196 7'
    },
    circle: {
        viewBox: '0 0 200 74',
        d: 'M52 11 C 95 3, 152 6, 179 18 C 199 28, 201 45, 178 56 C 148 70, 82 72, 47 62 C 15 53, 2 38, 17 25 C 27 16, 46 11, 68 9'
    }
};

const drawObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-drawn');
            drawObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.6 });

const SVG_NS = 'http://www.w3.org/2000/svg';
document.querySelectorAll('.draw-line, .draw-circle').forEach(el => {
    if (el.querySelector('svg')) return; // bereits injiziert
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

console.log('🎨 HeyJobs Brandbook loaded successfully');
console.log('📊 Design System Version 1.0 (B2B)');
console.log('Made with ❤️ in Berlin');
