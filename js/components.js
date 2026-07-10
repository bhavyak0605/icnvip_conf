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
  {
    label: "About",
    dropdown: [
      { label: "ICNVIP 2027", link: "about.html#about-icnvip" },
      { label: "About BVDU", link: "about.html#about-bvdu" },
      { label: "About BVUCOE", link: "about.html#about-bvucoe" }
    ]
  },
  {
    label: "For Author",
    dropdown:[
      { label: "Call for Papers", link: "call-for-papers.html" },
      { label: "Instructions for Authors", link: "instruction.html"},
      { label: "Timeline", link: "dates.html"},
      { label: "Registration", link: "registration.html"},
      { label: "Program Schedule", link: "schedule.html"}

    ]
  },
  // { label: "Call for Papers", link: "call-for-papers.html" },
  {
    label: "Committee",
    dropdown: [
      { label: "Chief Patron", link: "patrons.html" },
      { label: "Organizing Committee", link: "committee.html" },
      { label: "Keynote Speakers", link: "speakers.html" },
      { label: "Technical Program Committee", link: "advisory.html" }
    ]
  },
  // {
  //   label: "Program",
  //   dropdown: [
  //     { label: "Conference Tracks", link: "tracks.html" },
  //     { label: "Important Dates", link: "dates.html" },
  //     { label: "Publication", link: "publication.html" }
  //   ]
  // },
  {
    label: "Submission",
    dropdown: [
      { label: "Paper Submission", link: "submission.html" },
      { label: "Registration", link: "registration.html" }
    ]
  },
  {
    label: "Resources",
    dropdown: [
      { label: "Venue", link: "venue.html" },
      { label: "Gallery", link: "gallery.html" },
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

  // Use dynamically retrieved phone and email if window.ConferenceData is available
  const phone = window.ConferenceData ? window.ConferenceData.conferenceInfo.phone : "+91-20-24107300";
  const email = window.ConferenceData ? window.ConferenceData.conferenceInfo.email : "contact@icnvip2027.org";

  // Build Navbar HTML with three rows: contact bar, brand logo bar, navigation bar
  let menuHTML = `
    <!-- Row 1: Top Contact Bar -->
    <div class="header-top-bar">
      <div class="container top-bar-content">
        <div class="top-bar-left">
          <a href="tel:${phone.replace(/\s+/g, '')}"><i class="fa-solid fa-phone"></i> ${phone}</a>
          <a href="mailto:${email}"><i class="fa-solid fa-envelope"></i> ${email}</a>
        </div>
        <div class="top-bar-right">
          <span> Bharati Vidyapeeth College of Engineering, Pune</span>
        </div>
      </div>
    </div>

    <!-- Row 2: Brand/Logo Bar -->
    <div class="header-brand-bar">
      <div class="container brand-bar-content">
        <!-- University & College Logos on Left -->
        <div class="left-logos">
          <img src="img/BVDU-logo.png" alt="BVDU Logo" class="uni-logo">
          <img src="img/bvucoep.jpg" alt="BVUCOE Logo" class="clg-logo">
        </div>
        
        <!-- Big Conference Logo in Center -->
        <div class="center-logo">
          <a href="index.html" class="conf-logo-link">
            <img src="img/logo.jpeg" alt="ICNVIP-2027 Logo" class="conf-logo">
          </a>
        </div>
        
        <!-- Empty Spacer on Right for layout symmetry -->
        <div class="right-spacer"></div>
      </div>
    </div>

    <!-- Row 3: Nav Menu Bar (Sticky) -->
    <div class="header-nav-bar">
      <div class="container nav-bar-content">
        <!-- Toggle button for mobile -->
        <button class="menu-toggle" id="menu-toggle-btn" aria-label="Toggle Navigation">
          <i class="fa-solid fa-bars"></i>
        </button>

        <!-- Navigation links -->
        <ul class="nav-menu" id="nav-menu-list">`;

  NAVIGATION_LINKS.forEach(item => {
    if (item.dropdown) {
      // Find if any item in the dropdown is active (ignoring fragment hashes)
      const hasActiveSub = item.dropdown.some(sub => currentPath === sub.link.split("#")[0]);
      menuHTML += `
      <li class="nav-item">
        <a href="#" class="nav-link ${hasActiveSub ? 'active' : ''}" onclick="event.preventDefault(); toggleMobileDropdown(this);">
          <span>${item.label}</span>
          <i class="fa-solid fa-chevron-down"></i>
        </a>
        <div class="dropdown-menu">`;
      
      item.dropdown.forEach(sub => {
        const isSubActive = currentPath === sub.link.split("#")[0];
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

        <!-- Shifted CTA Buttons in lower navbar -->
        <div class="nav-actions">
          <a href="submission.html" class="btn btn-sm btn-primary-nav">Submit Paper</a>
          <a href="registration.html" class="btn btn-sm btn-accent-nav">Register</a>
        </div>
      </div>
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
        <div class="nav-brand">
          <img src="img/logo.jpeg" alt="ICNVIP-2027 Logo" class="brand-logo footer-logo">
          <span class="brand-title">ICNVIP-2027</span>
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
        <div class="footer-links footer-links-group">
          <a href="downloads.html">Conference Brochure</a>
          <a href="downloads.html">IEEE Word Template</a>
          <a href="downloads.html">LaTeX Template</a>
        </div>
        <h4 class="footer-title newsletter-title">Newsletter</h4>
        <form class="newsletter-form" onsubmit="event.preventDefault(); alert('Subscribed to newsletter successfully!'); this.reset();">
          <input type="email" class="newsletter-input" placeholder="Your email address" required>
          <button type="submit" class="btn btn-sm btn-primary newsletter-submit-btn"><i class="fa-solid fa-paper-plane"></i></button>
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
      <a href="${parentLink}"><i class="fa-solid fa-house"></i>${parent}</a>
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

  const links = menuList.querySelectorAll("a");
  links.forEach(link => {
    if (!link.getAttribute("onclick")) {
      link.addEventListener("click", () => {
        menuList.classList.remove("active");
        const icon = toggleBtn.querySelector("i");
        if (icon) icon.className = "fa-solid fa-bars";
      });
    }
  });
}

function toggleMobileDropdown(anchor) {
  // Only trigger on mobile sizes
  if (window.innerWidth > 768) return;
  const item = anchor.nextElementSibling;
  if (item && item.classList.contains("dropdown-menu")) {
    item.classList.toggle("active");
    anchor.classList.toggle("dropdown-active");
  }
}

function setupActiveStates() {
  const updateDropdownActiveStates = () => {
    const currentPath = window.location.pathname.split("/").pop() || "index.html";
    const dropdownLinks = document.querySelectorAll(".dropdown-link");
    
    dropdownLinks.forEach(link => {
      const href = link.getAttribute("href");
      if (!href) return;
      const hashIdx = href.indexOf("#");
      const subBase = hashIdx !== -1 ? href.substring(0, hashIdx) : href;
      const subHash = hashIdx !== -1 ? href.substring(hashIdx) : "";
      
      const isSubActive = currentPath === subBase && 
                          (subHash === "" ? !window.location.hash : window.location.hash === subHash);
      if (isSubActive) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  };

  updateDropdownActiveStates();
  window.addEventListener("hashchange", updateDropdownActiveStates);
}

