// src/pages/LowonganDetail.jsx
import React from "react";
import { Link, useParams } from "react-router-dom";
import { jobVacancies } from "../data/lowonganDummy";

export default function LowonganDetail() {
  const { id } = useParams();
  const job = jobVacancies.find((j) => j.id === id);

  if (!job) {
    return (
      <div className="min-h-screen bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-6 text-slate-900">
          <p className="text-sm font-semibold text-rose-600">
            Lowongan tidak ditemukan.
          </p>
          <Link
            to="/lowongan"
            className="mt-3 inline-flex text-xs text-blue-600 underline-offset-2 hover:underline"
          >
            ← Kembali ke daftar lowongan
          </Link>
        </div>
      </div>
    );
  }

  const isOpen = job.status === "Dibuka";

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-6 text-slate-900">
        {/* BREADCRUMB */}
        <div className="mb-4 text-[11px] text-slate-500">
          <Link
            to="/"
            className="text-blue-600 underline-offset-2 hover:underline"
          >
            Beranda
          </Link>{" "}
          /{" "}
          <Link
            to="/lowongan"
            className="text-blue-600 underline-offset-2 hover:underline"
          >
            Lowongan Kerja
          </Link>{" "}
          / <span className="text-slate-700">{job.title}</span>
        </div>

        {/* HEADER */}
        <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-blue-600">
              Detail Lowongan Kerja
            </p>
            <h1 className="text-lg font-semibold md:text-2xl text-slate-900">
              {job.title}
            </h1>
            <p className="mt-1 text-xs md:text-sm text-slate-700">
              {job.companyName}
            </p>
            <p className="mt-1 text-xs text-slate-600">
              📍 {job.location} • Kec. {job.kecamatan}
            </p>
            <p className="mt-1 text-xs font-semibold text-blue-600">
              {job.salaryRange || "Range gaji belum dicantumkan"}
            </p>

            <div className="mt-2 flex flex-wrap gap-2 text-[10px]">
              <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-800">
                {job.category}
              </span>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-800">
                {job.type}
              </span>
              {job.tags.map((t) => (
                <span
                  key={`${job.id}-tag-${t}`}
                  className="rounded-full bg-slate-100 px-2 py-1 text-slate-700"
                >
                  #{t}
                </span>
              ))}
            </div>
          </div>

          {/* ACTIONS */}
          <div className="flex flex-col items-end gap-2 text-xs">
            <Link
              to="/lowongan"
              className="text-blue-600 underline-offset-2 hover:underline"
            >
              ← Kembali ke daftar lowongan
            </Link>
            <div className="flex flex-wrap justify-end gap-2">
              <span
                className={`rounded-full px-3 py-1 text-[10px] font-semibold ${
                  isOpen
                    ? "border border-blue-200 bg-blue-50 text-blue-700"
                    : "border border-slate-300 bg-slate-100 text-slate-600"
                }`}
              >
                Status: {job.status}
              </span>
              <button
                type="button"
                className="rounded-full bg-blue-600 px-3 py-1 text-[11px] font-semibold text-white hover:bg-blue-500 disabled:cursor-not-allowed disabled:bg-slate-400"
                disabled={!isOpen}
                onClick={() => {
                  console.log("Lamar sekarang:", job.id);
                }}
              >
                {isOpen ? "Lamar Sekarang" : "Lowongan Ditutup"}
              </button>
              <button
                type="button"
                className="rounded-full border border-blue-500 px-3 py-1 text-[11px] font-semibold text-blue-600 hover:bg-blue-50"
                onClick={() => {
                  console.log("Tambahkan ke daftar pantauan:", job.id);
                }}
              >
                Tambahkan ke Daftar Pantauan
              </button>
            </div>

            <div className="mt-1 text-[10px] text-slate-500">
              <p>
                Diposting:{" "}
                <span className="text-slate-700">{job.postedAt}</span>
              </p>
              <p>
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
            <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
              <p className="text-[11px] font-semibold text-slate-900">
                Gambaran Pekerjaan
              </p>
              <p className="mt-2 text-[11px] text-slate-700">{job.shortDesc}</p>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
                <p className="text-[11px] font-semibold text-slate-900">
                  Persyaratan Pelamar
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-4 text-[11px] text-slate-700">
                  {(job.requirements || []).map((r, idx) => (
                    <li key={`${job.id}-req-${idx}`}>{r}</li>
                  ))}
                  {(!job.requirements || job.requirements.length === 0) && (
                    <li>Belum ada detail persyaratan yang ditambahkan.</li>
                  )}
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
                <p className="text-[11px] font-semibold text-slate-900">
                  Fasilitas & Benefit
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-4 text-[11px] text-slate-700">
                  {(job.benefits || []).map((b, idx) => (
                    <li key={`${job.id}-ben-${idx}`}>{b}</li>
                  ))}
                  {(!job.benefits || job.benefits.length === 0) && (
                    <li>Benefit akan diinformasikan saat proses wawancara.</li>
                  )}
                </ul>
              </div>
            </div>
          </div>

          {/* SIDEBAR INFO TAMBAHAN */}
          <div className="space-y-3 text-xs">
            <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
              <p className="text-[11px] font-semibold text-slate-900">
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

            <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
              <p className="text-[11px] font-semibold text-slate-900">
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
