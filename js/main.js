const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwZ7SmDwLMoDVygMSweHkd1hmKphLs54lfEIFBRB9SoAQfx8vO_oCn2uPLgOSsbn_sSsw/exec';

// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const nav    = document.querySelector('.nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', nav.classList.contains('open'));
  });
}
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => nav && nav.classList.remove('open'));
});

// Contact form — POST JSON to Google Apps Script
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.textContent;
    btn.textContent = 'Sending…';
    btn.disabled = true;

    // Remove any previous error
    const prevErr = form.querySelector('.form-error');
    if (prevErr) prevErr.remove();

    // Collect form data as JSON
    const payload = {
      first_name: form.querySelector('#first-name')?.value || '',
      last_name:  form.querySelector('#last-name')?.value  || '',
      email:      form.querySelector('#email')?.value      || '',
      phone:      form.querySelector('#phone')?.value      || '',
      matter:     form.querySelector('#matter')?.value     || '',
      message:    form.querySelector('#message')?.value    || ''
    };

    try {
      // Apps Script requires no-cors for cross-origin POST
      await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      // no-cors returns opaque response — if fetch didn't throw, assume success
      form.innerHTML = `
        <div style="text-align:center; padding:3rem 1rem;">
          <div style="font-size:2.5rem; margin-bottom:1rem;">✅</div>
          <h3 style="color:var(--dark2); margin-bottom:0.75rem; font-family:'Cormorant Garamond',serif;">Message Received</h3>
          <p style="color:#555; max-width:420px; margin:0 auto; line-height:1.7;">
            Thank you for reaching out to Michele Fenton PLLC. 
            You'll receive a confirmation email shortly and we'll be in touch within one business day.
          </p>
          <p style="margin-top:1.5rem; font-size:0.85rem; color:#888;">
            Urgent? Call us at <a href="tel:5168009608" style="color:var(--rosegold)">(516) 800-9608</a>
          </p>
        </div>`;
    } catch (err) {
      btn.textContent = originalText;
      btn.disabled = false;
      btn.insertAdjacentHTML('afterend',
        '<p class="form-error" style="color:#c0392b; font-size:0.85rem; margin-top:0.5rem;">Something went wrong. Please try again or call (516) 800-9608.</p>'
      );
    }
  });
}
