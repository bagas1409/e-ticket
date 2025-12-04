import React from "react";
import { Link, useParams } from "react-router-dom";
import { dummyUmkm } from "../data/umkmDummy";

export default function UmkmProductDetail() {
  const { id, productId } = useParams();
  const umkmId = parseInt(id, 10);
  const umkm = dummyUmkm.find((u) => u.id === umkmId);

  if (!umkm) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-6 text-slate-50">
        <p className="text-sm font-semibold text-rose-300">
          UMKM tidak ditemukan.
        </p>
        <Link
          to="/umkm"
          className="mt-3 inline-flex text-xs text-emerald-300 underline-offset-2 hover:underline"
        >
          ← Kembali ke daftar UMKM
        </Link>
      </div>
    );
  }

  let foundCategory = null;
  let product = null;

  for (const cat of umkm.categories) {
    const p = cat.products.find((prod) => prod.id === productId);
    if (p) {
      product = p;
      foundCategory = cat;
      break;
    }
  }

  if (!product) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-6 text-slate-50">
        <p className="text-sm font-semibold text-rose-300">
          Produk tidak ditemukan pada UMKM ini.
        </p>
        <Link
          to={`/umkm/${umkm.id}`}
          className="mt-3 inline-flex text-xs text-emerald-300 underline-offset-2 hover:underline"
        >
          ← Kembali ke profil UMKM
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-6 text-slate-50">
      {/* BREADCRUMB */}
      <div className="mb-4 text-[11px] text-slate-400">
        <Link
          to="/umkm"
          className="text-emerald-300 hover:underline underline-offset-2"
        >
          UMKM
        </Link>{" "}
        /{" "}
        <Link
          to={`/umkm/${umkm.id}`}
          className="text-emerald-300 hover:underline underline-offset-2"
        >
          {umkm.name}
        </Link>{" "}
        / <span className="text-slate-200">{product.name}</span>
      </div>

      {/* HEADER */}
      <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-emerald-400/60">
            Detail Produk UMKM
          </p>
          <h1 className="text-lg font-semibold md:text-xl">{product.name}</h1>
          <p className="mt-1 text-xs text-slate-400">
            UMKM: {umkm.name} • Kategori: {foundCategory?.name}
          </p>
          <p className="mt-1 text-xs text-emerald-300 font-semibold">
            Harga: {product.price}
          </p>
        </div>
        <div className="flex flex-col items-end gap-2 text-xs">
          <Link
            to={`/umkm/${umkm.id}`}
            className="text-emerald-300 underline-offset-2 hover:underline"
          >
            ← Kembali ke profil UMKM
          </Link>
          <button className="rounded-full bg-emerald-500 px-3 py-1 text-[11px] font-semibold text-slate-950 hover:bg-emerald-400">
            Tambah ke Keranjang (Dummy)
          </button>
        </div>
      </div>

      {/* CONTENT */}
      <div className="grid gap-4 md:grid-cols-3">
        {/* IMAGE */}
        <div className="md:col-span-1">
          <div className="h-52 w-full overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* DETAIL */}
        <div className="flex flex-col gap-3 md:col-span-2 text-xs">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-3">
            <p className="text-[11px] font-semibold text-slate-100">
              Deskripsi Singkat
            </p>
            <p className="mt-2 text-[11px] text-slate-300">{product.note}</p>
            <p className="mt-2 text-[11px] text-slate-400">
              Data ini masih dummy. Ke depan, bisa diisi stok, varian rasa,
              berat bersih, info komposisi, dan sertifikasi (halal, PIRT, dll.).
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-3">
            <p className="text-[11px] font-semibold text-slate-100">
              Informasi UMKM Terkait
            </p>
            <p className="mt-2 text-[11px] text-slate-300">
              {umkm.name} berlokasi di {umkm.location} (Kec. {umkm.kecamatan})
              dengan rating rata-rata ⭐ {umkm.rating}. Produk ini merupakan
              bagian dari kategori{" "}
              <span className="font-semibold">{foundCategory?.name}</span> yang
              menjadi salah satu lini utama penjualan UMKM.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
