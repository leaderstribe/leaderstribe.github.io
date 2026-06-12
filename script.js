// ============================================================
// LEADERS TRIBE — script.js
// Handles: icon injection, mobile menu, smooth scroll,
// scroll-reveal animations, active nav highlighting,
// and contact form (mailto fallback).
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  /* ----------------------------------------------------------
     1. INJECT SVG ICONS
     Any element with a data-icon attribute gets its matching
     SVG from icons.js inserted as innerHTML.
     ---------------------------------------------------------- */
  document.querySelectorAll('[data-icon]').forEach(el => {
    const key = el.getAttribute('data-icon');
    if (ICONS[key]) {
      el.innerHTML = ICONS[key];
      // Ensure icon fills its container nicely
      const svg = el.querySelector('svg');
      if (svg) {
        svg.style.width = '100%';
        svg.style.height = '100%';
      }
    }
  });

  /* ----------------------------------------------------------
     2. MOBILE MENU TOGGLE
     ---------------------------------------------------------- */
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      hamburger.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close mobile menu when a link is clicked
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ----------------------------------------------------------
     3. NAVBAR SHADOW ON SCROLL
     ---------------------------------------------------------- */
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 10);
    });
  }

  /* ----------------------------------------------------------
     4. SMOOTH SCROLL FOR INTERNAL LINKS
     (CSS scroll-behavior: smooth already handles most cases;
     this adds a small offset adjustment for the fixed navbar)
     ---------------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId.length > 1) {
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          const navHeight = navbar ? navbar.offsetHeight : 0;
          const top = target.getBoundingClientRect().top + window.pageYOffset - navHeight + 1;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }
    });
  });

  /* ----------------------------------------------------------
     5. SCROLL REVEAL ANIMATIONS
     Elements with class "reveal" fade/slide in when they
     enter the viewport.
     ---------------------------------------------------------- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(el => observer.observe(el));
  } else {
    // Fallback: show everything immediately
    revealEls.forEach(el => el.classList.add('visible'));
  }

  /* ----------------------------------------------------------
     6. ACTIVE NAV LINK HIGHLIGHTING
     Highlights the nav link corresponding to the section
     currently in view.
     ---------------------------------------------------------- */
  const sections = document.querySelectorAll('section[id], header[id]');
  const navLinkEls = document.querySelectorAll('.nav-links a[href^="#"]');

  if (sections.length && navLinkEls.length && 'IntersectionObserver' in window) {
    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinkEls.forEach(link => {
            const href = link.getAttribute('href');
            link.classList.toggle('active', href === `#${id}`);
          });
        }
      });
    }, { threshold: 0.3, rootMargin: '-68px 0px -50% 0px' });

    sections.forEach(section => navObserver.observe(section));
  }

  /* ----------------------------------------------------------
     7. CONTACT FORM — mailto fallback
     GitHub Pages cannot process form submissions server-side.
     This builds a mailto: link from the form fields and opens
     the visitor's email client with a pre-filled message.

     To switch to Formspree / Netlify / Google Forms instead,
     see the HTML comment above the form in index.html.
     ---------------------------------------------------------- */
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const fullName = document.getElementById('fullName').value.trim();
      const email = document.getElementById('email').value.trim();
      const interest = document.getElementById('interest').value;
      const message = document.getElementById('message').value.trim();

      if (!fullName || !email || !interest || !message) {
        alert('Please fill in all fields before sending your message.');
        return;
      }

      const subject = `Leaders Tribe Inquiry: ${interest}`;
      const body =
        `Name: ${fullName}\n` +
        `Email: ${email}\n` +
        `Interested in: ${interest}\n\n` +
        `Message:\n${message}`;

      const mailtoLink = `mailto:leaderstribe22@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      // Open the user's email client
      window.location.href = mailtoLink;

      // Friendly confirmation
      setTimeout(() => {
        alert('Thank you! Your email client should now be open with your message ready to send. If it didn\'t open, please email us directly at leaderstribe22@gmail.com.');
      }, 300);
    });
  }

});
