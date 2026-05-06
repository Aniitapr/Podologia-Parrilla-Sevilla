import { motion } from "motion/react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

export default function Contacto() {
  const contactInfo = [
    { label: "Teléfono", value: "644 69 61 97", icon: <Phone className="w-6 h-6" /> },
    { label: "Email", value: "podologiaparrilla@gmail.com", icon: <Mail className="w-6 h-6" /> },
    { label: "Dirección", value: "Arroyo, 22 · 41003 Sevilla", icon: <MapPin className="w-6 h-6" /> },
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
              Hablemos de <br/>
              <span className="text-[#8cd5be]">Tus pies</span>
            </h1>
            <p className="text-xl text-blue-100/60 font-light leading-relaxed">
              Estamos aquí para resolver tus dudas y ayudarte a volver a caminar sin dolor. Contacta con nosotros por el medio que prefieras.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <div className="space-y-12">
                {contactInfo.map((info, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-[#202945] group-hover:bg-[#8cd5be] group-hover:text-white transition-all">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-xs font-black text-[#8cd5be] uppercase tracking-widest mb-1">{info.label}</p>
                      <p className="text-2xl font-bold text-[#202945]">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-20 p-10 bg-gray-50 rounded-[2.5rem] border border-gray-100">
                 <div className="flex items-center gap-4 mb-8">
                    <Clock className="w-8 h-8 text-[#8cd5be]" />
                    <h3 className="text-2xl font-bold tracking-tight">Horario de consulta</h3>
                 </div>
                 <div className="space-y-4">
                    {["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"].map(day => (
                      <div key={day} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-0 font-medium">
                        <span>{day}</span>
                        <span>9:30–14:00, 16:30–21:00</span>
                      </div>
                    ))}
                 </div>
              </div>
            </div>

            <div>
              <div className="bg-white border-2 border-gray-100 p-10 rounded-[3rem] shadow-2xl">
                <h3 className="text-3xl font-bold mb-8 tracking-tight">Envíanos un mensaje</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-sm font-bold text-gray-400 uppercase tracking-wider">Nombre</label>
                       <input type="text" className="w-full bg-gray-50 border-0 rounded-2xl p-4 focus:ring-2 focus:ring-[#8cd5be] outline-none" placeholder="Tu nombre" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-sm font-bold text-gray-400 uppercase tracking-wider">Teléfono</label>
                       <input type="tel" className="w-full bg-gray-50 border-0 rounded-2xl p-4 focus:ring-2 focus:ring-[#8cd5be] outline-none" placeholder="Tu teléfono" />
                    </div>
                  </div>
                  <div className="space-y-2">
                     <label className="text-sm font-bold text-gray-400 uppercase tracking-wider">Email</label>
                     <input type="email" className="w-full bg-gray-50 border-0 rounded-2xl p-4 focus:ring-2 focus:ring-[#8cd5be] outline-none" placeholder="tu@email.com" />
                  </div>
                  <div className="space-y-2">
                     <label className="text-sm font-bold text-gray-400 uppercase tracking-wider">Mensaje</label>
                     <textarea className="w-full bg-gray-50 border-0 rounded-2xl p-4 h-40 focus:ring-2 focus:ring-[#8cd5be] outline-none" placeholder="¿En qué podemos ayudarte?"></textarea>
                  </div>
                  <button className="w-full bg-[#202945] text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-[#1a2138] transition-all">
                    Enviar mensaje <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Width Map */}
      <section className="h-[500px] w-full bg-gray-200 overflow-hidden grayscale relative">
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="bg-white p-6 rounded-3xl shadow-2xl border border-gray-100 flex items-center gap-4 animate-bounce">
                <MapPin className="w-8 h-8 text-[#8cd5be]" />
                <div>
                   <p className="font-black text-[#202945]">Podología Parrilla</p>
                   <p className="text-sm text-gray-400">Arroyo, 22 Sevilla</p>
                </div>
             </div>
          </div>
          <a href="https://maps.google.com/?q=Calle+Arroyo+22+Sevilla" target="_blank" className="absolute inset-0"></a>
      </section>
    </div>
  );
}
