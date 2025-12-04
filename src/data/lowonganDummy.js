// src/data/lowonganDummy.js

// Kategori utama lowongan (buat filter di UI)
export const JOB_CATEGORIES = [
  "Produksi & Gudang",
  "Penjualan & Marketing",
  "Admin & Keuangan",
  "Operasional & Driver",
  "Hospitality & Layanan",
  "Lainnya",
];

// Tipe kerja (fulltime, parttime, dll)
export const JOB_TYPES = ["Full-time", "Part-time", "Freelance", "Magang"];

export const jobVacancies = [
  {
    id: "job-aren-produksi-1",
    title: "Operator Produksi Gula Aren",
    companyName: "UMKM Aren Lestari",
    umkmSlug: "umkm-aren-lestari", // bisa dikaitkan ke dummyUmkm
    location: "Pagelaran, Pringsewu",
    kecamatan: "Pagelaran",
    category: "Produksi & Gudang",
    type: "Full-time",
    salaryRange: "Rp1.800.000 – Rp2.500.000",
    postedAt: "2025-11-20",
    deadline: "2025-12-31",
    status: "Dibuka", // Dibuka / Ditutup
    tags: ["Produksi", "Gula Aren", "Pabrik Rumahan"],
    shortDesc:
      "Membantu proses produksi gula aren bubuk dan cetak, mulai dari pengolahan hingga pengemasan.",
    requirements: [
      "Minimal lulusan SMA/SMK",
      "Mau belajar proses produksi gula aren",
      "Mampu bekerja dalam tim",
      "Diutamakan domisili sekitar Pagelaran",
    ],
    benefits: [
      "Gaji pokok + uang makan",
      "Jam kerja tetap (shift pagi/siang)",
      "Pelatihan proses produksi",
    ],
  },
  {
    id: "job-aren-marketing-1",
    title: "Staff Marketing Online",
    companyName: "UMKM Aren Lestari",
    umkmSlug: "umkm-aren-lestari",
    location: "Pagelaran / Remote sebagian",
    kecamatan: "Pagelaran",
    category: "Penjualan & Marketing",
    type: "Part-time",
    salaryRange: "Rp800.000 – Rp1.500.000",
    postedAt: "2025-11-25",
    deadline: "2026-01-15",
    status: "Dibuka",
    tags: ["Marketing Online", "Sosial Media", "Marketplace"],
    shortDesc:
      "Mengelola toko online dan sosial media untuk promosi produk gula aren.",
    requirements: [
      "Aktif menggunakan media sosial (Instagram, TikTok, dll.)",
      "Paham dasar desain konten lebih diutamakan",
      "Komunikatif dan kreatif",
    ],
    benefits: [
      "Insentif penjualan",
      "Jam kerja fleksibel",
      "Pengalaman langsung branding UMKM lokal",
    ],
  },
  {
    id: "job-kopi-barista-1",
    title: "Barista & Helper Kedai Kopi",
    companyName: "Kopi Bukit Randu",
    umkmSlug: "kopi-bukit-randu",
    location: "Gading Rejo, Pringsewu",
    kecamatan: "Gading Rejo",
    category: "Hospitality & Layanan",
    type: "Full-time",
    salaryRange: "Rp1.700.000 – Rp2.300.000",
    postedAt: "2025-11-18",
    deadline: "2025-12-20",
    status: "Dibuka",
    tags: ["Barista", "Kedai Kopi", "Frontliner"],
    shortDesc:
      "Melayani pelanggan, meracik minuman kopi, dan menjaga kebersihan area kedai.",
    requirements: [
      "Minimal lulusan SMA/SMK",
      "Menyukai dunia kopi dan pelayanan",
      "Bersedia kerja shift (pagi / sore)",
    ],
    benefits: [
      "Training barista dasar",
      "Uang makan",
      "Lingkungan kerja santai",
    ],
  },
  {
    id: "job-kopi-admin-1",
    title: "Admin Penjualan Online",
    companyName: "Kopi Bukit Randu",
    umkmSlug: "kopi-bukit-randu",
    location: "Gading Rejo, Pringsewu",
    kecamatan: "Gading Rejo",
    category: "Admin & Keuangan",
    type: "Full-time",
    salaryRange: "Rp1.800.000 – Rp2.200.000",
    postedAt: "2025-11-10",
    deadline: "2025-12-15",
    status: "Dibuka",
    tags: ["Admin", "Rekap Order", "Marketplace"],
    shortDesc:
      "Mengelola order masuk dari marketplace, membalas chat, dan rekap penjualan harian.",
    requirements: [
      "Terbiasa menggunakan komputer & aplikasi spreadsheet",
      "Teliti dan rapi dalam mencatat",
      "Responsif menjawab chat pelanggan",
    ],
    benefits: [
      "Gaji pokok",
      "Bonus target penjualan",
      "Belajar sistem penjualan online UMKM",
    ],
  },
  {
    id: "job-banana-sales-1",
    title: "Sales Freelance Keripik Pisang",
    companyName: "Banana Crispy Pringsewu",
    umkmSlug: "banana-crispy-pringsewu",
    location: "Pringsewu & Sekitar",
    kecamatan: "Pringsewu",
    category: "Penjualan & Marketing",
    type: "Freelance",
    salaryRange: "Komisi s/d Rp1.500.000+",
    postedAt: "2025-11-05",
    deadline: "2026-01-30",
    status: "Dibuka",
    tags: ["Sales", "Freelance", "Oleh-oleh"],
    shortDesc:
      "Menawarkan produk keripik pisang ke toko oleh-oleh, warung, dan reseller.",
    requirements: [
      "Memiliki motor pribadi",
      "Komunikatif dan berani menawarkan produk",
      "Mampu bekerja dengan target penjualan",
    ],
    benefits: [
      "Komisi per penjualan",
      "Dukungan materi promosi",
      "Cocok sebagai penghasilan tambahan",
    ],
  },
  {
    id: "job-event-staff-1",
    title: "Staff Event & Booth UMKM",
    companyName: "Kolaborasi UMKM Pringsewu",
    umkmSlug: null, // gabungan, bukan 1 UMKM saja
    location: "Alun-Alun Pringsewu (Event)",
    kecamatan: "Pringsewu",
    category: "Operasional & Driver",
    type: "Magang",
    salaryRange: "Uang saku Rp500.000 / event",
    postedAt: "2025-11-28",
    deadline: "2025-12-25",
    status: "Dibuka",
    tags: ["Event", "Booth", "Magang"],
    shortDesc:
      "Membantu persiapan, pelaksanaan, dan penutupan event pameran UMKM di Pringsewu.",
    requirements: [
      "Mahasiswa/umum yang tertarik dunia event & UMKM",
      "Bersedia kerja di akhir pekan",
      "Mampu bekerja dalam tim",
    ],
    benefits: [
      "Pengalaman kerja lapangan",
      "Sertifikat kepanitiaan",
      "Makan siang saat event",
    ],
  },
];
