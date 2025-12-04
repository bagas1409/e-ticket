// src/pages/WisataDetail.jsx
import React from "react";
import { Link, useParams } from "react-router-dom";
import { destinations } from "../data/destinasiDummy";

export default function WisataDetail() {
  const { id } = useParams();

  // Aman untuk id number/string
  const dest = destinations.find((d) => String(d.id) === String(id));

  if (!dest) {
    return (
      <div className="min-h-screen bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-6 text-slate-900">
          <p className="text-sm font-semibold text-rose-600">
            Destinasi tidak ditemukan.
          </p>
          <Link
            to="/wisata"
            className="mt-3 inline-flex text-xs text-blue-600 underline-offset-2 hover:underline"
          >
            ← Kembali ke daftar destinasi
          </Link>
        </div>
      </div>
    );
  }

  const related = destinations
    .filter((d) => d.id !== dest.id && d.category === dest.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-6 text-slate-900">
        {/* BREADCRUMB */}
        <div className="mb-4 text-[11px] text-slate-500">
          <Link
            to="/"
            className="text-blue-600 hover:underline underline-offset-2"
          >
            Beranda
          </Link>{" "}
          /{" "}
          <Link
            to="/wisata"
            className="text-blue-600 hover:underline underline-offset-2"
          >
            Destinasi Wisata
          </Link>{" "}
          / <span className="text-slate-700">{dest.name}</span>
        </div>

        {/* HEADER */}
        <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-blue-600">
              Detail Destinasi Wisata
            </p>
            <h1 className="text-lg font-semibold md:text-2xl">{dest.name}</h1>
            <p className="mt-1 text-xs md:text-sm text-slate-700">
              {dest.area} • Kec. {dest.kecamatan}
            </p>
            <p className="mt-1 text-xs text-slate-600">
              Kategori: {dest.category} • Tag: {dest.tag}
            </p>
            <p className="mt-1 text-xs font-semibold text-blue-600">
              Rating pengunjung: ⭐ {dest.rating}
            </p>
          </div>
          <div className="flex flex-col items-end gap-2 text-xs">
            <Link
              to="/wisata"
              className="text-blue-600 underline-offset-2 hover:underline"
            >
              ← Kembali ke daftar wisata
            </Link>

            <div className="flex flex-wrap justify-end gap-2">
              <button
                type="button"
                className="rounded-full bg-blue-600 px-3 py-1 text-[11px] font-semibold text-white hover:bg-blue-500"
                onClick={() => {
                  // TODO: nanti dihubungkan ke flow pembelian tiket
                  console.log("Beli tiket wisata:", dest.id);
                }}
              >
                Beli Tiket Wisata
              </button>
              <button
                type="button"
                className="rounded-full border border-blue-500 px-3 py-1 text-[11px] font-semibold text-blue-600 hover:bg-blue-50"
                onClick={() => {
                  // TODO: nanti dihubungkan ke fitur wishlist user
                  console.log("Tambahkan ke wishlist:", dest.id);
                }}
              >
                Tambahkan ke Wishlist
              </button>
            </div>
          </div>
        </div>

        {/* KONTEN UTAMA */}
        <div className="grid gap-4 md:grid-cols-3">
          {/* FOTO BESAR */}
          <div className="md:col-span-1">
            <div className="h-52 w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
              <img
                src={dest.image}
                alt={dest.name}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* DESKRIPSI & FASILITAS */}
          <div className="flex flex-col gap-3 md:col-span-2 text-xs">
            <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
              <p className="text-[11px] font-semibold text-slate-900">
                Gambaran Umum Destinasi
              </p>
              <p className="mt-2 text-[11px] text-slate-700">
                {dest.longDesc || dest.shortDesc}
              </p>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
                <p className="text-[11px] font-semibold text-slate-900">
                  Fasilitas yang Tersedia
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-4 text-[11px] text-slate-700">
                  {(dest.facilities || []).map((f) => (
                    <li key={`${dest.id}-fac-${f}`}>{f}</li>
                  ))}
                  {(!dest.facilities || dest.facilities.length === 0) && (
                    <li className="text-slate-500">
                      Data fasilitas belum diisi.
                    </li>
                  )}
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
                <p className="text-[11px] font-semibold text-slate-900">
                  Waktu Kunjungan yang Disarankan
                </p>
                <p className="mt-2 text-[11px] text-slate-700">
                  {dest.bestTime ||
                    "Belum ada informasi spesifik, sesuaikan dengan jadwal pribadi Anda."}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* MAP ZONA DESTINASI */}
        <section className="mt-6">
          <div className="mb-2 flex items-center justify-between">
            <h2 className="text-sm font-semibold text-slate-900">
              Posisi Destinasi pada Peta (Dummy)
            </h2>
            <span className="text-[11px] text-slate-500">
              Kecamatan: {dest.kecamatan}
            </span>
          </div>

          <div className="relative h-56 overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-100 via-slate-50 to-slate-100 shadow-sm">
            {/* grid */}
            <div className="pointer-events-none absolute inset-0 opacity-40">
              <div className="h-full w-full bg-[radial-gradient(circle_at_1px_1px,_#bfdbfe_1px,_transparent_0)] bg-[length:24px_24px]" />
            </div>

            {/* zona */}
            <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/40 bg-blue-200/20 blur-[1px]" />

            {/* marker destinasi */}
            <div
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{
                left: `${dest.mapPosition?.x ?? 50}%`,
                top: `${dest.mapPosition?.y ?? 50}%`,
              }}
            >
              <div className="flex flex-col items-center">
                <div className="h-6 w-6 rounded-full bg-blue-600 shadow-lg shadow-blue-400/70" />
                <span className="mt-1 max-w-[200px] truncate rounded-full border border-slate-200 bg-white/95 px-2 py-0.5 text-[10px] text-slate-800 shadow-sm">
                  {dest.name} – {dest.area}
                </span>
              </div>
            </div>
          </div>

          <p className="mt-2 text-[10px] text-slate-500">
            Catatan: Peta ini masih ilustrasi. Nantinya bisa diganti dengan
            integrasi map asli (Leaflet / Google Maps) dengan titik koordinat
            yang akurat.
          </p>
        </section>

        {/* REKOMENDASI LAIN */}
        {related.length > 0 && (
          <section className="mt-6">
            <div className="mb-2 flex items-center justify-between">
              <h2 className="text-sm font-semibold text-slate-900">
                Destinasi Lain dalam Kategori yang Sama
              </h2>
              <span className="text-[11px] text-slate-500">
                {dest.category}
              </span>
            </div>

            <div className="grid gap-3 md:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={`rel-${r.id}`}
                  to={`/wisata/${r.id}`}
                  className="flex flex-col rounded-2xl border border-slate-200 bg-white p-3 text-xs shadow-sm transition hover:-translate-y-1 hover:border-blue-400 hover:shadow-md"
                >
                  <div className="mb-2 h-20 w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
                    <img
                      src={r.image}
                      alt={r.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <p className="text-[12px] font-semibold text-slate-900">
                    {r.name}
                  </p>
                  <p className="mt-1 text-[11px] text-slate-600">
                    {r.area} • ⭐ {r.rating}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
