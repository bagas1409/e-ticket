// src/pages/UmkmDetail.jsx
import React from "react";
import { Link, useParams } from "react-router-dom";
import { dummyUmkm } from "../data/umkmDummy";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStore,
  faUserTie,
  faLocationDot,
  faStar,
  faTags,
  faUsers,
  faCircleInfo,
  faBoxOpen,
  faMapLocationDot,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

export default function UmkmDetail() {
  const { id } = useParams();
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
            ← Kembali ke daftar UMKM
          </Link>
        </div>
      </div>
    );
  }

  // fallback kalau data karyawan belum ada di dummy tertentu
  const employeesSummary = umkm.employeesSummary || {
    total: null,
    roles: [],
    isHiring: false,
    hiringNote: "Data karyawan belum diisi untuk UMKM ini (dummy).",
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-sky-50">
      <div className="mx-auto max-w-6xl px-4 py-6 text-slate-900">
        {/* HEADER */}
        <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-blue-600">
              <FontAwesomeIcon
                icon={faStore}
                className="text-[13px] text-blue-500"
              />
              <span>Profil UMKM</span>
            </p>
            <h1 className="mt-1 text-lg font-semibold md:text-2xl flex items-center gap-2">
              {umkm.name}
              <span className="rounded-full border border-blue-100 bg-blue-50 px-2 py-0.5 text-[10px] text-blue-700">
                {umkm.jenis}
              </span>
            </h1>
            <p className="mt-1 flex items-center gap-2 text-xs md:text-sm text-slate-700">
              <FontAwesomeIcon
                icon={faUserTie}
                className="text-[12px] text-blue-500"
              />
              <span>
                Owner: <span className="font-semibold">{umkm.owner}</span>
              </span>
            </p>
            <p className="mt-1 flex flex-wrap items-center gap-2 text-xs text-slate-600">
              <span className="inline-flex items-center gap-1">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-[11px] text-blue-500"
                />
                <span>{umkm.location}</span>
              </span>
              <span className="text-slate-400">•</span>
              <span>Kecamatan: {umkm.kecamatan}</span>
              <span className="text-slate-400">•</span>
              <span>{umkm.distance}</span>
              <span className="text-slate-400">•</span>
              <span className="inline-flex items-center gap-1">
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-[11px] text-amber-500"
                />
                <span> {umkm.rating}</span>
              </span>
            </p>
            <div className="mt-2 flex flex-wrap gap-1 text-[10px]">
              <span className="inline-flex items-center gap-1 rounded-full border border-blue-100 bg-blue-50 px-2 py-0.5 text-blue-700">
                <FontAwesomeIcon icon={faTags} className="text-[10px]" />
                <span>Jenis: {umkm.jenis}</span>
              </span>
              {umkm.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-blue-100 bg-white px-2 py-0.5 text-slate-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-end gap-2 text-xs">
            <Link
              to="/umkm"
              className="inline-flex items-center gap-2 text-blue-600 underline-offset-2 hover:underline"
            >
              ← Kembali ke daftar UMKM
            </Link>
            <Link
              to="/marketplace"
              className="inline-flex items-center gap-2 rounded-full border border-blue-500 bg-white px-3 py-1 text-blue-600 hover:bg-blue-50"
            >
              <FontAwesomeIcon icon={faCartShopping} className="text-[12px]" />
              <span>Lihat Produk di Marketplace (Dummy)</span>
            </Link>
          </div>
        </div>

        {/* IMAGE + DESKRIPSI + KARYAWAN */}
        <div className="grid gap-4 md:grid-cols-3">
          <div className="md:col-span-1">
            <div className="h-40 w-full overflow-hidden rounded-xl border border-blue-100 bg-blue-50">
              <img
                src={umkm.image}
                alt={umkm.name}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 md:col-span-2 text-xs">
            <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-100 to-sky-50 p-3 shadow-sm">
              <p className="flex items-center gap-2 text-[11px] font-semibold text-slate-900">
                <FontAwesomeIcon
                  icon={faCircleInfo}
                  className="text-[12px] text-blue-500"
                />
                <span>Deskripsi UMKM</span>
              </p>
              <p className="mt-2 text-[11px] text-slate-700">
                {umkm.description}
              </p>
              <p className="mt-3 text-[10px] text-slate-500">
                Catatan: data ini masih dummy, nanti bisa dihubungkan langsung
                ke data UMKM pada backend (profil, produk, dan riwayat
                transaksi).
              </p>
            </div>

            {/* DATA KARYAWAN */}
            <div className="rounded-2xl border border-blue-100 bg-white p-3 text-[11px] shadow-sm">
              <p className="flex items-center gap-2 text-xs font-semibold text-slate-900">
                <FontAwesomeIcon
                  icon={faUsers}
                  className="text-[12px] text-blue-500"
                />
                <span>Data Karyawan & Kebutuhan Tenaga Kerja</span>
              </p>
              <p className="mt-2 text-slate-700">
                Jumlah karyawan saat ini:{" "}
                {employeesSummary.total ? (
                  <span className="font-semibold text-blue-600">
                    {employeesSummary.total} orang
                  </span>
                ) : (
                  <span className="text-slate-500">
                    belum ada data jumlah karyawan
                  </span>
                )}
              </p>
              {employeesSummary.roles?.length > 0 && (
                <p className="mt-1 text-slate-700">
                  Bidang utama:{" "}
                  <span className="text-slate-900">
                    {employeesSummary.roles.join(", ")}
                  </span>
                </p>
              )}
              <p className="mt-1">
                Status kebutuhan karyawan:{" "}
                <span
                  className={
                    employeesSummary.isHiring
                      ? "font-semibold text-emerald-600"
                      : "font-semibold text-slate-500"
                  }
                >
                  {employeesSummary.isHiring
                    ? "Sedang membuka peluang kerja"
                    : "Belum membuka lowongan baru"}
                </span>
              </p>
              <p className="mt-1 text-slate-600">
                {employeesSummary.hiringNote}
              </p>
            </div>
          </div>
        </div>

        {/* KATEGORI & PRODUK DENGAN GAMBAR */}
        <section className="mt-6">
          <div className="mb-2 flex items-center justify-between">
            <h2 className="flex items-center gap-2 text-sm font-semibold text-slate-900">
              <FontAwesomeIcon
                icon={faBoxOpen}
                className="text-[13px] text-blue-500"
              />
              <span>Kategori & Produk yang Dijual</span>
            </h2>
            <span className="text-[11px] text-slate-500">
              Total kategori: {umkm.categories.length}
            </span>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {umkm.categories.map((cat) => (
              <div
                key={cat.name}
                className="rounded-2xl border border-blue-100 bg-white p-4 text-xs shadow-sm"
              >
                <div className="mb-2 flex items-center justify-between gap-2">
                  <div>
                    <p className="text-[13px] font-semibold text-slate-900">
                      {cat.name}
                    </p>
                    <p className="mt-1 text-[11px] text-slate-600">
                      Jumlah produk: {cat.productCount}
                    </p>
                  </div>
                  <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-[10px] text-blue-700">
                    {cat.productCount} item
                  </span>
                </div>

                <div className="mt-2 grid gap-2">
                  {cat.products.map((prod, idx) => (
                    <Link
                      key={prod.id ?? `${cat.name}-${idx}`}
                      to={`/umkm/${umkm.id}/produk/${prod.id ?? idx}`}
                      className="flex items-stretch gap-2 rounded-xl border border-blue-100 bg-blue-50/60 px-2 py-2 text-left transition hover:border-blue-400 hover:bg-white hover:shadow-sm"
                    >
                      <div className="h-14 w-14 flex-shrink-0 overflow-hidden rounded-lg border border-blue-100 bg-blue-50">
                        {prod.image ? (
                          <img
                            src={prod.image}
                            alt={prod.name}
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center text-[10px] text-slate-400">
                            No Image
                          </div>
                        )}
                      </div>
                      <div className="flex flex-1 flex-col justify-between">
                        <div>
                          <p className="text-[12px] font-semibold text-slate-900">
                            {prod.name}
                          </p>
                          <p className="text-[11px] text-blue-600">
                            {prod.price}
                          </p>
                        </div>
                        <p className="mt-1 line-clamp-2 text-[10px] text-slate-600">
                          {prod.note}
                        </p>
                      </div>
                      <span className="self-center rounded-full bg-blue-600 px-3 py-1 text-[10px] font-semibold text-white">
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
            <h2 className="flex items-center gap-2 text-sm font-semibold text-slate-900">
              <FontAwesomeIcon
                icon={faMapLocationDot}
                className="text-[13px] text-blue-500"
              />
              <span>Zona Lokasi UMKM</span>
            </h2>
            <span className="text-[11px] text-slate-500">
              Kecamatan: {umkm.kecamatan}
            </span>
          </div>

          <div className="relative h-56 overflow-hidden rounded-2xl border border-blue-100 bg-sky-100 shadow-sm">
            {/* grid tipis */}
            <div className="pointer-events-none absolute inset-0 opacity-40">
              <div className="h-full w-full bg-[radial-gradient(circle_at_1px_1px,_#9fb4ff_1px,_transparent_0)] bg-[length:24px_24px]" />
            </div>

            {/* zona (lingkaran area) */}
            <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/40 bg-blue-200/20 blur-[1px]" />

            {/* beberapa garis jalan */}
            <div className="pointer-events-none absolute inset-0 opacity-60">
              <div className="absolute left-1/3 top-0 h-full w-[1px] bg-blue-400/70" />
              <div className="absolute left-2/3 top-0 h-full w-[1px] bg-blue-400/60" />
              <div className="absolute left-0 top-1/3 h-[1px] w-full bg-blue-400/70" />
              <div className="absolute left-0 top-2/3 h-[1px] w-full bg-blue-400/60" />
              <div className="absolute left-10 top-10 h-[1px] w-1/2 rotate-6 bg-blue-300/70" />
            </div>

            {/* marker UMKM (pakai mapPosition kalau ada) */}
            <div
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{
                left: `${umkm.mapPosition?.x ?? 50}%`,
                top: `${umkm.mapPosition?.y ?? 50}%`,
              }}
            >
              <div className="flex flex-col items-center">
                <div className="h-6 w-6 rounded-full bg-blue-600 shadow-lg shadow-blue-400/70 border border-white" />
                <span className="mt-1 max-w-[180px] truncate rounded-full border border-blue-100 bg-white/95 px-2 py-0.5 text-[10px] text-slate-800 shadow-sm">
                  {umkm.name} – {umkm.kecamatan}
                </span>
              </div>
            </div>
          </div>

          <p className="mt-2 text-[10px] text-slate-500">
            Catatan: Peta ini masih bersifat ilustrasi (dummy). Ke depannya bisa
            diganti dengan integrasi map (Leaflet / Google Maps) menggunakan
            titik koordinat latitude–longitude UMKM.
          </p>
        </section>
      </div>
    </div>
  );
}
