import React, { useState } from "react";
import { Link } from "react-router-dom";
import { categories, dummyProducts } from "../data/MarketplaceDummy";

export default function Marketplace() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Semua");
  const [selected, setSelected] = useState(dummyProducts[0]);

  const filtered = dummyProducts.filter((p) => {
    const term = search.toLowerCase();
    const matchSearch =
      p.name.toLowerCase().includes(term) ||
      p.umkm.toLowerCase().includes(term);
    const matchCategory = category === "Semua" || p.category === category;
    return matchSearch && matchCategory;
  });

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-6 text-slate-900">
        {/* HEADER */}
        <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-blue-600">
              Marketplace UMKM
            </p>
            <h1 className="text-lg font-semibold md:text-2xl">
              Belanja Produk UMKM Pringsewu
            </h1>
            <p className="mt-1 text-xs md:text-sm text-slate-600">
              Data masih dummy, nanti bisa dihubungkan ke API produk & UMKM
              berdasarkan lokasi pengguna.
            </p>
          </div>
          <Link
            to="/"
            className="text-xs md:text-sm text-blue-600 underline-offset-2 hover:underline"
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
              className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs text-slate-800 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap gap-2 text-[11px]">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`rounded-full border px-3 py-1 transition ${
                  category === cat
                    ? "border-blue-500 bg-blue-50 text-blue-700"
                    : "border-slate-300 bg-white text-slate-700 hover:border-blue-300 hover:text-blue-600"
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
                className={`flex w-full items-stretch gap-3 rounded-2xl border p-3 text-left text-xs transition ${
                  selected?.id === p.id
                    ? "border-blue-500 bg-blue-50/60 shadow-sm"
                    : "border-slate-200 bg-white hover:border-blue-300 hover:shadow-sm"
                }`}
              >
                {/* THUMBNAIL */}
                <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* INFO */}
                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      {p.name}
                    </p>
                    <p className="text-[11px] text-slate-600">{p.umkm}</p>
                    <p className="mt-1 text-[11px] text-slate-600">
                      {p.price} • {p.distance} • ⭐ {p.rating}
                    </p>
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="inline-flex rounded-full bg-slate-100 px-2 py-0.5 text-[10px] text-slate-700 border border-slate-200">
                      {p.category}
                    </span>
                    <span className="rounded-full bg-blue-600 px-3 py-1 text-[10px] font-medium text-white">
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
          <div className="rounded-2xl border border-slate-200 bg-white p-4 text-xs shadow-sm">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-blue-600">
              Detail Produk
            </p>
            {selected ? (
              <>
                {/* IMAGE BESAR */}
                <div className="mt-3 h-40 w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
                  <img
                    src={selected.image}
                    alt={selected.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                <h2 className="mt-3 text-sm font-semibold text-slate-900">
                  {selected.name}
                </h2>
                <p className="text-[11px] text-slate-600">{selected.umkm}</p>
                <p className="mt-2 text-sm font-semibold text-blue-600">
                  {selected.price}
                </p>
                <p className="mt-1 text-[11px] text-slate-600">
                  {selected.distance} • ⭐ {selected.rating}
                </p>
                <p className="mt-3 text-[11px] text-slate-700">
                  {selected.desc}
                </p>

                <button className="mt-4 w-full rounded-full bg-blue-600 px-3 py-2 text-[11px] font-semibold text-white hover:bg-blue-500">
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
    </div>
  );
}
