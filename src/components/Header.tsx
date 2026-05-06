import { motion, AnimatePresence } from "motion/react";
import { 
  Phone, 
  Clock, 
  MapPin, 
  Footprints, 
  Menu, 
  X,
  ChevronDown
} from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navLinks = [
    { name: "Inicio", path: "/" },
    { 
      name: "Podología", 
      path: "/podologia",
      submenu: [
        { name: "Infantil", path: "/podologia#infantil" },
        { name: "Clínica", path: "/podologia#clinica" },
        { name: "Deportiva", path: "/podologia#deportiva" },
        { name: "Cirugía", path: "/podologia#cirugia" },
      ]
    },
    { 
      name: "Fisioterapia", 
      path: "/fisioterapia",
      submenu: [
        { name: "Clínica", path: "/fisioterapia#clinica" },
        { name: "Deportiva", path: "/fisioterapia#deportiva" },
        { name: "Osteopatía", path: "/fisioterapia#osteopatia" },
        { name: "Rehabilitación", path: "/fisioterapia#rehabilitacion" },
      ]
    },
    { name: "Nosotros", path: "/nosotros" },
    { name: "Contacto", path: "/contacto" },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className={`bg-[#1a2138] text-white/70 py-2.5 px-6 text-sm transition-all duration-300 hidden lg:block ${isScrolled ? "h-0 overflow-hidden py-0 opacity-0" : "h-auto opacity-100"}`}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#8cd5be]" />
              <span>Arroyo, 22 · 41003 Sevilla</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-[#8cd5be]" />
              <span>644 69 61 97</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
             <span className="text-white/40">|</span>
             <span className="font-medium text-white/90 uppercase tracking-tighter">Lunes - Viernes: 9:30–14:00, 16:30–21:00</span>
          </div>
        </div>
      </div>

      <header 
        className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "top-0 bg-white/90 backdrop-blur-md shadow-sm py-3" 
            : "lg:top-10 top-0 bg-[#202945] py-5"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-colors ${isScrolled ? "border-[#202945] bg-[#202945] text-white" : "border-[#8cd5be] bg-transparent text-[#8cd5be]"}`}>
              <Footprints className="w-6 h-6" />
            </div>
            <span className={`text-xl font-bold tracking-tight transition-colors ${isScrolled ? "text-[#202945]" : "text-white"}`}>
              PODOLOGÍA <span className="font-light italic">PARRILLA</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <ul className={`flex items-center gap-8 font-medium ${isScrolled ? "text-[#202945]" : "text-white"}`}>
              {navLinks.map((link) => (
                <li key={link.name} className="relative group/menu py-2">
                  <Link 
                    to={link.path} 
                    className={`hover:text-[#8cd5be] transition-colors flex items-center gap-1 ${location.pathname === link.path ? "text-[#8cd5be]" : ""}`}
                  >
                    {link.name}
                    {link.submenu && <ChevronDown className="w-3 h-3 opacity-50" />}
                  </Link>
                  {link.submenu && (
                    <div className="absolute top-full left-0 pt-4 opacity-0 translate-y-2 pointer-events-none group-hover/menu:opacity-100 group-hover/menu:translate-y-0 group-hover/menu:pointer-events-auto transition-all duration-300 min-w-[200px]">
                      <ul className="bg-white rounded-2xl shadow-2xl border border-gray-100 py-4 overflow-hidden">
                        {link.submenu.map((item) => (
                          <li key={item.name}>
                            <Link 
                              to={item.path}
                              className="block px-6 py-3 text-sm text-[#202945] hover:bg-gray-50 hover:text-[#8cd5be] font-bold transition-all"
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
            
            <div className={`h-6 w-px ${isScrolled ? "bg-[#202945]/10" : "bg-white/20"}`}></div>

            <a 
              href="https://www.doctoralia.es/ana-parrilla-gonzalez/podologo/sevilla"
              target="_blank"
              rel="noreferrer"
              className="bg-[#8cd5be] hover:bg-white text-[#202945] px-6 py-2.5 rounded-full flex items-center gap-2 font-bold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[#8cd5be]/20"
            >
              <Clock className="w-4 h-4" />
              Reserva cita
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={isScrolled ? "text-[#202945]" : "text-white"} />
            ) : (
              <Menu className={isScrolled ? "text-[#202945]" : "text-white"} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-2xl overflow-hidden"
            >
              <nav className="p-6 flex flex-col gap-6">
                <ul className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      <div className="flex flex-col gap-2">
                        <Link 
                          to={link.path} 
                          className="text-xl font-bold text-[#202945] hover:text-[#8cd5be]"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {link.name}
                        </Link>
                        {link.submenu && (
                          <div className="pl-4 grid grid-cols-2 gap-2">
                            {link.submenu.map(sub => (
                              <Link 
                                key={sub.name}
                                to={sub.path}
                                className="text-sm font-medium text-gray-500 hover:text-[#8cd5be]"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="h-px bg-gray-100"></div>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3 font-bold text-[#202945]">
                    <Phone className="w-5 h-5 text-[#8cd5be]" />
                    644 69 61 97
                  </div>
                  <a 
                    href="https://www.doctoralia.es/ana-parrilla-gonzalez/podologo/sevilla"
                    className="bg-[#8cd5be] text-[#202945] p-4 rounded-xl flex items-center justify-center gap-3 font-bold shadow-lg"
                  >
                    <Clock className="w-5 h-5" />
                    Reserva tu cita
                  </a>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
