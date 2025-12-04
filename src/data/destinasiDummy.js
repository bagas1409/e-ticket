// src/data/destinasiDummy.js
import wisata1 from "../assets/wisataalam.jpeg";
import wisata2 from "../assets/kuliner.jpeg";
import wisata3 from "../assets/kakao.jpeg";
import wisata4 from "../assets/Masjid.jpeg";

export const DESTINATION_CATEGORIES = [
  { key: "Semua", label: "Semua Destinasi", icon: "" },
  {
    key: "Alam",
    label: "Alam",
    icon: "",
  },
  {
    key: "Kuliner & Cafe",
    label: "Kuliner & Cafe",
    icon: "",
  },
  {
    key: "Edukasi",
    label: "Edukasi & Keluarga",
    icon: "",
  },
  {
    key: "Religi",
    label: "Religi & Sejarah",
    icon: "",
  },
  {
    key: "Spot Instagramable",
    label: "Spot Instagramable",
    icon: "",
  },
];

export const destinations = [
  {
    id: "dest-1",
    name: "Talang Indah & Bukit Pangonan",
    area: "Fajaresuk",
    kecamatan: "Fajaresuk",
    category: "Alam",
    tag: "Alam & Sunset ",
    rating: 4.7,
    shortDesc:
      "Ikonik banget: jembatan/talang air panjang di atas persawahan + spot foto di bukit.",
    longDesc:
      "Talang Indah ini talang air peninggalan Belanda yang dijadiin kawasan wisata dengan banyak spot selfie",
    image: wisata1,
    mapPosition: { x: 35, y: 40 },
    facilities: ["Area parkir", "Toilet", "Gazebo", "Toko oleh-oleh"],
    bestTime: "Pagi hari (07.00–10.00) .",
  },
  {
    id: "dest-2",
    name: "Taman Wisata BMJ",
    area: "Wonodadi",
    kecamatan: "Gadingrejo",
    category: "Kuliner & Cafe",
    tag: "Sunrise & Sunset",
    rating: 4.6,
    shortDesc:
      "Taman outdoor di tengah sawah dan pepohonan, sering dipakai rekreasi keluarga dan tempat belajar/meeting santai. Tiket masuknya murah.",
    longDesc:
      "Taman Wisata BMJ Pringsewu merupakan taman yang dikelola dengan baik Salah satu daya tarik dari tempat wisata yang satu ini adalah pepohonan yang menjulang tinggi dan udaranya yang masih sangat asri, sehingga sangat cocok untuk melepaskan penat.",
    image: wisata2,
    mapPosition: { x: 50, y: 30 },
    facilities: ["Warung kecil", "Area parkir", "Spot foto"],
    bestTime:
      "Pagi sebelum jam 08.00 atau sore menjelang matahari terbenam (16.30–22.00).",
  },
  {
    id: "dest-3",
    name: "Wisata Edukasi Kebun Kakao",
    area: "Kampung Tapis Lugusari",
    kecamatan: "Kampung Tapis Lugusari",
    category: "Edukasi",
    tag: "Edukasi, Agrowisata & Pertanian",
    rating: 4.5,
    shortDesc:
      "kebun kakao, pengunjung bisa lihat proses budidaya, belajar tentang cokelat, cocok untuk rombongan sekolah",
    longDesc:
      "Wisata Edukasi Kebun Kakao seluas 0,3 Ha dengan jumlah pohon 256 pohon, beralamatkan di RT 017 RW 002 Dusun Lugusari 2, Desa Wisata Lugusari.",
    image: wisata3,
    mapPosition: { x: 65, y: 45 },
    facilities: ["Musola", "Caffe", "Area duduk pinggir kebun"],
    bestTime: "Siang menjelang sore, sekitar pukul 15.00–17.30.",
  },
  {
    id: "dest-4",
    name: "Makam & Masjid Jami KH Ghalib",
    area: "Pringsewu",
    kecamatan: "Pringsewu Barat",
    category: "Religi",
    tag: "Wisata Religi",
    rating: 4.6,
    shortDesc: "Komplek makam ulama besar KH Ghalib + Masjid Jami KH Ghalib.",
    longDesc:
      "Sudah lama jadi tujuan ziarah, bahkan disebut sebagai pusat wisata religi di Pringsewu.",
    image: wisata4,
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
];
