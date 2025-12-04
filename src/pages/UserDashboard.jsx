import React from "react";
import { useNavigate } from "react-router-dom";

const recommendedProducts = [
  {
    id: "prod-1",
    name: "Gula Aren Bubuk 500gr",
    umkm: "UMKM Aren Lestari",
    price: "Rp28.000",
    rating: 4.8,
  },
  {
    id: "prod-2",
    name: "Kopi Robusta Medium Roast 250gr",
    umkm: "Kopi Bukit Randu",
    price: "Rp38.000",
    rating: 4.7,
  },
  {
    id: "prod-3",
    name: "Keripik Pisang Rasa Coklat",
    umkm: "Banana Crispy Pringsewu",
    price: "Rp20.000",
    rating: 4.9,
  },
];

const upcomingEvents = [
  {
    id: "event-1",
    title: "Festival UMKM & Kuliner Pringsewu",
    date: "12 Januari 2026",
    location: "Alun-Alun Pringsewu",
    note: "Banyak tenant UMKM aren, kopi, dan snack lokal.",
  },
  {
    id: "event-2",
    title: "Bazar Produk Aren & Kopi Lokal",
    date: "25 Januari 2026",
    location: "Gading Rejo",
    note: "Fokus pada promosi produk aren dan kopi.",
  },
  {
    id: "event-3",
    title: "Pameran Kerajinan & Ekraf Pringsewu",
    date: "5 Februari 2026",
    location: "Gedung Serbaguna",
    note: "Kesempatan kolaborasi antar UMKM.",
  },
];

const popularDestinations = [
  {
    id: "dest-1",
    name: "Kebun Aren Wisata Edukasi",
    area: "Pagelaran",
    tag: "Alam & Edukasi",
    rating: 4.7,
  },
  {
    id: "dest-2",
    name: "Taman Kota Pringsewu",
    area: "Pringsewu Kota",
    tag: "Rekreasi Keluarga",
    rating: 4.5,
  },
  {
    id: "dest-3",
    name: "Kuliner Malam Jalan Protokol",
    area: "Pringsewu",
    tag: "Kuliner",
    rating: 4.6,
  },
];

export default function UserDashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-[calc(100vh-56px)] bg-slate-950 text-slate-50">
      {/* CONTENT */}
      <main className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-6 md:py-8">
        {/* HEADER DALAM */}
        <section className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-emerald-400/60">
              Dashboard Pengguna
            </p>
            <h1 className="text-lg font-semibold md:text-xl">
              Selamat datang, <span className="text-emerald-400">User</span> 👋
            </h1>
            <p className="mt-1 text-xs text-slate-400">
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
              accent="bg-emerald-500/20 text-emerald-300"
            />
            <DashboardCard
              label="Pesanan Aktif"
              value="2"
              subtitle="Sedang dikirim"
              accent="bg-sky-500/20 text-sky-300"
            />
            <DashboardCard
              label="Lamaran Kerja"
              value="5"
              subtitle="1 diproses"
              accent="bg-amber-500/20 text-amber-300"
            />
            <DashboardCard
              label="Wishlist"
              value="9"
              subtitle="Produk & destinasi"
              accent="bg-pink-500/20 text-pink-300"
            />
          </div>
        </section>

        {/* SECTION: QUICK ACTIONS */}
        <section className="mt-2">
          <h2 className="mb-3 text-sm font-semibold text-slate-100">
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
          <div className="col-span-2 rounded-2xl border border-slate-800 bg-slate-900/40 p-4">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-sm font-semibold text-slate-100">
                Aktivitas Terbaru
              </h2>
              <button className="text-xs text-emerald-300 hover:text-emerald-200">
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
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4">
            <h2 className="mb-3 text-sm font-semibold text-slate-100">
              Status Lamaran Kerja
            </h2>
            <div className="space-y-3 text-xs">
              <JobStatus
                posisi="Staff Administrasi UMKM"
                tempat="CV Sejahtera Mandiri"
                status="Diproses"
                statusColor="bg-amber-500/20 text-amber-300 border-amber-500/40"
              />
              <JobStatus
                posisi="Kasir Minimarket"
                tempat="Mart Pringsewu"
                status="Terkirim"
                statusColor="bg-slate-700/60 text-slate-200 border-slate-500/50"
              />
              <JobStatus
                posisi="Content Creator UMKM"
                tempat="Rumah Kreatif"
                status="Ditolak"
                statusColor="bg-rose-500/15 text-rose-300 border-rose-500/40"
              />
            </div>
          </div>
        </section>

        {/* SECTION: REKOMENDASI */}
        {/* REKOMENDASI UNTUKMU */}
        <section className="mt-6">
          <div className="mb-3 flex items-center justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-400/70">
                Rekomendasi Untukmu
              </p>
              <p className="text-xs text-slate-400">
                Rekomendasi berdasarkan UMKM, event, dan destinasi populer di
                Pringsewu.
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {/* 1️⃣ Produk UMKM Terbaik */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-xs font-semibold text-slate-100">
                  Produk UMKM Terbaik
                </h3>
                <a
                  href="/marketplace"
                  className="text-[11px] text-emerald-300 underline-offset-2 hover:underline"
                >
                  Lihat semua
                </a>
              </div>

              <div className="space-y-2 text-xs">
                {recommendedProducts.map((p) => (
                  <div
                    key={p.id}
                    className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900 px-3 py-2"
                  >
                    <div className="flex-1">
                      <p className="text-[12px] font-semibold text-slate-50">
                        {p.name}
                      </p>
                      <p className="text-[11px] text-slate-400">{p.umkm}</p>
                      <p className="mt-1 text-[11px] text-emerald-300">
                        {p.price}
                      </p>
                    </div>
                    <div className="ml-3 text-right text-[11px] text-slate-300">
                      <p>⭐ {p.rating}</p>
                      <p className="mt-1 rounded-full bg-slate-800 px-2 py-0.5 text-[10px]">
                        Rekomendasi
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 2️⃣ Event yang Akan Diselenggarakan */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-xs font-semibold text-slate-100">
                  Event yang Akan Diselenggarakan
                </h3>
                <button
                  type="button"
                  className="text-[11px] text-slate-400 hover:text-emerald-300"
                >
                  Jadwal lengkap
                </button>
              </div>

              <div className="space-y-2 text-xs">
                {upcomingEvents.map((e) => (
                  <div
                    key={e.id}
                    className="rounded-xl border border-slate-800 bg-slate-900 px-3 py-2"
                  >
                    <p className="text-[12px] font-semibold text-slate-50">
                      {e.title}
                    </p>
                    <p className="mt-1 text-[11px] text-slate-300">
                      {e.date} • {e.location}
                    </p>
                    <p className="mt-1 text-[11px] text-slate-400">{e.note}</p>
                    <p className="mt-2 inline-flex rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] text-emerald-300">
                      Cocok untuk promosi UMKM
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 3️⃣ Destinasi Wisata Populer */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-xs font-semibold text-slate-100">
                  Destinasi Wisata Populer
                </h3>
                <a
                  href="/wisata"
                  className="text-[11px] text-emerald-300 underline-offset-2 hover:underline"
                >
                  Lihat semua
                </a>
              </div>

              <div className="space-y-2 text-xs">
                {popularDestinations.map((d) => (
                  <div
                    key={d.id}
                    className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900 px-3 py-2"
                  >
                    <div className="flex-1">
                      <p className="text-[12px] font-semibold text-slate-50">
                        {d.name}
                      </p>
                      <p className="text-[11px] text-slate-400">
                        {d.area} • {d.tag}
                      </p>
                    </div>
                    <div className="ml-3 text-right text-[11px] text-slate-300">
                      <p>⭐ {d.rating}</p>
                      <p className="mt-1 rounded-full bg-slate-800 px-2 py-0.5 text-[10px]">
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
    <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 p-4 shadow-sm">
      <div
        className={`mb-2 inline-flex rounded-full px-2 py-0.5 text-[10px] ${accent}`}
      >
        {label}
      </div>
      <p className="text-2xl font-semibold text-slate-50">{value}</p>
      <p className="mt-1 text-xs text-slate-400">{subtitle}</p>
      <div className="pointer-events-none absolute -right-6 -top-6 h-16 w-16 rounded-full bg-gradient-to-tr from-emerald-500/10 via-sky-500/5 to-transparent" />
    </div>
  );
}

function QuickActionButton({ title, desc, onClick }) {
  return (
    <button
      onClick={onClick}
      className="group flex flex-col items-start justify-between rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-3 text-left text-xs transition hover:-translate-y-0.5 hover:border-emerald-500/60 hover:bg-slate-900 hover:shadow-[0_0_25px_rgba(16,185,129,0.25)]"
    >
      <span className="mb-1 text-sm font-semibold text-slate-50 group-hover:text-emerald-300">
        {title}
      </span>
      <span className="text-[11px] text-slate-400">{desc}</span>
    </button>
  );
}

function ActivityItem({ title, tag, time }) {
  return (
    <div className="flex items-start justify-between gap-3 rounded-xl border border-slate-800/60 bg-slate-900/60 px-3 py-2.5">
      <div>
        <p className="text-xs font-medium text-slate-100">{title}</p>
        <p className="mt-1 text-[11px] text-slate-500">
          {tag} • {time}
        </p>
      </div>
      <span className="mt-0.5 rounded-full bg-slate-800 px-2 py-0.5 text-[10px] text-slate-300">
        Detail
      </span>
    </div>
  );
}

function JobStatus({ posisi, tempat, status, statusColor }) {
  return (
    <div className="rounded-xl border border-slate-800/60 bg-slate-900/60 p-3">
      <p className="text-[13px] font-semibold text-slate-50">{posisi}</p>
      <p className="text-[11px] text-slate-400">{tempat}</p>
      <span
        className={`mt-2 inline-flex rounded-full border px-2 py-0.5 text-[10px] font-medium ${statusColor}`}
      >
        {status}
      </span>
    </div>
  );
}

function RecommendCard({ title, type, info }) {
  return (
    <div className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900/80 via-slate-900/40 to-slate-900/90 p-4">
      <div className="mb-3">
        <span className="mb-1 inline-flex rounded-full bg-slate-800/80 px-2 py-0.5 text-[10px] text-slate-300">
          {type}
        </span>
        <h3 className="mt-1 text-sm font-semibold text-slate-50">{title}</h3>
        <p className="mt-1 text-xs text-slate-400">{info}</p>
      </div>
      <button className="mt-auto w-fit rounded-full bg-emerald-500 px-3 py-1 text-[11px] font-medium text-slate-950 hover:bg-emerald-400">
        Lihat detail
      </button>
    </div>
  );
}
