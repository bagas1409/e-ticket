// src/pages/DestinasiWisata.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { destinations, DESTINATION_CATEGORIES } from "../data/destinasiDummy";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMountainSun,
  faMapLocationDot,
  faArrowLeftLong,
  faArrowUp,
  faFilter,
  faLocationDot,
  faStar,
  faRoute,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";

export default function DestinasiWisata() {
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  const filteredDestinations = destinations.filter((d) => {
    if (selectedCategory === "Semua") return true;
    return d.category === selectedCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-sky-50 text-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-6">
        {/* HEADER */}
        <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="flex items-center gap-1 text-xs uppercase tracking-[0.2em] text-blue-600">
              <FontAwesomeIcon
                icon={faMountainSun}
                className="text-[10px] text-blue-500"
              />
              Destinasi Wisata
            </p>
            <h1 className="text-lg font-semibold md:text-2xl">
              Jelajahi Wisata di Pringsewu
            </h1>
            <p className="mt-1 text-xs md:text-sm text-slate-600">
              Pilih kategori wisata untuk melihat daftar destinasi yang sesuai,
              lalu lihat posisi destinasinya pada peta di bawah.
            </p>
          </div>
          <Link
            to="/"
            className="inline-flex items-center gap-1 text-xs md:text-sm text-blue-600 underline-offset-2 hover:underline"
          >
            <FontAwesomeIcon icon={faArrowLeftLong} className="text-[10px]" />
            Kembali ke Dashboard
          </Link>
        </div>

        {/* KATEGORI DESTINASI */}
        <section className="mb-5">
          <p className="mb-2 flex items-center gap-1 text-[11px] font-semibold text-slate-800">
            <FontAwesomeIcon
              icon={faFilter}
              className="text-[11px] text-blue-500"
            />
            Kategori Wisata
          </p>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-6">
            {DESTINATION_CATEGORIES.map((cat) => (
              <button
                key={cat.key}
                type="button"
                onClick={() => setSelectedCategory(cat.key)}
                className={`flex flex-col items-center justify-center rounded-2xl border px-3 py-3 text-center text-[11px] transition ${
                  selectedCategory === cat.key
                    ? "border-blue-500 bg-blue-50 text-blue-700"
                    : "border-blue-100 bg-white text-slate-700 hover:border-blue-400 hover:text-blue-700"
                }`}
              >
                <span className="mb-1 text-lg">{cat.icon}</span>
                <span className="font-semibold">{cat.label}</span>
              </button>
            ))}
          </div>
        </section>

        {/* LIST DESTINASI */}
        <section className="mt-6">
          {/* HEADER */}
          <div className="mb-3 flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-600">
                <FontAwesomeIcon
                  icon={faMapLocationDot}
                  className="text-[10px] text-blue-500"
                />
                Daftar Destinasi
              </p>
              <p className="text-[11px] text-slate-600">
                Menampilkan{" "}
                <span className="font-semibold text-blue-600">
                  {filteredDestinations.length} destinasi
                </span>
                {selectedCategory !== "Semua" && (
                  <>
                    {" "}
                    • Kategori{" "}
                    <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-0.5 text-[10px] text-blue-700 border border-blue-200">
                      <FontAwesomeIcon
                        icon={faFilter}
                        className="text-[9px] text-blue-500"
                      />
                      {selectedCategory}
                    </span>
                  </>
                )}
              </p>
            </div>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="self-start inline-flex items-center gap-1 rounded-full border border-blue-100 bg-white px-3 py-1 text-[11px] text-slate-700 hover:border-blue-400 hover:text-blue-700 shadow-sm"
            >
              <FontAwesomeIcon icon={faArrowUp} className="text-[10px]" />
              Kembali ke atas
            </button>
          </div>

          {/* LIST / EMPTY STATE */}
          {filteredDestinations.length === 0 ? (
            <div className="flex h-32 items-center justify-center rounded-2xl border border-dashed border-blue-200 bg-blue-50">
              <p className="text-xs text-slate-600">
                Belum ada destinasi untuk kategori ini. Coba pilih kategori lain
                di atas.
              </p>
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredDestinations.map((d) => (
                <Link
                  key={d.id}
                  to={`/wisata/${d.id}`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-100 to-sky-50 shadow-sm transition hover:-translate-y-1 hover:border-blue-400 hover:shadow-lg"
                >
                  {/* IMAGE + OVERLAY */}
                  <div className="relative h-32 w-full overflow-hidden">
                    <img
                      src={d.image}
                      alt={d.name}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent" />

                    {/* TOP TAGS */}
                    <div className="absolute left-3 right-3 top-3 flex items-center justify-between text-[10px]">
                      <span className="inline-flex items-center gap-1 rounded-full bg-black/60 px-2 py-0.5 text-slate-50 backdrop-blur-sm">
                        <FontAwesomeIcon
                          icon={faLocationDot}
                          className="text-[9px] text-blue-200"
                        />
                        {d.area}
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-blue-100 px-2 py-0.5 text-slate-900 font-semibold shadow-sm border border-blue-200">
                        <FontAwesomeIcon
                          icon={faStar}
                          className="text-[9px] text-amber-500"
                        />
                        {d.rating}
                      </span>
                    </div>

                    {/* TITLE OVER IMAGE */}
                    <div className="absolute inset-x-3 bottom-2">
                      <p className="line-clamp-2 text-[12px] font-semibold text-slate-50 drop-shadow">
                        {d.name}
                      </p>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="flex flex-1 flex-col gap-2 p-3 text-xs">
                    <div className="flex flex-wrap items-center justify-between gap-1">
                      <p className="flex items-center gap-1 text-[11px] text-slate-600">
                        <FontAwesomeIcon
                          icon={faLocationDot}
                          className="text-[10px] text-blue-500"
                        />
                        Kec. {d.kecamatan} • {d.tag}
                      </p>
                      <span className="rounded-full bg-blue-50 px-2 py-0.5 text-[10px] text-blue-700 border border-blue-200">
                        {d.category}
                      </span>
                    </div>

                    <p className="line-clamp-3 text-[11px] text-slate-600">
                      {d.shortDesc}
                    </p>

                    {/* FOOTER / CTA */}
                    <div className="mt-auto flex items-center justify-between pt-1">
                      <div className="flex items-center gap-1 text-[10px] text-slate-500">
                        <FontAwesomeIcon
                          icon={faRoute}
                          className="text-[10px] text-blue-500"
                        />
                        <span>Rute & detail tersedia</span>
                      </div>
                      <span className="inline-flex items-center gap-1 rounded-full bg-blue-600 px-3 py-1 text-[10px] font-semibold text-white transition group-hover:bg-blue-500">
                        Lihat Detail
                        <span className="translate-x-0 text-[11px] transition group-hover:translate-x-0.5">
                          →
                        </span>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>

        {/* MAP DESTINASI */}
        <section className="mt-6 rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-100 to-sky-50 p-4 shadow-sm">
          <div className="mb-2 flex items-center justify-between">
            <p className="flex items-center gap-1 text-xs font-semibold text-slate-900">
              <FontAwesomeIcon
                icon={faMapLocationDot}
                className="text-[11px] text-blue-500"
              />
              Peta Lokasi Destinasi
            </p>
            <p className="text-[11px] text-slate-500">
              Menampilkan {filteredDestinations.length} titik destinasi
            </p>
          </div>

          <div className="relative mt-2 h-64 overflow-hidden rounded-xl border border-blue-100 bg-sky-100">
            {/* LAYER: blok area (kaya zona kota) */}
            <div className="pointer-events-none absolute inset-0 opacity-80">
              {/* blok kiri */}
              <div className="absolute inset-y-0 left-0 w-1/3 bg-sky-50" />
              {/* blok kanan */}
              <div className="absolute inset-y-0 right-0 w-1/4 bg-sky-200/80" />
              {/* blok tengah miring (kaya sungai/jalan utama) */}
              <div className="absolute -left-10 top-8 h-20 w-1/2 -rotate-6 bg-sky-300/80" />
              <div className="absolute left-10 top-24 h-20 w-2/3 -rotate-2 bg-sky-200/70" />
            </div>

            {/* LAYER: grid tipis biar berasa jalan kecil */}
            <div className="pointer-events-none absolute inset-0 opacity-40">
              <div className="h-full w-full bg-[radial-gradient(circle_at_1px_1px,_#9fb4ff_1px,_transparent_0)] bg-[length:24px_24px]" />
            </div>

            {/* LAYER: beberapa garis jalan utama */}
            <div className="pointer-events-none absolute inset-0 opacity-60">
              {/* jalan vertikal */}
              <div className="absolute left-1/3 top-0 h-full w-[1px] bg-blue-400/70" />
              <div className="absolute left-2/3 top-0 h-full w-[1px] bg-blue-400/60" />
              {/* jalan horizontal */}
              <div className="absolute left-0 top-1/3 h-[1px] w-full bg-blue-400/70" />
              <div className="absolute left-0 top-2/3 h-[1px] w-full bg-blue-400/60" />
            </div>

            {/* TITIK DESTINASI */}
            {filteredDestinations.map((d) => (
              <div
                key={`map-${d.id}`}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `${d.mapPosition?.x ?? 50}%`,
                  top: `${d.mapPosition?.y ?? 50}%`,
                }}
              >
                <div className="flex flex-col items-center">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 shadow-lg shadow-blue-400/70 border border-white">
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      className="text-[9px] text-white"
                    />
                  </div>
                  <span className="mt-1 max-w-[160px] truncate rounded-full border border-blue-100 bg-white/95 px-2 py-0.5 text-[9px] text-slate-800 shadow-sm">
                    {d.name}
                  </span>
                </div>
              </div>
            ))}

            {filteredDestinations.length === 0 && (
              <div className="flex h-full items-center justify-center text-[11px] text-slate-500">
                Tidak ada titik destinasi yang bisa ditampilkan. Pilih kategori
                terlebih dahulu.
              </div>
            )}
          </div>

          <p className="mt-2 flex items-center gap-1 text-[10px] text-slate-500">
            <FontAwesomeIcon
              icon={faCircleInfo}
              className="text-[10px] text-blue-500"
            />
            Catatan: Peta ini masih dummy (layout statis). Ke depan bisa diganti
            dengan integrasi map (Leaflet / Google Maps) menggunakan titik
            koordinat latitude–longitude destinasi wisata yang sebenarnya.
          </p>
        </section>
      </div>
    </div>
  );
}
