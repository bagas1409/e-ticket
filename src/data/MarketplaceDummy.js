import market1Img from "../assets/gula.jpeg";
import market2Img from "../assets/bubuk.jpeg";
import market3Img from "../assets/pisang.jpeg";

// Kategori filter di marketplace
export const categories = ["Semua", "Makanan", "Minuman", "Produk Segar"];

export const dummyProducts = [
  {
    id: 1,
    umkmId: 1, // ➜ UMKM Aren Lestari
    productId: "aren-bubuk-500", // ➜ id produk di umkmDummy (UMKM id 1)
    name: "Gula Aren Bubuk 500gr",
    umkm: "UMKM Aren Lestari",
    price: "Rp28.000",
    distance: "1.8 km",
    rating: 4.8,
    category: "Makanan", // ⬅️ disesuaikan
    desc: "Gula aren bubuk murni tanpa campuran, cocok untuk minuman dan kue.",
    image: market1Img,
  },
  {
    id: 2,
    umkmId: 2, // ➜ Kopi Bukit Randu
    productId: "kopi-biji-medium", // ➜ id produk di UMKM id 2
    name: "Kopi Robusta Lampung 250gr",
    umkm: "Kopi Bukit Randu",
    price: "Rp35.000",
    distance: "3.2 km",
    rating: 4.6,
    category: "Makanan", // minuman tapi masih dalam grup makanan/produk konsumsi
    desc: "Kopi robusta khas Lampung dengan cita rasa kuat dan aroma khas.",
    image: market2Img,
  },
  {
    id: 3,
    umkmId: 3, // ➜ Banana Crispy Pringsewu
    productId: "pisang-coklat", // ➜ id produk di UMKM id 3
    name: "Keripik Pisang Coklat",
    umkm: "Banana Crispy Pringsewu",
    price: "Rp18.000",
    distance: "2.0 km",
    rating: 4.9,
    category: "Makanan", // snack juga masuk makanan
    desc: "Keripik pisang dengan lapisan coklat premium, renyah dan manis.",
    image: market3Img,
  },
];
