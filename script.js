// ============================================================
// LEADERS TRIBE — script.js
// Handles: icon injection, mobile menu, navbar shadow,
// smooth scroll, scroll-reveal, active nav, contact form.
// Runs after shared-nav-footer.js has injected nav/footer.
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  /* ----------------------------------------------------------
     1. INJECT SVG ICONS
        Every [data-icon] element gets its SVG from icons.js.
     ---------------------------------------------------------- */
  document.querySelectorAll('[data-icon]').forEach(el => {
    const key = el.getAttribute('data-icon');
    if (typeof ICONS !== 'undefined' && ICONS[key]) {
      el.innerHTML = ICONS[key];
      const svg = el.querySelector('svg');
      if (svg) { svg.style.width = '100%'; svg.style.height = '100%'; }
    }
  });

  /* ----------------------------------------------------------
     2. MOBILE MENU TOGGLE
     ---------------------------------------------------------- */
  const hamburger  = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      hamburger.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ----------------------------------------------------------
     3. NAVBAR — shadow on scroll
     ---------------------------------------------------------- */
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 10);
    }, { passive: true });
  }

  /* ----------------------------------------------------------
     4. SMOOTH SCROLL with fixed-nav offset
     ---------------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const id = this.getAttribute('href');
      if (id.length > 1) {
        const target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          const navH = navbar ? navbar.offsetHeight : 0;
          const top  = target.getBoundingClientRect().top + window.pageYOffset - navH + 1;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }
    });
  });

  /* ----------------------------------------------------------
     5. SCROLL REVEAL
     ---------------------------------------------------------- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -36px 0px' });
    revealEls.forEach(el => obs.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('visible'));
  }

  /* ----------------------------------------------------------
     6. CONTACT FORM
        Primary: Formspree AJAX submission (see contact.html for setup).
        Fallback: mailto: link, used automatically if no Formspree
        ID is configured yet, or if the Formspree request fails.
     ---------------------------------------------------------- */
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    const formspreeId = contactForm.getAttribute('data-formspree-id')?.trim();
    const submitBtn = contactForm.querySelector('.btn-submit');

    const sendViaMailto = (name, email, interest, message) => {
      const subject = `Leaders Tribe Inquiry: ${interest}`;
      const body =
        `Name: ${name}\nEmail: ${email}\nInterested in: ${interest}\n\nMessage:\n${message}`;
      window.location.href =
        `mailto:leaderstribe22@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setTimeout(() => {
        alert("Thank you! Your email client should be open with your message ready to send.\nIf it didn't open, email us at leaderstribe22@gmail.com.");
      }, 300);
    };

    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const name     = document.getElementById('fullName')?.value.trim();
      const email    = document.getElementById('email')?.value.trim();
      const interest = document.getElementById('interest')?.value;
      const message  = document.getElementById('message')?.value.trim();

      if (!name || !email || !interest || !message) {
        alert('Please fill in all fields before sending your message.');
        return;
      }

      // No Formspree ID configured yet — use mailto fallback directly
      if (!formspreeId) {
        sendViaMailto(name, email, interest, message);
        return;
      }

      // Attempt Formspree submission
      if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = 'Sending...'; }

      try {
        const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
          method: 'POST',
          headers: { 'Accept': 'application/json' },
          body: new FormData(contactForm),
        });

        if (response.ok) {
          contactForm.reset();
          alert('Thank you! Your message has been sent. We will be in touch soon.');
        } else {
          throw new Error('Formspree submission failed');
        }
      } catch (err) {
        // Network error or Formspree issue — fall back to mailto
        sendViaMailto(name, email, interest, message);
      } finally {
        if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = 'Send Message'; }
      }
    });
  }

});
