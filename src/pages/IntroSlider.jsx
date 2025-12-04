// src/pages/IntroSlider.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import slide1Img from "../assets/lokerslide.jpeg";
import slide2Img from "../assets/manfaatslide.jpeg";
import slide3Img from "../assets/umkmslide.jpeg";

const slides = [
  {
    id: 1,
    title: "UMKM & Wisata dalam Satu Aplikasi",
    desc: "Temukan produk UMKM, destinasi wisata, dan event lokal di Pringsewu dengan mudah.",
    image: slide3Img,
  },
  {
    id: 2,
    title: "Lowongan Kerja & Peluang Kolaborasi",
    desc: "Cari lowongan kerja, peluang magang, dan kolaborasi dengan pelaku UMKM.",
    image: slide1Img,
  },
  {
    id: 3,
    title: "Satu Akun, Banyak Manfaat",
    desc: "Pantau pesanan, wishlist, dan aktivitasmu hanya dengan satu akun terintegrasi.",
    image: slide2Img,
  },
];

export default function IntroSlider() {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  const nextSlide = () => {
    if (current === slides.length - 1) {
      navigate("/login");
    } else {
      setCurrent((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (current === 0) return;
    setCurrent((prev) => prev - 1);
  };

  const goToLogin = () => {
    navigate("/login");
  };

  const activeSlide = slides[current];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-300 via-blue-50 to-blue-100 text-slate-900">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 py-6">
        {/* TOP BAR */}
        <header className="mb-6 flex items-center justify-between">
          <div className="text-sm font-semibold text-blue-700">
            UMKM & Warga
          </div>
          <button
            type="button"
            onClick={goToLogin}
            className="text-xs font-medium text-slate-700 underline-offset-2 hover:text-blue-700 hover:underline"
          >
            Lewati & Masuk
          </button>
        </header>

        {/* CONTENT */}
        <main className="flex flex-1 flex-col gap-6 md:flex-row md:items-center">
          {/* KIRI: SLIDE TEKS */}
          <div className="flex-1">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-blue-600">
              Selamat datang
            </p>
            <h1 className="mt-2 text-xl font-bold text-slate-900 md:text-3xl">
              Platform Digital untuk{" "}
              <span className="text-blue-700">UMKM, Wisata, dan Warga</span>
            </h1>
            <p className="mt-3 max-w-xl text-xs text-slate-600 md:text-sm">
              Sebelum login, lihat dulu sekilas apa saja yang bisa kamu lakukan
              di aplikasi ini.
            </p>

            {/* CARD SLIDE */}
            <div className="mt-5 rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-100 to-sky-50 p-4 shadow-sm">
              <p className="text-[11px] font-semibold text-blue-700">
                Slide {current + 1} dari {slides.length}
              </p>
              <h2 className="mt-2 text-sm font-semibold text-slate-900 md:text-base">
                {activeSlide.title}
              </h2>
              <p className="mt-2 text-[11px] text-slate-700 md:text-sm">
                {activeSlide.desc}
              </p>

              {/* DOT INDICATOR */}
              <div className="mt-4 flex items-center gap-2">
                {slides.map((s, idx) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setCurrent(idx)}
                    className={`h-2.5 rounded-full transition ${
                      idx === current
                        ? "w-6 bg-blue-600"
                        : "w-2 bg-slate-300 hover:bg-blue-300"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* BUTTONS NAVIGASI */}
            <div className="mt-5 flex items-center gap-3 text-xs">
              <button
                type="button"
                onClick={prevSlide}
                disabled={current === 0}
                className="rounded-full border border-slate-300 bg-white px-4 py-1.5 text-slate-700 hover:border-blue-400 hover:text-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Sebelumnya
              </button>
              <button
                type="button"
                onClick={nextSlide}
                className="rounded-full bg-blue-600 px-5 py-1.5 font-semibold text-white hover:bg-blue-500"
              >
                {current === slides.length - 1 ? "Masuk Sekarang" : "Lanjutkan"}
              </button>
            </div>
          </div>

          {/* KANAN: GAMBAR SLIDE */}
          <div className="mt-6 flex-1 md:mt-0">
            <div className="relative h-64 w-full overflow-hidden rounded-3xl border border-blue-100 bg-slate-200 shadow-md">
              {activeSlide.image && (
                <img
                  src={activeSlide.image}
                  alt={activeSlide.imageAlt}
                  className="h-full w-full object-cover"
                />
              )}

              {/* Overlay gradient biar teks/feel-nya halus */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

              {/* Caption kecil di bawah gambar */}
            </div>
          </div>
        </main>

        {/* FOOTER KECIL */}
        <footer className="mt-4 text-[10px] text-slate-500">
          Dengan melanjutkan, Anda menyetujui kebijakan penggunaan aplikasi
          (dummy text).
        </footer>
      </div>
    </div>
  );
}
