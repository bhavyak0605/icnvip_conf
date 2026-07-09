// Central Data Repository for ICNVIP-2027
// Structured to enable easy connection to an Admin Panel or Firebase Firestore database later.

window.ConferenceData = {
  conferenceInfo: {
    name: "International Conference on Nanoelectronics, VLSI and Image Processing (ICNVIP-2027)",
    shortName: "ICNVIP-2027",
    dates: "29–30 March 2027",
    organizedBy: "Department of Electronics & Communication Engineering",
    institution: "Bharati Vidyapeeth (Deemed to be University) College of Engineering, Pune",
    address: "Pune-Satara Road, Dhankawadi, Pune, Maharashtra 411043, India",
    theme: "Advancing Innovation in Nano-scale Semiconductor Devices, low power VLSI systems, and intelligent vision algorithms.",
    email: "contact@icnvip2027.org",
    phone: "+91-20-24107300",
    submissionLink: "https://cmt3.research.microsoft.com/ICNVIP2027", // Microsoft CMT portal
    countdownTarget: "2027-03-29T09:00:00"
  },

  announcements: [
    {
      id: "a1",
      date: "July 10, 2026",
      title: "Call for Papers Released",
      content: "Authors are invited to submit original technical papers in PDF format through the Microsoft CMT portal.",
      isImportant: true
    },
    {
      id: "a2",
      date: "August 15, 2026",
      title: "Springer Proceedings Confirmed",
      content: "Accepted and registered papers will be published in a Scopus-indexed Springer book series.",
      isImportant: true
    },
    {
      id: "a3",
      date: "October 01, 2026",
      title: "Keynote Panels Announced",
      content: "Top global experts from MIT, Stanford, and Intel will deliver plenary lectures at the conference.",
      isImportant: false
    }
  ],

  stats: [
    { value: "450+", label: "Submissions Expected" },
    { value: "35+", label: "Advisory Board Members" },
    { value: "10+", label: "Keynote Speakers" },
    { value: "3", label: "Parallel Tracks" },
    { value: "2", label: "Days Conference" }
  ],

  sponsors: [
    { name: "Intel Labs", tier: "Gold" },
    { name: "NVIDIA Academic", tier: "Gold" },
    { name: "Cadence Design Systems", tier: "Silver" },
    { name: "Synopsys India", tier: "Silver" },
    { name: "MathWorks", tier: "Bronze" }
  ],

  committee: {
    honorary: [
      { name: "Dr. Vishwajeet Kadam", designation: "Pro-Vice Chancellor & Secretary", institution: "Bharati Vidyapeeth, Pune", avatar: "VK" }
    ],
    general: [
      { name: "Dr. Vidur A. Patil", designation: "Vice Chancellor", institution: "Bharati Vidyapeeth University, Pune", avatar: "VP" },
      { name: "Dr. Sunil R. Patil", designation: "Principal", institution: "BVP College of Engineering, Pune", avatar: "SP" }
    ],
    conference: [
      { name: "Dr. Arundhati A. Shinde", designation: "Professor & Head, Dept. of E&TC", institution: "BVP College of Engineering, Pune", avatar: "AS" }
    ],
    organizing: [
      { name: "Prof. Rajesh M. Kumar", designation: "Associate Professor, Dept. of E&TC", institution: "BVP College of Engineering, Pune", avatar: "RK" },
      { name: "Dr. Shruti S. Deshpande", designation: "Assistant Professor, Dept. of E&TC", institution: "BVP College of Engineering, Pune", avatar: "SD" }
    ],
    finance: [
      { name: "Prof. Vinayak D. Joshi", designation: "Assistant Professor", institution: "BVP College of Engineering, Pune", avatar: "VJ" }
    ],
    publication: [
      { name: "Dr. Nitin R. Kulkarni", designation: "Professor, Dept. of E&TC", institution: "BVP College of Engineering, Pune", avatar: "NK" }
    ],
    publicity: [
      { name: "Prof. Aniket S. Mehta", designation: "Assistant Professor", institution: "BVP College of Engineering, Pune", avatar: "AM" }
    ],
    web: [
      { name: "Prof. Sameer B. Deshmukh", designation: "Assistant Professor", institution: "BVP College of Engineering, Pune", avatar: "SBD" }
    ]
  },

  advisory: {
    international: [
      { name: "Dr. Evelyn Sterling", designation: "Professor of Nanotechnology", institution: "Stanford University, USA" },
      { name: "Dr. Hiroshi Tanaka", designation: "Principal Researcher", institution: "Tokyo Institute of Technology, Japan" },
      { name: "Prof. Sarah Jenkins", designation: "Lead Scientist, Computer Vision", institution: "University of Cambridge, UK" },
      { name: "Dr. Matteo Rossi", designation: "Professor of Microelectronics", institution: "Politecnico di Milano, Italy" }
    ],
    national: [
      { name: "Dr. Amitava Pramanik", designation: "Chief Scientist", institution: "IISc Bangalore" },
      { name: "Dr. R. K. Shevgaonkar", designation: "Emeritus Professor", institution: "IIT Bombay" },
      { name: "Dr. K. P. Ray", designation: "Outstanding Scientist & Dean", institution: "DIAT Pune" },
      { name: "Dr. Bhabatosh Chanda", designation: "Emeritus Professor", institution: "ISI Kolkata" }
    ],
    technical: [
      { name: "Dr. Saurabh Lodha", designation: "Professor, EE Department", institution: "IIT Bombay" },
      { name: "Dr. Sudeb Dasgupta", designation: "Professor, ECE Department", institution: "IIT Roorkee" },
      { name: "Dr. Jayadeva", designation: "Professor & Head, EE Department", institution: "IIT Delhi" },
      { name: "Dr. Anirban Sengupta", designation: "Associate Professor, CSE", institution: "IIT Indore" }
    ]
  },

  speakers: [
    {
      name: "Prof. Evelyn Sterling",
      country: "United States",
      institution: "Stanford University",
      area: "Sub-5nm Tunnel FETs, Quantum Semiconductor Interfaces & Nanodevices.",
      avatar: "ES"
    },
    {
      name: "Dr. Hiroshi Tanaka",
      country: "Japan",
      institution: "Tokyo Institute of Technology",
      area: "Low-Power 3D-IC Architectures, Neuromorphic Hardware Accelerators.",
      avatar: "HT"
    },
    {
      name: "Prof. Sarah Jenkins",
      country: "United Kingdom",
      institution: "University of Cambridge",
      area: "Edge-based Intelligent Video Analytics, Hyperspectral Image Processing.",
      avatar: "SJ"
    },
    {
      name: "Dr. Matteo Rossi",
      country: "Italy",
      institution: "Politecnico di Milano",
      area: "High-level VLSI Synthesis, Cryptographic Hardware Implementations.",
      avatar: "MR"
    }
  ],

  tracks: [
    {
      id: 1,
      title: "Nanoelectronics & Nano Devices",
      topics: [
        "Advanced semiconductor materials (graphene, TMDs, nanowires, 2D alloys)",
        "Nanoelectronic device modeling, simulation, and quantum transport theory",
        "Novel transistor architectures (FinFET, GAA-FET, Tunnel-FET, CNFET)",
        "Spintronics, molecular electronics, and organic semiconductor technologies",
        "Sensors, actuators, MEMS/NEMS architectures, and energy-harvesting systems",
        "Quantum computing platforms, qubits implementation, and cryo-electronics"
      ],
      icon: "microchip"
    },
    {
      id: 2,
      title: "VLSI Design & Embedded Systems",
      topics: [
        "Digital, analog, mixed-signal, and RF integrated circuit designs",
        "Low-power VLSI methodologies, thermal analysis, and power management",
        "Embedded architectures, system-on-chip (SoC), and network-on-chip (NoC)",
        "Hardware accelerators for AI, Machine Learning, and Edge compute units",
        "Hardware security, cryptography, testing, yield, and design-for-testability",
        "IoT nodes, RTOS implementations, cyber-physical networks, and automotive chips"
      ],
      icon: "project-diagram"
    },
    {
      id: 3,
      title: "Signal Processing & Image Processing",
      topics: [
        "Speech, audio, and biomedical signal processing algorithms",
        "Image and video compression codecs, encoding protocols, and formats",
        "Computer vision, deep-learning based object tracking, and scene analysis",
        "Medical diagnostics imaging (MRI, CT, Ultrasound) and signal retrieval",
        "Radar, sonar, array processing, and remote sensing satellite data",
        "Intelligent visual stream processing, denoising, super-resolution, and restoration"
      ],
      icon: "eye"
    }
  ],

  importantDates: [
    { label: "Full Paper Submission Open", date: "July 10, 2026", status: "passed", icon: "paper-plane" },
    { label: "Paper Submission Deadline", date: "November 15, 2026", status: "active", icon: "calendar-plus" },
    { label: "Notification of Acceptance", date: "January 15, 2027", status: "upcoming", icon: "envelope-open-text" },
    { label: "Camera-Ready Submission", date: "February 15, 2027", status: "upcoming", icon: "file-upload" },
    { label: "Author Registration Deadline", date: "March 01, 2027", status: "upcoming", icon: "credit-card" },
    { label: "Conference Dates", date: "March 29–30, 2027", status: "upcoming", icon: "users" }
  ],

  registrationFees: [
    { category: "Student (UG / PG / PhD)", national: "INR 4,500", international: "USD 150", type: "student", popular: false },
    { category: "Academician / Researcher", national: "INR 6,500", international: "USD 250", type: "academic", popular: true },
    { category: "Industry Professional", national: "INR 8,000", international: "USD 350", type: "industry", popular: false },
    { category: "Attendee / Co-author", national: "INR 3,000", international: "USD 100", type: "attendee", popular: false }
  ],

  downloads: [
    { title: "Conference Brochure (PDF)", filename: "ICNVIP-2027_Brochure.pdf", type: "pdf" },
    { title: "Call For Papers Poster (PDF)", filename: "ICNVIP-2027_CFP.pdf", type: "pdf" },
    { title: "Paper Word Template (.docx)", filename: "ICNVIP_Word_Template.docx", type: "word" },
    { title: "Paper LaTeX Template (.zip)", filename: "ICNVIP_LaTeX_Template.zip", type: "archive" },
    { title: "Registration Form (.docx)", filename: "ICNVIP_Registration_Form.docx", type: "word" },
    { title: "Poster Presentation Guidelines", filename: "ICNVIP_Poster_Guidelines.pdf", type: "pdf" }
  ],

  faqs: [
    {
      question: "How can I submit my research paper to ICNVIP-2027?",
      answer: "All papers must be submitted electronically in PDF format using the Microsoft CMT system. Make sure to download and utilize the official paper template available on the Downloads page."
    },
    {
      question: "Is there a limit on the number of pages for submissions?",
      answer: "Yes, standard submissions are limited to a maximum of 6 pages including figures, tables, and references. Up to 2 additional pages are allowed at an extra charge."
    },
    {
      question: "What publication indexing features are confirmed?",
      answer: "All accepted and presented papers will be submitted to the publisher. The proceedings series is indexed in major indexing systems including Scopus, EI Compendex, and Google Scholar."
    },
    {
      question: "Does the conference support remote presentation?",
      answer: "Yes, the conference operates in hybrid mode. Presenters from outside India or those with travel restrictions may opt for virtual presentation slots."
    },
    {
      question: "What payment options are available for registration?",
      answer: "Registration fees can be paid via online NEFT bank transfer or through our secure international gateway. Detailed instructions are on the Registration page."
    }
  ],

  gallery: [
    { id: 1, title: "Keynote Plenary Session", category: "photo", caption: "Audience listening to the nanoelectronics breakthrough presentation.", image: "plenary" },
    { id: 2, title: "Best Paper Felicitation", category: "photo", caption: "Honoring outstanding research contributions from the Image Processing track.", image: "felicitation" },
    { id: 3, title: "Poster Exhibition Area", category: "photo", caption: "Researchers discussing embedded system models with advisory members.", image: "posters" },
    { id: 4, title: "College Main Entrance", category: "photo", caption: "Main academic building of Bharati Vidyapeeth College of Engineering, Pune.", image: "campus" },
    { id: 5, title: "Panel Discussion Video", category: "video", caption: "Video recording covering the future trends in low-power chip synthesis.", image: "panel-video" },
    { id: 6, title: "VLSI Laboratory Visit", category: "photo", caption: "Touring the fabrication and testing labs at Pune campus.", image: "lab-visit" }
  ],

  hotels: [
    { name: "The Pride Hotel Pune", distance: "6.5 km from Venue", rating: "★★★★★", desc: "Premium rooms, dining facilities, and reliable travel desk assistance." },
    { name: "Ramee Grand Hotel", distance: "5.8 km from Venue", rating: "★★★★★", desc: "Excellent business lounge amenities and quick transit access." },
    { name: "Hotel Sagar Plaza", distance: "7.0 km from Venue", rating: "★★★★☆", desc: "Located in central Pune, offering business suites at special tariffs." },
    { name: "Coronet Hotel", distance: "4.5 km from Venue", rating: "★★★★☆", desc: "Cozy rooms close to the university, popular among academic attendees." }
  ],

  publication: {
    publisher: "Springer Science+Business Media",
    indexing: "Scopus, EI Compendex, INSPEC, Google Scholar, and DBLP",
    isbn: "978-3-031-XXXX-X (Print) | 978-3-031-XXXX-Y (Online)",
    doi: "10.1007/978-3-031-XXXX-X"
  }
};
