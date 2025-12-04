import React, { useState } from "react";
import { Link } from "react-router-dom";

const dummyDestinations = [
  {
    id: 1,
    name: "Kebun Aren Wisata Edukasi",
    location: "Pagelaran, Pringsewu",
    type: "Alam & Edukasi",
    price: "Mulai Rp10.000",
    duration: "Kunjungan 2–3 jam",
    rating: 4.7,
    desc: "Wisata edukasi pengolahan aren: panen nira, proses pembuatan gula aren, dan spot foto kebun hijau.",
    image:
      "https://images.pexels.com/photos/5726889/pexels-photo-5726889.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    id: 2,
    name: "Taman Kota Pringsewu",
    location: "Pusat Kota Pringsewu",
    type: "Rekreasi Keluarga",
    price: "Gratis",
    duration: "Fleksibel",
    rating: 4.4,
    desc: "Ruang terbuka hijau untuk warga, cocok untuk olahraga, kuliner malam, dan kegiatan komunitas.",
    image:
      "https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    id: 3,
    name: "Kuliner Malam Jalan Protokol",
    location: "Jalan Utama Pringsewu",
    type: "Kuliner",
    price: "Bervariasi",
    duration: "Pukul 18.00–23.00",
    rating: 4.5,
    desc: "Deretan kuliner khas Lampung, jajanan, dan kopi lokal yang ramai saat malam hari.",
    image:
      "https://images.pexels.com/photos/1391487/pexels-photo-1391487.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
];

export default function DestinasiWisata() {
  const [selected, setSelected] = useState(dummyDestinations[0]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-6 text-slate-50">
      {/* HEADER */}
      <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-emerald-400/60">
            Destinasi Wisata
          </p>
          <h1 className="text-lg font-semibold md:text-xl">
            Wisata Lokal & Kuliner Pringsewu
          </h1>
          <p className="mt-1 text-xs text-slate-400">
            Data masih dummy, nanti bisa dihubungkan ke API destinasi & tiket.
          </p>
        </div>
        <Link
          to="/"
          className="text-xs text-emerald-300 underline-offset-2 hover:underline"
        >
          ← Kembali ke Dashboard
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {/* LIST DESTINASI */}
        <div className="space-y-3 md:col-span-2">
          {dummyDestinations.map((d) => (
            <button
              key={d.id}
              onClick={() => setSelected(d)}
              className="flex w-full items-stretch gap-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-3 text-left text-xs hover:border-emerald-500/60"
            >
              {/* THUMBNAIL */}
              <div className="h-20 w-28 flex-shrink-0 overflow-hidden rounded-xl border border-slate-800 bg-slate-900">
                <img
                  src={d.image}
                  alt={d.name}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* INFO */}
              <div className="flex flex-1 flex-col justify-between">
                <div>
                  <p className="text-sm font-semibold text-slate-50">
                    {d.name}
                  </p>
                  <p className="text-[11px] text-slate-400">{d.location}</p>
                  <p className="mt-1 text-[11px] text-slate-300">
                    {d.type} • ⭐ {d.rating}
                  </p>
                </div>
                <span className="mt-2 inline-flex w-fit rounded-full bg-slate-800 px-3 py-1 text-[10px] text-slate-200">
                  Lihat Detail
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* DETAIL DESTINASI */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-xs">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-emerald-300">
            Detail Destinasi
          </p>
          {selected ? (
            <>
              {/* IMAGE BESAR */}
              <div className="mt-3 h-40 w-full overflow-hidden rounded-xl border border-slate-800 bg-slate-900">
                <img
                  src={selected.image}
                  alt={selected.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <h2 className="mt-3 text-sm font-semibold text-slate-50">
                {selected.name}
              </h2>
              <p className="text-[11px] text-slate-400">{selected.location}</p>
              <p className="mt-2 text-[11px] text-slate-300">
                Tipe: {selected.type}
              </p>
              <p className="mt-1 text-[11px] text-slate-300">
                Harga: {selected.price}
              </p>
              <p className="mt-1 text-[11px] text-slate-300">
                Durasi: {selected.duration}
              </p>
              <p className="mt-1 text-[11px] text-slate-300">
                Rating: ⭐ {selected.rating}
              </p>
              <p className="mt-3 text-[11px] text-slate-300">{selected.desc}</p>

              <button className="mt-4 w-full rounded-full bg-emerald-500 px-3 py-2 text-[11px] font-semibold text-slate-950 hover:bg-emerald-400">
                Beli Tiket / Simpan (Dummy)
              </button>
            </>
          ) : (
            <p className="mt-3 text-[11px] text-slate-500">
              Pilih salah satu destinasi untuk melihat detail.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
