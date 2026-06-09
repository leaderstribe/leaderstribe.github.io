function injectNav(activePage) {
  const pages = [
    { href: 'index.html', label: 'Home' },
    { href: 'about.html', label: 'About' },
    { href: 'programs.html', label: 'Programs' },
    { href: 'how-it-works.html', label: 'How It Works' },
    { href: 'get-involved.html', label: 'Get Involved' },
    { href: 'faq.html', label: 'FAQ' },
    { href: 'contact.html', label: 'Contact' },
  ];
  const links = pages.map(p =>
    `<li><a href="${p.href}" class="${p.label === activePage ? 'active' : ''}">${p.label}</a></li>`
  ).join('');

  document.getElementById('nav-placeholder').innerHTML = `
    <nav>
      <div class="nav-inner">
        <a href="index.html" class="nav-logo">
          <img src="logo.png" alt="Leaders Tribe Logo" />
          <span>Leaders Tribe</span>
        </a>
        <ul class="nav-links" id="nav-menu">
          ${links}
          <li><a href="get-involved.html" class="nav-cta">Join Now</a></li>
        </ul>
        <div class="hamburger" id="hamburger" onclick="toggleMenu()">
          <span></span><span></span><span></span>
        </div>
      </div>
    </nav>
  `;
}

function toggleMenu() {
  document.getElementById('nav-menu').classList.toggle('open');
}

function injectFooter() {
  document.getElementById('footer-placeholder').innerHTML = `
    <footer>
      <div class="footer-inner">
        <div class="footer-grid">
          <div class="footer-brand">
            <div class="footer-logo">Leaders Tribe</div>
            <p>Empowering women globally with essential tech and leadership skills to shape a more equitable future.</p>
          </div>
          <div class="footer-col">
            <h4>Navigate</h4>
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="about.html">About</a></li>
              <li><a href="programs.html">Programs</a></li>
              <li><a href="how-it-works.html">How It Works</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Engage</h4>
            <ul>
              <li><a href="get-involved.html">Get Involved</a></li>
              <li><a href="faq.html">FAQ</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:leaderstribe22@gmail.com">leaderstribe22@gmail.com</a></li>
              <li><a href="programs.html#excel">Excel Program</a></li>
              <li><a href="programs.html#leadership">Leadership Program</a></li>
              <li><a href="get-involved.html#partner">Partner With Us</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>© ${new Date().getFullYear()} Leaders Tribe. All rights reserved.</p>
          <p>Empowering women, transforming futures.</p>
        </div>
      </div>
    </footer>
  `;
}
