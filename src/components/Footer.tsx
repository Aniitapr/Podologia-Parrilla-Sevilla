import { Footprints } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#202945] py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 border-b border-white/10 pb-12 mb-12">
          <div className="flex flex-col items-center lg:items-start gap-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-[#8cd5be] text-[#8cd5be]">
                <Footprints className="w-6 h-6" />
              </div>
              <span className="text-2xl font-black tracking-tight text-white uppercase">
                PODOLOGÍA <span className="font-light italic">PARRILLA</span>
              </span>
            </div>
            <p className="text-blue-100/50 max-w-sm text-center lg:text-left font-light">
              Excelencia en el cuidado integral del pie y fisioterapia. Salud, estética y bienestar en cada paso.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-10 text-white">
            <Link to="/podologia" className="hover:text-[#8cd5be] transition-colors font-semibold uppercase tracking-widest text-xs">Podología</Link>
            <Link to="/fisioterapia" className="hover:text-[#8cd5be] transition-colors font-semibold uppercase tracking-widest text-xs">Fisioterapia</Link>
            <Link to="/nosotros" className="hover:text-[#8cd5be] transition-colors font-semibold uppercase tracking-widest text-xs">Nosotros</Link>
            <Link to="/contacto" className="hover:text-[#8cd5be] transition-colors font-semibold uppercase tracking-widest text-xs">Contacto</Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-blue-100/30 text-sm font-medium">
          <p>© {new Date().getFullYear()} Podología Parrilla. Todos los derechos reservados.</p>
          <div className="flex gap-8">
            <Link to="/legal" className="hover:text-white transition-colors">Aviso Legal</Link>
            <Link to="/privacidad" className="hover:text-white transition-colors">Privacidad</Link>
            <Link to="/cookies" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
