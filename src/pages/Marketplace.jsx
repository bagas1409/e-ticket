import React, { useState } from "react";
import { Link } from "react-router-dom";

const dummyProducts = [
  {
    id: 1,
    name: "Gula Aren Bubuk 500gr",
    umkm: "UMKM Aren Lestari",
    price: "Rp28.000",
    distance: "1.8 km",
    rating: 4.8,
    category: "Pangan",
    desc: "Gula aren bubuk murni tanpa campuran, cocok untuk minuman dan kue.",
    image:
      "https://images.pexels.com/photos/4109998/pexels-photo-4109998.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 2,
    name: "Kopi Robusta Lampung 250gr",
    umkm: "Kopi Bukit Randu",
    price: "Rp35.000",
    distance: "3.2 km",
    rating: 4.6,
    category: "Minuman",
    desc: "Kopi robusta khas Lampung dengan cita rasa kuat dan aroma khas.",
    image:
      "https://images.pexels.com/photos/895279/pexels-photo-895279.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 3,
    name: "Keripik Pisang Coklat",
    umkm: "Banana Crispy Pringsewu",
    price: "Rp18.000",
    distance: "2.0 km",
    rating: 4.9,
    category: "Snack",
    desc: "Keripik pisang dengan lapisan coklat premium, renyah dan manis.",
    image:
      "https://images.pexels.com/photos/4110000/pexels-photo-4110000.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

const categories = ["Semua", "Pangan", "Minuman", "Snack"];

export default function Marketplace() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Semua");
  const [selected, setSelected] = useState(dummyProducts[0]);

  const filtered = dummyProducts.filter((p) => {
    const matchSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.umkm.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === "Semua" || p.category === category;
    return matchSearch && matchCategory;
  });

  return (
    <div className="mx-auto max-w-6xl px-4 py-6 text-slate-50">
      {/* HEADER */}
      <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-emerald-400/60">
            Marketplace UMKM
          </p>
          <h1 className="text-lg font-semibold md:text-xl">
            Belanja Produk UMKM Pringsewu
          </h1>
          <p className="mt-1 text-xs text-slate-400">
            Data masih dummy, nanti bisa dihubungkan ke API produk & UMKM.
          </p>
        </div>
        <Link
          to="/"
          className="text-xs text-emerald-300 underline-offset-2 hover:underline"
        >
          ← Kembali ke Dashboard
        </Link>
      </div>

      {/* FILTER BAR */}
      <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-1 items-center gap-2">
          <input
            type="text"
            placeholder="Cari produk atau UMKM..."
            className="w-full rounded-xl border border-slate-800 bg-slate-900/70 px-3 py-2 text-xs text-slate-100 placeholder:text-slate-500 focus:border-emerald-500 focus:outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap gap-2 text-[11px]">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`rounded-full border px-3 py-1 ${
                category === cat
                  ? "border-emerald-500 bg-emerald-500/10 text-emerald-300"
                  : "border-slate-700 text-slate-300 hover:border-emerald-500/60 hover:text-emerald-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* GRID */}
      <div className="grid gap-4 md:grid-cols-3">
        {/* LIST PRODUK */}
        <div className="space-y-3 md:col-span-2">
          {filtered.map((p) => (
            <button
              key={p.id}
              onClick={() => setSelected(p)}
              className="flex w-full items-stretch gap-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-3 text-left text-xs hover:border-emerald-500/60"
            >
              {/* THUMBNAIL */}
              <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl border border-slate-800 bg-slate-900">
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* INFO */}
              <div className="flex flex-1 flex-col justify-between">
                <div>
                  <p className="text-sm font-semibold text-slate-50">
                    {p.name}
                  </p>
                  <p className="text-[11px] text-slate-400">{p.umkm}</p>
                  <p className="mt-1 text-[11px] text-slate-300">
                    {p.price} • {p.distance} • ⭐ {p.rating}
                  </p>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <span className="inline-flex rounded-full bg-slate-800 px-2 py-0.5 text-[10px] text-slate-300">
                    {p.category}
                  </span>
                  <span className="rounded-full bg-emerald-500 px-3 py-1 text-[10px] font-medium text-slate-950">
                    Pilih
                  </span>
                </div>
              </div>
            </button>
          ))}

          {filtered.length === 0 && (
            <p className="text-xs text-slate-500">
              Tidak ada produk yang cocok dengan pencarian.
            </p>
          )}
        </div>

        {/* DETAIL PRODUK */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-xs">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-emerald-300">
            Detail Produk
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
              <p className="text-[11px] text-slate-400">{selected.umkm}</p>
              <p className="mt-2 text-sm font-semibold text-emerald-300">
                {selected.price}
              </p>
              <p className="mt-1 text-[11px] text-slate-400">
                {selected.distance} • ⭐ {selected.rating}
              </p>
              <p className="mt-3 text-[11px] text-slate-300">{selected.desc}</p>

              <button className="mt-4 w-full rounded-full bg-emerald-500 px-3 py-2 text-[11px] font-semibold text-slate-950 hover:bg-emerald-400">
                Tambah ke Keranjang (Dummy)
              </button>
            </>
          ) : (
            <p className="mt-3 text-[11px] text-slate-500">
              Pilih salah satu produk untuk melihat detail.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
