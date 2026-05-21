// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const nav    = document.querySelector('.nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', nav.classList.contains('open'));
  });
}

// Close nav on link click (mobile)
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

// Simple contact form handler
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Message Sent';
    btn.disabled = true;
    btn.style.opacity = '0.7';
    // In production, wire to Formspree or similar
  });
}
