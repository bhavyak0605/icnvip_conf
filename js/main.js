// Main Application Logic for ICNVIP-2027
// Handles all dynamic content generation, interactive features, scroll animations, and modal windows.

document.addEventListener("DOMContentLoaded", () => {
  // Load and render components based on current page element matches
  runCountdownTimer();
  renderAnnouncements();
  renderStatisticsGrid();
  renderSponsorLogos();
  renderCommitteeLists();
  renderPatronsLists();
  renderAdvisoryBoards();
  renderSpeakerCards();
  renderTechnicalTracks();
  renderImportantDatesTimeline();
  renderRegistrationFees();
  renderDownloadsCards();
  renderFAQsAccordion();
  renderGalleryGrid();
  renderHotelsList();
  setupContactFormHandler();
  setupBackToTopButton();
  setupHeroSlider();

  // Initialize viewport intersection observer for scroll animation triggers
  initScrollAnimations();
});


// 1. SCROLL INTERSECTION OBSERVER ANIMATION

function initScrollAnimations() {
  const animatedElements = document.querySelectorAll(".fade-up, .fade-in, .scale-in");

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // Trigger only once
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px"
    });

    animatedElements.forEach(el => observer.observe(el));
  } else {
    // Fallback if IntersectionObserver is not supported
    animatedElements.forEach(el => el.classList.add("visible"));
  }
}


// 2. COUNTDOWN TIMER

function runCountdownTimer() {
  const timerGrid = document.getElementById("countdown-grid-container");
  if (!timerGrid || !window.ConferenceData) return;

  const targetDate = new Date(window.ConferenceData.conferenceInfo.countdownTarget).getTime();

  function updateTimer() {
    const now = new Date().getTime();
    const gap = targetDate - now;

    if (gap <= 0) {
      timerGrid.innerHTML = `<span class="countdown-val text-center countdown-finished">The Conference Has Commenced!</span>`;
      clearInterval(intervalId);
      return;
    }

    const d = Math.floor(gap / (1000 * 60 * 60 * 24));
    const h = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((gap % (1000 * 60)) / 1000);

    document.getElementById("days-val").innerText = String(d).padStart(2, '0');
    document.getElementById("hours-val").innerText = String(h).padStart(2, '0');
    document.getElementById("mins-val").innerText = String(m).padStart(2, '0');
    document.getElementById("secs-val").innerText = String(s).padStart(2, '0');
  }

  const html = `
    <div class="countdown-card">
      <span class="countdown-val" id="days-val">00</span>
      <span class="countdown-lbl">Days</span>
    </div>
    <div class="countdown-card">
      <span class="countdown-val" id="hours-val">00</span>
      <span class="countdown-lbl">Hours</span>
    </div>
    <div class="countdown-card">
      <span class="countdown-val" id="mins-val">00</span>
      <span class="countdown-lbl">Mins</span>
    </div>
    <div class="countdown-card">
      <span class="countdown-val" id="secs-val">00</span>
      <span class="countdown-lbl">Secs</span>
    </div>
  `;

  timerGrid.innerHTML = html;
  updateTimer();
  const intervalId = setInterval(updateTimer, 1000);
}


// 3. STATISTICAL COUNTER INCREMENTER

function renderStatisticsGrid() {
  const container = document.getElementById("stats-grid-container");
  if (!container || !window.ConferenceData) return;

  let html = "";
  window.ConferenceData.stats.forEach((stat, idx) => {
    html += `
      <div class="stat-card fade-up">
        <div class="stat-number text-gradient stat-counter-val" data-target="${stat.value}">${stat.value}</div>
        <div class="stat-label">${stat.label}</div>
      </div>
    `;
  });
  container.innerHTML = html;

  // Counter counting-up increments logic
  if ('IntersectionObserver' in window) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          triggerCounters();
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counterObserver.observe(container);
  } else {
    triggerCounters();
  }

  function triggerCounters() {
    const counters = document.querySelectorAll(".stat-counter-val");
    counters.forEach(counter => {
      const targetStr = counter.getAttribute("data-target");
      const targetNum = parseInt(targetStr);
      if (isNaN(targetNum)) return;

      let current = 0;
      const duration = 1200; // Total duration in ms
      const stepTime = Math.max(Math.floor(duration / targetNum), 15);

      const timer = setInterval(() => {
        current += Math.ceil(targetNum / 30);
        if (current >= targetNum) {
          counter.innerText = targetStr;
          clearInterval(timer);
        } else {
          counter.innerText = current + (targetStr.includes("+") ? "+" : "");
        }
      }, stepTime);
    });
  }
}

// 4. ANNOUNCEMENTS

function renderAnnouncements() {
  const container = document.getElementById("announcements-sidebar");
  if (!container || !window.ConferenceData) return;

  let html = "";
  window.ConferenceData.announcements.forEach(ann => {
    html += `
      <div class="announcement-card ${ann.isImportant ? 'important' : ''} fade-up">
        ${ann.isImportant ? `<span class="announcement-badge">Urgent</span>` : ''}
        <span class="announcement-date">${ann.date}</span>
        <h4 class="announcement-title">${ann.title}</h4>
        <p class="announcement-content">${ann.content}</p>
      </div>
    `;
  });
  container.innerHTML = html;
}


// 5. SPONSOR LOGOS
function renderSponsorLogos() {
  const container = document.getElementById("sponsors-list-container");
  if (!container || !window.ConferenceData) return;

  let html = "";
  window.ConferenceData.sponsors.forEach(spons => {
    html += `
      <div class="card card-hover text-center fade-up sponsor-card">
        <span class="sponsor-name">${spons.name}</span>
        <span class="sponsor-tier">${spons.tier} Partner</span>
      </div>
    `;
  });
  container.innerHTML = html;
}

// 6. COMMITTEE SECTIONS

function renderCommitteeLists() {
  const targetRoles = ["honorary", "general", "generalco", "conference", "organizing", "finance", "publication", "publicity", "web"];

  targetRoles.forEach(role => {
    const grid = document.getElementById(`committee-${role}-grid`);
    if (!grid || !window.ConferenceData.committee[role]) return;

    let html = "";
    window.ConferenceData.committee[role].forEach(member => {
      html += `
        <div class="card committee-card card-hover fade-up">
          <h4 class="member-name font-poppins font-bold">${member.name}</h4>
          <span class="member-designation">${member.designation}</span>
          <p class="member-institution">${member.institution}</p>
        </div>
      `;
    });
    grid.innerHTML = html;
  });
}

function renderPatronsLists() {
  const patronRoles = ["inspiration", "chief"];

  patronRoles.forEach(role => {
    const grid = document.getElementById(`patrons-${role}-grid`);
    if (!grid || !window.ConferenceData.committee.patrons || !window.ConferenceData.committee.patrons[role]) return;

    let html = "";
    window.ConferenceData.committee.patrons[role].forEach(member => {
      html += `
        <div class="card committee-card card-hover fade-up">
          <h4 class="member-name font-poppins font-bold">${member.name}</h4>
          <span class="member-designation">${member.designation}</span>
          <p class="member-institution">${member.institution}</p>
        </div>
      `;
    });
    grid.innerHTML = html;
  });
}


// 7. ADVISORY BOARDS
function renderAdvisoryBoards() {
  const subBoards = ["international", "national", "technical"];

  subBoards.forEach(board => {
    const grid = document.getElementById(`advisory-${board}-grid`);
    if (!grid || !window.ConferenceData.advisory[board]) return;

    let html = "";
    window.ConferenceData.advisory[board].forEach(member => {
      html += `
        <div class="card card-hover fade-up advisory-card">
          <div class="member-avatar advisory-avatar">
            <i class="fa-solid fa-user-tie"></i>
          </div>
          <div>
            <h4 class="member-name font-poppins font-bold advisory-name">${member.name}</h4>
            <span class="member-designation advisory-designation">${member.designation}</span>
            <p class="member-institution advisory-institution">${member.institution}</p>
          </div>
        </div>
      `;
    });
    grid.innerHTML = html;
  });
}

// 8. KEYNOTE SPEAKERS CARDS
function renderSpeakerCards() {
  const container = document.getElementById("speakers-cards-container");
  if (!container || !window.ConferenceData) return;

  function getCountryCode(countryName) {
    const codes = {
      "portugal": "pt",
      "australia": "au",
      "india": "in"
    };
    return codes[countryName.toLowerCase()] || "un";
  }

  let html = "";
  window.ConferenceData.speakers.forEach(speaker => {
    const code = getCountryCode(speaker.country);
    html += `
      <div class="card speaker-card card-hover fade-up">
        <div class="speaker-header">
          <div class="speaker-avatar">${speaker.avatar}</div>
          <div class="speaker-flag-wrapper">
            <img src="https://flagcdn.com/w40/${code}.png" alt="${speaker.country} Flag" class="speaker-flag">
          </div>
          <span class="speaker-country-badge">
            ${speaker.country}
          </span>
          <h3 class="speaker-name font-poppins font-bold">${speaker.name}</h3>
          <span class="speaker-institution">${speaker.institution}</span>
        </div>
        <div class="speaker-actions">
          <button onclick="alert('Speaker bio details would open here.')" class="btn btn-sm btn-outline">View Profile</button>
        </div>
      </div>
    `;
  });
  container.innerHTML = html;
}

// 9. TECHNICAL TRACKS (Tracks & Home Preview)

function renderTechnicalTracks() {
  const container = document.getElementById("technical-tracks-container");
  if (!container || !window.ConferenceData) return;

  let html = "";
  window.ConferenceData.tracks.forEach(track => {
    let topicsListHTML = "";
    track.topics.forEach(topic => {
      topicsListHTML += `<span class="track-item">${topic}</span>`;
    });

    html += `
      <div class="card track-card card-hover fade-up">
        <div class="track-icon-wrapper">
          <i class="fa-solid fa-${track.icon}"></i>
        </div>
        <span class="track-num">Track 0${track.id}</span>
        <h3 class="track-title">${track.title}</h3>
        <div class="track-list">
          ${topicsListHTML}
        </div>
      </div>
    `;
  });
  container.innerHTML = html;
}

// 10. IMPORTANT DATES TIMELINE
function renderImportantDatesTimeline() {
  const container = document.getElementById("dates-timeline-container");
  if (!container || !window.ConferenceData) return;

  let html = "";
  window.ConferenceData.importantDates.forEach(date => {
    let badgeClass = "status-active";
    let badgeLabel = "Critical";
    if (date.status === "passed") {
      badgeClass = "status-passed";
      badgeLabel = "Passed";
    }

    html += `
      <div class="timeline-item ${date.status} fade-up">
        <div class="timeline-badge">
          <i class="fa-solid fa-${date.icon}"></i>
        </div>
        <div class="timeline-content-wrapper">
          <div class="timeline-card">
            <span class="timeline-date">${date.date}</span>
            <h4 class="timeline-title">
              ${date.label} 
              <span class="status-badge ${badgeClass}">${badgeLabel}</span>
            </h4>
          </div>
        </div>
      </div>
    `;
  });
  container.innerHTML = html;
}

// 11. REGISTRATION FEES CARDS

function renderRegistrationFees() {
  const container = document.getElementById("pricing-cards-container");
  if (!container || !window.ConferenceData) return;

  let html = "";
  window.ConferenceData.registrationFees.forEach(fee => {
    html += `
      <div class="card pricing-card card-hover fade-up ${fee.popular ? 'popular' : ''}">
        ${fee.popular ? `<span class="popular-badge">Recommended</span>` : ''}
        <h3 class="pricing-category font-poppins font-bold text-center">${fee.category}</h3>
        
        <div class="pricing-amounts">
          <div>
            <span class="price-item-lbl">National Authors</span>
            <span class="price-item-val">${fee.national}</span>
          </div>
          <div>
            <span class="price-item-lbl">International Authors</span>
            <span class="price-item-val accent-val">${fee.international}</span>
          </div>
        </div>

        <ul class="pricing-benefits">
          <li><i class="fa-regular fa-circle-check"></i> Technical sessions access</li>
          <li><i class="fa-regular fa-circle-check"></i> Paper publication entry</li>
          <li><i class="fa-regular fa-circle-check"></i> Presentation certification</li>
          <li><i class="fa-regular fa-circle-check"></i> Conference kits & lunches</li>
        </ul>

        <a href="#payment-section" class="btn ${fee.popular ? 'btn-primary' : 'btn-outline'}">Register Now</a>
      </div>
    `;
  });
  container.innerHTML = html;
}

// 12. DOWNLOAD CARDS

function renderDownloadsCards() {
  const container = document.getElementById("downloads-grid-container");
  if (!container || !window.ConferenceData) return;

  let html = "";
  window.ConferenceData.downloads.forEach(dl => {
    let fileClass = "file-pdf";
    let iconClass = "fa-file-pdf";

    if (dl.type === "word") {
      fileClass = "file-word";
      iconClass = "fa-file-word";
    } else if (dl.type === "archive") {
      fileClass = "file-archive";
      iconClass = "fa-file-archive";
    } else if (dl.type === "powerpoint") {
      fileClass = "file-powerpoint";
      iconClass = "fa-file-powerpoint";
    }

    html += `
      <div class="card download-card card-hover fade-up">
        <div class="download-info">
          <div class="file-icon ${fileClass}">
            <i class="fa-solid ${iconClass}"></i>
          </div>
          <div class="download-text">
            <span class="download-title font-poppins font-bold">${dl.title}</span>
            <span class="download-filename">${dl.filename}</span>
          </div>
        </div>
        <button onclick="alert('Downloading file mock: ${dl.filename}');" class="download-btn" aria-label="Download Document">
          <i class="fa-solid fa-download"></i>
        </button>
      </div>
    `;
  });
  container.innerHTML = html;
}


// 13. FAQs ACCORDION (Click to Toggle)

function renderFAQsAccordion() {
  const container = document.getElementById("faqs-accordion-container");
  if (!container || !window.ConferenceData) return;

  let html = "";
  window.ConferenceData.faqs.forEach((faq, idx) => {
    html += `
      <div class="faq-item fade-up">
        <button class="faq-question-btn" onclick="toggleFAQ(this)">
          <span>${faq.question}</span>
          <span class="faq-icon-indicator"><i class="fa-solid fa-plus"></i></span>
        </button>
        <div class="faq-answer">
          <div class="faq-answer-inner">${faq.answer}</div>
        </div>
      </div>
    `;
  });
  container.innerHTML = html;
}

function toggleFAQ(button) {
  const item = button.parentElement;
  const answer = button.nextElementSibling;

  // Close other FAQ items
  const allItems = document.querySelectorAll(".faq-item");
  allItems.forEach(otherItem => {
    if (otherItem !== item && otherItem.classList.contains("active")) {
      otherItem.classList.remove("active");
      otherItem.querySelector(".faq-answer").style.maxHeight = null;
    }
  });

  item.classList.toggle("active");
  if (item.classList.contains("active")) {
    answer.style.maxHeight = answer.scrollHeight + "px";
  } else {
    answer.style.maxHeight = null;
  }
}

// 14. MASONRY GALLERY & LIGHTBOX MODAL

function renderGalleryGrid() {
  const container = document.getElementById("gallery-masonry-container");
  if (!container || !window.ConferenceData) return;

  let html = "";
  window.ConferenceData.gallery.forEach(img => {
    html += `
      <div class="gallery-item fade-up" data-cat="${img.category}" onclick="openLightbox('${img.title}', '${img.caption}', '${img.category}')">
        <div class="gallery-media-wrapper">
          <i class="fa-regular fa-image"></i>
          <div class="gallery-media-overlay"></div>
        </div>
        <div class="gallery-item-details">
          <span class="gallery-item-cat">${img.category}</span>
          <h4 class="gallery-item-title">${img.title}</h4>
          <p class="gallery-item-desc">${img.caption}</p>
        </div>
      </div>
    `;
  });
  container.innerHTML = html;

  // Lightbox close listeners
  const lightbox = document.getElementById("lightbox-modal-element");
  if (lightbox) {
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox || e.target.classList.contains("lightbox-close") || e.target.closest(".lightbox-close")) {
        lightbox.classList.remove("active");
        document.body.classList.remove("modal-open");
      }
    });
  }
}

function filterGallery(btn, category) {
  // Toggle active button
  const filterBtns = document.querySelectorAll(".gallery-filter-btn");
  filterBtns.forEach(b => b.classList.remove("active"));
  btn.classList.add("active");

  // Show/Hide Items
  const items = document.querySelectorAll(".gallery-item");
  items.forEach(item => {
    const cat = item.getAttribute("data-cat");
    if (category === "all" || cat === category) {
      item.classList.remove("hidden");
    } else {
      item.classList.add("hidden");
    }
  });
}

function openLightbox(title, caption, category) {
  const lightbox = document.getElementById("lightbox-modal-element");
  if (!lightbox) return;

  lightbox.querySelector("#lightbox-cat").innerText = category;
  lightbox.querySelector("#lightbox-title").innerText = title;
  lightbox.querySelector("#lightbox-desc").innerText = caption;

  lightbox.classList.add("active");
  document.body.classList.add("modal-open");
}


// 15. HOTELS LIST (Venue Page)
function renderHotelsList() {
  const container = document.getElementById("venue-hotels-container");
  if (!container || !window.ConferenceData) return;

  let html = "";
  window.ConferenceData.hotels.forEach(hotel => {
    html += `
      <div class="card card-hover fade-up">
        <div class="hotel-card-header">
          <h4 class="font-poppins font-bold hotel-name">${hotel.name}</h4>
          <span class="hotel-rating">${hotel.rating}</span>
        </div>
        <p class="text-muted hotel-desc">${hotel.desc}</p>
        <div class="hotel-distance-row">
          <span><i class="fa-solid fa-map-location text-blue-500"></i> Distance to Campus</span>
          <span class="hotel-distance-val">${hotel.distance}</span>
        </div>
      </div>
    `;
  });
  container.innerHTML = html;
}


// 16. CONTACT FORM SUBMISSION VALIDATOR
function setupContactFormHandler() {
  const form = document.getElementById("contact-form-element");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const btn = form.querySelector("button[type='submit']");
    const label = btn.innerHTML;

    btn.innerHTML = `<i class="fa-solid fa-spinner animate-spin"></i> Processing...`;
    btn.disabled = true;

    setTimeout(() => {
      alert("Feedback received! Thank you for contacting ICNVIP-2027. We will respond within 24 hours.");
      form.reset();
      btn.innerHTML = label;
      btn.disabled = false;
    }, 1500);
  });
}


// 17. BACK TO TOP BUTTON
function setupBackToTopButton() {
  const btn = document.createElement("button");
  btn.innerHTML = `<i class="fa-solid fa-arrow-up"></i>`;
  btn.setAttribute("aria-label", "Back to Top");
  btn.className = "back-to-top";
  document.body.appendChild(btn);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// 18. HERO IMAGE SLIDER (right panel)
function setupHeroSlider() {
  const slides = document.querySelectorAll(".hero-image-slider .hero-slide");
  if (slides.length === 0) return;

  let currentIndex = 0;
  slides[currentIndex].classList.add("active");

  setInterval(() => {
    slides[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add("active");
  }, 4000);
}
