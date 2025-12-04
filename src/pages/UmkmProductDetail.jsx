// src/pages/UmkmProductDetail.jsx
import React from "react";
import { Link, useParams } from "react-router-dom";
import { dummyUmkm } from "../data/umkmDummy";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStore,
  faBoxOpen,
  faTags,
  faCartPlus,
  faCircleInfo,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

export default function UmkmProductDetail() {
  const { id, productId } = useParams();
  const umkmId = parseInt(id, 10);
  const umkm = dummyUmkm.find((u) => u.id === umkmId);

  if (!umkm) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-sky-50">
        <div className="mx-auto max-w-6xl px-4 py-6 text-slate-900">
          <p className="text-sm font-semibold text-rose-600">
            UMKM tidak ditemukan.
          </p>
          <Link
            to="/umkm"
            className="mt-3 inline-flex items-center gap-2 text-xs text-blue-600 underline-offset-2 hover:underline"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="text-[11px]" />
            <span>Kembali ke daftar UMKM</span>
          </Link>
        </div>
      </div>
    );
  }

  // CARI PRODUK DI SEMUA KATEGORI (logika asli dipertahankan)
  let foundCategory = null;
  let product = null;

  for (const cat of umkm.categories) {
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
      <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-sky-50">
        <div className="mx-auto max-w-6xl px-4 py-6 text-slate-900">
          <p className="text-sm font-semibold text-rose-600">
            Produk tidak ditemukan pada UMKM ini.
          </p>
          <Link
            to={`/umkm/${umkm.id}`}
            className="mt-3 inline-flex items-center gap-2 text-xs text-blue-600 underline-offset-2 hover:underline"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="text-[11px]" />
            <span>Kembali ke profil UMKM</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-sky-50">
      <div className="mx-auto max-w-6xl px-4 py-6 text-slate-900">
        {/* BREADCRUMB */}
        <div className="mb-4 flex items-center gap-1 text-[11px] text-slate-500">
          <Link
            to="/umkm"
            className="inline-flex items-center gap-1 text-blue-600 underline-offset-2 hover:underline"
          >
            <FontAwesomeIcon icon={faStore} className="text-[11px]" />
            <span>UMKM</span>
          </Link>
          <span>/</span>
          <Link
            to={`/umkm/${umkm.id}`}
            className="text-blue-600 underline-offset-2 hover:underline"
          >
            {umkm.name}
          </Link>
          <span>/</span>
          <span className="text-slate-700">{product.name}</span>
        </div>

        {/* HEADER */}
        <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-blue-600">
              <FontAwesomeIcon
                icon={faBoxOpen}
                className="text-[13px] text-blue-500"
              />
              <span>Detail Produk UMKM</span>
            </p>
            <h1 className="mt-1 text-lg font-semibold md:text-2xl flex items-center gap-2">
              {product.name}
              {foundCategory?.name && (
                <span className="rounded-full border border-blue-100 bg-blue-50 px-2 py-0.5 text-[10px] text-blue-700">
                  {foundCategory.name}
                </span>
              )}
            </h1>
            <p className="mt-1 text-xs md:text-sm text-slate-700">
              UMKM:{" "}
              <span className="font-semibold text-slate-900">{umkm.name}</span>
            </p>
            <p className="mt-1 flex items-center gap-2 text-xs font-semibold text-blue-600">
              <span>Harga:</span>
              <span className="rounded-full bg-blue-50 px-2 py-0.5 text-[11px] text-blue-700 border border-blue-200">
                {product.price}
              </span>
            </p>
          </div>
          <div className="flex flex-col items-end gap-2 text-xs">
            <Link
              to={`/umkm/${umkm.id}`}
              className="inline-flex items-center gap-2 text-blue-600 underline-offset-2 hover:underline"
            >
              <FontAwesomeIcon icon={faArrowLeft} className="text-[11px]" />
              <span>Kembali ke profil UMKM</span>
            </Link>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-3 py-1 text-[11px] font-semibold text-white shadow-sm hover:bg-blue-500"
              onClick={() => {
                // nanti bisa dihubungkan ke cart beneran
                console.log("Tambah ke keranjang (dummy):", {
                  umkmId: umkm.id,
                  productId,
                });
              }}
            >
              <FontAwesomeIcon icon={faCartPlus} className="text-[12px]" />
              <span>Tambah ke Keranjang (Dummy)</span>
            </button>
          </div>
        </div>

        {/* CONTENT */}
        <div className="grid gap-4 md:grid-cols-3">
          {/* IMAGE */}
          <div className="md:col-span-1">
            <div className="h-52 w-full overflow-hidden rounded-2xl border border-blue-100 bg-blue-50">
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-1 text-[11px] text-slate-400">
                  <FontAwesomeIcon
                    icon={faBoxOpen}
                    className="text-xl text-blue-300"
                  />
                  <span>Belum ada gambar produk</span>
                </div>
              )}
            </div>
          </div>

          {/* DETAIL */}
          <div className="flex flex-col gap-3 md:col-span-2 text-xs">
            <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-100 to-sky-50 p-3 shadow-sm">
              <p className="flex items-center gap-2 text-[11px] font-semibold text-slate-900">
                <FontAwesomeIcon
                  icon={faCircleInfo}
                  className="text-[12px] text-blue-500"
                />
                <span>Deskripsi Singkat</span>
              </p>
              <p className="mt-2 text-[11px] text-slate-700">{product.note}</p>
              <p className="mt-2 text-[10px] text-slate-500">
                Data ini masih dummy. Ke depan, bisa diisi stok, varian rasa,
                berat bersih, info komposisi, dan sertifikasi (halal, PIRT,
                dll.).
              </p>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-white p-3 shadow-sm">
              <p className="flex items-center gap-2 text-[11px] font-semibold text-slate-900">
                <FontAwesomeIcon
                  icon={faTags}
                  className="text-[12px] text-blue-500"
                />
                <span>Informasi UMKM Terkait</span>
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
