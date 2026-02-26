import React, { useEffect } from 'react';
import { Camera, Search, Handshake, DollarSign, ArrowRight, CheckCircle2 } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Consignacion = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const steps = [
    {
      title: 'Inspección',
      description: 'Revisamos tu vehículo para asegurar que cumpla con nuestros estándares de calidad.',
      icon: <Search size={32} />
    },
    {
      title: 'Producción',
      description: 'Realizamos fotos y videos profesionales para destacar cada detalle de tu auto.',
      icon: <Camera size={32} />
    },
    {
      title: 'Publicación',
      description: 'Publicamos en los portales más importantes y en nuestras redes sociales.',
      icon: <Handshake size={32} />
    },
    {
      title: 'Venta',
      description: 'Nos encargamos de las consultas y visitas. Vos solo recibís el dinero.',
      icon: <DollarSign size={32} />
    }
  ];

  return (
    <div className="pt-24 pb-24 px-6 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20" data-aos="fade-up">
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter mb-6 leading-tight">
            VENDEMOS TU AUTO <br />
            <span className="text-slate-400">POR VOS.</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Dejanos tu vehículo en consignación y despreocupate. Nos encargamos de todo el proceso de venta con la seriedad que nos caracteriza.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {steps.map((step, idx) => (
            <div 
              key={idx} 
              className="relative p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center font-black text-lg shadow-lg">
                {idx + 1}
              </div>
              <div className="text-slate-900 mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="order-2 lg:order-1" data-aos="fade-right">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 tracking-tight">BENEFICIOS DE ELEGIRNOS</h2>
            <div className="space-y-6">
              {[
                'Seguridad total en la operación.',
                'Exposición máxima en redes y portales.',
                'Gestoría propia para transferencias rápidas.',
                'Asesoramiento comercial constante.',
                'Tomamos permutas para facilitar la venta.'
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="text-slate-700 font-medium">{text}</span>
                </div>
              ))}
            </div>
            <div className="mt-12">
              <a 
                href="https://wa.me/5491151547087?text=Hola, quiero dejar mi auto en consignación."
                target="_blank"
                className="inline-flex items-center gap-2 bg-slate-900 text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-xl shadow-black/10"
              >
                Empezar ahora <ArrowRight size={20} />
              </a>
            </div>
          </div>
          <div className="order-1 lg:order-2" data-aos="fade-left">
            <div className="rounded-[3rem] overflow-hidden shadow-2xl rotate-2">
              <img 
                src="https://imgur.com/QIbOT0r.jpg" 
                alt="Consignación" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consignacion;
