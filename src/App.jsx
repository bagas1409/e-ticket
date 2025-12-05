import React from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";

import UserDashboard from "./pages/UserDashboard.jsx";
import Marketplace from "./pages/Marketplace.jsx";
import DestinasiWisata from "./pages/DestinasiWisata.jsx";
import LowonganKerja from "./pages/LowonganKerja.jsx";
import UmkmList from "./pages/UmkmList.jsx";
import UmkmProductDetail from "./pages/UmkmProductDetail.jsx";
import UmkmDetail from "./pages/UmkmDetail.jsx";
import WisataDetail from "./pages/WisataDetail.jsx";
import IntroSlider from "./pages/IntroSlider";
import Login from "./pages/Login";
import LowonganDetail from "./pages/LowonganDetail.jsx";

function App() {
  const location = useLocation();

  // sekarang dashboard ada di /dashboard
  const isDashboard = location.pathname === "/dashboard";

  // sembunyikan navbar di halaman intro & login
  const hideNav = location.pathname === "/" || location.pathname === "/login";

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-sky-50 text-slate-900">
      {/* TOP NAV (hanya muncul setelah lewat intro & login) */}
      {!hideNav && (
        <header className="border-b border-blue-100 bg-white/80 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
            <Link
              to="/dashboard"
              className="text-sm font-semibold text-blue-700 hover:text-blue-800"
            >
              UMKM &amp; Layanan Warga
            </Link>

            <nav className="flex gap-3 text-xs">
              <Link
                to="/dashboard"
                className={`rounded-full px-3 py-1 ${
                  isDashboard
                    ? "bg-blue-600 text-white shadow-sm border border-blue-600"
                    : "border border-blue-100 bg-white text-slate-700 hover:border-blue-400 hover:text-blue-700"
                }`}
              >
                Dashboard
              </Link>

              <Link
                to="/wisata"
                className="rounded-full border border-blue-100 bg-white px-3 py-1 text-slate-700 hover:border-blue-400 hover:text-blue-700"
              >
                Destinasi
              </Link>

              <Link
                to="/lowongan"
                className="rounded-full border border-blue-100 bg-white px-3 py-1 text-slate-700 hover:border-blue-400 hover:text-blue-700"
              >
                Lowongan kerja
              </Link>

              <Link
                to="/umkm"
                className="rounded-full border border-blue-100 bg-white px-3 py-1 text-slate-700 hover:border-blue-400 hover:text-blue-700"
              >
                UMKM
              </Link>

              <Link
                to="/marketplace"
                className="rounded-full border border-blue-100 bg-white px-3 py-1 text-slate-700 hover:border-blue-400 hover:text-blue-700"
              >
                Marketplace
              </Link>
            </nav>
          </div>
        </header>
      )}

      {/* ROUTES */}
      <Routes>
        {/* Intro slider jadi halaman awal */}
        <Route path="/" element={<IntroSlider />} />

        {/* Login */}
        <Route path="/login" element={<Login />} />

        {/* Setelah login: dashboard utama */}
        <Route path="/dashboard" element={<UserDashboard />} />

        {/* UMKM */}
        <Route path="/umkm" element={<UmkmList />} />
        <Route path="/umkm/:id" element={<UmkmDetail />} />
        <Route
          path="/umkm/:id/produk/:productId"
          element={<UmkmProductDetail />}
        />

        {/* Marketplace & lainnya */}
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/wisata" element={<DestinasiWisata />} />
        <Route path="/wisata/:id" element={<WisataDetail />} />
        <Route path="/lowongan" element={<LowonganKerja />} />
        <Route path="/lowongan/:id" element={<LowonganDetail />} />
      </Routes>
    </div>
  );
}

export default App;
