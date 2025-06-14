export const portfolioData = {
  personal: {
    name: "Briyan Yehezkhiel",
    title: "Mahasiswa Ilmu Komputer",
    bio: "Mahasiswa Ilmu Komputer semester 6 di Universitas Sumatera Utara dengan IPK 3.92/4.00. Aktif dalam berbagai organisasi dan proyek pengembangan aplikasi, serta memiliki pengalaman sebagai narasumber pelatihan soft skill. Menguasai berbagai bahasa pemrograman (Java, Kotlin, Python, PHP, JavaScript, C++) dan memiliki kemampuan komunikasi, kolaborasi, serta kepemimpinan yang baik. Tertarik pada pengembangan aplikasi berbasis web dan AI.",
    email: "briyanyehezkhiel@gmail.com",
    phone: "085275527359",
    location: "Medan, Sumatera Utara",
    linkedin: "https://linkedin.com/in/briyanyehezkhiel",
    github: "https://github.com/briyanyehezkhiel",
    website: "https://briyanyehezkhiel.dev"
  },

  skills: {
    expert: [
      { name: "Java", icon: "Coffee" },
      { name: "Kotlin", icon: "Smartphone" },
      { name: "Python", icon: "Terminal" },
      { name: "PHP", icon: "Server" },
      { name: "JavaScript", icon: "Code" },
      { name: "C++", icon: "Code2" }
    ],
    intermediate: [
      { name: "MySQL", icon: "Database" },
      { name: "Tailwind CSS", icon: "Palette" },
      { name: "Laravel", icon: "Server" },
      { name: "Filament", icon: "Server" },
      { name: "React", icon: "Globe" },
      { name: "TypeScript", icon: "FileText" }
    ],
    beginner: [
      { name: "Machine Learning", icon: "Brain" },
      { name: "Flutter", icon: "Smartphone" }
    ]
  },

  education: {
    degree: "S1 Ilmu Komputer",
    university: "Universitas Sumatera Utara",
    gpa: "3.92/4.00",
    start: "Sep 2022",
    expectedGraduation: "2026",
    notes: [
      "Aktif dalam berbagai organisasi dan kepanitiaan",
      "Pernah jadi narasumber dalam sebuah workshop"
    ],
    school: {
      name: "SMA N 1 Pahae Jae",
      location: "Tapanuli Utara, Sumatera Utara",
      score: "92.00/100.00",
      start: "Sep 2019",
      end: "Sep 2022"
    },
    relevantCourses: [
      "Algorithm and Programming",
      "Data Structure",
      "Calculus",
      "Database System",
      " Web Programming",
      "Software Engineering",
      "Artificial Intelligence",
      "Big Data",
      "Business Intelligence",
      "Human Computer Interaction"
    ]
  },

  projects: [
    {
      title: "Arsip Seksi V",
      description: "Pengembangan sistem informasi internal berbasis website untuk pengelolaan dan digitalisasi arsip perkara sengketa di Kantor Pertanahan Kota Medan. Berperan aktif dalam analisis kebutuhan, perancangan UI, serta pengembangan sistem menggunakan Laravel, Tailwind CSS, Filament, dan MySQL.",
      technologies: ["Laravel", "Tailwind CSS", "Filament", "MySQL"],
      features: [
        "Pengelolaan arsip perkara sengketa",
        "Digitalisasi arsip",
        "Kolaborasi tim",
        "Analisis kebutuhan & perancangan UI"
      ],
      github: "https://github.com/briyanyehezkhiel/MagangBPN",
      demo: "https://arispseksiv.great-site.net",
      image: "/arsipseksiv.png"
    }
  ],

  experience: [
    {
      company: "Kantor Pertanahan Kota Medan",
      position: "Web Developer Intern",
      duration: "Mar 2025 - May 2025",
      description: "Pengembangan sistem informasi internal Arsip Seksi V untuk pengelolaan arsip perkara sengketa.",
      responsibilities: [
        "Analisis kebutuhan dan perancangan UI",
        "Pengembangan sistem dengan Laravel, Tailwind CSS, Filament, MySQL",
        "Kolaborasi tim"
      ],
      technologies: ["Laravel", "Tailwind CSS", "Filament", "MySQL"]
    },
    {
      company: "Mimind",
      position: "Front-End Developer",
      duration: "Sep 2024 - Nov 2024",
      description: "Pengembangan aplikasi website AI prediksi kondisi mental user dan chatbot AI.",
      responsibilities: [
        "Pengembangan UI interaktif",
        "Integrasi AI chatbot"
      ],
      technologies: ["React", "AI", "Tailwind CSS"]
    },
    {
      company: "Quiz AI",
      position: "Front-End Developer",
      duration: "Feb 2024 - Apr 2024",
      description: "Pengembangan website quiz AI dengan prompt topik, penilaian otomatis, dan leaderboard.",
      responsibilities: [
        "Pengembangan UI quiz",
        "Integrasi AI untuk penilaian dan leaderboard"
      ],
      technologies: ["React", "AI", "Tailwind CSS"]
    },
    {
      company: "Aplikasi Kasir Sederhana",
      position: "Java Developer",
      duration: "Aug 2023 - Dec 2023",
      description: "Pengembangan aplikasi kasir sederhana berbasis Java.",
      responsibilities: [
        "Perhitungan dan penyimpanan data barang",
        "Pembuatan invoice"
      ],
      technologies: ["Java"]
    }
  ],

  organizations: [
    {
      name: "Computer Science Anniversary",
      position: "Anggota Divisi Humas",
      duration: "Oct 2022 - Dec 2022",
      description: "Distribusi undangan, mendampingi tamu, pengingat jadwal."
    },
    {
      name: "IMILKOM",
      position: "Anggota Divisi Wawasan Kontemporer",
      duration: "Jul 2023 - Jul 2024",
      description: "Diskusi, bootcamp, lomba, kuliah umum."
    },
    {
      name: "Natal KMKI",
      position: "Anggota Divisi Humas",
      duration: "Oct 2023 - Dec 2023",
      description: "Undangan, mendampingi tamu, pengingat jadwal."
    },
    {
      name: "PMB Ilmu Komputer",
      position: "Koordinator Humas",
      duration: "Jun 2024 - Aug 2024",
      description: "Undangan, mendampingi tamu, pengingat jadwal, sponsor."
    },
    {
      name: "Komisi Pemilihan Umum Fasilkom TI",
      position: "Ketua Kepanitiaan",
      duration: "Jun 2024 - Aug 2024",
      description: "Pelantikan, timeline, koordinasi, pengawasan pemilihan."
    }
  ],

  certifications: [
    {
      name: "Belajar Dasar Git dengan GitHub",
      issuer: "Dicoding",
      date: "2023",
      credentialId: ""
    },
    {
      name: "Cloud Practitioner Essentials (Belajar Dasar AWS Cloud)",
      issuer: "Dicoding",
      date: "2023",
      credentialId: ""
    },
    {
      name: "Belajar Dasar Pemrograman Web",
      issuer: "Dicoding",
      date: "2023",
      credentialId: ""
    },
    {
      name: "Belajar Dasar AI",
      issuer: "Dicoding",
      date: "2023",
      credentialId: ""
    },
    {
      name: "Belajar Dasar Data Science",
      issuer: "Dicoding",
      date: "2023",
      credentialId: ""
    },
    {
      name: "Belajar Dasar Structured Query Language (SQL)",
      issuer: "Dicoding",
      date: "2023",
      credentialId: ""
    },
    {
      name: "IMILKOM Mini Bootcamp Python Programming",
      issuer: "IMILKOM USU",
      date: "2023",
      credentialId: ""
    },
    {
      name: "Pelatihan Kesekretariatan dan Persidangan IMILKOM",
      issuer: "IMILKOM USU",
      date: "2023",
      credentialId: ""
    },
    {
      name: "Pelatihan Dasar Organisasi IMILKOM",
      issuer: "IMILKOM USU",
      date: "2023",
      credentialId: ""
    },
    {
      name: "21st Computer Science Anniversary (Panitia)",
      issuer: "Fasilkom-TI USU",
      date: "2022",
      credentialId: ""
    },
    {
      name: "Workshop: 'How to become a fullstack developer'",
      issuer: "Fasilkom-TI USU",
      date: "2023",
      credentialId: ""
    },
    {
      name: "IMILKOM Tech Competition (Panitia)",
      issuer: "IMILKOM USU",
      date: "2023",
      credentialId: ""
    },
    {
      name: "WORKSHOP SOFT SKILL TRAINING 'Kebutuhan AI dalam Optimalisasi Kinerja'",
      issuer: "Fasilkom-TI USU",
      date: "2024",
      credentialId: ""
    },
    {
      name: "CURIOUSA CS USU 2024 (Koordinator Seksi Hubungan Masyarakat)",
      issuer: "Fasilkom-TI USU",
      date: "2024",
      credentialId: ""
    },
    {
      name: "Anggota Departemen Wawasan Kontemporer IMILKOM 2023/2024",
      issuer: "IMILKOM USU",
      date: "2023/2024",
      credentialId: ""
    }
  ],

  achievements: [
    {
      title: "Soft Skills",
      description: "Kerja sama tim, Komunikasi baik, Berpikir kreatif, Kepemimpinan, Manajemen Waktu",
      date: "2024"
    },
    {
      title: "Hard Skills",
      description: "C++, Python, Kotlin, Java, PHP, JavaScript",
      date: "2023"
    }
  ]
};