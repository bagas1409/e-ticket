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
import LowonganDetail from "./pages/LowonganDetail.jsx";

function App() {
  const location = useLocation();

  const isDashboard = location.pathname === "/";

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* SIMPLE TOP NAV */}
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link
            to="/"
            className="text-sm font-semibold text-blue-600 hover:text-blue-700"
          >
            CENIL • UMKM &amp; Layanan Warga
          </Link>

          <nav className="flex gap-3 text-xs">
            <Link
              to="/"
              className={`rounded-full px-3 py-1 ${
                isDashboard
                  ? "bg-blue-600 text-white shadow-sm"
                  : "border border-slate-200 text-slate-700 hover:border-blue-400 hover:text-blue-600"
              }`}
            >
              Dashboard
            </Link>

            <Link
              to="/wisata"
              className="rounded-full border border-slate-200 px-3 py-1 text-slate-700 hover:border-blue-400 hover:text-blue-600"
            >
              Destinasi
            </Link>

            <Link
              to="/lowongan"
              className="rounded-full border border-slate-200 px-3 py-1 text-slate-700 hover:border-blue-400 hover:text-blue-600"
            >
              Lowongan
            </Link>

            <Link
              to="/umkm"
              className="rounded-full border border-slate-200 px-3 py-1 text-slate-700 hover:border-blue-400 hover:text-blue-600"
            >
              UMKM
            </Link>

            <Link
              to="/marketplace"
              className="rounded-full border border-slate-200 px-3 py-1 text-slate-700 hover:border-blue-400 hover:text-blue-600"
            >
              Marketplace
            </Link>
          </nav>
        </div>
      </header>

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<UserDashboard />} />
        <Route path="/umkm" element={<UmkmList />} />
        <Route path="/umkm/:id" element={<UmkmDetail />} />
        <Route
          path="/umkm/:id/produk/:productId"
          element={<UmkmProductDetail />}
        />

        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/wisata" element={<DestinasiWisata />} />
        <Route path="/lowongan" element={<LowonganKerja />} />
        <Route path="/wisata/:id" element={<WisataDetail />} />
        <Route path="/lowongan/:id" element={<LowonganDetail />} />
      </Routes>
    </div>
  );
}

export default App;
