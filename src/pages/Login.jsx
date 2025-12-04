// src/pages/Login.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLock,
  faUserShield,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: sambungkan ke API login beneran
    console.log("Login dummy:", form);
    navigate("/dashboard"); // atau route dashboard kamu sekarang
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-300 via-blue-50 to-blue-100 flex items-center justify-center px-4">
      <div className="grid w-full max-w-4xl gap-6 rounded-3xl border border-blue-100 bg-white/80 p-5 shadow-md md:grid-cols-2 md:p-8">
        {/* KIRI: INFO */}
        <div className="flex flex-col justify-between">
          <div className="space-y-4">
            {/* BADGE KECIL ATAS */}
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-[10px] text-blue-700 border border-blue-100">
              <FontAwesomeIcon icon={faLock} className="text-[11px]" />
              <span>Masuk aman & terintegrasi</span>
            </div>

            {/* JUDUL & DESKRIPSI UTAMA */}
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-blue-600">
                Masuk ke Akun
              </p>
              <h1 className="mt-2 text-xl font-bold text-slate-900 md:text-2xl">
                UMKM & Layanan Warga
              </h1>
              <p className="mt-2 text-xs md:text-sm text-slate-600">
                Gunakan email dan kata sandi untuk masuk ke dashboard UMKM,
                wisata, dan lowongan kerja.
              </p>
            </div>

            {/* POIN KEUNGGULAN KECIL */}
            <div className="mt-3 space-y-1.5 text-[11px] text-slate-600">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                <span>
                  Akses produk UMKM, destinasi wisata, dan lowongan kerja.
                </span>
              </div>
              <div className="flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faUserShield}
                  className="text-[11px] text-blue-600"
                />
                <span>Data akun dilindungi dengan autentikasi terpusat.</span>
              </div>
              <div className="flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faCartShopping}
                  className="text-[11px] text-blue-600"
                />
                <span>
                  Pantau pesanan, wishlist, dan aktivitas dalam satu tempat.
                </span>
              </div>
            </div>
          </div>

          {/* CATATAN BAWAH */}
          <p className="mt-4 border-t border-slate-200 pt-3 text-[10px] text-slate-500">
            Belum punya akun? daftar ke pemda terdekat sekarang
          </p>
        </div>

        {/* KANAN: FORM LOGIN */}
        <div>
          <form
            onSubmit={handleSubmit}
            className="space-y-3 rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-100 to-sky-50 p-4 shadow-sm"
          >
            <div>
              <label
                htmlFor="email"
                className="text-[11px] font-semibold text-slate-800"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="mt-1 w-full rounded-xl border border-blue-100 bg-white px-3 py-2 text-xs text-slate-800 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none"
                placeholder="nama@contoh.com"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="text-[11px] font-semibold text-slate-800"
              >
                Kata Sandi
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={form.password}
                onChange={handleChange}
                className="mt-1 w-full rounded-xl border border-blue-100 bg-white px-3 py-2 text-xs text-slate-800 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none"
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-center justify-between text-[11px]">
              <label className="inline-flex items-center gap-2 text-slate-700">
                <input
                  type="checkbox"
                  className="h-3 w-3 rounded border-blue-300 text-blue-600 accent-blue-600"
                />
                <span>Ingat saya</span>
              </label>
              <button
                type="button"
                className="text-blue-600 underline-offset-2 hover:underline"
              >
                Lupa kata sandi?
              </button>
            </div>

            <button
              type="submit"
              className="mt-2 w-full rounded-full bg-blue-600 px-4 py-2 text-[11px] font-semibold text-white hover:bg-blue-500"
            >
              Masuk
            </button>

            <div className="mt-2 text-center text-[10px] text-slate-600">
              <span>Atau kembali ke </span>
              <Link
                to="/"
                className="font-semibold text-blue-600 underline-offset-2 hover:underline"
              >
                halaman awal
              </Link>
              .
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
