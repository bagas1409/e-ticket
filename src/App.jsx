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

function App() {
  const location = useLocation();

  const isDashboard = location.pathname === "/";

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* SIMPLE TOP NAV */}
      <header className="border-b border-slate-800 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link to="/" className="text-sm font-semibold text-emerald-400">
            CENIL • UMKM & Layanan Warga
          </Link>

          <nav className="flex gap-3 text-xs">
            <Link
              to="/"
              className={`rounded-full px-3 py-1 ${
                isDashboard
                  ? "bg-emerald-500 text-slate-950"
                  : "border border-slate-700 text-slate-300 hover:border-emerald-500 hover:text-emerald-300"
              }`}
            >
              Dashboard
            </Link>

            <Link
              to="/wisata"
              className="rounded-full border border-slate-700 px-3 py-1 text-slate-300 hover:border-emerald-500 hover:text-emerald-300"
            >
              Destinasi
            </Link>
            <Link
              to="/lowongan"
              className="rounded-full border border-slate-700 px-3 py-1 text-slate-300 hover:border-emerald-500 hover:text-emerald-300"
            >
              Lowongan
            </Link>
            <Link
              to="/umkm"
              className="rounded-full border border-slate-700 px-3 py-1 text-slate-300 hover:border-emerald-500 hover:text-emerald-300"
            >
              UMKM
            </Link>

            <Link
              to="/marketplace"
              className="rounded-full border border-slate-700 px-3 py-1 text-slate-300 hover:border-emerald-500 hover:text-emerald-300"
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
      </Routes>
    </div>
  );
}

export default App;
