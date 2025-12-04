// src/pages/WisataDetail.jsx
import React from "react";
import { Link, useParams } from "react-router-dom";
import { destinations } from "../data/destinasiDummy";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faArrowLeftLong,
  faMountainSun,
  faLocationDot,
  faTicket,
  faHeart,
  faStar,
  faClock,
  faCircleInfo,
  faMapLocationDot,
} from "@fortawesome/free-solid-svg-icons";

export default function WisataDetail() {
  const { id } = useParams();

  // Aman untuk id number/string
  const dest = destinations.find((d) => String(d.id) === String(id));

  if (!dest) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-sky-50">
        <div className="mx-auto max-w-6xl px-4 py-6 text-slate-900">
          <p className="text-sm font-semibold text-rose-600">
            Destinasi tidak ditemukan.
          </p>
          <Link
            to="/wisata"
            className="mt-3 inline-flex items-center gap-1 text-xs text-blue-600 underline-offset-2 hover:underline"
          >
            <FontAwesomeIcon icon={faArrowLeftLong} className="text-[10px]" />
            Kembali ke daftar destinasi
          </Link>
        </div>
      </div>
    );
  }

  const related = destinations
    .filter((d) => d.id !== dest.id && d.category === dest.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-sky-50">
      <div className="mx-auto max-w-6xl px-4 py-6 text-slate-900">
        {/* BREADCRUMB */}
        <div className="mb-4 text-[11px] text-slate-500">
          <Link
            to="/"
            className="inline-flex items-center gap-1 text-blue-600 hover:underline underline-offset-2"
          >
            <FontAwesomeIcon icon={faHouse} className="text-[10px]" />
            Beranda
          </Link>{" "}
          /{" "}
          <Link
            to="/wisata"
            className="inline-flex items-center gap-1 text-blue-600 hover:underline underline-offset-2"
          >
            <FontAwesomeIcon
              icon={faMountainSun}
              className="text-[10px] text-blue-500"
            />
            Destinasi Wisata
          </Link>{" "}
          / <span className="text-slate-700">{dest.name}</span>
        </div>

        {/* HEADER */}
        <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="flex items-center gap-1 text-xs uppercase tracking-[0.2em] text-blue-600">
              <FontAwesomeIcon
                icon={faMountainSun}
                className="text-[10px] text-blue-500"
              />
              Detail Destinasi Wisata
            </p>
            <h1 className="text-lg font-semibold md:text-2xl">{dest.name}</h1>
            <p className="mt-1 flex items-center gap-1 text-xs md:text-sm text-slate-700">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="text-[11px] text-blue-500"
              />
              {dest.area} • Kec. {dest.kecamatan}
            </p>
            <p className="mt-1 text-xs text-slate-600">
              Kategori:{" "}
              <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-0.5 text-[10px] text-blue-700 border border-blue-200">
                <FontAwesomeIcon
                  icon={faMountainSun}
                  className="text-[9px] text-blue-500"
                />
                {dest.category}
              </span>{" "}
              • Tag: {dest.tag}
            </p>
            <p className="mt-1 flex items-center gap-1 text-xs font-semibold text-blue-600">
              <FontAwesomeIcon
                icon={faStar}
                className="text-[11px] text-amber-500"
              />
              Rating pengunjung: {dest.rating}
            </p>
          </div>
          <div className="flex flex-col items-end gap-2 text-xs">
            <Link
              to="/wisata"
              className="inline-flex items-center gap-1 text-blue-600 underline-offset-2 hover:underline"
            >
              <FontAwesomeIcon icon={faArrowLeftLong} className="text-[10px]" />
              Kembali ke daftar wisata
            </Link>

            <div className="flex flex-wrap justify-end gap-2">
              <button
                type="button"
                className="inline-flex items-center gap-1 rounded-full bg-blue-600 px-3 py-1 text-[11px] font-semibold text-white hover:bg-blue-500"
                onClick={() => {
                  // TODO: nanti dihubungkan ke flow pembelian tiket
                  console.log("Beli tiket wisata:", dest.id);
                }}
              >
                <FontAwesomeIcon icon={faTicket} className="text-[11px]" />
                Beli Tiket Wisata
              </button>
              <button
                type="button"
                className="inline-flex items-center gap-1 rounded-full border border-blue-500 bg-white px-3 py-1 text-[11px] font-semibold text-blue-600 hover:bg-blue-50"
                onClick={() => {
                  // TODO: nanti dihubungkan ke fitur wishlist user
                  console.log("Tambahkan ke wishlist:", dest.id);
                }}
              >
                <FontAwesomeIcon icon={faHeart} className="text-[11px]" />
                Tambahkan ke Wishlist
              </button>
            </div>
          </div>
        </div>

        {/* KONTEN UTAMA */}
        <div className="grid gap-4 md:grid-cols-3">
          {/* FOTO BESAR */}
          <div className="md:col-span-1">
            <div className="h-52 w-full overflow-hidden rounded-2xl border border-blue-100 bg-blue-50">
              <img
                src={dest.image}
                alt={dest.name}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* DESKRIPSI & FASILITAS */}
          <div className="flex flex-col gap-3 md:col-span-2 text-xs">
            <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-100 to-sky-50 p-3 shadow-sm">
              <p className="flex items-center gap-1 text-[11px] font-semibold text-slate-900">
                <FontAwesomeIcon
                  icon={faCircleInfo}
                  className="text-[11px] text-blue-500"
                />
                Gambaran Umum Destinasi
              </p>
              <p className="mt-2 text-[11px] text-slate-700">
                {dest.longDesc || dest.shortDesc}
              </p>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-100 to-sky-50 p-3 shadow-sm">
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
              <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-100 to-sky-50 p-3 shadow-sm">
                <p className="flex items-center gap-1 text-[11px] font-semibold text-slate-900">
                  <FontAwesomeIcon
                    icon={faClock}
                    className="text-[11px] text-blue-500"
                  />
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
            <h2 className="flex items-center gap-1 text-sm font-semibold text-slate-900">
              <FontAwesomeIcon
                icon={faMapLocationDot}
                className="text-[13px] text-blue-500"
              />
              Posisi Destinasi pada Peta (Dummy)
            </h2>
            <span className="flex items-center gap-1 text-[11px] text-slate-500">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="text-[11px] text-blue-500"
              />
              Kecamatan: {dest.kecamatan}
            </span>
          </div>

          <div className="relative h-56 overflow-hidden rounded-2xl border border-blue-100 bg-sky-100 shadow-sm">
            {/* grid biru */}
            <div className="pointer-events-none absolute inset-0 opacity-40">
              <div className="h-full w-full bg-[radial-gradient(circle_at_1px_1px,_#9fb4ff_1px,_transparent_0)] bg-[length:24px_24px]" />
            </div>

            {/* zona sekitar destinasi */}
            <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/50 bg-blue-200/30 blur-[1px]" />

            {/* beberapa garis jalan utama */}
            <div className="pointer-events-none absolute inset-0 opacity-60">
              {/* vertikal */}
              <div className="absolute left-1/3 top-0 h-full w-[1px] bg-blue-400/70" />
              <div className="absolute left-2/3 top-0 h-full w-[1px] bg-blue-400/60" />
              {/* horizontal */}
              <div className="absolute left-0 top-1/3 h-[1px] w-full bg-blue-400/70" />
              <div className="absolute left-0 top-2/3 h-[1px] w-full bg-blue-400/60" />
              {/* diagonal kecil */}
              <div className="absolute left-10 top-10 h-[1px] w-1/2 rotate-6 bg-blue-300/70" />
            </div>

            {/* marker destinasi */}
            <div
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{
                left: `${dest.mapPosition?.x ?? 50}%`,
                top: `${dest.mapPosition?.y ?? 50}%`,
              }}
            >
              <div className="flex flex-col items-center">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 shadow-lg shadow-blue-400/70 border border-white">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="text-[11px] text-white"
                  />
                </div>
                <span className="mt-1 max-w-[200px] truncate rounded-full border border-blue-100 bg-white/95 px-2 py-0.5 text-[10px] text-slate-800 shadow-sm">
                  {dest.name} – {dest.area}
                </span>
              </div>
            </div>
          </div>

          <p className="mt-2 flex items-center gap-1 text-[10px] text-slate-500">
            <FontAwesomeIcon
              icon={faCircleInfo}
              className="text-[10px] text-blue-500"
            />
            Catatan: Peta ini masih ilustrasi. Nantinya bisa diganti dengan
            integrasi map asli (Leaflet / Google Maps) dengan titik koordinat
            yang akurat.
          </p>
        </section>

        {/* REKOMENDASI LAIN */}
        {related.length > 0 && (
          <section className="mt-6">
            <div className="mb-2 flex items-center justify-between">
              <h2 className="flex items-center gap-1 text-sm font-semibold text-slate-900">
                <FontAwesomeIcon
                  icon={faMountainSun}
                  className="text-[13px] text-blue-500"
                />
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
                  className="flex flex-col rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-100 to-sky-50 p-3 text-xs shadow-sm transition hover:-translate-y-1 hover:border-blue-400 hover:shadow-md"
                >
                  <div className="mb-2 h-20 w-full overflow-hidden rounded-xl border border-blue-100 bg-blue-50">
                    <img
                      src={r.image}
                      alt={r.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <p className="text-[12px] font-semibold text-slate-900">
                    {r.name}
                  </p>
                  <p className="mt-1 flex items-center gap-1 text-[11px] text-slate-600">
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      className="text-[10px] text-blue-500"
                    />
                    {r.area} •
                    <span className="inline-flex items-center gap-1">
                      <FontAwesomeIcon
                        icon={faStar}
                        className="text-[10px] text-amber-500"
                      />
                      {r.rating}
                    </span>
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
