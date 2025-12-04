import React from "react";
import { Link, useParams } from "react-router-dom";
import { dummyUmkm } from "../data/umkmDummy";

export default function UmkmProductDetail() {
  const { id, productId } = useParams();
  const umkmId = parseInt(id, 10);
  const umkm = dummyUmkm.find((u) => u.id === umkmId);

  if (!umkm) {
    return (
      <div className="min-h-screen bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-6 text-slate-900">
          <p className="text-sm font-semibold text-rose-600">
            UMKM tidak ditemukan.
          </p>
          <Link
            to="/umkm"
            className="mt-3 inline-flex text-xs text-blue-600 underline-offset-2 hover:underline"
          >
            ← Kembali ke daftar UMKM
          </Link>
        </div>
      </div>
    );
  }

  // CARI PRODUK DI SEMUA KATEGORI
  let foundCategory = null;
  let product = null;

  for (const cat of umkm.categories) {
    // cari berdasarkan id string dulu
    const pById = cat.products.find(
      (prod) => String(prod.id ?? "") === String(productId)
    );
    if (pById) {
      product = pById;
      foundCategory = cat;
      break;
    }
  }

  // fallback (kalau nanti ada route yang pakai index)
  if (!product) {
    const index = parseInt(productId, 10);
    if (!Number.isNaN(index)) {
      outer: for (const cat of umkm.categories) {
        for (let i = 0; i < cat.products.length; i++) {
          if (i === index) {
            product = cat.products[i];
            foundCategory = cat;
            break outer;
          }
        }
      }
    }
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-6 text-slate-900">
          <p className="text-sm font-semibold text-rose-600">
            Produk tidak ditemukan pada UMKM ini.
          </p>
          <Link
            to={`/umkm/${umkm.id}`}
            className="mt-3 inline-flex text-xs text-blue-600 underline-offset-2 hover:underline"
          >
            ← Kembali ke profil UMKM
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-6 text-slate-900">
        {/* BREADCRUMB */}
        <div className="mb-4 text-[11px] text-slate-500">
          <Link
            to="/umkm"
            className="text-blue-600 hover:underline underline-offset-2"
          >
            UMKM
          </Link>{" "}
          /{" "}
          <Link
            to={`/umkm/${umkm.id}`}
            className="text-blue-600 hover:underline underline-offset-2"
          >
            {umkm.name}
          </Link>{" "}
          / <span className="text-slate-700">{product.name}</span>
        </div>

        {/* HEADER */}
        <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-blue-600">
              Detail Produk UMKM
            </p>
            <h1 className="text-lg font-semibold md:text-2xl">
              {product.name}
            </h1>
            <p className="mt-1 text-xs md:text-sm text-slate-700">
              UMKM: {umkm.name} • Kategori: {foundCategory?.name}
            </p>
            <p className="mt-1 text-xs font-semibold text-blue-600">
              Harga: {product.price}
            </p>
          </div>
          <div className="flex flex-col items-end gap-2 text-xs">
            <Link
              to={`/umkm/${umkm.id}`}
              className="text-blue-600 underline-offset-2 hover:underline"
            >
              ← Kembali ke profil UMKM
            </Link>
            <button className="rounded-full bg-blue-600 px-3 py-1 text-[11px] font-semibold text-white hover:bg-blue-500">
              Tambah ke Keranjang (Dummy)
            </button>
          </div>
        </div>

        {/* CONTENT */}
        <div className="grid gap-4 md:grid-cols-3">
          {/* IMAGE */}
          <div className="md:col-span-1">
            <div className="h-52 w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-[11px] text-slate-400">
                  Belum ada gambar produk
                </div>
              )}
            </div>
          </div>

          {/* DETAIL */}
          <div className="flex flex-col gap-3 md:col-span-2 text-xs">
            <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
              <p className="text-[11px] font-semibold text-slate-900">
                Deskripsi Singkat
              </p>
              <p className="mt-2 text-[11px] text-slate-700">{product.note}</p>
              <p className="mt-2 text-[11px] text-slate-500">
                Data ini masih dummy. Ke depan, bisa diisi stok, varian rasa,
                berat bersih, info komposisi, dan sertifikasi (halal, PIRT,
                dll.).
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
              <p className="text-[11px] font-semibold text-slate-900">
                Informasi UMKM Terkait
              </p>
              <p className="mt-2 text-[11px] text-slate-700">
                {umkm.name} berlokasi di {umkm.location} (Kec. {umkm.kecamatan})
                dengan rating rata-rata ⭐ {umkm.rating}. Produk ini merupakan
                bagian dari kategori{" "}
                <span className="font-semibold">{foundCategory?.name}</span>{" "}
                yang menjadi salah satu lini utama penjualan UMKM.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
