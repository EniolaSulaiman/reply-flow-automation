
// Fade-up animation observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(el => {
        if (el.isIntersecting) {
            el.target.classList.add('visible');
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// Pricing toggle
const toggle = document.querySelector('.toggle-switch');
const knob = document.querySelector('.toggle-knob');
const labels = document.querySelectorAll('.toggle-label');
let annual = false;

const prices = {
    monthly: ['49', '149', '399'],
    annual: ['39', '119', '319']
};

toggle.addEventListener('click', () => {
    annual = !annual;
    knob.style.left = annual ? '25px' : '3px';
    labels[0].classList.toggle('active', !annual);
    labels[1].classList.toggle('active', annual);

    const planPrices = document.querySelectorAll('.plan-price');
    planPrices.forEach((el, i) => {
        const val = annual ? prices.annual[i] : prices.monthly[i];
        const sup = el.querySelector('sup');
        const span = el.querySelector('span');
        el.innerHTML = '';
        const supEl = document.createElement('sup');
        supEl.textContent = '$';
        el.appendChild(supEl);
        el.appendChild(document.createTextNode(val));
        const spanEl = document.createElement('span');
        spanEl.textContent = '/mo';
        el.appendChild(spanEl);
    });
});

// Hamburger menu
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
});

// Close mobile menu on link click
document.querySelectorAll('.mobile-link, .mobile-menu .btn-primary-lg').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', false);
    });
});

// Close on outside click
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', false);
    }
});

// Nav scroll effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 40) {
        nav.style.boxShadow = '0 2px 20px rgba(15,23,42,0.08)';
    } else {
        nav.style.boxShadow = 'none';
    }
});