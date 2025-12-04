// src/pages/UmkmList.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { dummyUmkm } from "../data/umkmDummy";

const UMKM_TYPES = [
  { key: "Semua", label: "Semua", icon: "📦" },
  { key: "Makanan & Minuman", label: "Makanan & Minuman", icon: "🍽️" },
  { key: "Jasa", label: "Jasa", icon: "🛠️" },
  { key: "Kerajinan", label: "Kerajinan", icon: "🎨" },
];

const KECAMATAN_OPTIONS = ["Semua", "Pagelaran", "Gading Rejo", "Pringsewu"];

export default function UmkmList() {
  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState("Semua");
  const [selectedKec, setSelectedKec] = useState("Semua");

  const filtered = dummyUmkm.filter((u) => {
    const q = search.toLowerCase();
    const matchSearch =
      u.name.toLowerCase().includes(q) ||
      u.owner.toLowerCase().includes(q) ||
      u.location.toLowerCase().includes(q);

    const matchType = selectedType === "Semua" || u.jenis === selectedType;

    const matchKec = selectedKec === "Semua" || u.kecamatan === selectedKec;

    return matchSearch && matchType && matchKec;
  });

  return (
    <div className="mx-auto max-w-6xl px-4 py-6 text-slate-50">
      {/* HEADER */}
      <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-emerald-400/60">
            Profil UMKM
          </p>
          <h1 className="text-lg font-semibold md:text-xl">
            Jelajahi UMKM di Pringsewu
          </h1>
          <p className="mt-1 text-xs text-slate-400">
            Pilih kategori UMKM atau kecamatan untuk melihat daftar UMKM
            terkait, lalu klik salah satu untuk melihat profil lengkap.
          </p>
        </div>
        <Link
          to="/"
          className="text-xs text-emerald-300 underline-offset-2 hover:underline"
        >
          ← Kembali ke Dashboard
        </Link>
      </div>

      {/* FILTER ATAS: KATEGORI + KECAMATAN */}
      <div className="mb-5 grid gap-4 md:grid-cols-[2fr,1fr]">
        {/* KATEGORI ICON */}
        <div>
          <p className="mb-2 text-[11px] font-semibold text-slate-200">
            Kategori UMKM
          </p>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {UMKM_TYPES.map((t) => (
              <button
                key={t.key}
                onClick={() => setSelectedType(t.key)}
                className={`flex flex-col items-center justify-center rounded-2xl border px-3 py-3 text-center text-[11px] transition ${
                  selectedType === t.key
                    ? "border-emerald-500 bg-emerald-500/10 text-emerald-300"
                    : "border-slate-800 bg-slate-900/70 text-slate-300 hover:border-emerald-500/50 hover:text-emerald-300"
                }`}
              >
                <span className="mb-1 text-lg">{t.icon}</span>
                <span className="font-semibold">{t.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* KECAMATAN + SEARCH */}
        <div className="space-y-3">
          <div>
            <p className="mb-1 text-[11px] font-semibold text-slate-200">
              Filter Kecamatan
            </p>
            <select
              className="w-full rounded-xl border border-slate-800 bg-slate-900/70 px-3 py-2 text-[11px] text-slate-100 focus:border-emerald-500 focus:outline-none"
              value={selectedKec}
              onChange={(e) => setSelectedKec(e.target.value)}
            >
              {KECAMATAN_OPTIONS.map((k) => (
                <option key={k} value={k}>
                  {k === "Semua" ? "Semua kecamatan" : k}
                </option>
              ))}
            </select>
          </div>
          <div>
            <p className="mb-1 text-[11px] font-semibold text-slate-200">
              Pencarian Cepat
            </p>
            <input
              type="text"
              placeholder="Cari nama UMKM, pemilik, atau lokasi..."
              className="w-full rounded-xl border border-slate-800 bg-slate-900/70 px-3 py-2 text-xs text-slate-100 placeholder:text-slate-500 focus:border-emerald-500 focus:outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* LIST UMKM */}
      <div className="mb-6">
        <p className="mb-2 text-[11px] text-slate-300">
          Hasil: {filtered.length} UMKM
          {selectedType !== "Semua" && ` • Kategori: ${selectedType}`}
          {selectedKec !== "Semua" && ` • Kecamatan: ${selectedKec}`}
        </p>

        {filtered.length === 0 ? (
          <p className="text-xs text-slate-500">
            Tidak ada UMKM yang cocok dengan filter. Coba ubah kategori atau
            kecamatan.
          </p>
        ) : (
          <div className="grid gap-3 md:grid-cols-3">
            {filtered.map((u) => (
              <Link
                key={u.id}
                to={`/umkm/${u.id}`}
                className="flex w-full flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-3 text-xs hover:border-emerald-500/60"
              >
                <div className="mb-2 h-24 w-full overflow-hidden rounded-xl border border-slate-800 bg-slate-900">
                  <img
                    src={u.image}
                    alt={u.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="text-sm font-semibold text-slate-50">{u.name}</p>
                <p className="text-[11px] text-slate-400">Owner: {u.owner}</p>
                <p className="mt-0.5 text-[11px] text-slate-400">
                  {u.location}
                </p>
                <p className="mt-1 text-[11px] text-slate-300">
                  {u.kecamatan} • {u.distance} • ⭐ {u.rating}
                </p>
                <div className="mt-2 flex flex-wrap gap-1">
                  <span className="rounded-full bg-slate-800 px-2 py-0.5 text-[10px] text-slate-300">
                    {u.jenis}
                  </span>
                  {u.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-slate-800 px-2 py-0.5 text-[10px] text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="mt-3 inline-flex w-fit rounded-full bg-emerald-500 px-3 py-1 text-[10px] font-semibold text-slate-950">
                  Lihat Profil UMKM
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* MAP DUMMY */}
      <div className="mt-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
        <div className="mb-2 flex items-center justify-between">
          <p className="text-xs font-semibold text-slate-100">
            Peta Lokasi UMKM (Dummy)
          </p>
          <p className="text-[11px] text-slate-400">
            Menampilkan {filtered.length} titik UMKM sesuai filter
          </p>
        </div>

        <div className="relative mt-2 h-64 overflow-hidden rounded-xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950">
          {/* grid tipis biar kayak map */}
          <div className="pointer-events-none absolute inset-0 opacity-20">
            <div className="h-full w-full bg-[radial-gradient(circle_at_1px_1px,_#475569_1px,_transparent_0)] bg-[length:24px_24px]" />
          </div>

          {filtered.map((u) => (
            <div
              key={u.id}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{
                left: `${u.mapPosition?.x ?? 50}%`,
                top: `${u.mapPosition?.y ?? 50}%`,
              }}
            >
              <div className="flex flex-col items-center">
                <div className="h-5 w-5 rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/50" />
                <span className="mt-1 max-w-[120px] truncate rounded-full bg-slate-900/90 px-2 py-0.5 text-[9px] text-slate-100 border border-slate-700">
                  {u.name}
                </span>
              </div>
            </div>
          ))}

          {filtered.length === 0 && (
            <div className="flex h-full items-center justify-center text-[11px] text-slate-500">
              Tidak ada titik UMKM yang bisa ditampilkan. Pilih kategori atau
              kecamatan terlebih dahulu.
            </div>
          )}
        </div>

        <p className="mt-2 text-[10px] text-slate-500">
          Catatan: Peta ini masih dummy (layout statis). Nanti dapat diganti
          dengan integrasi map sesungguhnya (misalnya Leaflet / Google Maps)
          menggunakan koordinat latitude–longitude asli UMKM.
        </p>
      </div>
    </div>
  );
}
