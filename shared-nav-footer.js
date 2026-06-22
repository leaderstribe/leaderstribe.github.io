// ============================================================
// LEADERS TRIBE, shared-nav-footer.js
// Injects the navigation and footer into every page.
// Call initPage(activeNavLabel) at the bottom of each page.
// Pages inside /team/ automatically get '../' prefixed paths
// based on the script's own location.
// ============================================================

function getBasePath() {
  // Detect if this script was loaded from a subdirectory (e.g. /team/*.html)
  const scripts = document.getElementsByTagName('script');
  for (const s of scripts) {
    if (s.src && s.src.includes('shared-nav-footer.js')) {
      return s.src.includes('../shared-nav-footer.js') ? '../' : '';
    }
  }
  return '';
}

function initPage(activeLabel) {
  injectNav(activeLabel);
  injectFooter();
}

function injectNav(activeLabel) {
  const base = getBasePath();
  const pages = [
    { label: 'Home',     href: 'index.html' },
    { label: 'About',    href: 'about.html' },
    { label: 'Programs', href: 'programs.html' },
    { label: 'Impact',   href: 'impact.html' },
    { label: 'FAQ',      href: 'faq.html' },
    { label: 'Contact',  href: 'contact.html' },
  ];

  const links = pages.map(p =>
    `<li><a href="${base}${p.href}"${p.label === activeLabel ? ' class="active"' : ''}>${p.label}</a></li>`
  ).join('');

  const mobileLinks = pages.map(p =>
    `<a href="${base}${p.href}">${p.label}</a>`
  ).join('');

  document.getElementById('nav-placeholder').innerHTML = `
    <nav id="navbar">
      <div class="nav-inner">
        <a href="${base}index.html" class="nav-logo" aria-label="Leaders Tribe Home">
          <img src="${base}assets/logo.png" alt="Leaders Tribe logo" />
          <span class="nav-logo-text">Leaders Tribe</span>
        </a>
        <ul class="nav-links" id="navLinks">
          ${links}
          <li><a href="https://ee.kobotoolbox.org/single/it3MFJqQ" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">Apply Now</a></li>
        </ul>
        <button class="hamburger" id="hamburger"
          aria-label="Toggle navigation menu"
          aria-expanded="false"
          aria-controls="mobileMenu">
          <span></span><span></span><span></span>
        </button>
      </div>
      <div class="mobile-menu" id="mobileMenu">
        ${mobileLinks}
        <a href="https://ee.kobotoolbox.org/single/it3MFJqQ" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Apply Now</a>
      </div>
    </nav>
  `;
}

function injectFooter() {
  const base = getBasePath();
  document.getElementById('footer-placeholder').innerHTML = `
    <footer>
      <div class="footer-inner">
        <div class="footer-grid">
          <div class="footer-brand">
            <div class="footer-logo-text">Leaders Tribe</div>
            <p>Women leading through technology, data, and purpose. Equipping women with the skills and confidence to thrive in the digital economy.</p>
            <div class="social-links">
              <a href="https://ng.linkedin.com/company/leaderstribe" class="social-link" target="_blank" rel="noopener noreferrer" aria-label="Leaders Tribe on LinkedIn" data-icon="linkedin"></a>
              <a href="https://www.instagram.com/leaderstribe_/" class="social-link" target="_blank" rel="noopener noreferrer" aria-label="Leaders Tribe on Instagram" data-icon="instagram"></a>
              <a href="https://www.facebook.com/leaderstribeimpact/" class="social-link" target="_blank" rel="noopener noreferrer" aria-label="Leaders Tribe on Facebook" data-icon="facebook"></a>
              <a href="https://x.com/leaderstribe22" class="social-link" target="_blank" rel="noopener noreferrer" aria-label="Leaders Tribe on X" data-icon="xtwitter"></a>
            </div>
          </div>
          <div class="footer-col">
            <h4>Pages</h4>
            <ul>
              <li><a href="${base}index.html">Home</a></li>
              <li><a href="${base}about.html">About</a></li>
              <li><a href="${base}programs.html">Programs</a></li>
              <li><a href="${base}impact.html">Impact</a></li>
              <li><a href="${base}faq.html">FAQ</a></li>
              <li><a href="${base}contact.html">Contact</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Programs</h4>
            <ul>
              <li><a href="${base}programs.html#excel">Excel for Data Analysis</a></li>
              <li><a href="${base}programs.html#leadership">Leadership Development</a></li>
              <li><a href="${base}programs.html#ttt">Train-the-Trainer</a></li>
              <li><a href="https://ee.kobotoolbox.org/single/it3MFJqQ" target="_blank" rel="noopener noreferrer">Apply Now</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:leaderstribe22@gmail.com">leaderstribe22@gmail.com</a></li>
              <li><a href="tel:+2347055832110">+234 705 583 2110</a></li>
              <li><a href="${base}contact.html">Lagos, Nigeria</a></li>
              <li><a href="${base}contact.html#partners">Partner With Us</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2026 Leaders Tribe. All rights reserved.</p>
          <p>Designed with care for women leading the way.</p>
        </div>
      </div>
    </footer>
  `;
}
