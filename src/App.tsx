/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import Home from "./pages/Home.tsx";
import Podologia from "./pages/Podologia.tsx";
import Fisioterapia from "./pages/Fisioterapia.tsx";
import Nosotros from "./pages/Nosotros.tsx";
import Contacto from "./pages/Contacto.tsx";

function Layout() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#202945] selection:bg-[#8cd5be] selection:text-[#202945]">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="podologia" element={<Podologia />} />
          <Route path="fisioterapia" element={<Fisioterapia />} />
          <Route path="nosotros" element={<Nosotros />} />
          <Route path="contacto" element={<Contacto />} />
          {/* Fallback to home for demo purposes */}
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}
