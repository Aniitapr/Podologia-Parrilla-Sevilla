import { motion } from "motion/react";
import { 
  Home as HomeIcon, 
  Stethoscope, 
  Activity, 
  Baby, 
  Scissors, 
  Zap, 
  Move, 
  Footprints,
  CheckCircle2,
  ChevronRight,
  Star
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  const services = [
    { title: "Podólogo a domicilio", icon: <HomeIcon className="w-8 h-8 text-[#8cd5be]" /> },
    { title: "Fisioterapia", icon: <Activity className="w-8 h-8 text-[#8cd5be]" /> },
    { title: "Pie diabético / pie de riesgo", icon: <Stethoscope className="w-8 h-8 text-[#8cd5be]" /> },
    { title: "Podología infantil", icon: <Baby className="w-8 h-8 text-[#8cd5be]" /> },
    { title: "Cirugía podológica", icon: <Scissors className="w-8 h-8 text-[#8cd5be]" /> },
    { title: "Podología deportiva", icon: <Zap className="w-8 h-8 text-[#8cd5be]" /> },
    { title: "Estudio de la pisada y plantillas", icon: <Move className="w-8 h-8 text-[#8cd5be]" /> },
    { title: "Quiropodia / Podología general", icon: <Footprints className="w-8 h-8 text-[#8cd5be]" /> },
  ];

  const whyChooseUs = [
    "Tratamiento especializado y actualizado",
    "Atención cercana",
    "Experiencia en pie diabético y podología deportiva",
    "Servicio a domicilio"
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-52 lg:pb-40 bg-[#202945]">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#202945] opacity-50 pointer-events-none">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#8cd5be] rounded-full blur-[160px] opacity-20"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#8cd5be]/10 text-[#8cd5be] font-bold text-sm tracking-wider uppercase mb-6">
              EXCELENCIA PODOLÓGICA EN SEVILLA
            </span>
            <h1 className="text-5xl lg:text-8xl font-black text-white leading-[0.95] mb-8 tracking-tighter">
              Pasión por la <br/>
              <span className="text-[#8cd5be]">Salud de tus pies</span>
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100/80 mb-10 leading-relaxed font-light max-w-xl">
              Cuidamos la salud de tus pies con trato cercano y profesional. Especialistas en cirugía, deporte y atención a domicilio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://www.doctoralia.es/ana-parrilla-gonzalez/podologo/sevilla"
                target="_blank"
                className="bg-[#8cd5be] hover:bg-white text-[#202945] px-10 py-5 rounded-2xl font-bold text-lg transition-all hover:scale-105 active:scale-95 shadow-xl shadow-[#8cd5be]/20 flex items-center justify-center gap-3 group text-center"
              >
                Reserva tu cita
                <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold text-[#8cd5be] uppercase tracking-[0.2em] mb-4">NUESTROS SERVICIOS</h2>
              <p className="text-4xl lg:text-5xl font-bold tracking-tight">Soluciones integrales para tu bienestar.</p>
            </div>
            <Link to="/podologia" className="text-[#8cd5be] font-bold flex items-center gap-2 group hover:translate-x-2 transition-transform">
              Ver todos los servicios <ChevronRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 rounded-3xl border border-gray-100 hover:border-[#8cd5be]/30 hover:bg-white hover:shadow-2xl hover:shadow-[#202945]/5 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#8cd5be]/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-[#8cd5be] transition-colors">{service.title}</h3>
                <p className="text-gray-500 font-light text-sm line-clamp-2">Atención personalizada con las técnicas más avanzadas del sector.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-24 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
             <div className="flex flex-col gap-10">
              <div>
                <h2 className="text-sm font-bold text-[#8cd5be] uppercase tracking-[0.2em] mb-4">POR QUÉ NOSOTROS</h2>
                <h3 className="text-4xl lg:text-5xl font-bold mb-8 tracking-tighter">Atención cercana, resultados profesionales.</h3>
                <p className="text-lg text-gray-600 leading-relaxed font-light mb-8 italic border-l-4 border-[#8cd5be] pl-6 py-2">
                  “En Podología Parrilla ofrecemos atención profesional, trato humano y soluciones personalizadas.”
                </p>
              </div>

              <div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {whyChooseUs.map((item, index) => (
                    <li key={index} className="flex items-center gap-3 p-5 rounded-2xl bg-white border border-gray-100 shadow-sm">
                      <CheckCircle2 className="w-5 h-5 text-[#8cd5be] flex-shrink-0" />
                      <span className="font-semibold text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-4">
                <Link to="/nosotros" className="bg-[#202945] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#1a2138] transition-colors">
                  Conócenos mejor
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] rounded-[2rem] bg-[#202945] overflow-hidden relative shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-[#202945] via-transparent to-transparent opacity-60"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                   <Footprints className="w-32 h-32 text-white/10" />
                </div>
                <div className="absolute bottom-10 left-10 text-white p-4">
                  <p className="text-3xl font-bold font-serif italic mb-4">"Cuidar tus pies es cuidar tu salud."</p>
                  <p className="text-[#8cd5be] font-bold">Ana Parrilla - Podóloga Col. 1656</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-sm font-bold text-[#8cd5be] uppercase tracking-[0.2em] mb-4">TESTIMONIOS</h2>
            <p className="text-4xl lg:text-5xl font-bold tracking-tight text-[#202945]">Nuestros pacientes opinan</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "María Garcia",
                date: "Hace 2 meses",
                text: "Excelente profesional. Ana me trató una uña encarnada que me llevaba dando problemas meses y la solución fue definitiva. Trato inmejorable.",
                rating: 5
              },
              {
                name: "Juan Rodríguez",
                date: "Hace 1 mes",
                text: "El estudio de la pisada ha cambiado mi forma de correr. Las plantillas son comodísimas y han desaparecido mis dolores de rodilla.",
                rating: 5
              },
              {
                name: "Elena Martínez",
                date: "Hace 3 semanas",
                text: "Muy contenta con el servicio a domicilio para mi madre. Puntualidad, higiene y mucha paciencia. Totalmente recomendable.",
                rating: 5
              }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, starI) => (
                      <Star key={starI} className="w-4 h-4 fill-[#8cd5be] text-[#8cd5be]" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-8 font-light italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="font-bold text-[#202945]">{testimonial.name}</p>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-tighter">{testimonial.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#8cd5be]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-5xl font-black text-[#202945] mb-8 tracking-tighter">¿Listo para dar el siguiente paso?</h2>
          <a 
            href="https://www.doctoralia.es/ana-parrilla-gonzalez/podologo/sevilla"
            target="_blank"
            className="bg-[#202945] text-white px-12 py-5 rounded-2xl font-bold text-xl hover:bg-[#1a2138] transition-all shadow-2xl"
          >
            Reserva tu cita online
          </a>
        </div>
      </section>
    </div>
  );
}
