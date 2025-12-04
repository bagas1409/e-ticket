// src/pages/WisataDetail.jsx
import React from "react";
import { Link, useParams } from "react-router-dom";
import { destinations } from "../data/destinasiDummy";

export default function WisataDetail() {
  const { id } = useParams();
  const dest = destinations.find((d) => d.id === id);

  if (!dest) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-6 text-slate-50">
        <p className="text-sm font-semibold text-rose-300">
          Destinasi tidak ditemukan.
        </p>
        <Link
          to="/wisata"
          className="mt-3 inline-flex text-xs text-emerald-300 underline-offset-2 hover:underline"
        >
          ← Kembali ke daftar destinasi
        </Link>
      </div>
    );
  }

  const related = destinations
    .filter((d) => d.id !== dest.id && d.category === dest.category)
    .slice(0, 3);

  return (
    <div className="mx-auto max-w-6xl px-4 py-6 text-slate-50">
      {/* BREADCRUMB */}
      <div className="mb-4 text-[11px] text-slate-400">
        <Link
          to="/"
          className="text-emerald-300 hover:underline underline-offset-2"
        >
          Beranda
        </Link>{" "}
        /{" "}
        <Link
          to="/wisata"
          className="text-emerald-300 hover:underline underline-offset-2"
        >
          Destinasi Wisata
        </Link>{" "}
        / <span className="text-slate-200">{dest.name}</span>
      </div>

      {/* HEADER */}
      <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-emerald-400/60">
            Detail Destinasi Wisata
          </p>
          <h1 className="text-lg font-semibold md:text-xl">{dest.name}</h1>
          <p className="mt-1 text-xs text-slate-400">
            {dest.area} • Kec. {dest.kecamatan}
          </p>
          <p className="mt-1 text-xs text-slate-400">
            Kategori: {dest.category} • Tag: {dest.tag}
          </p>
          <p className="mt-1 text-xs font-semibold text-emerald-300">
            Rating pengunjung: ⭐ {dest.rating}
          </p>
        </div>
        <div className="flex flex-col items-end gap-2 text-xs">
          <Link
            to="/wisata"
            className="text-emerald-300 underline-offset-2 hover:underline"
          >
            ← Kembali ke daftar wisata
          </Link>

          <div className="flex flex-wrap justify-end gap-2">
            <button
              type="button"
              className="rounded-full bg-emerald-500 px-3 py-1 text-[11px] font-semibold text-slate-950 hover:bg-emerald-400"
              onClick={() => {
                // TODO: nanti dihubungkan ke flow pembelian tiket
                console.log("Beli tiket wisata:", dest.id);
              }}
            >
              Beli Tiket Wisata
            </button>
            <button
              type="button"
              className="rounded-full border border-emerald-500 px-3 py-1 text-[11px] font-semibold text-emerald-300 hover:bg-emerald-500/10"
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
          <div className="h-52 w-full overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
            <img
              src={dest.image}
              alt={dest.name}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* DESKRIPSI & FASILITAS */}
        <div className="flex flex-col gap-3 md:col-span-2 text-xs">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-3">
            <p className="text-[11px] font-semibold text-slate-100">
              Gambaran Umum Destinasi
            </p>
            <p className="mt-2 text-[11px] text-slate-300">
              {dest.longDesc || dest.shortDesc}
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-3">
              <p className="text-[11px] font-semibold text-slate-100">
                Fasilitas yang Tersedia
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-4 text-[11px] text-slate-300">
                {(dest.facilities || []).map((f) => (
                  <li key={`${dest.id}-fac-${f}`}>{f}</li>
                ))}
                {(!dest.facilities || dest.facilities.length === 0) && (
                  <li>Data fasilitas belum diisi.</li>
                )}
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-3">
              <p className="text-[11px] font-semibold text-slate-100">
                Waktu Kunjungan yang Disarankan
              </p>
              <p className="mt-2 text-[11px] text-slate-300">
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
          <h2 className="text-sm font-semibold text-slate-100">
            Posisi Destinasi pada Peta (Dummy)
          </h2>
          <span className="text-[11px] text-slate-400">
            Kecamatan: {dest.kecamatan}
          </span>
        </div>

        <div className="relative h-56 overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900">
          {/* grid */}
          <div className="pointer-events-none absolute inset-0 opacity-20">
            <div className="h-full w-full bg-[radial-gradient(circle_at_1px_1px,_#475569_1px,_transparent_0)] bg-[length:24px_24px]" />
          </div>

          {/* zona */}
          <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-500/40 bg-emerald-500/5 blur-[1px]" />

          {/* marker destinasi */}
          <div
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{
              left: `${dest.mapPosition?.x ?? 50}%`,
              top: `${dest.mapPosition?.y ?? 50}%`,
            }}
          >
            <div className="flex flex-col items-center">
              <div className="h-6 w-6 rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/50" />
              <span className="mt-1 max-w-[200px] truncate rounded-full border border-slate-700 bg-slate-900/95 px-2 py-0.5 text-[10px] text-slate-100">
                {dest.name} – {dest.area}
              </span>
            </div>
          </div>
        </div>

        <p className="mt-2 text-[10px] text-slate-500">
          Catatan: Peta ini masih ilustrasi. Nantinya bisa diganti dengan
          integrasi map asli (Leaflet / Google Maps) dengan titik koordinat yang
          akurat.
        </p>
      </section>

      {/* REKOMENDASI LAIN */}
      {related.length > 0 && (
        <section className="mt-6">
          <div className="mb-2 flex items-center justify-between">
            <h2 className="text-sm font-semibold text-slate-100">
              Destinasi Lain dalam Kategori yang Sama
            </h2>
            <span className="text-[11px] text-slate-400">{dest.category}</span>
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            {related.map((r) => (
              <Link
                key={`rel-${r.id}`}
                to={`/wisata/${r.id}`}
                className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/70 p-3 text-xs hover:border-emerald-500/60"
              >
                <div className="mb-2 h-20 w-full overflow-hidden rounded-xl border border-slate-800 bg-slate-900">
                  <img
                    src={r.image}
                    alt={r.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="text-[12px] font-semibold text-slate-50">
                  {r.name}
                </p>
                <p className="mt-1 text-[11px] text-slate-400">
                  {r.area} • ⭐ {r.rating}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
