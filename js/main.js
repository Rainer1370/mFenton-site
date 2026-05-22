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

// Contact form — sync email to _replyto for Formspree auto-reply
const emailInput   = document.getElementById('email');
const replyToField = document.getElementById('replyto-field');
if (emailInput && replyToField) {
  emailInput.addEventListener('input', () => {
    replyToField.value = emailInput.value;
  });
}

// Contact form submission — show confirmation, let Formspree handle delivery
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.textContent;

    // Sync replyto one final time
    if (emailInput && replyToField) {
      replyToField.value = emailInput.value;
    }

    btn.textContent = 'Sending…';
    btn.disabled = true;

    try {
      const data = new FormData(form);
      const response = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        // Show thank-you message
        form.innerHTML = `
          <div style="text-align:center; padding:3rem 1rem;">
            <div style="font-size:2.5rem; margin-bottom:1rem;">✅</div>
            <h3 style="color:var(--navy); margin-bottom:0.75rem;">Message Received</h3>
            <p style="color:#555; max-width:400px; margin:0 auto;">
              Thank you for reaching out to Michele Fenton PLLC. 
              You'll receive a confirmation email shortly, and we'll be in touch within one business day.
            </p>
            <p style="margin-top:1.5rem; font-size:0.85rem; color:#888;">
              Urgent? Call us directly at <a href="tel:5168009608" style="color:var(--gold)">(516) 800-9608</a>
            </p>
          </div>`;
      } else {
        throw new Error('Server error');
      }
    } catch (err) {
      btn.textContent = originalText;
      btn.disabled = false;
      btn.insertAdjacentHTML('afterend',
        '<p style="color:red; font-size:0.85rem; margin-top:0.5rem;">Something went wrong. Please try again or call (516) 800-9608.</p>'
      );
    }
  });
}
