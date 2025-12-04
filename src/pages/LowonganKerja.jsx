import React, { useState } from "react";
import { Link } from "react-router-dom";

const dummyJobs = [
  {
    id: 1,
    posisi: "Staff Administrasi UMKM",
    perusahaan: "CV Sejahtera Mandiri",
    lokasi: "Pringsewu Kota",
    tipe: "Full-time",
    gaji: "Rp2.500.000 - Rp3.000.000",
    status: "Diproses",
    desc: "Mengelola administrasi penjualan, arsip, dan laporan sederhana untuk UMKM skala kecil-menengah.",
  },
  {
    id: 2,
    posisi: "Kasir Minimarket",
    perusahaan: "Mart Pringsewu",
    lokasi: "Pagelaran",
    tipe: "Shift",
    gaji: "Rp2.200.000",
    status: "Terkirim",
    desc: "Melayani transaksi kasir, input penjualan harian, dan membantu penataan barang di rak.",
  },
  {
    id: 3,
    posisi: "Content Creator UMKM",
    perusahaan: "Rumah Kreatif Pringsewu",
    lokasi: "Gading Rejo",
    tipe: "Part-time",
    gaji: "Negosiasi",
    status: "Ditolak",
    desc: "Membuat konten foto & video sederhana untuk promosi produk UMKM lokal di media sosial.",
  },
];

export default function LowonganKerja() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(dummyJobs[0]);

  const filtered = dummyJobs.filter((j) => {
    const q = search.toLowerCase();
    return (
      j.posisi.toLowerCase().includes(q) ||
      j.perusahaan.toLowerCase().includes(q) ||
      j.lokasi.toLowerCase().includes(q)
    );
  });

  return (
    <div className="mx-auto max-w-6xl px-4 py-6 text-slate-50">
      {/* HEADER */}
      <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-emerald-400/60">
            Lowongan Kerja
          </p>
          <h1 className="text-lg font-semibold md:text-xl">
            Cari Lowongan Kerja di Sekitar Pringsewu
          </h1>
          <p className="mt-1 text-xs text-slate-400">
            Data masih dummy, nanti bisa dihubungkan ke API loker & tracking
            status lamaran.
          </p>
        </div>
        <Link
          to="/"
          className="text-xs text-emerald-300 underline-offset-2 hover:underline"
        >
          ← Kembali ke Dashboard
        </Link>
      </div>

      {/* SEARCH */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Cari posisi, perusahaan, atau lokasi..."
          className="w-full rounded-xl border border-slate-800 bg-slate-900/70 px-3 py-2 text-xs text-slate-100 placeholder:text-slate-500 focus:border-emerald-500 focus:outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {/* LIST LOKER */}
        <div className="md:col-span-2 space-y-3">
          {filtered.map((job) => (
            <button
              key={job.id}
              onClick={() => setSelected(job)}
              className="flex w-full items-start justify-between gap-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-3 text-left text-xs hover:border-emerald-500/60"
            >
              <div>
                <p className="text-sm font-semibold text-slate-50">
                  {job.posisi}
                </p>
                <p className="text-[11px] text-slate-400">
                  {job.perusahaan} • {job.lokasi}
                </p>
                <p className="mt-1 text-[11px] text-slate-300">
                  {job.tipe} • {job.gaji}
                </p>
              </div>
              <span
                className={`rounded-full px-3 py-1 text-[10px] font-medium ${
                  job.status === "Diproses"
                    ? "bg-amber-500/20 text-amber-300 border border-amber-500/40"
                    : job.status === "Ditolak"
                    ? "bg-rose-500/15 text-rose-300 border border-rose-500/40"
                    : "bg-slate-800 text-slate-200 border border-slate-600"
                }`}
              >
                {job.status}
              </span>
            </button>
          ))}

          {filtered.length === 0 && (
            <p className="text-xs text-slate-500">
              Tidak ada lowongan yang cocok dengan pencarian.
            </p>
          )}
        </div>

        {/* DETAIL LOKER */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-xs">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-emerald-300">
            Detail Lowongan
          </p>
          {selected ? (
            <>
              <h2 className="mt-2 text-sm font-semibold text-slate-50">
                {selected.posisi}
              </h2>
              <p className="text-[11px] text-slate-400">
                {selected.perusahaan} • {selected.lokasi}
              </p>
              <p className="mt-2 text-[11px] text-slate-300">
                Tipe: {selected.tipe}
              </p>
              <p className="mt-1 text-[11px] text-slate-300">
                Perkiraan Gaji: {selected.gaji}
              </p>
              <p className="mt-3 text-[11px] text-slate-300">{selected.desc}</p>

              <button className="mt-4 w-full rounded-full bg-emerald-500 px-3 py-2 text-[11px] font-semibold text-slate-950 hover:bg-emerald-400">
                Lamar Sekarang (Dummy)
              </button>
            </>
          ) : (
            <p className="mt-3 text-[11px] text-slate-500">
              Pilih salah satu lowongan untuk melihat detail.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
