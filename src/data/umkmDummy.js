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
    tags: ["Gula Aren", "Pangan"],
    image:
      "https://images.pexels.com/photos/4109998/pexels-photo-4109998.jpeg?auto=compress&cs=tinysrgb&w=800",
    mapPosition: { x: 35, y: 40 },
    employeesSummary: {
      total: 8,
      roles: ["Produksi", "Packing", "Admin"],
      isHiring: true,
      hiringNote:
        "Sedang mencari 2 karyawan baru untuk bagian produksi dan pemasaran.",
    },
    description:
      "UMKM yang fokus pada olahan gula aren murni dari kebun lokal, melayani penjualan retail maupun grosir.",
    categories: [
      {
        name: "Gula Aren Bubuk",
        productCount: 3,
        products: [
          {
            id: "aren-bubuk-250",
            name: "Gula Aren Bubuk 250gr",
            price: "Rp15.000",
            note: "Kemasan standing pouch, cocok untuk kebutuhan harian.",
            image:
              "https://images.pexels.com/photos/4109998/pexels-photo-4109998.jpeg?auto=compress&cs=tinysrgb&w=800",
          },
          {
            id: "aren-bubuk-500",
            name: "Gula Aren Bubuk 500gr",
            price: "Rp28.000",
            note: "Best seller untuk rumah tangga dan kedai kecil.",
            image:
              "https://images.pexels.com/photos/4198376/pexels-photo-4198376.jpeg?auto=compress&cs=tinysrgb&w=800",
          },
          {
            id: "aren-bubuk-1kg",
            name: "Gula Aren Bubuk 1Kg",
            price: "Rp52.000",
            note: "Cocok untuk kedai kopi dan kebutuhan grosir.",
            image:
              "https://images.pexels.com/photos/3730761/pexels-photo-3730761.jpeg?auto=compress&cs=tinysrgb&w=800",
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
            note: "Cocok untuk masakan tradisional seperti kolak.",
            image:
              "https://images.pexels.com/photos/3730755/pexels-photo-3730755.jpeg?auto=compress&cs=tinysrgb&w=800",
          },
          {
            id: "aren-cetak-1kg",
            name: "Gula Aren Cetak 1Kg",
            price: "Rp30.000",
            note: "Kemasan plastik tebal, siap kirim luar kota.",
            image:
              "https://images.pexels.com/photos/3730763/pexels-photo-3730763.jpeg?auto=compress&cs=tinysrgb&w=800",
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
            note: "Praktis untuk campuran kopi dan minuman kekinian.",
            image:
              "https://images.pexels.com/photos/3730752/pexels-photo-3730752.jpeg?auto=compress&cs=tinysrgb&w=800",
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
    tags: ["Kopi", "Minuman"],
    image:
      "https://images.pexels.com/photos/895279/pexels-photo-895279.jpeg?auto=compress&cs=tinysrgb&w=800",
    mapPosition: { x: 60, y: 30 },
    employeesSummary: {
      total: 5,
      roles: ["Roaster", "Packaging", "Admin Online"],
      isHiring: false,
      hiringNote:
        "Belum membuka lowongan baru, fokus pada pengembangan produk.",
    },
    description:
      "Produsen kopi robusta Lampung dengan proses roasting sendiri, menyediakan biji kopi dan bubuk.",
    categories: [
      {
        name: "Kopi Biji",
        productCount: 2,
        products: [
          {
            id: "kopi-biji-medium",
            name: "Robusta Medium Roast 250gr",
            price: "Rp38.000",
            note: "Cocok untuk manual brew dan espresso.",
            image:
              "https://images.pexels.com/photos/585750/pexels-photo-585750.jpeg?auto=compress&cs=tinysrgb&w=800",
          },
          {
            id: "kopi-biji-dark",
            name: "Robusta Dark Roast 500gr",
            price: "Rp70.000",
            note: "Rasa lebih strong dan bold.",
            image:
              "https://images.pexels.com/photos/373888/pexels-photo-373888.jpeg?auto=compress&cs=tinysrgb&w=800",
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
            note: "Cocok untuk kopi tubruk klasik.",
            image:
              "https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=800",
          },
          {
            id: "kopi-bubuk-sedang",
            name: "Kopi Bubuk Sedang 250gr",
            price: "Rp32.000",
            note: "Pas untuk mokapot atau V60.",
            image:
              "https://images.pexels.com/photos/34085/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800",
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
            note: "Pilihan hadiah untuk teman pecinta kopi.",
            image:
              "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800",
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
    tags: ["Snack", "Keripik Pisang"],
    image:
      "https://images.pexels.com/photos/4110000/pexels-photo-4110000.jpeg?auto=compress&cs=tinysrgb&w=800",
    mapPosition: { x: 45, y: 60 },
    employeesSummary: {
      total: 10,
      roles: ["Produksi", "Packing", "Sales Outlet"],
      isHiring: true,
      hiringNote:
        "Membutuhkan sales freelance untuk penjajakan produk ke toko oleh-oleh.",
    },
    description:
      "Spesialis keripik pisang aneka rasa dengan kemasan kekinian, cocok untuk oleh-oleh.",
    categories: [
      {
        name: "Keripik Pisang Manis",
        productCount: 3,
        products: [
          {
            id: "pisang-coklat",
            name: "Keripik Pisang Rasa Coklat",
            price: "Rp20.000",
            note: "Rasa coklat premium, favorit anak muda.",
            image:
              "https://images.pexels.com/photos/4110258/pexels-photo-4110258.jpeg?auto=compress&cs=tinysrgb&w=800",
          },
          {
            id: "pisang-keju",
            name: "Keripik Pisang Rasa Keju",
            price: "Rp20.000",
            note: "Keju gurih dengan rasa seimbang.",
            image:
              "https://images.pexels.com/photos/4110254/pexels-photo-4110254.jpeg?auto=compress&cs=tinysrgb&w=800",
          },
          {
            id: "pisang-karamel",
            name: "Keripik Pisang Rasa Caramel",
            price: "Rp22.000",
            note: "Rasa manis-karamel untuk penikmat cemilan manis.",
            image:
              "https://images.pexels.com/photos/4110090/pexels-photo-4110090.jpeg?auto=compress&cs=tinysrgb&w=800",
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
            note: "Tanpa bumbu tambahan, rasa alami.",
            image:
              "https://images.pexels.com/photos/4194626/pexels-photo-4194626.jpeg?auto=compress&cs=tinysrgb&w=800",
          },
          {
            id: "pisang-balado",
            name: "Keripik Pisang Balado",
            price: "Rp20.000",
            note: "Pedas manis khas Sumatera.",
            image:
              "https://images.pexels.com/photos/4198023/pexels-photo-4198023.jpeg?auto=compress&cs=tinysrgb&w=800",
          },
        ],
      },
    ],
  },
];
