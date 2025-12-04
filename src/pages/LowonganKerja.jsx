// src/pages/LowonganKerja.jsx
import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { jobVacancies, JOB_CATEGORIES, JOB_TYPES } from "../data/lowonganDummy";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faArrowLeftLong,
  faMagnifyingGlass,
  faFilter,
  faLocationDot,
  faClock,
  faCircleCheck,
  faTags,
  faMoneyBillWave,
} from "@fortawesome/free-solid-svg-icons";

export default function LowonganKerja() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [selectedType, setSelectedType] = useState("Semua");
  const [selectedKecamatan, setSelectedKecamatan] = useState("Semua");
  const [onlyOpen, setOnlyOpen] = useState(true);

  const kecamatanOptions = useMemo(() => {
    const set = new Set(jobVacancies.map((j) => j.kecamatan));
    return ["Semua", ...Array.from(set)];
  }, []);

  const filteredJobs = useMemo(() => {
    return jobVacancies.filter((job) => {
      if (onlyOpen && job.status !== "Dibuka") return false;

      if (selectedCategory !== "Semua" && job.category !== selectedCategory)
        return false;

      if (selectedType !== "Semua" && job.type !== selectedType) return false;

      if (
        selectedKecamatan !== "Semua" &&
        job.kecamatan !== selectedKecamatan
      ) {
        return false;
      }

      const term = search.toLowerCase().trim();
      if (term) {
        const haystack = (
          job.title +
          " " +
          job.companyName +
          " " +
          job.location +
          " " +
          job.tags.join(" ")
        ).toLowerCase();
        if (!haystack.includes(term)) return false;
      }

      return true;
    });
  }, [search, selectedCategory, selectedType, selectedKecamatan, onlyOpen]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-sky-50">
      <div className="mx-auto max-w-6xl px-4 py-6 text-slate-900">
        {/* HEADER */}
        <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="flex items-center gap-1 text-xs uppercase tracking-[0.2em] text-blue-600">
              <FontAwesomeIcon
                icon={faBriefcase}
                className="text-[10px] text-blue-500"
              />
              Lowongan Kerja
            </p>
            <h1 className="text-lg font-semibold md:text-2xl text-slate-900">
              Cari Kesempatan Kerja di UMKM &amp; Event Pringsewu
            </h1>
            <p className="mt-1 text-xs md:text-sm text-slate-600">
              Temukan posisi di UMKM lokal, kedai kopi, produksi, hingga event
              kolaborasi. Filter berdasarkan kategori, kecamatan, dan jenis
              kerja.
            </p>
          </div>
          <Link
            to="/"
            className="self-start inline-flex items-center gap-1 text-xs md:text-sm text-blue-600 underline-offset-2 hover:underline"
          >
            <FontAwesomeIcon icon={faArrowLeftLong} className="text-[10px]" />
            Kembali ke Dashboard
          </Link>
        </div>

        {/* FILTER BAR */}
        <section className="mb-4 space-y-3 rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-100 to-sky-50 p-4 text-xs shadow-sm">
          {/* Pencarian */}
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="flex-1">
              <p className="mb-1 flex items-center gap-1 text-[11px] font-semibold text-slate-800">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="text-[11px] text-blue-500"
                />
                Cari lowongan
              </p>
              <div className="flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-3 py-1.5">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="text-[12px] text-slate-500"
                />
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Cari berdasarkan posisi, UMKM, atau lokasi..."
                  className="flex-1 bg-transparent text-[11px] text-slate-800 outline-none placeholder:text-slate-400"
                />
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2 md:w-64 md:justify-end">
              <label className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1">
                <input
                  type="checkbox"
                  checked={onlyOpen}
                  onChange={(e) => setOnlyOpen(e.target.checked)}
                  className="h-3 w-3 rounded border-slate-400 text-blue-600 accent-blue-600"
                />
                <span className="flex items-center gap-1 text-[11px] text-slate-700">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-[11px] text-blue-500"
                  />
                  Tampilkan yang masih dibuka saja
                </span>
              </label>
            </div>
          </div>

          {/* Filter Kategori / Tipe / Kecamatan */}
          <div className="grid gap-3 md:grid-cols-3">
            <div>
              <p className="mb-1 flex items-center gap-1 text-[11px] text-slate-700">
                <FontAwesomeIcon
                  icon={faFilter}
                  className="text-[10px] text-blue-500"
                />
                Kategori
              </p>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full rounded-xl border border-blue-100 bg-white px-2 py-1.5 text-[11px] text-slate-800 focus:border-blue-500 focus:outline-none"
              >
                <option value="Semua">Semua kategori</option>
                {JOB_CATEGORIES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <p className="mb-1 flex items-center gap-1 text-[11px] text-slate-700">
                <FontAwesomeIcon
                  icon={faClock}
                  className="text-[10px] text-blue-500"
                />
                Jenis Kerja
              </p>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full rounded-xl border border-blue-100 bg-white px-2 py-1.5 text-[11px] text-slate-800 focus:border-blue-500 focus:outline-none"
              >
                <option value="Semua">Semua jenis</option>
                {JOB_TYPES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <p className="mb-1 flex items-center gap-1 text-[11px] text-slate-700">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-[10px] text-blue-500"
                />
                Kecamatan
              </p>
              <select
                value={selectedKecamatan}
                onChange={(e) => setSelectedKecamatan(e.target.value)}
                className="w-full rounded-xl border border-blue-100 bg-white px-2 py-1.5 text-[11px] text-slate-800 focus:border-blue-500 focus:outline-none"
              >
                {kecamatanOptions.map((k) => (
                  <option key={k} value={k}>
                    {k === "Semua" ? "Semua kecamatan" : k}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </section>

        {/* HASIL LIST */}
        <section className="mt-3">
          <div className="mb-3 flex items-center justify-between text-[11px]">
            <p className="flex items-center gap-1 text-slate-600">
              <FontAwesomeIcon
                icon={faBriefcase}
                className="text-[11px] text-blue-500"
              />
              Menampilkan{" "}
              <span className="font-semibold text-blue-600">
                {filteredJobs.length} lowongan
              </span>{" "}
              {onlyOpen && "(status: Dibuka)"}
            </p>
          </div>

          {filteredJobs.length === 0 ? (
            <div className="flex h-40 items-center justify-center rounded-2xl border border-dashed border-blue-200 bg-blue-50">
              <p className="text-xs text-slate-600">
                Belum ada lowongan yang cocok dengan filter saat ini. Coba
                longgarkan kriteria pencarian.
              </p>
            </div>
          ) : (
            <div className="grid gap-3 md:grid-cols-2">
              {filteredJobs.map((job) => {
                const isOpen = job.status === "Dibuka";
                return (
                  <Link
                    key={job.id}
                    to={`/lowongan/${job.id}`}
                    className="group flex h-full flex-col rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-100 to-sky-50 p-3 text-xs shadow-sm transition hover:-translate-y-1 hover:border-blue-400 hover:shadow-lg"
                  >
                    <div className="mb-1 flex items-start justify-between gap-2">
                      <div className="flex-1">
                        <p className="text-[13px] font-semibold text-slate-900">
                          {job.title}
                        </p>
                        <p className="mt-0.5 text-[11px] text-slate-600">
                          {job.companyName}
                        </p>
                      </div>
                      <span
                        className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                          isOpen
                            ? "border border-blue-200 bg-blue-50 text-blue-700"
                            : "border border-slate-300 bg-slate-100 text-slate-600"
                        }`}
                      >
                        <FontAwesomeIcon
                          icon={isOpen ? faCircleCheck : faClock}
                          className="text-[9px]"
                        />
                        {job.status}
                      </span>
                    </div>

                    <p className="mt-0.5 flex items-center gap-1 text-[11px] text-slate-600">
                      <FontAwesomeIcon
                        icon={faLocationDot}
                        className="text-[11px] text-blue-500"
                      />
                      {job.location} • Kec. {job.kecamatan}
                    </p>
                    <p className="mt-1 flex items-center gap-1 text-[11px] font-semibold text-blue-600">
                      <FontAwesomeIcon
                        icon={faMoneyBillWave}
                        className="text-[11px]"
                      />
                      {job.salaryRange}
                    </p>

                    <div className="mt-2 flex flex-wrap gap-1">
                      <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-0.5 text-[10px] text-blue-700 border border-blue-200">
                        <FontAwesomeIcon
                          icon={faBriefcase}
                          className="text-[9px]"
                        />
                        {job.category}
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-0.5 text-[10px] text-blue-700 border border-blue-200">
                        <FontAwesomeIcon
                          icon={faClock}
                          className="text-[9px]"
                        />
                        {job.type}
                      </span>
                      {job.tags.slice(0, 2).map((t) => (
                        <span
                          key={`${job.id}-${t}`}
                          className="inline-flex items-center gap-1 rounded-full bg-white px-2 py-0.5 text-[10px] text-slate-600 border border-blue-100"
                        >
                          <FontAwesomeIcon
                            icon={faTags}
                            className="text-[9px] text-slate-500"
                          />
                          {t}
                        </span>
                      ))}
                    </div>

                    <p className="mt-2 line-clamp-3 text-[11px] text-slate-600">
                      {job.shortDesc}
                    </p>

                    <div className="mt-auto flex items-center justify-between pt-2 text-[10px] text-slate-500">
                      <span className="flex items-center gap-1">
                        <FontAwesomeIcon
                          icon={faClock}
                          className="text-[10px] text-blue-500"
                        />
                        Diposting:{" "}
                        <span className="text-slate-700">{job.postedAt}</span>
                      </span>
                      <span>
                        Deadline:{" "}
                        <span className="text-amber-600">{job.deadline}</span>
                      </span>
                    </div>

                    <div className="mt-2 flex items-center justify-between">
                      <div className="flex items-center gap-1 text-[10px] text-slate-500">
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                        <span>Detail &amp; status lamaran tersedia</span>
                      </div>
                      <span className="inline-flex items-center gap-1 rounded-full bg-blue-600 px-3 py-1 text-[10px] font-semibold text-white transition group-hover:bg-blue-500">
                        Lihat Detail
                        <span className="translate-x-0 text-[11px] transition group-hover:translate-x-0.5">
                          →
                        </span>
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
