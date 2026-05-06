import { motion } from "motion/react";
import { CheckCircle2, Award, Users, Star } from "lucide-react";

export default function Nosotros() {
  const stats = [
    { label: "Pacientes Satisfechos", value: "2,000+", icon: <Users className="w-6 h-6" /> },
    { label: "Años de Experiencia", value: "10+", icon: <Award className="w-6 h-6" /> },
    { label: "Tratamientos Éxitosos", value: "5,000+", icon: <Star className="w-6 h-6" /> },
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
              Nuestra <br/>
              <span className="text-[#8cd5be]">Historia</span>
            </h1>
            <p className="text-xl text-blue-100/60 font-light leading-relaxed">
              Conoce el equipo y los valores que hacen de Podología Parrilla un referente en el cuidado de la salud en Sevilla.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-sm font-bold text-[#8cd5be] uppercase tracking-[0.2em] mb-4">CONÓCENOS</h2>
              <h3 className="text-4xl font-bold text-[#202945] mb-8 tracking-tight">Especialistas comprometidos con tu bienestar.</h3>
              <div className="space-y-6 text-lg text-gray-600 font-light leading-relaxed">
                <p>
                  En Podología Parrilla, entendemos que cada paciente es único. Ubicados en el corazón de Sevilla, nuestro centro nace con la vocación de ofrecer un servicio integral y personalizado.
                </p>
                <p>
                  Liderado por <strong>Ana Parrilla</strong>, diplomada en podología y especialista en diversas áreas del cuidado del pie, nuestro centro combina la calidez del trato humano con la última tecnología médica.
                </p>
              </div>
              
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
                {stats.map((stat, i) => (
                  <div key={i} className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                    <div className="text-[#8cd5be] mb-4">{stat.icon}</div>
                    <p className="text-3xl font-black text-[#202945] mb-1">{stat.value}</p>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="aspect-square bg-gray-100 rounded-[3rem] overflow-hidden shadow-3xl transform rotate-3 hover:rotate-0 transition-transform duration-500 relative">
                 <div className="absolute inset-0 bg-[#202945]/10"></div>
                 <div className="absolute inset-0 flex items-center justify-center italic text-4xl font-serif text-[#202945]/20">
                    Ana Parrilla
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-[#202945] tracking-tight mb-6">Nuestros Valores</h2>
            <p className="text-gray-500">Lo que nos diferencia y nos impulsa a seguir mejorando cada día.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Cuidado Personalizado", text: "No hay dos pies iguales. Adaptamos cada tratamiento a las necesidades específicas de tu estilo de vida." },
              { title: "Innovación Médica", text: "Invertimos constantemente en formación y tecnología para ofrecerte los tratamientos más punteros." },
              { title: "Transparencia", text: "Explicamos cada proceso detalladamente para que entiendas tu diagnóstico y el camino a la recuperación." },
            ].map((value, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
                <CheckCircle2 className="w-10 h-10 text-[#8cd5be] mb-6" />
                <h4 className="text-xl font-bold mb-4">{value.title}</h4>
                <p className="text-gray-500 font-light leading-relaxed">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
