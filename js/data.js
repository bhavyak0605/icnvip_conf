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
    email: "hvmhetre@bvucoep.edu.in",
    phone: "+91 9767640673",
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
    // { value: "450+", label: "Submissions Expected" },
    { value: "40+", label: "Advisory Board Members" },
    // { value: "10+", label: "Keynote Speakers" },
    // { value: "3", label: "Parallel Tracks" },
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
    patrons: {
      inspiration: [
        { name: "Hon'ble. Dr. Patangrao Kadam", designation: "Founder Chancellor", institution: "Bharati Vidyapeeth and Bharati Vidyapeeth (Deemed to be University), Pune", avatar: "PK" }
      ],
      chief: [
        { name: "Hon'ble. Dr. Shivajirao Kadam", designation: "Chancellor", institution: "Bharati Vidyapeeth (Deemed to be University), Pune", avatar: "SK" },
        { name: "Hon'ble. Dr. Vishwajeet Kadam", designation: "Secretary & Pro Vice-Chancellor", institution: "Bharati Vidyapeeth and Bharati Vidyapeeth (Deemed to be University), Pune", avatar: "VK" },
        { name: "Hon'ble. Dr. Vivek Saoji", designation: "Vice-Chancellor", institution: "Bharati Vidyapeeth (Deemed to be University), Pune", avatar: "VS" }
      ]
    },
    general: [
      { name: "Dr. Rajesh Prasad", designation: "Principal", institution: "Bharati Vidyapeeth (Deemed to be University), College of Engineering, Pune", avatar: "RP" },
      { name: "Dr. Ji Mam Kim", designation: "Professor", institution: "Sungkyunkwan University, South Korea", avatar: "JMK" }
    ],
    generalco: [
      { name: "Dr. Sunita Jadhav", designation: "Vice Principal, (Accreditations & Research)", institution: "Bharati Vidyapeeth (Deemed to be University), College of Engineering, Pune", avatar: "SJ" },
      { name: "Dr. Sachin Chavan", designation: "Vice Principal, (Administration)", institution: "Bharati Vidyapeeth (Deemed to be University), College of Engineering, Pune", avatar: "SC" }
    ],
    conference: [
      { name: "Dr. Harshada Mhetre", designation: "Assistant Professor, Dept. of ECE", institution: "Bharati Vidyapeeth (Deemed to be University) College of Engineering, Pune", avatar: "HM" },
      { name: "Dr. Deepak Dubal", designation: "School of Chemistry and Physics, Faculty of Science", institution: "Queensland University of Technology, Brisbane, Queensland", avatar: "DD" }
    ],
    organizing: [
      { name: "Dr. Ravindra Bulakhe", designation: "Professor, Head", institution: "Symbiosis Centre for Nanoscience and Nanotechnology (SCNN)", avatar: "RB" },
      { name: "Dr. Mangal Patil", designation: "Associate Professor & Head, Dept. of ECE", institution: "Bharati Vidyapeeth (Deemed to be University) College of Engineering, Pune", avatar: "MP" }
    ],
    finance: [
      { name: "Prof. Prashant Chougule", designation: "Assistant Professor, Dept. of ECE", institution: "Bharati Vidyapeeth (Deemed to be University) College of Engineering, Pune", avatar: "PC" }
    ],
    publication: [
      { name: "Prof. Sonali Pawar", designation: "Assistant Professor, Dept. of ECE", institution: "Bharati Vidyapeeth (Deemed to be University) College of Engineering, Pune", avatar: "SP" }
    ],
    publicity: [
      { name: "Prof. Vikas Kaduskar", designation: "Assistant Professor, Dept. of ECE", institution: "Bharati Vidyapeeth (Deemed to be University) College of Engineering, Pune", avatar: "VK" }
    ],
    web: [
      { name: "Prof. Aparna Patil", designation: "Assistant Professor, Dept. of ECE", institution: "Bharati Vidyapeeth (Deemed to be University) College of Engineering, Pune", avatar: "AP" }
    ]
  },

  advisory: {
    international: [
      { name: "Dr. Ajay K Pandey", designation: "Professor, Electrical Engineering and Robotics", institution: "Queensland University of Technology, Australia" },
      { name: "Dr. Ashish Bhaskar", designation: "Professor", institution: "Queensland University of Technology, Australia" },
      { name: "Dr. Yateendra Mishra", designation: "Associate Professor", institution: "Queensland University of Technology, Australia" },
      { name: "Dr. Udayabhaskar Rednam", designation: "Associate Professor", institution: "Universidad Tecnológica Metropolitana, Santiago, Chile" },
      { name: "Dr. Radhamanohar Aepuru", designation: "Advanced Materials for Sensors & Robust Energy harvesters Laboratory (AmSRE Lab), Departamento de Ingeniería Mecánica", institution: "Facultad de Ciencias Físicas y Matemáticas, Universidad de Chile, Santiago, Chile" },
      { name: "Dr. Prasad Lokhande", designation: "Assistant Professor, Department of Mechanics of Materials", institution: "Institute of Fundamental Technological Research, Polish Academy of Sciences, Warsaw, Poland" },
      { name: "Dr. Marcin Krajewski", designation: "Researcher", institution: "Institute of Fundamental Technological Research, Polish Academy of Sciences, Warsaw, Poland" },
      { name: "Dr. Kalidasan Balasubramanian", designation: "Lecturer", institution: "Sunway Centre for Electrochemical Energy and Sustainable Technology, Faculty of Engineering and Technology" },
      { name: "Dr. Muhammad Hazim Mohamed Khir", designation: "Post-Doctoral Research Fellow", institution: "Sunway Centre for Electrochemical Energy and Sustainable Technology, Faculty of Engineering and Technology" },
      { name: "Dr. Farihahusnah Hussin", designation: "Associate Professor & Programme Leader", institution: "Research Centre for Carbon Dioxide Capture and Utilisation, Faculty of Engineering and Technology" },
      { name: "Dr. Muhammad Norhaffis bin Mustafa", designation: "Senior Lecturer", institution: "Sunway Centre for Electrochemical Energy and Sustainable Technology, Faculty of Engineering and Technology" },
      { name: "Debarati Sen", designation: "Research Assistant, Electrical and Computer Engineering", institution: "Nanophotonics and Solid State physics, Madison, Wisconsin, United States" },
      { name: "Dr. Pasan Maduranga", designation: "Faculty Member, Dept. of EEE", institution: "University of Sri Jayawardenapura, Sri Lanka" },
      { name: "Dr. M. Shamim Kaiser", designation: "Faculty Member", institution: "Institute of Information Technology, Jahangirnagar University, Dhaka, Bangladesh" },
      { name: "Dr. Dai-Viet N. Vo", designation: "Faculty Member", institution: "Institute of Applied Technology and Sustainable Development, Nguyen Tat Thanh University, Vietnam" },
      { name: "Dr. M. R. Ashwin Kishore", designation: "Research Professor", institution: "University of Seoul, South Korea" },
      { name: "Dr. Harish S. Chavan", designation: "Researcher", institution: "Republic of Korea" }
    ],
    national: [
      { name: "Dr. Ravindra Bulakhe", designation: "Professor, Head", institution: "Symbiosis Centre for Nanoscience and Nanotechnology (SCNN)" },
      { name: "Dr. Habib Pathan", designation: "Associate Professor", institution: "Savitribai Phule Pune University, Pune" },
      { name: "Dr. Sudipta Das", designation: "Professor, Electronics and Communication Engineering", institution: "IMPS College of Engg. and Technology, West Bengal, India" },
      { name: "Dr. Vijay Nath", designation: "Department of Electronics & Communication Engineering", institution: "Birla Institute of Technology Mesra, Ranchi" },
      { name: "Dr. Sonawane Chandrakant R.", designation: "Professor, Dy. Head", institution: "Symbiosis Centre for Nanoscience and Nanotechnology (SCNN)" },
      { name: "Dr. Nithesh Naik", designation: "Faculty Member", institution: "Manipal Institute of Technology, Manipal Academy of Higher Education, India" },
      { name: "Dr. Pavan Hiremath", designation: "Faculty Member", institution: "Manipal Institute of Technology, Manipal Academy of Higher Education, India" },
      { name: "Dr. Ritesh Bhat", designation: "Faculty Member", institution: "School of Advanced Manufacturing, SIU" },
      { name: "Dr. S. B. Goyal", designation: "Faculty Member", institution: "Chitkara University, Punjab, India" },
      { name: "Dr. Rekha Nair", designation: "Professor", institution: "Poornima College of Engineering, Jaipur, Rajasthan, India" },
      { name: "Dr. Arun Kumar", designation: "Head, University Department of Physics", institution: "Ranchi University, Ranchi" },
      { name: "Dr. Raj Kumar Singh", designation: "Assistant Professor, University Department of Physics", institution: "Ranchi University, Ranchi" },
      { name: "Dr. Bibhudendra Acharya", designation: "Professor", institution: "National Institute of Technology, Raipur" },
      { name: "Sajal K. Paul", designation: "Professor", institution: "Indian Institute of Technology (School of Mines), Dhanbad" },
      { name: "Dr. Sukhi Y", designation: "Professor", institution: "R.M.K. Engineering College, Chennai" },
      { name: "Dr. Rajeev Ranjan", designation: "Associate Professor", institution: "IIT ISM, Dhanbad" },
      { name: "Dr. Abhijit Biswas", designation: "Professor", institution: "Calcutta University, Calcutta (WB) India" },
      { name: "Titilope Dada", designation: "Research Assistant, Dept. of ECE", institution: "Solar Cells & Thermophotovoltaics, United States" },
      { name: "Dr. Manish Mishra", designation: "Professor, Department of Electronics", institution: "DDU University, Gorakhpur" },
      { name: "DEEPAK KUMAR", designation: "Faculty Member", institution: "Manipal University" },
      { name: "Dr. Sawanta S. Mali", designation: "Associate Research Professor", institution: "Chonnam National University, Gwangju" },
      { name: "Dr. T. Pandiyarajan", designation: "Faculty Member", institution: "IIITDM Kurnool" },
      { name: "Sreekanth Perumbilavil", designation: "Faculty Member", institution: "Manipal Institute of Applied Physics (MIAP), MAHE" },
      { name: "Prabhakaran Thandapani", designation: "Associate Professor, Department of Physics", institution: "School of Advanced Sciences, VIT, AP, India" },
      { name: "Dr. R. Arthur James", designation: "Professor & Chair, Department of Marine Science", institution: "Bharathidasan University" },
      { name: "Vignesh Sivanandham", designation: "Researcher", institution: "Indian Institute of Food Processing Technology (IIFPT), Tamil Nadu" },
      { name: "Dr. Hariharan Swaminathan", designation: "C.V. Raman Postdoctoral Researcher", institution: "Indian Institute of Science, Bangalore" },
      { name: "Kokkarachedu Varaprasad", designation: "Associate Professor", institution: "Universidad San Sebastián" },
      { name: "Priya Rose T", designation: "Assistant Professor, International school of photonics", institution: "Cochin University of science and Technology" }
    ],
    technical: []
  },

  speakers: [
    {
      name: "Dr. João Manuel R. S. Tavares",
      country: "Portugal",
      institution: "Faculdade de Engenharia da Universidade do Porto",
      area: "Computational Vision, Image Processing & Visualization Methods.",
      avatar: "JT"
    },
    {
      name: "Dr. Deepak Dubal",
      country: "Australia",
      institution: "Queensland University of Technology, Brisbane",
      area: "Functional Energy Materials, Supercapacitors & Nano-technologies.",
      avatar: "DD"
    },
    {
      name: "Dr. Nilanjan Dey",
      country: "India",
      institution: "Techno International New Town, Kolkata",
      area: "Biomedical Imaging, Signal Processing & Intelligent Systems.",
      avatar: "ND"
    },
    {
      name: "Dr. Nithesh Naik",
      country: "India",
      institution: "Manipal Institute of Technology, MAHE, Manipal",
      area: "Smart Sensors, Materials Science & Nano-manufacturing.",
      avatar: "NN"
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
    { label: "Full Paper Submission Open", date: "August 10, 2026", status: "passed", icon: "paper-plane" },
    { label: "Paper Submission Deadline", date: "December 15, 2026", status: "active", icon: "calendar-plus" },
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
