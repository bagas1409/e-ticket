// src/pages/LowonganDetail.jsx
import React from "react";
import { Link, useParams } from "react-router-dom";
import { jobVacancies } from "../data/lowonganDummy";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faBuilding,
  faLocationDot,
  faMoneyBillWave,
  faArrowLeftLong,
  faClock,
  faTags,
  faListCheck,
  faGift,
  faCircleInfo,
  faCircleCheck,
  faEye,
} from "@fortawesome/free-solid-svg-icons";

export default function LowonganDetail() {
  const { id } = useParams();
  const job = jobVacancies.find((j) => j.id === id);

  if (!job) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-sky-50">
        <div className="mx-auto max-w-6xl px-4 py-6 text-slate-900">
          <p className="text-sm font-semibold text-rose-600">
            Lowongan tidak ditemukan.
          </p>
          <Link
            to="/lowongan"
            className="mt-3 inline-flex items-center gap-1 text-xs text-blue-600 underline-offset-2 hover:underline"
          >
            <FontAwesomeIcon icon={faArrowLeftLong} className="text-[10px]" />
            Kembali ke daftar lowongan
          </Link>
        </div>
      </div>
    );
  }

  const isOpen = job.status === "Dibuka";

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-sky-50">
      <div className="mx-auto max-w-6xl px-4 py-6 text-slate-900">
        {/* BREADCRUMB */}
        <div className="mb-4 flex items-center gap-1 text-[11px] text-slate-500">
          <Link
            to="/"
            className="inline-flex items-center gap-1 text-blue-600 underline-offset-2 hover:underline"
          >
            <FontAwesomeIcon icon={faArrowLeftLong} className="text-[9px]" />
            Beranda
          </Link>
          <span>/</span>
          <Link
            to="/lowongan"
            className="text-blue-600 underline-offset-2 hover:underline"
          >
            Lowongan Kerja
          </Link>
          <span>/</span>
          <span className="text-slate-700 line-clamp-1">{job.title}</span>
        </div>

        {/* HEADER */}
        <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="flex items-center gap-1 text-xs uppercase tracking-[0.2em] text-blue-600">
              <FontAwesomeIcon icon={faBriefcase} className="text-[10px]" />
              Detail Lowongan Kerja
            </p>
            <h1 className="mt-1 text-lg font-semibold md:text-2xl text-slate-900">
              {job.title}
            </h1>
            <p className="mt-1 flex items-center gap-1 text-xs md:text-sm text-slate-700">
              <FontAwesomeIcon
                icon={faBuilding}
                className="text-[11px] text-blue-500"
              />
              {job.companyName}
            </p>
            <p className="mt-1 flex items-center gap-1 text-xs text-slate-600">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="text-[11px] text-blue-500"
              />
              {job.location} • Kec. {job.kecamatan}
            </p>
            <p className="mt-1 flex items-center gap-1 text-xs font-semibold text-blue-600">
              <FontAwesomeIcon icon={faMoneyBillWave} className="text-[11px]" />
              {job.salaryRange || "Range gaji belum dicantumkan"}
            </p>

            <div className="mt-2 flex flex-wrap gap-2 text-[10px]">
              <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-3 py-1 text-blue-700 border border-blue-200">
                <FontAwesomeIcon icon={faBriefcase} className="text-[10px]" />
                {job.category}
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-3 py-1 text-blue-700 border border-blue-200">
                <FontAwesomeIcon icon={faClock} className="text-[10px]" />
                {job.type}
              </span>
              {job.tags.map((t) => (
                <span
                  key={`${job.id}-tag-${t}`}
                  className="inline-flex items-center gap-1 rounded-full bg-white px-2 py-1 text-slate-700 border border-blue-100"
                >
                  <FontAwesomeIcon icon={faTags} className="text-[9px]" />
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* ACTIONS */}
          <div className="flex flex-col items-end gap-2 text-xs">
            <Link
              to="/lowongan"
              className="inline-flex items-center gap-1 text-blue-600 underline-offset-2 hover:underline"
            >
              <FontAwesomeIcon icon={faArrowLeftLong} className="text-[10px]" />
              Kembali ke daftar lowongan
            </Link>
            <div className="flex flex-wrap justify-end gap-2">
              <span
                className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-[10px] font-semibold ${
                  isOpen
                    ? "border border-blue-200 bg-blue-50 text-blue-700"
                    : "border border-slate-300 bg-slate-100 text-slate-600"
                }`}
              >
                <FontAwesomeIcon
                  icon={isOpen ? faCircleCheck : faClock}
                  className="text-[10px]"
                />
                Status: {job.status}
              </span>
              <button
                type="button"
                className="inline-flex items-center gap-1 rounded-full bg-blue-600 px-3 py-1 text-[11px] font-semibold text-white hover:bg-blue-500 disabled:cursor-not-allowed disabled:bg-slate-400"
                disabled={!isOpen}
                onClick={() => {
                  console.log("Lamar sekarang:", job.id);
                }}
              >
                <FontAwesomeIcon icon={faBriefcase} className="text-[11px]" />
                {isOpen ? "Lamar Sekarang" : "Lowongan Ditutup"}
              </button>
              <button
                type="button"
                className="inline-flex items-center gap-1 rounded-full border border-blue-500 bg-white px-3 py-1 text-[11px] font-semibold text-blue-600 hover:bg-blue-50"
                onClick={() => {
                  console.log("Tambahkan ke daftar pantauan:", job.id);
                }}
              >
                <FontAwesomeIcon icon={faEye} className="text-[11px]" />
                Tambahkan ke Daftar Pantauan
              </button>
            </div>

            <div className="mt-1 space-y-0.5 rounded-xl bg-white/80 px-3 py-2 text-[10px] text-slate-500 border border-blue-50 shadow-sm">
              <p className="flex items-center gap-1">
                <FontAwesomeIcon
                  icon={faClock}
                  className="text-[10px] text-blue-500"
                />
                Diposting:{" "}
                <span className="text-slate-700">{job.postedAt}</span>
              </p>
              <p className="flex items-center gap-1">
                <FontAwesomeIcon
                  icon={faClock}
                  className="text-[10px] text-amber-500"
                />
                Batas lamaran:{" "}
                <span className="text-amber-600">{job.deadline}</span>
              </p>
            </div>
          </div>
        </div>

        {/* KONTEN */}
        <div className="grid gap-4 md:grid-cols-3">
          {/* DESKRIPSI */}
          <div className="space-y-3 md:col-span-2 text-xs">
            <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-100 to-sky-50 p-3 shadow-sm">
              <p className="flex items-center gap-1 text-[11px] font-semibold text-slate-900">
                <FontAwesomeIcon
                  icon={faCircleInfo}
                  className="text-[11px] text-blue-500"
                />
                Gambaran Pekerjaan
              </p>
              <p className="mt-2 text-[11px] text-slate-700">{job.shortDesc}</p>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-100 to-sky-50 p-3 shadow-sm">
                <p className="flex items-center gap-1 text-[11px] font-semibold text-slate-900">
                  <FontAwesomeIcon
                    icon={faListCheck}
                    className="text-[11px] text-blue-500"
                  />
                  Persyaratan Pelamar
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-4 text-[11px] text-slate-700">
                  {(job.requirements || []).map((r, idx) => (
                    <li key={`${job.id}-req-${idx}`}>{r}</li>
                  ))}
                  {(!job.requirements || job.requirements.length === 0) && (
                    <li className="text-slate-600">
                      Belum ada detail persyaratan yang ditambahkan.
                    </li>
                  )}
                </ul>
              </div>

              <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-100 to-sky-50 p-3 shadow-sm">
                <p className="flex items-center gap-1 text-[11px] font-semibold text-slate-900">
                  <FontAwesomeIcon
                    icon={faGift}
                    className="text-[11px] text-blue-500"
                  />
                  Fasilitas & Benefit
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-4 text-[11px] text-slate-700">
                  {(job.benefits || []).map((b, idx) => (
                    <li key={`${job.id}-ben-${idx}`}>{b}</li>
                  ))}
                  {(!job.benefits || job.benefits.length === 0) && (
                    <li className="text-slate-600">
                      Benefit akan diinformasikan saat proses wawancara.
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>

          {/* SIDEBAR INFO TAMBAHAN */}
          <div className="space-y-3 text-xs">
            <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-100 to-sky-50 p-3 shadow-sm">
              <p className="flex items-center gap-1 text-[11px] font-semibold text-slate-900">
                <FontAwesomeIcon
                  icon={faCircleInfo}
                  className="text-[11px] text-blue-500"
                />
                Ringkasan Posisi
              </p>
              <dl className="mt-2 space-y-1 text-[11px] text-slate-700">
                <div className="flex justify-between gap-2">
                  <dt className="text-slate-500">Kategori</dt>
                  <dd className="text-right">{job.category}</dd>
                </div>
                <div className="flex justify-between gap-2">
                  <dt className="text-slate-500">Jenis Kerja</dt>
                  <dd className="text-right">{job.type}</dd>
                </div>
                <div className="flex justify-between gap-2">
                  <dt className="text-slate-500">Lokasi</dt>
                  <dd className="text-right">
                    {job.location} (Kec. {job.kecamatan})
                  </dd>
                </div>
                <div className="flex justify-between gap-2">
                  <dt className="text-slate-500">Rentang Gaji</dt>
                  <dd className="text-right">
                    {job.salaryRange || "Tidak dicantumkan"}
                  </dd>
                </div>
              </dl>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-white to-sky-50 p-3 shadow-sm">
              <p className="flex items-center gap-1 text-[11px] font-semibold text-slate-900">
                <FontAwesomeIcon
                  icon={faCircleInfo}
                  className="text-[11px] text-blue-500"
                />
                Catatan Sistem (Dummy)
              </p>
              <p className="mt-2 text-[11px] text-slate-700">
                Ke depan, halaman ini bisa terhubung dengan:
              </p>
              <ul className="mt-1 list-disc space-y-1 pl-4 text-[11px] text-slate-700">
                <li>Form lamaran online (upload CV, portofolio).</li>
                <li>
                  Tracking status lamaran: terkirim, diproses, diterima,
                  ditolak.
                </li>
                <li>
                  Notifikasi ke akun pelamar melalui dashboard atau email.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
