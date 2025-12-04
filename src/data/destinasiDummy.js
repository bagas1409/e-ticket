// src/data/destinasiDummy.js
export const DESTINATION_CATEGORIES = [
  { key: "Semua", label: "Semua Destinasi", icon: "" },
  {
    key: "Wisata Alam dan Perbukitan",
    label: "Alam & Perbukitan",
    icon: "",
  },
  {
    key: "Wisata Air dan Danau",
    label: "Air & Danau",
    icon: "",
  },
  {
    key: "Wisata Edukasi dan Keluarga",
    label: "Edukasi & Keluarga",
    icon: "",
  },
  {
    key: "Wisata Religi dan Sejarah",
    label: "Religi & Sejarah",
    icon: "",
  },
  {
    key: "Wisata Kuliner dan Belanja",
    label: "Kuliner & Belanja",
    icon: "",
  },
  {
    key: "Taman Kekinian / Spot Instagramable",
    label: "Spot Instagramable",
    icon: "",
  },
];

export const destinations = [
  {
    id: "dest-1",
    name: "Kebun Aren Wisata Edukasi",
    area: "Pagelaran",
    kecamatan: "Pagelaran",
    category: "Wisata Edukasi dan Keluarga",
    tag: "Alam & Edukasi",
    rating: 4.7,
    shortDesc:
      "Wisata edukasi proses penyadapan aren, cocok untuk rombongan sekolah dan keluarga.",
    longDesc:
      "Kebun Aren Wisata Edukasi menawarkan pengalaman langsung melihat proses penyadapan nira aren, pengolahan menjadi gula aren, hingga edukasi tentang potensi ekonomi lokal.",
    image:
      "https://images.pexels.com/photos/5726882/pexels-photo-5726882.jpeg?auto=compress&cs=tinysrgb&w=800",
    mapPosition: { x: 35, y: 40 },
    facilities: ["Area parkir", "Toilet", "Gazebo", "Toko oleh-oleh"],
    bestTime: "Pagi hari (07.00–10.00) untuk sesi edukasi dan tur kebun.",
  },
  {
    id: "dest-2",
    name: "Bukit Panorama Pringsewu",
    area: "Pringsewu Kota",
    kecamatan: "Pringsewu",
    category: "Wisata Alam dan Perbukitan",
    tag: "Sunrise & Sunset",
    rating: 4.6,
    shortDesc:
      "Spot melihat sunrise dan lampu kota di malam hari, cocok untuk hunting foto.",
    longDesc:
      "Bukit Panorama Pringsewu dikenal sebagai salah satu spot terbaik untuk menikmati pemandangan kota dari ketinggian.",
    image:
      "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=800",
    mapPosition: { x: 50, y: 30 },
    facilities: ["Warung kecil", "Area parkir", "Spot foto"],
    bestTime:
      "Pagi sebelum jam 08.00 atau sore menjelang matahari terbenam (16.30–18.00).",
  },
  {
    id: "dest-3",
    name: "Danau Mini Gading",
    area: "Gading Rejo",
    kecamatan: "Gading Rejo",
    category: "Wisata Air dan Danau",
    tag: "Perahu & Santai",
    rating: 4.5,
    shortDesc:
      "Danau kecil dengan perahu dayung, cocok untuk rekreasi keluarga di akhir pekan.",
    longDesc:
      "Danau Mini Gading menawarkan suasana tenang dengan perahu dayung yang bisa disewa.",
    image:
      "https://images.pexels.com/photos/2404370/pexels-photo-2404370.jpeg?auto=compress&cs=tinysrgb&w=800",
    mapPosition: { x: 65, y: 45 },
    facilities: ["Perahu sewa", "Warung makan", "Area duduk pinggir danau"],
    bestTime: "Siang menjelang sore, sekitar pukul 15.00–17.30.",
  },
  {
    id: "dest-4",
    name: "Sentra Kuliner Malam Pringsewu",
    area: "Pringsewu Kota",
    kecamatan: "Pringsewu",
    category: "Wisata Kuliner dan Belanja",
    tag: "Kuliner Malam",
    rating: 4.6,
    shortDesc:
      "Deretan UMKM kuliner lokal, dari bakso, kopi, hingga jajanan kekinian.",
    longDesc:
      "Sentra Kuliner Malam Pringsewu adalah kumpulan lapak UMKM kuliner yang buka terutama di malam hari.",
    image:
      "https://images.pexels.com/photos/2531189/pexels-photo-2531189.jpeg?auto=compress&cs=tinysrgb&w=800",
    mapPosition: { x: 48, y: 60 },
    facilities: ["Area duduk", "Parkir motor", "Berbagai pilihan kuliner"],
    bestTime: "Malam hari, antara 18.30–22.00.",
  },
  {
    id: "dest-5",
    name: "Taman Kota Pringsewu",
    area: "Pringsewu Kota",
    kecamatan: "Pringsewu",
    category: "Taman Kekinian / Spot Instagramable",
    tag: "Taman Kota",
    rating: 4.4,
    shortDesc:
      "Taman dengan area jogging, playground, dan spot foto dengan lampu malam.",
    longDesc:
      "Taman Kota Pringsewu menjadi ruang terbuka hijau yang sering digunakan untuk olahraga, bersantai, atau sekadar duduk.",
    image:
      "https://images.pexels.com/photos/2226458/pexels-photo-2226458.jpeg?auto=compress&cs=tinysrgb&w=800",
    mapPosition: { x: 55, y: 55 },
    facilities: ["Jogging track", "Playground", "Bangku taman"],
    bestTime:
      "Pagi untuk olahraga, atau malam untuk menikmati lampu dan suasana santai.",
  },
  {
    id: "dest-6",
    name: "Masjid Tua & Kawasan Religi",
    area: "Wilayah Pinggiran",
    kecamatan: "Pagelaran",
    category: "Wisata Religi dan Sejarah",
    tag: "Religi & Heritage",
    rating: 4.3,
    shortDesc:
      "Masjid bersejarah dengan lingkungan tenang, cocok untuk wisata religi.",
    longDesc:
      "Masjid tua ini menjadi saksi sejarah perkembangan Islam di wilayah Pringsewu.",
    image:
      "https://images.pexels.com/photos/2053280/pexels-photo-2053280.jpeg?auto=compress&cs=tinysrgb&w=800",
    mapPosition: { x: 30, y: 55 },
    facilities: ["Tempat wudhu", "Area parkir", "Ruang sholat luas"],
    bestTime:
      "Di luar jam sholat berjamaah jika ingin fokus wisata, atau saat jam sholat jika ingin merasakan suasana ibadah.",
  },
];
