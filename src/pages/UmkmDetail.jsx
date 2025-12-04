import React from "react";
import { Link, useParams } from "react-router-dom";
import { dummyUmkm } from "../data/umkmDummy";

export default function UmkmDetail() {
  const { id } = useParams();
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

  const { employeesSummary } = umkm;

  return (
    <div className="mx-auto max-w-6xl px-4 py-6 text-slate-50">
      {/* HEADER */}
      <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-emerald-400/60">
            Profil UMKM
          </p>
          <h1 className="text-lg font-semibold md:text-xl">{umkm.name}</h1>
          <p className="mt-1 text-xs text-slate-400">
            Owner: {umkm.owner} • {umkm.location}
          </p>
          <p className="mt-1 text-xs text-slate-400">
            Kecamatan: {umkm.kecamatan} • {umkm.distance} • Rating: ⭐{" "}
            {umkm.rating}
          </p>
          <div className="mt-2 flex flex-wrap gap-1">
            <span className="rounded-full bg-slate-800 px-2 py-0.5 text-[10px] text-slate-300">
              {umkm.jenis}
            </span>
            {umkm.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-slate-800 px-2 py-0.5 text-[10px] text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-end gap-2 text-xs">
          <Link
            to="/umkm"
            className="text-emerald-300 underline-offset-2 hover:underline"
          >
            ← Kembali ke daftar UMKM
          </Link>
          <Link
            to="/marketplace"
            className="rounded-full border border-emerald-500 px-3 py-1 text-emerald-300 hover:bg-emerald-500 hover:text-slate-950"
          >
            Lihat Produk di Marketplace (Dummy)
          </Link>
        </div>
      </div>

      {/* IMAGE + DESKRIPSI + KARYAWAN */}
      <div className="grid gap-4 md:grid-cols-3">
        <div className="md:col-span-1">
          <div className="h-40 w-full overflow-hidden rounded-xl border border-slate-800 bg-slate-900">
            <img
              src={umkm.image}
              alt={umkm.name}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 md:col-span-2">
          <div>
            <p className="text-xs text-slate-300">{umkm.description}</p>
            <p className="mt-3 text-[11px] text-slate-400">
              Catatan: data ini masih dummy, nanti bisa dihubungkan langsung ke
              data UMKM pada backend (profil, produk, dan riwayat transaksi).
            </p>
          </div>

          {/* DATA KARYAWAN */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-3 text-[11px]">
            <p className="text-xs font-semibold text-slate-100">
              Data Karyawan & Kebutuhan Tenaga Kerja
            </p>
            <p className="mt-2 text-slate-300">
              Jumlah karyawan saat ini:{" "}
              <span className="font-semibold text-emerald-300">
                {employeesSummary.total} orang
              </span>
            </p>
            <p className="mt-1 text-slate-300">
              Bidang utama:{" "}
              <span className="text-slate-200">
                {employeesSummary.roles.join(", ")}
              </span>
            </p>
            <p className="mt-1">
              Status kebutuhan karyawan:{" "}
              <span
                className={
                  employeesSummary.isHiring
                    ? "font-semibold text-emerald-300"
                    : "font-semibold text-slate-400"
                }
              >
                {employeesSummary.isHiring
                  ? "Sedang membuka peluang kerja"
                  : "Belum membuka lowongan baru"}
              </span>
            </p>
            <p className="mt-1 text-slate-400">{employeesSummary.hiringNote}</p>
          </div>
        </div>
      </div>

      {/* KATEGORI & PRODUK DENGAN GAMBAR */}
      <section className="mt-6">
        <div className="mb-2 flex items-center justify-between">
          <h2 className="text-sm font-semibold text-slate-100">
            Kategori & Produk yang Dijual
          </h2>
          <span className="text-[11px] text-slate-400">
            Total kategori: {umkm.categories.length}
          </span>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {umkm.categories.map((cat) => (
            <div
              key={cat.name}
              className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 text-xs"
            >
              <div className="mb-2 flex items-center justify-between gap-2">
                <div>
                  <p className="text-[13px] font-semibold text-slate-50">
                    {cat.name}
                  </p>
                  <p className="mt-1 text-[11px] text-slate-400">
                    Jumlah produk: {cat.productCount}
                  </p>
                </div>
                <span className="rounded-full bg-slate-800 px-3 py-1 text-[10px] text-slate-200">
                  {cat.productCount} item
                </span>
              </div>

              <div className="mt-2 grid gap-2">
                {cat.products.map((prod) => (
                  <Link
                    key={prod.id}
                    to={`/umkm/${umkm.id}/produk/${prod.id}`}
                    className="flex items-stretch gap-2 rounded-xl border border-slate-800 bg-slate-900 px-2 py-2 text-left hover:border-emerald-500/60"
                  >
                    <div className="h-14 w-14 flex-shrink-0 overflow-hidden rounded-lg border border-slate-800 bg-slate-900">
                      <img
                        src={prod.image}
                        alt={prod.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <p className="text-[12px] font-semibold text-slate-50">
                          {prod.name}
                        </p>
                        <p className="text-[11px] text-emerald-300">
                          {prod.price}
                        </p>
                      </div>
                      <p className="mt-1 line-clamp-2 text-[10px] text-slate-400">
                        {prod.note}
                      </p>
                    </div>
                    <span className="self-center rounded-full bg-slate-800 px-3 py-1 text-[10px] text-slate-200">
                      Detail
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MAP ZONA UMKM */}
      <section className="mt-6">
        <div className="mb-2 flex items-center justify-between">
          <h2 className="text-sm font-semibold text-slate-100">
            Zona Lokasi UMKM
          </h2>
          <span className="text-[11px] text-slate-400">
            Kecamatan: {umkm.kecamatan}
          </span>
        </div>

        <div className="relative h-56 overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900">
          {/* grid tipis */}
          <div className="pointer-events-none absolute inset-0 opacity-20">
            <div className="h-full w-full bg-[radial-gradient(circle_at_1px_1px,_#475569_1px,_transparent_0)] bg-[length:24px_24px]" />
          </div>

          {/* zona (lingkaran area) */}
          <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-500/40 bg-emerald-500/5 blur-[1px]" />

          {/* marker UMKM (pakai mapPosition kalau ada) */}
          <div
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{
              left: `${umkm.mapPosition?.x ?? 50}%`,
              top: `${umkm.mapPosition?.y ?? 50}%`,
            }}
          >
            <div className="flex flex-col items-center">
              <div className="h-6 w-6 rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/50" />
              <span className="mt-1 max-w-[160px] truncate rounded-full border border-slate-700 bg-slate-900/95 px-2 py-0.5 text-[10px] text-slate-100">
                {umkm.name} – {umkm.kecamatan}
              </span>
            </div>
          </div>
        </div>

        <p className="mt-2 text-[10px] text-slate-500">
          Catatan: Peta ini masih bersifat ilustrasi (dummy). Ke depannya bisa
          diganti dengan integrasi map (Leaflet / Google Maps) menggunakan titik
          koordinat latitude–longitude UMKM.
        </p>
      </section>
    </div>
  );
}
