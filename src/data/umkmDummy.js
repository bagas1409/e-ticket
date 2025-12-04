// src/data/umkmDummy.js
export const dummyUmkm = [
  {
    id: 1,
    slug: "umkm-aren-lestari",
    name: "UMKM Aren Lestari",
    owner: "Budi Santoso",
    location: "Pagelaran, Pringsewu",
    kecamatan: "Pagelaran",
    jenis: "Makanan & Minuman",
    distance: "1.8 km",
    rating: 4.8,
    tags: ["Gula Aren", "Pangan", "Produk Lokal", "Oleh-oleh"],

    // cover UMKM → pakai foto umum gula aren
    image: "/images/umkm/aren/cover-umkm-aren-lestari.jpg",
    mapPosition: { x: 35, y: 40 },

    contact: {
      phone: "0812-3456-7890",
      whatsapp: "0812-3456-7890",
      email: "aren.lestari@contoh.id",
    },
    social: {
      instagram: "@arenlestaripringsewu",
      tiktok: "@arenlestariofficial",
    },
    legalStatus: "Sudah memiliki NIB & PIRT",
    foundedYear: 2018,
    operationalHours: "Senin–Sabtu, 08.00 – 17.00 WIB",

    employeesSummary: {
      total: 8,
      roles: ["Produksi", "Packing", "Admin", "Marketing Online"],
      isHiring: true,
      hiringNote:
        "Sedang mencari 2 karyawan baru untuk bagian produksi dan pemasaran (lihat lowongan di menu Lowongan Kerja).",
    },
    description:
      "UMKM Aren Lestari fokus pada olahan gula aren murni dari kebun lokal Pagelaran. Produk dijual dalam bentuk bubuk, cetak, dan cair untuk memenuhi kebutuhan rumah tangga, kedai kopi, hingga pesanan grosir. UMKM ini sudah rutin memasok ke beberapa kedai kopi dan toko oleh-oleh di sekitar Pringsewu.",

    categories: [
      {
        name: "Gula Aren Bubuk",
        productCount: 3,
        products: [
          {
            id: "aren-bubuk-250",
            name: "Gula Aren Bubuk 250gr",
            price: "Rp15.000",
            note: "Kemasan standing pouch, cocok untuk kebutuhan harian keluarga.",
            image: "/images/umkm/aren/aren-bubuk-250.jpg",
          },
          {
            id: "aren-bubuk-500",
            name: "Gula Aren Bubuk 500gr",
            price: "Rp28.000",
            note: "Best seller untuk rumah tangga, UMKM minuman, dan kedai kecil.",
            image: "/images/umkm/aren/aren-bubuk-500.jpg",
          },
          {
            id: "aren-bubuk-1kg",
            name: "Gula Aren Bubuk 1Kg",
            price: "Rp52.000",
            note: "Cocok untuk kedai kopi, kafe, dan kebutuhan grosir.",
            image: "/images/umkm/aren/aren-bubuk-1kg.jpg",
          },
        ],
      },
      {
        name: "Gula Aren Cetak",
        productCount: 2,
        products: [
          {
            id: "aren-cetak-500",
            name: "Gula Aren Cetak 500gr",
            price: "Rp17.000",
            note: "Cocok untuk masakan tradisional seperti kolak dan gulai.",
            image: "/images/umkm/aren/aren-cetak-500.jpg",
          },
          {
            id: "aren-cetak-1kg",
            name: "Gula Aren Cetak 1Kg",
            price: "Rp30.000",
            note: "Kemasan plastik tebal, aman untuk kirim luar kota.",
            image: "/images/umkm/aren/aren-cetak-1kg.jpg",
          },
        ],
      },
      {
        name: "Gula Aren Cair",
        productCount: 1,
        products: [
          {
            id: "aren-cair-500",
            name: "Gula Aren Cair 500ml",
            price: "Rp25.000",
            note: "Praktis untuk campuran kopi susu, minuman kekinian, dan dessert.",
            image: "/images/umkm/aren/aren-cair-500.jpg",
          },
        ],
      },
    ],
  },

  {
    id: 2,
    slug: "kopi-bukit-randu",
    name: "Kopi Bukit Randu",
    owner: "Siti Rohmah",
    location: "Gading Rejo, Pringsewu",
    kecamatan: "Gading Rejo",
    jenis: "Makanan & Minuman",
    distance: "3.2 km",
    rating: 4.6,
    tags: ["Kopi", "Minuman", "Roastery", "Kedai Kopi"],

    // cover UMKM kopi
    image: "/images/umkm/kopi/cover-kopi-bukit-randu.jpg",
    mapPosition: { x: 60, y: 30 },

    contact: {
      phone: "0813-5678-2211",
      whatsapp: "0813-5678-2211",
      email: "kopi.bukitrandu@contoh.id",
    },
    social: {
      instagram: "@kopibukitrandu",
      tiktok: "@kopilampungrandu",
    },
    legalStatus: "NIB terdaftar, proses sertifikasi halal",
    foundedYear: 2019,
    operationalHours: "Setiap hari, 10.00 – 22.00 WIB",

    employeesSummary: {
      total: 5,
      roles: ["Roaster", "Packaging", "Admin Online", "Barista"],
      isHiring: false,
      hiringNote:
        "Saat ini fokus pada pengembangan varian kopi dan peningkatan kualitas layanan kedai.",
    },
    description:
      "Kopi Bukit Randu adalah produsen kopi robusta Lampung dengan proses roasting sendiri. Mereka menyediakan biji kopi, kopi bubuk, dan juga mengelola kedai kopi kecil dengan konsep santai. Penjualan dilakukan secara offline di kedai dan online melalui marketplace.",

    categories: [
      {
        name: "Kopi Biji",
        productCount: 2,
        products: [
          {
            id: "kopi-biji-medium",
            name: "Robusta Medium Roast 250gr",
            price: "Rp38.000",
            note: "Cocok untuk manual brew, V60, dan espresso dengan karakter seimbang.",
            image: "/images/umkm/kopi/kopi-biji-medium.jpg",
          },
          {
            id: "kopi-biji-dark",
            name: "Robusta Dark Roast 500gr",
            price: "Rp70.000",
            note: "Rasa lebih strong dan bold, cocok untuk penikmat kopi pekat.",
            image: "/images/umkm/kopi/kopi-biji-dark.jpg",
          },
        ],
      },
      {
        name: "Kopi Bubuk",
        productCount: 2,
        products: [
          {
            id: "kopi-bubuk-halus",
            name: "Kopi Bubuk Halus 250gr",
            price: "Rp32.000",
            note: "Cocok untuk kopi tubruk klasik khas rumah.",
            image: "/images/umkm/kopi/kopi-bubuk-halus.jpg",
          },
          {
            id: "kopi-bubuk-sedang",
            name: "Kopi Bubuk Sedang 250gr",
            price: "Rp32.000",
            note: "Pas untuk mokapot atau V60 dengan rasa yang lebih clean.",
            image: "/images/umkm/kopi/kopi-bubuk-sedang.jpg",
          },
        ],
      },
      {
        name: "Paket Hampers",
        productCount: 1,
        products: [
          {
            id: "hampers-kopi-mug",
            name: "Hampers Kopi & Mug",
            price: "Rp95.000",
            note: "Pilihan hadiah untuk teman pecinta kopi, sudah termasuk kartu ucapan.",
            image: "/images/umkm/kopi/hampers-kopi-mug.jpg",
          },
        ],
      },
    ],
  },

  {
    id: 3,
    slug: "banana-crispy-pringsewu",
    name: "Banana Crispy Pringsewu",
    owner: "Andi Prasetyo",
    location: "Pringsewu Kota",
    kecamatan: "Pringsewu",
    jenis: "Makanan & Minuman",
    distance: "2.0 km",
    rating: 4.9,
    tags: ["Snack", "Keripik Pisang", "Oleh-oleh", "Cemilan"],

    // cover UMKM keripik pisang
    image: "/images/umkm/banana/cover-banana-crispy-pringsewu.jpg",
    mapPosition: { x: 45, y: 60 },

    contact: {
      phone: "0812-9988-3344",
      whatsapp: "0812-9988-3344",
      email: "banana.crispy@contoh.id",
    },
    social: {
      instagram: "@bananacrispy.pringsewu",
      tiktok: "@bananacrispyid",
    },
    legalStatus: "PIRT & Halal terdaftar",
    foundedYear: 2020,
    operationalHours: "Senin–Minggu, 09.00 – 21.00 WIB",

    employeesSummary: {
      total: 10,
      roles: ["Produksi", "Packing", "Sales Outlet", "Sales Freelance"],
      isHiring: true,
      hiringNote:
        "Membutuhkan sales freelance untuk penjajakan produk ke toko oleh-oleh dan minimarket di sekitar Pringsewu.",
    },
    description:
      "Banana Crispy Pringsewu adalah UMKM yang fokus pada keripik pisang aneka rasa dengan kemasan modern. Produk mereka banyak dijadikan oleh-oleh khas daerah dan sudah masuk ke beberapa toko oleh-oleh dan minimarket lokal.",

    categories: [
      {
        name: "Keripik Pisang Manis",
        productCount: 3,
        products: [
          {
            id: "pisang-coklat",
            name: "Keripik Pisang Rasa Coklat",
            price: "Rp20.000",
            note: "Rasa coklat premium, favorit anak muda dan keluarga.",
            image: "/images/umkm/banana/pisang-coklat.jpg",
          },
          {
            id: "pisang-keju",
            name: "Keripik Pisang Rasa Keju",
            price: "Rp20.000",
            note: "Keju gurih dengan rasa seimbang, tidak terlalu asin.",
            image: "/images/umkm/banana/pisang-keju.jpg",
          },
          {
            id: "pisang-karamel",
            name: "Keripik Pisang Rasa Caramel",
            price: "Rp22.000",
            note: "Rasa manis-karamel untuk penikmat cemilan manis yang lembut.",
            image: "/images/umkm/banana/pisang-karamel.jpg",
          },
        ],
      },
      {
        name: "Keripik Pisang Gurih",
        productCount: 2,
        products: [
          {
            id: "pisang-original",
            name: "Keripik Pisang Original",
            price: "Rp18.000",
            note: "Tanpa bumbu tambahan, rasa alami pisang pilihan.",
            image: "/images/umkm/banana/pisang-original.jpg",
          },
          {
            id: "pisang-balado",
            name: "Keripik Pisang Balado",
            price: "Rp20.000",
            note: "Pedas manis khas Sumatera, cocok untuk penikmat snack pedas.",
            image: "/images/umkm/banana/pisang-balado.jpg",
          },
        ],
      },
    ],
  },
];
