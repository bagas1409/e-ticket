// src/pages/Marketplace.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { categories, dummyProducts } from "../data/MarketplaceDummy";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStore,
  faSearch,
  faTags,
  faCartPlus,
  faLocationDot,
  faStar,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

export default function Marketplace() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Semua");
  const [selected, setSelected] = useState(dummyProducts[0]);
  const navigate = useNavigate(); // <== tambahkan ini

  const filtered = dummyProducts.filter((p) => {
    const term = search.toLowerCase();
    const matchSearch =
      p.name.toLowerCase().includes(term) ||
      p.umkm.toLowerCase().includes(term);
    const matchCategory = category === "Semua" || p.category === category;
    return matchSearch && matchCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-sky-50">
      <div className="mx-auto max-w-6xl px-4 py-6 text-slate-900">
        {/* HEADER */}
        <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-blue-600">
              <FontAwesomeIcon icon={faStore} className="text-[13px]" />
              <span>Marketplace UMKM</span>
            </p>
            <h1 className="mt-1 text-lg font-semibold md:text-2xl">
              Belanja Produk UMKM Pringsewu
            </h1>
            <p className="mt-1 text-xs md:text-sm text-slate-600">
              Data masih dummy, nanti bisa dihubungkan ke API produk & UMKM
              berdasarkan lokasi pengguna.
            </p>
          </div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs md:text-sm text-blue-600 underline-offset-2 hover:underline"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="text-[11px]" />
            <span>Kembali ke Dashboard</span>
          </Link>
        </div>

        {/* FILTER BAR */}
        <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          {/* Search */}
          <div className="flex flex-1 items-center gap-2">
            <div className="flex w-full items-center gap-2 rounded-xl border border-blue-100 bg-white px-3 py-2">
              <FontAwesomeIcon
                icon={faSearch}
                className="text-[13px] text-slate-400"
              />
              <input
                type="text"
                placeholder="Cari produk atau UMKM..."
                className="w-full bg-transparent text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          {/* Kategori */}
          <div className="flex flex-wrap gap-2 text-[11px]">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`inline-flex items-center gap-1 rounded-full border px-3 py-1 transition ${
                  category === cat
                    ? "border-blue-500 bg-blue-50 text-blue-700"
                    : "border-blue-100 bg-white text-slate-700 hover:border-blue-300 hover:text-blue-600"
                }`}
              >
                <FontAwesomeIcon icon={faTags} className="text-[11px]" />
                <span>{cat}</span>
              </button>
            ))}
          </div>
        </div>

        {/* GRID */}
        <div className="grid gap-4 md:grid-cols-3">
          {/* LIST PRODUK */}
          <div className="space-y-3 md:col-span-2">
            {filtered.map((p) => (
              <div
                key={p.id}
                role="button"
                onClick={() => setSelected(p)}
                className={`flex w-full items-stretch gap-3 rounded-2xl border p-3 text-left text-xs transition ${
                  selected?.id === p.id
                    ? "border-blue-500 bg-blue-50/70 shadow-sm"
                    : "border-blue-100 bg-white hover:border-blue-300 hover:shadow-sm"
                }`}
              >
                {/* THUMBNAIL */}
                <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl border border-blue-100 bg-slate-100">
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
                    <p className="mt-1 flex flex-wrap items-center gap-2 text-[11px] text-slate-600">
                      <span className="font-semibold text-blue-600">
                        {p.price}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <FontAwesomeIcon
                          icon={faLocationDot}
                          className="text-[11px] text-blue-500"
                        />
                        <span>{p.distance}</span>
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <FontAwesomeIcon
                          icon={faStar}
                          className="text-[11px] text-amber-400"
                        />
                        <span>{p.rating}</span>
                      </span>
                    </p>
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 rounded-full bg-sky-50 px-2 py-0.5 text-[10px] text-blue-700 border border-blue-100">
                      <FontAwesomeIcon icon={faTags} className="text-[10px]" />
                      <span>{p.category}</span>
                    </span>

                    {/* TOMBOL KE DETAIL PRODUK UMKM */}
                    <button
                      type="button"
                      className="inline-flex items-center gap-1 rounded-full bg-blue-600 px-3 py-1 text-[10px] font-medium text-white hover:bg-blue-500"
                      onClick={(e) => {
                        e.stopPropagation(); // supaya tidak ikut trigger setSelected
                        navigate(`/marketplace`);
                      }}
                    >
                      <FontAwesomeIcon
                        icon={faCartPlus}
                        className="text-[11px]"
                      />
                      <span>Beli</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {filtered.length === 0 && (
              <p className="text-xs text-slate-500">
                Tidak ada produk yang cocok dengan pencarian.
              </p>
            )}
          </div>

          {/* DETAIL PRODUK (preview di kanan tetap ada) */}
          <div className="rounded-2xl border border-blue-100 bg-white p-4 text-xs shadow-sm">
            <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wide text-blue-600">
              <FontAwesomeIcon icon={faStore} className="text-[12px]" />
              <span>Detail Produk</span>
            </p>

            {selected ? (
              <>
                <div className="mt-3 h-40 w-full overflow-hidden rounded-xl border border-blue-100 bg-slate-100">
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

                <p className="mt-2 flex flex-wrap items-center gap-2 text-[11px]">
                  <span className="text-sm font-semibold text-blue-600">
                    {selected.price}
                  </span>
                  <span className="inline-flex items-center gap-1 text-slate-600">
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      className="text-[11px] text-blue-500"
                    />
                    <span>{selected.distance}</span>
                  </span>
                  <span className="inline-flex items-center gap-1 text-slate-600">
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-[11px] text-amber-400"
                    />
                    <span>{selected.rating}</span>
                  </span>
                </p>

                <p className="mt-3 text-[11px] text-slate-700">
                  {selected.desc}
                </p>

                <button
                  type="button"
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-3 py-2 text-[11px] font-semibold text-white hover:bg-blue-500"
                  onClick={() =>
                    navigate(
                      `/umkm/${selected.umkmId}/produk/${selected.productId}`
                    )
                  }
                >
                  <FontAwesomeIcon icon={faCartPlus} className="text-[12px]" />
                  <span>Lihat Detail Produk UMKM</span>
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
