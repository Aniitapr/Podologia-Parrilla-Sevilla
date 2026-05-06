import { motion } from "motion/react";
import { Baby, Stethoscope, Zap, Scissors, ChevronRight } from "lucide-react";

export default function Podologia() {
  const sections = [
    {
      id: "infantil",
      title: "Podología Infantil",
      icon: <Baby className="w-12 h-12 text-[#8cd5be]" />,
      description: "Diagnóstico y tratamiento de las alteraciones propias de la infancia. Es fundamental detectar a tiempo problemas en el crecimiento para evitar patologías en la edad adulta.",
      items: ["Estudio de la marcha infantil", "Exploración biomecánica", "Manejo de malformaciones congénitas", "Tratamiento de verrugas plantares (papilomas)"]
    },
    {
      id: "clinica",
      title: "Podología Clínica",
      icon: <Stethoscope className="w-12 h-12 text-[#8cd5be]" />,
      description: "Tratamiento de cualquier afectación ocurrida en el pie: problemas en la piel (durezas, callos, hongos) y en las uñas (encarnadas, engrosadas).",
      items: ["Quiropodia (callos y durezas)", "Hongos en uñas (onicomicosis)", "Papilomas (verrugas plantares)", "Pie diabético"]
    },
    {
      id: "deportiva",
      title: "Podología Deportiva",
      icon: <Zap className="w-12 h-12 text-[#8cd5be]" />,
      description: "La podología deportiva se centra en la prevención de lesiones y la optimización del rendimiento a través del estudio de la pisada y el calzado.",
      items: ["Estudio biomecánico de la marcha", "Plantillas personalizadas", "Análisis del calzado deportivo", "Tratamiento de fascitis plantar"]
    },
    {
      id: "cirugia",
      title: "Cirugía Podológica",
      icon: <Scissors className="w-12 h-12 text-[#8cd5be]" />,
      description: "Intervenciones mínimamente invasivas para solucionar problemas crónicos de forma definitiva y con una recuperación rápida.",
      items: ["Cirugía de uña encarnada", "Cirugía de juanetes (hallux valgus)", "Dedos en garra", "Neuroma de Morton"]
    }
  ];

  return (
    <div className="pt-20">
      {/* Header Section */}
      <section className="bg-[#202945] py-24 lg:py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl lg:text-7xl font-black text-white tracking-tighter mb-6">
              Servicios de <br/>
              <span className="text-[#8cd5be]">Podología</span>
            </h1>
            <p className="text-xl text-blue-100/60 font-light leading-relaxed">
              Cuidamos la salud de tus pies con los tratamientos más avanzados y un equipo especializado en cada área.
            </p>
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#8cd5be]/10 blur-[120px]"></div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="space-y-32">
            {sections.map((section, index) => (
              <div 
                key={section.id} 
                id={section.id}
                className={`flex flex-col lg:flex-row gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <motion.div 
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex-1"
                >
                  <div className="w-20 h-20 bg-gray-50 rounded-3xl flex items-center justify-center mb-8 shadow-sm">
                    {section.icon}
                  </div>
                  <h2 className="text-4xl font-bold text-[#202945] mb-6 tracking-tight">{section.title}</h2>
                  <p className="text-lg text-gray-600 font-light leading-relaxed mb-8 italic">
                    {section.description}
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-[#202945] font-semibold">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#8cd5be]"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a 
                    href="https://www.doctoralia.es/ana-parrilla-gonzalez/podologo/sevilla"
                    target="_blank"
                    className="inline-flex items-center gap-2 text-[#8cd5be] font-bold hover:gap-4 transition-all"
                  >
                    Reservar cita para {section.title} <ChevronRight className="w-5 h-5" />
                  </a>
                </motion.div>
                
                <motion.div 
                   initial={{ opacity: 0, scale: 0.95 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: true }}
                   className="flex-1 w-full"
                >
                  <div className="aspect-video bg-gray-100 rounded-[2.5rem] overflow-hidden shadow-2xl relative group">
                    <div className="absolute inset-0 bg-[#202945]/5 group-hover:bg-transparent transition-all"></div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
