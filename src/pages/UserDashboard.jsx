import React from "react";
import { useNavigate } from "react-router-dom";

import {
  recommendedProducts,
  upcomingEvents,
  popularDestinations,
} from "../data/rekomendasiDummy";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGaugeHigh,
  faGift,
  faCartShopping,
  faBriefcase,
  faHeart,
  faStore,
  faLocationDot,
  faMagnifyingGlass,
  faTruckFast,
  faCalendarDays,
  faStar,
  faArrowRight,
  faClockRotateLeft,
  faBolt,
} from "@fortawesome/free-solid-svg-icons";

export default function UserDashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-[calc(100vh-56px)] bg-gradient-to-b from-sky-50 via-white to-sky-50 text-slate-900">
      {/* CONTENT */}
      <main className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-6 md:py-8">
        {/* HEADER DALAM */}
        <section className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
          <div>
            <p className="flex items-center gap-1 text-xs uppercase tracking-[0.2em] text-blue-600">
              <FontAwesomeIcon
                icon={faGaugeHigh}
                className="text-[11px] text-blue-500"
              />
              Dashboard Pengguna
            </p>
            <h1 className="mt-1 text-lg font-semibold md:text-2xl text-slate-900">
              Selamat datang,{" "}
              <span className="text-blue-700 font-bold">User</span> 👋
            </h1>
            <p className="mt-1 text-xs md:text-sm text-slate-600">
              Ringkasan aktivitas belanja, wisata, dan lowongan kerja dalam satu
              tampilan.
            </p>
          </div>
        </section>

        {/* SECTION: OVERVIEW */}
        <section>
          <div className="grid gap-4 md:grid-cols-4">
            <DashboardCard
              label="Poin & Voucher"
              value="120"
              subtitle="3 voucher aktif"
              accent="bg-blue-50 text-blue-700 border border-blue-200"
            />
            <DashboardCard
              label="Pesanan Aktif"
              value="2"
              subtitle="Sedang dikirim"
              accent="bg-sky-50 text-sky-700 border border-sky-200"
            />
            <DashboardCard
              label="Lamaran Kerja"
              value="5"
              subtitle="1 diproses"
              accent="bg-blue-100 text-blue-800 border border-blue-300"
            />
            <DashboardCard
              label="Wishlist"
              value="9"
              subtitle="Produk & destinasi"
              accent="bg-sky-50 text-sky-700 border border-sky-200"
            />
          </div>
        </section>

        {/* SECTION: QUICK ACTIONS */}
        <section className="mt-2">
          <h2 className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-900">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="text-[13px] text-blue-500"
            />
            Aksi Cepat
          </h2>
          <div className="grid gap-3 md:grid-cols-4">
            <QuickActionButton
              title="Cari Produk UMKM"
              desc="Belanja produk lokal"
              onClick={() => navigate("/marketplace")}
            />
            <QuickActionButton
              title="Cari Destinasi Wisata"
              desc="Lihat wisata sekitar"
              onClick={() => navigate("/wisata")}
            />
            <QuickActionButton
              title="Cari Lowongan Kerja"
              desc="Loker daerah & sekitar"
              onClick={() => navigate("/lowongan")}
            />
            <QuickActionButton
              title="Lacak Pesanan"
              desc="Status & kurir (dummy)"
              onClick={() =>
                alert("Nanti diarahkan ke halaman tracking pesanan")
              }
            />
          </div>
        </section>

        {/* SECTION: 2 COLUMN */}
        <section className="grid gap-4 md:grid-cols-3">
          {/* Aktivitas Terbaru */}
          <div className="col-span-2 rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-200 to-sky-50 p-4 shadow-sm">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                <FontAwesomeIcon
                  icon={faClockRotateLeft}
                  className="hidden text-[13px] text-blue-500"
                />
                Aktivitas Terbaru
              </h2>
              <button className="inline-flex items-center gap-1 text-xs text-blue-600 hover:underline">
                Lihat semua
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="text-[10px] text-blue-500"
                />
              </button>
            </div>
            <div className="space-y-3 text-sm">
              <ActivityItem
                title="Pembelian produk 'Gula Aren Premium 1Kg'"
                tag="Marketplace"
                time="10 menit lalu"
              />
              <ActivityItem
                title="Mengajukan lamaran di 'Barista - Kedai Kopi Pringsewu'"
                tag="Lowongan"
                time="2 jam lalu"
              />
              <ActivityItem
                title="Menambahkan 'Kebun Aren Wisata Edukasi' ke wishlist"
                tag="Wisata"
                time="Kemarin"
              />
              <ActivityItem
                title="Menambahkan 'Pantai Pucuk Emas' ke wishlist"
                tag="Wisata"
                time="Kemarin"
              />
            </div>
          </div>

          {/* Status Lamaran */}
          <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-200 to-sky-50 p-4 shadow-sm">
            <h2 className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-900">
              <FontAwesomeIcon
                icon={faBriefcase}
                className="text-[13px] text-blue-500"
              />
              Status Lamaran Kerja
            </h2>
            <div className="space-y-3 text-xs">
              <JobStatus
                posisi="Staff Administrasi UMKM"
                tempat="CV Sejahtera Mandiri"
                status="Diproses"
                statusColor="bg-blue-50 text-blue-700 border-blue-200"
              />
              <JobStatus
                posisi="Kasir Minimarket"
                tempat="Mart Pringsewu"
                status="Terkirim"
                statusColor="bg-slate-50 text-slate-700 border-slate-200"
              />
              <JobStatus
                posisi="Content Creator UMKM"
                tempat="Rumah Kreatif"
                status="Ditolak"
                statusColor="bg-slate-100 text-slate-900 border-slate-300"
              />
            </div>
          </div>
        </section>

        {/* SECTION: REKOMENDASI */}
        <section className="mt-6">
          <div className="mb-3 flex items-center justify-between">
            <div>
              <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-600">
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-[13px] text-amber-500"
                />
                Rekomendasi Untukmu
              </p>
              <p className="text-xs text-slate-600">
                Rekomendasi berdasarkan UMKM, event, dan destinasi populer di
                Pringsewu.
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {/* 1️⃣ Produk UMKM Terbaik */}
            <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-200 to-sky-50 p-4 shadow-sm">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="flex items-center gap-2 text-xs font-semibold text-slate-900">
                  <FontAwesomeIcon
                    icon={faStore}
                    className="text-[13px] text-blue-500"
                  />
                  Produk UMKM Terbaik
                </h3>
                <button
                  type="button"
                  onClick={() => navigate("/marketplace")}
                  className="inline-flex items-center gap-1 text-[11px] text-blue-600 underline-offset-2 hover:underline"
                >
                  Lihat semua
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="text-[10px] text-blue-500"
                  />
                </button>
              </div>

              <div className="space-y-2 text-xs">
                {recommendedProducts.map((p) => (
                  <div
                    key={p.id}
                    className="flex items-center justify-between rounded-xl border border-blue-100 bg-blue-50/70 px-3 py-2"
                  >
                    <div className="flex flex-1 items-start gap-2">
                      <div className="mt-1 hidden h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-[11px] text-blue-700 sm:flex">
                        <FontAwesomeIcon icon={faGift} />
                      </div>
                      <div>
                        <p className="text-[12px] font-semibold text-slate-900">
                          {p.name}
                        </p>
                        <p className="text-[11px] text-slate-600">{p.umkm}</p>
                        <p className="mt-1 text-[11px] text-blue-700">
                          {p.price}
                        </p>
                      </div>
                    </div>
                    <div className="ml-3 text-right text-[11px] text-slate-600">
                      <p className="inline-flex items-center gap-1">
                        <FontAwesomeIcon
                          icon={faStar}
                          className="text-[10px] text-amber-500"
                        />
                        {p.rating}
                      </p>
                      <p className="mt-1 rounded-full bg-white px-2 py-0.5 text-[10px] border border-blue-100 text-blue-700">
                        Rekomendasi
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 2️⃣ Event yang Akan Diselenggarakan */}
            <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-200 to-sky-50 p-4 shadow-sm">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="flex items-center gap-2 text-xs font-semibold text-slate-900">
                  <FontAwesomeIcon
                    icon={faCalendarDays}
                    className="text-[13px] text-blue-500"
                  />
                  Event yang Akan Diselenggarakan
                </h3>
                <button
                  type="button"
                  className="text-[11px] text-slate-600 hover:text-blue-600"
                >
                  Jadwal lengkap
                </button>
              </div>

              <div className="space-y-2 text-xs">
                {upcomingEvents.map((e) => (
                  <div
                    key={e.id}
                    className="rounded-xl border border-blue-100 bg-blue-50/70 px-3 py-2"
                  >
                    <p className="flex items-center gap-2 text-[12px] font-semibold text-slate-900">
                      <FontAwesomeIcon
                        icon={faBolt}
                        className="text-[11px] text-blue-500"
                      />
                      {e.title}
                    </p>
                    <p className="mt-1 flex items-center gap-1 text-[11px] text-slate-700">
                      <FontAwesomeIcon
                        icon={faCalendarDays}
                        className="text-[10px] text-blue-500"
                      />
                      {e.date} • {e.location}
                    </p>
                    <p className="mt-1 text-[11px] text-slate-600">{e.note}</p>
                    <p className="mt-2 inline-flex items-center gap-1 rounded-full bg-white px-2 py-0.5 text-[10px] text-blue-700 border border-blue-200">
                      <FontAwesomeIcon
                        icon={faStore}
                        className="text-[10px] text-blue-500"
                      />
                      Cocok untuk promosi UMKM
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 3️⃣ Destinasi Wisata Populer */}
            <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-200 to-sky-50 p-4 shadow-sm">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="flex items-center gap-2 text-xs font-semibold text-slate-900">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="text-[13px] text-blue-500"
                  />
                  Destinasi Wisata Populer
                </h3>
                <button
                  type="button"
                  onClick={() => navigate("/wisata")}
                  className="inline-flex items-center gap-1 text-[11px] text-blue-600 underline-offset-2 hover:underline"
                >
                  Lihat semua
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="text-[10px] text-blue-500"
                  />
                </button>
              </div>

              <div className="space-y-2 text-xs">
                {popularDestinations.map((d) => (
                  <div
                    key={d.id}
                    className="flex items-center justify-between rounded-xl border border-blue-100 bg-blue-50/70 px-3 py-2"
                  >
                    <div className="flex flex-1 items-start gap-2">
                      <div className="mt-1 hidden h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-[11px] text-blue-700 sm:flex">
                        <FontAwesomeIcon icon={faLocationDot} />
                      </div>
                      <div>
                        <p className="text-[12px] font-semibold text-slate-900">
                          {d.name}
                        </p>
                        <p className="text-[11px] text-slate-600">
                          {d.area} • {d.tag}
                        </p>
                      </div>
                    </div>
                    <div className="ml-3 text-right text-[11px] text-slate-600">
                      <p className="inline-flex items-center gap-1">
                        <FontAwesomeIcon
                          icon={faStar}
                          className="text-[10px] text-amber-500"
                        />
                        {d.rating}
                      </p>
                      <p className="mt-1 rounded-full bg-white px-2 py-0.5 text-[10px] border border-blue-200 text-blue-700">
                        Ramai dikunjungi
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

// === SMALL COMPONENTS ===

function DashboardCard({ label, value, subtitle, accent }) {
  // Mapping icon berdasarkan label (tanpa ubah props)
  let icon = faGift;
  if (label.includes("Pesanan")) icon = faCartShopping;
  else if (label.includes("Lamaran")) icon = faBriefcase;
  else if (label.includes("Wishlist")) icon = faHeart;

  return (
    <div className="relative overflow-hidden rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-300 to-sky-50 p-4 shadow-sm">
      <div
        className={`mb-2 inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] ${accent}`}
      >
        <FontAwesomeIcon icon={icon} className="text-[10px]" />
        <span>{label}</span>
      </div>
      <p className="text-2xl font-semibold text-slate-900">{value}</p>
      <p className="mt-1 text-xs text-slate-600">{subtitle}</p>
      <div className="pointer-events-none absolute -right-6 -top-6 h-16 w-16 rounded-full bg-gradient-to-tr from-blue-400/15 via-sky-400/20 to-transparent" />
    </div>
  );
}

function QuickActionButton({ title, desc, onClick }) {
  // Icon kecil sesuai judul
  let icon = faStore;
  if (title.includes("Destinasi")) icon = faLocationDot;
  else if (title.includes("Lowongan")) icon = faBriefcase;
  else if (title.includes("Lacak")) icon = faTruckFast;

  return (
    <button
      onClick={onClick}
      className="group flex flex-col items-start justify-between rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-300 to-blue-50 px-4 py-3 text-left text-xs transition hover:-translate-y-0.5 hover:border-blue-400 hover:bg-blue-100 hover:shadow-md"
    >
      <span className="mb-1 flex items-center gap-2 text-sm font-semibold text-slate-900 group-hover:text-blue-700">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/70 text-[11px] text-blue-700 shadow-sm">
          <FontAwesomeIcon icon={icon} />
        </span>
        {title}
      </span>
      <span className="text-[11px] text-slate-600">{desc}</span>
    </button>
  );
}

function ActivityItem({ title, tag, time }) {
  // Icon per kategori aktivitas
  let icon = faCartShopping;
  if (tag === "Lowongan") icon = faBriefcase;
  if (tag === "Wisata") icon = faLocationDot;

  return (
    <div className="flex items-start justify-between gap-3 rounded-xl border border-blue-100 bg-blue-50/70 px-3 py-2.5">
      <div className="flex items-start gap-2">
        <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-white text-[11px] text-blue-700 border border-blue-100 shadow-sm">
          <FontAwesomeIcon icon={icon} />
        </div>
        <div>
          <p className="text-xs font-medium text-slate-900">{title}</p>
          <p className="mt-1 text-[11px] text-slate-600">
            {tag} • {time}
          </p>
        </div>
      </div>
      <span className="mt-0.5 rounded-full bg-white px-2 py-0.5 text-[10px] text-blue-700 border border-blue-200">
        Detail
      </span>
    </div>
  );
}

function JobStatus({ posisi, tempat, status, statusColor }) {
  return (
    <div className="rounded-xl border border-blue-100 bg-blue-50/70 p-3">
      <p className="flex items-center gap-2 text-[13px] font-semibold text-slate-900">
        <FontAwesomeIcon
          icon={faBriefcase}
          className="text-[11px] text-blue-500"
        />
        {posisi}
      </p>
      <p className="text-[11px] text-slate-600">{tempat}</p>
      <span
        className={`mt-2 inline-flex rounded-full border px-2 py-0.5 text-[10px] font-medium ${statusColor}`}
      >
        {status}
      </span>
    </div>
  );
}

// Masih opsional, tapi sudah ikut tema putih–biru–hitam
function RecommendCard({ title, type, info }) {
  return (
    <div className="flex flex-col justify-between rounded-2xl border border-blue-100 bg-gradient-to-br from-white to-sky-50 p-4 shadow-sm">
      <div className="mb-3">
        <span className="mb-1 inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-0.5 text-[10px] text-blue-700 border border-blue-200">
          <FontAwesomeIcon
            icon={faStar}
            className="text-[10px] text-amber-500"
          />
          {type}
        </span>
        <h3 className="mt-1 text-sm font-semibold text-slate-900">{title}</h3>
        <p className="mt-1 text-xs text-slate-600">{info}</p>
      </div>
      <button className="mt-auto inline-flex items-center gap-1 rounded-full bg-blue-600 px-3 py-1 text-[11px] font-medium text-white hover:bg-blue-500">
        Lihat detail
        <FontAwesomeIcon icon={faArrowRight} className="text-[10px]" />
      </button>
    </div>
  );
}
