// Reusable UI Component Injector for ICNVIP-2027
// Automatically renders the Header, Footer, and Sub-page Hero Banners with Breadcrumbs.

document.addEventListener("DOMContentLoaded", () => {
  injectHeader();
  injectFooter();
  injectSubpageHero();
  setupMobileNavToggle();
  setupActiveStates();
});

// Dropdown-based navigation structure to organize 16 pages cleanly without clutter
const NAVIGATION_LINKS = [
  { label: "Home", link: "index.html" },
  { label: "About", link: "about.html" },
  {
    label: "Committee",
    dropdown: [
      { label: "Organizing Committee", link: "committee.html" },
      { label: "Advisory Board", link: "advisory.html" }
    ]
  },
  {
    label: "Program",
    dropdown: [
      { label: "Keynote Speakers", link: "speakers.html" },
      { label: "Conference Tracks", link: "tracks.html" },
      { label: "Important Dates", link: "dates.html" },
      { label: "Publication", link: "publication.html" }
    ]
  },
  {
    label: "Submission",
    dropdown: [
      { label: "Call for Papers", link: "call-for-papers.html" },
      { label: "Paper Submission", link: "submission.html" },
      { label: "Registration", link: "registration.html" }
    ]
  },
  {
    label: "Resources",
    dropdown: [
      { label: "Venue & Travel", link: "venue.html" },
      { label: "Photo Gallery", link: "gallery.html" },
      { label: "Downloads", link: "downloads.html" },
      { label: "FAQs", link: "faq.html" },
      { label: "Contact Us", link: "contact.html" }
    ]
  }
];

function injectHeader() {
  const container = document.getElementById("header-placeholder");
  if (!container) return;

  const currentPath = window.location.pathname.split("/").pop() || "index.html";

  // Build Navbar HTML
  let menuHTML = `<div class="container navbar">
    <!-- Brand Info -->
    <a href="index.html" class="nav-brand">
      <img src="img/logo.jpeg" alt="ICNVIP-2027 Logo" class="brand-logo" style="width: 2.5rem; height: 2.5rem; object-fit: contain; border-radius: var(--radius-sm);">
      <div class="brand-text">
        <span class="brand-title">ICNVIP-2027</span>
        <span class="brand-subtitle">Department of E&TC, BVP COE Pune</span>
      </div>
    </a>

    <!-- Navigation links -->
    <ul class="nav-menu" id="nav-menu-list">`;

  NAVIGATION_LINKS.forEach(item => {
    if (item.dropdown) {
      // Find if any item in the dropdown is active
      const hasActiveSub = item.dropdown.some(sub => currentPath === sub.link);
      menuHTML += `
      <li class="nav-item">
        <a href="#" class="nav-link ${hasActiveSub ? 'active' : ''}" onclick="event.preventDefault(); toggleMobileDropdown(this);">
          <span>${item.label}</span>
          <i class="fa-solid fa-chevron-down" style="font-size: 0.6rem;"></i>
        </a>
        <div class="dropdown-menu">`;
      
      item.dropdown.forEach(sub => {
        const isSubActive = currentPath === sub.link;
        menuHTML += `<a href="${sub.link}" class="dropdown-link ${isSubActive ? 'active' : ''}">${sub.label}</a>`;
      });
      menuHTML += `</div></li>`;
    } else {
      const isActive = currentPath === item.link;
      menuHTML += `
      <li class="nav-item">
        <a href="${item.link}" class="nav-link ${isActive ? 'active' : ''}">${item.label}</a>
      </li>`;
    }
  });

  menuHTML += `</ul>

    <!-- CTA buttons -->
    <div class="nav-actions">
      <a href="submission.html" class="btn btn-sm btn-outline">Submit Paper</a>
      <a href="registration.html" class="btn btn-sm btn-primary">Register</a>
    </div>

    <!-- Toggle button for mobile -->
    <button class="menu-toggle" id="menu-toggle-btn" aria-label="Toggle Navigation">
      <i class="fa-solid fa-bars"></i>
    </button>
  </div>`;

  container.innerHTML = menuHTML;
  container.className = "header-placeholder-container";
}

function injectFooter() {
  const container = document.getElementById("footer-placeholder");
  if (!container) return;

  const currentYear = new Date().getFullYear();

  let html = `<div class="container">
    <div class="footer-grid">
      <!-- About -->
      <div class="footer-column">
        <div class="nav-brand" style="margin-bottom: 0.5rem;">
          <img src="img/logo.jpeg" alt="ICNVIP-2027 Logo" class="brand-logo" style="width: 10rem; height: 10rem; object-fit: contain; border-radius: var(--radius-sm);">
          <span class="brand-title" style="font-size: 1.25rem;">ICNVIP-2027</span>
        </div>
        <p class="footer-about-text">
          International Conference on Nanoelectronics, VLSI and Image Processing. Promoting research innovation in semiconductor circuits and intelligence engines.
        </p>
        <p class="footer-organizer">
          <strong>Organized by:</strong><br>
          Department of Electronics & Communication Engineering<br>
          Bharati Vidyapeeth University College of Engineering, Pune
        </p>
        <div class="footer-socials">
          <a href="#" class="social-btn"><i class="fa-brands fa-linkedin-in"></i></a>
          <a href="#" class="social-btn"><i class="fa-brands fa-x-twitter"></i></a>
          <a href="#" class="social-btn"><i class="fa-brands fa-facebook-f"></i></a>
          <a href="#" class="social-btn"><i class="fa-solid fa-graduation-cap"></i></a>
        </div>
      </div>

      <!-- Quick Links -->
      <div class="footer-column">
        <h4 class="footer-title">Quick Links</h4>
        <div class="footer-links">
          <a href="index.html">Home</a>
          <a href="about.html">About Conference</a>
          <a href="speakers.html">Keynote Speakers</a>
          <a href="tracks.html">Technical Tracks</a>
          <a href="contact.html">Contact Us</a>
        </div>
      </div>

      <!-- Submissions -->
      <div class="footer-column">
        <h4 class="footer-title">Submissions</h4>
        <div class="footer-links">
          <a href="call-for-papers.html">Call For Papers</a>
          <a href="submission.html">Paper Submission</a>
          <a href="registration.html">Registration & Fees</a>
          <a href="dates.html">Important Dates</a>
          <a href="faq.html">FAQs Accordion</a>
        </div>
      </div>

      <!-- Downloads & Newsletter -->
      <div class="footer-column">
        <h4 class="footer-title">Downloads & News</h4>
        <div class="footer-links" style="margin-bottom: 1rem;">
          <a href="downloads.html">Conference Brochure</a>
          <a href="downloads.html">IEEE Word Template</a>
          <a href="downloads.html">LaTeX Template</a>
        </div>
        <h4 class="footer-title" style="margin-bottom: 0.25rem;">Newsletter</h4>
        <form class="newsletter-form" onsubmit="event.preventDefault(); alert('Subscribed to newsletter successfully!'); this.reset();">
          <input type="email" class="newsletter-input" placeholder="Your email address" required>
          <button type="submit" class="btn btn-sm btn-primary" style="padding: 0.45rem 0.75rem;"><i class="fa-solid fa-paper-plane"></i></button>
        </form>
      </div>
    </div>

    <!-- Copyright -->
    <div class="footer-bottom">
      <p>&copy; ${currentYear} ICNVIP-2027. All Rights Reserved. Bharati Vidyapeeth College of Engineering, Pune.</p>
      <div class="footer-bottom-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms & Conditions</a>
      </div>
    </div>
  </div>`;

  container.innerHTML = html;
  container.className = "footer";
}

function injectSubpageHero() {
  const container = document.getElementById("hero-banner-placeholder");
  if (!container) return;

  const title = container.getAttribute("data-title") || "Conference Information";
  const subtitle = container.getAttribute("data-subtitle") || "ICNVIP-2027 Academic Conference Details";
  const parent = container.getAttribute("data-parent") || "Home";
  const parentLink = container.getAttribute("data-parent-link") || "index.html";

  // Build Hero + Breadcrumbs HTML
  let html = `<div class="container">
    <!-- Breadcrumbs -->
    <div class="breadcrumbs">
      <a href="${parentLink}"><i class="fa-solid fa-house" style="font-size: 0.75rem; margin-right: 0.25rem;"></i>${parent}</a>
      <span class="breadcrumbs-sep"><i class="fa-solid fa-chevron-right"></i></span>
      <span class="breadcrumbs-current">${title}</span>
    </div>

    <h1 class="subpage-hero-title">${title}</h1>
    <p class="subpage-hero-desc">${subtitle}</p>
  </div>`;

  container.innerHTML = html;
  container.className = "subpage-hero";
}

function setupMobileNavToggle() {
  const toggleBtn = document.getElementById("menu-toggle-btn");
  const menuList = document.getElementById("nav-menu-list");

  if (!toggleBtn || !menuList) return;

  toggleBtn.addEventListener("click", () => {
    menuList.classList.toggle("active");
    const icon = toggleBtn.querySelector("i");
    if (menuList.classList.contains("active")) {
      icon.className = "fa-solid fa-xmark";
    } else {
      icon.className = "fa-solid fa-bars";
    }
  });
}

function toggleMobileDropdown(anchor) {
  // Only trigger on mobile sizes
  if (window.innerWidth > 768) return;
  const item = anchor.nextElementSibling;
  if (item && item.classList.contains("dropdown-menu")) {
    item.classList.toggle("active");
    const icon = anchor.querySelector(".fa-chevron-down");
    if (item.classList.contains("active")) {
      icon.style.transform = "rotate(180deg)";
    } else {
      icon.style.transform = "none";
    }
  }
}

function setupActiveStates() {
  // Extra safety checks for navigation link clicks or redirects
}
