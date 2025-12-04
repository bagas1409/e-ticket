import React from "react";
import { useNavigate } from "react-router-dom";

import {
  recommendedProducts,
  upcomingEvents,
  popularDestinations,
} from "../data/rekomendasiDummy";

export default function UserDashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-[calc(100vh-56px)] bg-slate-50 text-slate-900">
      {/* CONTENT */}
      <main className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-6 md:py-8">
        {/* HEADER DALAM */}
        <section className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-blue-600">
              Dashboard Pengguna
            </p>
            <h1 className="text-lg font-semibold md:text-2xl">
              Selamat datang, <span className="text-blue-600">User</span> 👋
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
              accent="bg-emerald-100 text-emerald-700 border border-emerald-200"
            />
            <DashboardCard
              label="Pesanan Aktif"
              value="2"
              subtitle="Sedang dikirim"
              accent="bg-sky-100 text-sky-700 border border-sky-200"
            />
            <DashboardCard
              label="Lamaran Kerja"
              value="5"
              subtitle="1 diproses"
              accent="bg-amber-100 text-amber-700 border border-amber-200"
            />
            <DashboardCard
              label="Wishlist"
              value="9"
              subtitle="Produk & destinasi"
              accent="bg-pink-100 text-pink-700 border border-pink-200"
            />
          </div>
        </section>

        {/* SECTION: QUICK ACTIONS */}
        <section className="mt-2">
          <h2 className="mb-3 text-sm font-semibold text-slate-900">
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
          <div className="col-span-2 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-sm font-semibold text-slate-900">
                Aktivitas Terbaru
              </h2>
              <button className="text-xs text-blue-600 hover:underline">
                Lihat semua
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
            </div>
          </div>

          {/* Status Lamaran */}
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <h2 className="mb-3 text-sm font-semibold text-slate-900">
              Status Lamaran Kerja
            </h2>
            <div className="space-y-3 text-xs">
              <JobStatus
                posisi="Staff Administrasi UMKM"
                tempat="CV Sejahtera Mandiri"
                status="Diproses"
                statusColor="bg-amber-50 text-amber-700 border-amber-200"
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
                statusColor="bg-rose-50 text-rose-700 border-rose-200"
              />
            </div>
          </div>
        </section>

        {/* SECTION: REKOMENDASI */}
        <section className="mt-6">
          <div className="mb-3 flex items-center justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-600">
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
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-xs font-semibold text-slate-900">
                  Produk UMKM Terbaik
                </h3>
                <button
                  type="button"
                  onClick={() => navigate("/marketplace")}
                  className="text-[11px] text-blue-600 underline-offset-2 hover:underline"
                >
                  Lihat semua
                </button>
              </div>

              <div className="space-y-2 text-xs">
                {recommendedProducts.map((p) => (
                  <div
                    key={p.id}
                    className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-3 py-2"
                  >
                    <div className="flex-1">
                      <p className="text-[12px] font-semibold text-slate-900">
                        {p.name}
                      </p>
                      <p className="text-[11px] text-slate-600">{p.umkm}</p>
                      <p className="mt-1 text-[11px] text-blue-600">
                        {p.price}
                      </p>
                    </div>
                    <div className="ml-3 text-right text-[11px] text-slate-600">
                      <p>⭐ {p.rating}</p>
                      <p className="mt-1 rounded-full bg-slate-100 px-2 py-0.5 text-[10px]">
                        Rekomendasi
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 2️⃣ Event yang Akan Diselenggarakan */}
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-xs font-semibold text-slate-900">
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
                    className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2"
                  >
                    <p className="text-[12px] font-semibold text-slate-900">
                      {e.title}
                    </p>
                    <p className="mt-1 text-[11px] text-slate-700">
                      {e.date} • {e.location}
                    </p>
                    <p className="mt-1 text-[11px] text-slate-600">{e.note}</p>
                    <p className="mt-2 inline-flex rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] text-emerald-700 border border-emerald-200">
                      Cocok untuk promosi UMKM
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 3️⃣ Destinasi Wisata Populer */}
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-xs font-semibold text-slate-900">
                  Destinasi Wisata Populer
                </h3>
                <button
                  type="button"
                  onClick={() => navigate("/wisata")}
                  className="text-[11px] text-blue-600 underline-offset-2 hover:underline"
                >
                  Lihat semua
                </button>
              </div>

              <div className="space-y-2 text-xs">
                {popularDestinations.map((d) => (
                  <div
                    key={d.id}
                    className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-3 py-2"
                  >
                    <div className="flex-1">
                      <p className="text-[12px] font-semibold text-slate-900">
                        {d.name}
                      </p>
                      <p className="text-[11px] text-slate-600">
                        {d.area} • {d.tag}
                      </p>
                    </div>
                    <div className="ml-3 text-right text-[11px] text-slate-600">
                      <p>⭐ {d.rating}</p>
                      <p className="mt-1 rounded-full bg-slate-100 px-2 py-0.5 text-[10px]">
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
  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div
        className={`mb-2 inline-flex rounded-full px-2 py-0.5 text-[10px] ${accent}`}
      >
        {label}
      </div>
      <p className="text-2xl font-semibold text-slate-900">{value}</p>
      <p className="mt-1 text-xs text-slate-600">{subtitle}</p>
      <div className="pointer-events-none absolute -right-6 -top-6 h-16 w-16 rounded-full bg-gradient-to-tr from-blue-500/10 via-sky-400/10 to-transparent" />
    </div>
  );
}

function QuickActionButton({ title, desc, onClick }) {
  return (
    <button
      onClick={onClick}
      className="group flex flex-col items-start justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3 text-left text-xs transition hover:-translate-y-0.5 hover:border-blue-400 hover:bg-blue-50 hover:shadow-md"
    >
      <span className="mb-1 text-sm font-semibold text-slate-900 group-hover:text-blue-600">
        {title}
      </span>
      <span className="text-[11px] text-slate-600">{desc}</span>
    </button>
  );
}

function ActivityItem({ title, tag, time }) {
  return (
    <div className="flex items-start justify-between gap-3 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5">
      <div>
        <p className="text-xs font-medium text-slate-900">{title}</p>
        <p className="mt-1 text-[11px] text-slate-600">
          {tag} • {time}
        </p>
      </div>
      <span className="mt-0.5 rounded-full bg-slate-100 px-2 py-0.5 text-[10px] text-slate-700">
        Detail
      </span>
    </div>
  );
}

function JobStatus({ posisi, tempat, status, statusColor }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
      <p className="text-[13px] font-semibold text-slate-900">{posisi}</p>
      <p className="text-[11px] text-slate-600">{tempat}</p>
      <span
        className={`mt-2 inline-flex rounded-full border px-2 py-0.5 text-[10px] font-medium ${statusColor}`}
      >
        {status}
      </span>
    </div>
  );
}

// (Masih belum dipakai, tapi kalau nanti mau dipakai, sudah match tema putih–biru)
function RecommendCard({ title, type, info }) {
  return (
    <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="mb-3">
        <span className="mb-1 inline-flex rounded-full bg-slate-100 px-2 py-0.5 text-[10px] text-slate-700">
          {type}
        </span>
        <h3 className="mt-1 text-sm font-semibold text-slate-900">{title}</h3>
        <p className="mt-1 text-xs text-slate-600">{info}</p>
      </div>
      <button className="mt-auto w-fit rounded-full bg-blue-600 px-3 py-1 text-[11px] font-medium text-white hover:bg-blue-500">
        Lihat detail
      </button>
    </div>
  );
}
