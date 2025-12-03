import { useState } from "react";

const dummyTicketToday = {
  hasTicket: true,
  instansi: "Disdukcapil Kabupaten Pringsewu",
  layanan: "Perekaman KTP-el",
  nomor: "A027",
  tanggal: "Rabu, 3 Desember 2025",
  estimasiWaktu: "10.25 - 10.35 WIB",
  status: "Menunggu Dipanggil",
  loket: "Loket 2",
};

const instansiList = [
  {
    nama: "Disdukcapil",
    keterangan: "KTP, KK, Akta Kelahiran, dan dokumen kependudukan.",
    badge: "Kependudukan",
  },
  {
    nama: "Dinas Perizinan",
    keterangan: "Perizinan usaha, bangunan, dan layanan perizinan lain.",
    badge: "Perizinan",
  },
  {
    nama: "BKD",
    keterangan: "Layanan kepegawaian daerah, data ASN, dan mutasi.",
    badge: "Kepegawaian",
  },
  {
    nama: "Bappeda",
    keterangan: "Konsultasi perencanaan dan pengembangan daerah.",
    badge: "Perencanaan",
  },
  {
    nama: "RSUD",
    keterangan: "Pendaftaran poli, rawat jalan, dan layanan umum.",
    badge: "Kesehatan",
  },
];

const steps = [
  {
    title: "Pilih Instansi & Layanan",
    desc: "Tentukan instansi (Disdukcapil, RSUD, dll.) dan jenis layanan yang ingin diurus.",
    no: "1",
  },
  {
    title: "Ambil Nomor Antrean",
    desc: "Pilih tanggal & jam yang tersedia, lalu dapatkan nomor antrean dan QR Code.",
    no: "2",
  },
  {
    title: "Datang Tepat Waktu",
    desc: "Tunjukkan QR Code di loket saat mendekati waktu pelayanan.",
    no: "3",
  },
];

export default function UserDashboard() {
  const [ticket] = useState(dummyTicketToday);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* NAVBAR */}
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-sm font-bold text-white shadow">
              E-T
            </div>
            <div>
              <p className="text-sm font-semibold leading-tight">
                E-Ticketing Pelayanan Publik
              </p>
              <p className="text-xs text-slate-500">
                Pemerintah Daerah • Antrean Online
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="hidden rounded-full border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 md:inline-block">
              Masuk / Daftar
            </button>
            <button className="rounded-full bg-blue-600 px-4 py-2 text-xs font-semibold text-white shadow hover:bg-blue-700">
              Ambil Nomor Antrean
            </button>
          </div>
        </div>
      </header>

      {/* HERO + TIKET SAYA */}
      <main className="mx-auto max-w-6xl px-4 pb-16 pt-6 md:px-6 md:pt-10">
        <div className="grid gap-6 md:grid-cols-[1.4fr,1fr]">
          {/* HERO SECTION */}
          <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 via-blue-500 to-sky-400 p-6 text-white shadow-lg md:p-8">
            <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute -bottom-16 -right-10 h-40 w-40 rounded-full bg-sky-300/30 blur-2xl" />

            <div className="relative flex h-full flex-col justify-between gap-6 md:gap-8">
              <div className="space-y-3 md:space-y-4">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur md:text-sm">
                  ✅ Tanpa antre lama di kantor
                  <span className="h-1 w-1 rounded-full bg-white/60" />
                  📲 Tiket & QR Code langsung di HP
                </span>

                <h1 className="text-2xl font-bold leading-snug md:text-3xl lg:text-4xl">
                  Ambil Nomor Antrean{" "}
                  <span className="font-extrabold">dari rumah</span>, datang
                  hanya ketika sudah mendekati giliran.
                </h1>

                <p className="max-w-xl text-sm text-sky-50/90 md:text-base">
                  E-Ticketing membantu masyarakat mengatur kunjungan ke
                  Disdukcapil, Dinas Perizinan, BKD, Bappeda, dan RSUD secara
                  online. Tidak perlu berebut kursi tunggu, cukup scan QR Code
                  saat tiba di kantor.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <button className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-blue-700 shadow-md hover:bg-slate-50">
                  Ambil Nomor Antrean Sekarang
                </button>
                <button className="text-sm font-medium text-white/90 underline-offset-4 hover:underline">
                  Lihat cara kerja sistem
                </button>
              </div>

              <div className="mt-4 grid gap-4 text-xs md:grid-cols-3 md:text-sm">
                <div className="rounded-xl bg-white/10 p-3 backdrop-blur">
                  <p className="text-[11px] font-medium uppercase tracking-wide text-sky-100">
                    Instansi Terhubung
                  </p>
                  <p className="text-lg font-semibold">
                    5 <span className="text-xs font-normal">kantor</span>
                  </p>
                  <p className="text-[11px] text-sky-100/80">
                    Disdukcapil, Perizinan, BKD, Bappeda, RSUD
                  </p>
                </div>
                <div className="rounded-xl bg-white/10 p-3 backdrop-blur">
                  <p className="text-[11px] font-medium uppercase tracking-wide text-sky-100">
                    Waktu tunggu lebih singkat
                  </p>
                  <p className="text-lg font-semibold">-40%</p>
                  <p className="text-[11px] text-sky-100/80">
                    Datang sesuai estimasi jadwal pelayanan.
                  </p>
                </div>
                <div className="rounded-xl bg-white/10 p-3 backdrop-blur">
                  <p className="text-[11px] font-medium uppercase tracking-wide text-sky-100">
                    Tiket per hari
                  </p>
                  <p className="text-lg font-semibold">&gt; 200</p>
                  <p className="text-[11px] text-sky-100/80">
                    Potensi pengguna per hari di seluruh instansi.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* TIKET SAYA HARI INI */}
          <aside className="space-y-4">
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <div className="mb-3 flex items-center justify-between gap-2">
                <h2 className="text-sm font-semibold text-slate-800">
                  Tiket Saya Hari Ini
                </h2>
                <span className="rounded-full bg-emerald-50 px-2 py-1 text-[11px] font-medium text-emerald-700">
                  Demo Data
                </span>
              </div>

              {ticket && ticket.hasTicket ? (
                <div className="space-y-3">
                  <div className="rounded-xl border border-slate-100 bg-slate-50 p-3">
                    <p className="text-[11px] font-medium uppercase tracking-wide text-slate-500">
                      Nomor Antrean
                    </p>
                    <p className="mt-1 text-3xl font-extrabold text-slate-900">
                      {ticket.nomor}
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      {ticket.instansi}
                    </p>
                    <p className="text-xs font-medium text-slate-700">
                      {ticket.layanan}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="rounded-xl border border-slate-100 p-3">
                      <p className="text-[11px] font-medium text-slate-500">
                        Tanggal & Waktu
                      </p>
                      <p className="mt-1 font-semibold text-slate-800">
                        {ticket.tanggal}
                      </p>
                      <p className="text-[11px] text-slate-500">
                        Estimasi: {ticket.estimasiWaktu}
                      </p>
                    </div>
                    <div className="rounded-xl border border-slate-100 p-3">
                      <p className="text-[11px] font-medium text-slate-500">
                        Loket & Status
                      </p>
                      <p className="mt-1 font-semibold text-slate-800">
                        {ticket.loket}
                      </p>
                      <p className="mt-1 inline-flex rounded-full bg-amber-50 px-2 py-1 text-[11px] font-semibold text-amber-700">
                        {ticket.status}
                      </p>
                    </div>
                  </div>

                  <div className="mt-2 rounded-xl border border-dashed border-slate-200 bg-slate-50/80 p-3 text-center">
                    <p className="text-[11px] font-medium text-slate-500">
                      QR Code Tiket
                    </p>
                    <div className="mt-2 flex items-center justify-center">
                      {/* Placeholder kotak QR */}
                      <div className="flex h-24 w-24 items-center justify-center rounded-lg border border-slate-300 bg-white text-[10px] text-slate-500">
                        QR CODE
                      </div>
                    </div>
                    <p className="mt-2 text-[11px] text-slate-500">
                      Tunjukkan QR Code ini di loket saat tiba di kantor.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1">
                    <button className="flex-1 rounded-full bg-slate-900 px-3 py-2 text-xs font-semibold text-white hover:bg-slate-800">
                      Lihat Detail Tiket
                    </button>
                    <button className="rounded-full border border-slate-200 px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50">
                      Batalkan Tiket
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-3 text-center text-xs text-slate-500">
                  <p>Belum ada tiket untuk hari ini.</p>
                  <button className="rounded-full bg-blue-600 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-700">
                    Ambil Nomor Antrean
                  </button>
                </div>
              )}
            </div>

            <div className="rounded-2xl bg-slate-900 p-4 text-xs text-slate-100 shadow-sm">
              <p className="font-semibold">
                Tips: Datang 10–15 menit sebelum estimasi waktu pelayanan.
              </p>
              <p className="mt-1 text-[11px] text-slate-200/80">
                Sistem akan mengirim notifikasi ketika nomor Anda sudah
                mendekati giliran dipanggil.
              </p>
            </div>
          </aside>
        </div>

        {/* PILIH INSTANSI */}
        <section className="mt-10">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="text-base font-semibold text-slate-900 md:text-lg">
                Pilih Instansi Pelayanan
              </h2>
              <p className="text-xs text-slate-500 md:text-sm">
                Semua instansi terhubung dalam satu sistem antrean online.
              </p>
            </div>
            <button className="hidden rounded-full border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 md:inline-block">
              Lihat semua
            </button>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {instansiList.map((item) => (
              <button
                key={item.nama}
                className="group flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-4 text-left text-sm shadow-sm transition hover:-translate-y-0.5 hover:border-blue-500/60 hover:shadow-md"
              >
                <div>
                  <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-blue-50 px-2 py-1 text-[11px] font-medium text-blue-700">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-600" />
                    {item.badge}
                  </div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    {item.nama}
                  </h3>
                  <p className="mt-1 text-xs text-slate-500">
                    {item.keterangan}
                  </p>
                </div>
                <span className="mt-3 inline-flex items-center text-[11px] font-semibold text-blue-600">
                  Ambil antrean di sini
                  <span className="ml-1 transition group-hover:translate-x-0.5">
                    →
                  </span>
                </span>
              </button>
            ))}
          </div>
        </section>

        {/* LANGKAH PENGGUNAAN */}
        <section className="mt-10">
          <h2 className="text-base font-semibold text-slate-900 md:text-lg">
            Cara menggunakan E-Ticketing
          </h2>
          <p className="text-xs text-slate-500 md:text-sm">
            Hanya tiga langkah sederhana sebelum Anda mendapatkan layanan di
            kantor pemerintah.
          </p>

          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.no}
                className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 text-sm shadow-sm"
              >
                <div className="absolute -right-6 -top-6 h-16 w-16 rounded-full bg-blue-50" />
                <div className="relative">
                  <div className="mb-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white shadow-sm">
                    {step.no}
                  </div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-500">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-white py-4 text-center text-[11px] text-slate-500">
        <p>
          © {new Date().getFullYear()} Pemerintah Daerah. Sistem E-Ticketing
          Pelayanan Publik.
        </p>
      </footer>
    </div>
  );
}
