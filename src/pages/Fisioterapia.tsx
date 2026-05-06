import { motion } from "motion/react";
import { Activity, Zap, HeartPulse, ShieldCheck, ChevronRight } from "lucide-react";

export default function Fisioterapia() {
  const sections = [
    {
      id: "clinica",
      title: "Fisioterapia Clínica",
      icon: <Activity className="w-12 h-12 text-[#8cd5be]" />,
      description: "Tratamiento personalizado para lesiones musculares, articulares y neurológicas. Utilizamos técnicas manuales y de vanguardia para tu recuperación.",
      items: ["Masoterapia", "Movilizaciones articulares", "Vendajes funcionales", "Punción seca"]
    },
    {
      id: "deportiva",
      title: "Fisioterapia Deportiva",
      icon: <Zap className="w-12 h-12 text-[#8cd5be]" />,
      description: "Enfoque específico para deportistas, desde la prevención de lesiones hasta la vuelta a la competición tras una lesión.",
      items: ["Sobrecargas musculares", "Esguinces y roturas fibrilares", "Preparación pre-competición", "Recuperación post-esfuerzo"]
    },
    {
      id: "osteopatia",
      title: "Osteopatía",
      icon: <HeartPulse className="w-12 h-12 text-[#8cd5be]" />,
      description: "Visión global del cuerpo humano para tratar la causa del dolor y no solo el síntoma, restableciendo el equilibrio del organismo.",
      items: ["Osteopatía estructural", "Osteopatía visceral", "Tratamiento de cefaleas", "Problemas ATM"]
    },
    {
      id: "rehabilitacion",
      title: "Rehabilitación",
      icon: <ShieldCheck className="w-12 h-12 text-[#8cd5be]" />,
      description: "Procesos de recuperación tras cirugías o lesiones prolongadas para recuperar la funcionalidad completa.",
      items: ["Post-operatorios", "Readaptación al esfuerzo", "Ejercicios terapéuticos", "Mejora de la movilidad"]
    }
  ];

  return (
    <div className="pt-20">
      <section className="bg-[#202945] py-24 lg:py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl lg:text-7xl font-black text-white tracking-tighter mb-6">
              Servicios de <br/>
              <span className="text-[#8cd5be]">Fisioterapia</span>
            </h1>
            <p className="text-xl text-blue-100/60 font-light leading-relaxed">
              Recupera tu movilidad y mejora tu calidad de vida con nuestra atención especializada en fisioterapia y rehabilitación.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            {sections.map((section, index) => (
              <motion.div 
                key={section.id} 
                id={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 hover:border-[#8cd5be]/20 transition-all group"
              >
                <div className="w-16 h-16 bg-[#202945] rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  {section.icon}
                </div>
                <h3 className="text-3xl font-bold text-[#202945] mb-6 tracking-tight">{section.title}</h3>
                <p className="text-gray-600 mb-8 font-light leading-relaxed">
                  {section.description}
                </p>
                <ul className="space-y-3 mb-10">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-[#202945] font-semibold text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#8cd5be]"></div>
                      {item}
                    </li>
                  ))}
                </ul>
                <a 
                   href="https://www.doctoralia.es/ana-parrilla-gonzalez/podologo/sevilla"
                   target="_blank"
                   className="text-[#8cd5be] font-bold inline-flex items-center gap-2 group-hover:gap-4 transition-all"
                >
                  Pedir cita <ChevronRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
