import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CreditCard, CheckCircle2, FileText, TrendingUp, ArrowRight } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Financiacion = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const benefits = [
    {
      title: 'Mínimos Requisitos',
      description: 'Solo con tu DNI y un servicio a tu nombre podés acceder a tu próximo vehículo.',
      icon: <FileText className="text-slate-900" size={32} />
    },
    {
      title: 'Cuotas Fijas',
      description: 'Financiación en pesos con cuotas fijas. Sin sorpresas por inflación.',
      icon: <TrendingUp className="text-slate-900" size={32} />
    },
    {
      title: 'Entrega Inmediata',
      description: 'Retirá tu auto en el momento. Gestión rápida y eficiente.',
      icon: <CheckCircle2 className="text-slate-900" size={32} />
    },
    {
      title: 'Tasa Preferencial',
      description: 'Contamos con convenios bancarios para ofrecerte la mejor tasa del mercado.',
      icon: <CreditCard className="text-slate-900" size={32} />
    }
  ];

  return (
    <div className="pt-24 pb-24 px-6 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div data-aos="fade-right">
            <h1 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter mb-6 leading-tight">
              FINANCIÁ TU <br />
              <span className="text-slate-400">SUEÑO HOY.</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              En Di Parma Motors entendemos que cada cliente es único. Por eso ofrecemos planes de financiación a medida, con las tasas más competitivas y procesos simplificados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://wa.me/5491151547087?text=Hola, quiero consultar por planes de financiación."
                target="_blank"
                className="bg-slate-900 hover:bg-black text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-xl shadow-black/10 text-center"
              >
                Consultar ahora
              </a>
              <Link 
                to="/catalogo"
                className="bg-slate-100 hover:bg-slate-200 text-slate-900 px-8 py-4 rounded-full font-bold text-lg transition-all text-center"
              >
                Ver vehículos
              </Link>
            </div>
          </div>
          <div className="relative" data-aos="fade-left">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://imgur.com/vxI3b0R.jpg" 
                alt="Financiación" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-xs">
              <p className="text-sm font-bold text-slate-900 mb-2">Aprobación en 24hs</p>
              <p className="text-xs text-slate-500">Procesamos tu solicitud de forma inmediata para que no pierdas tiempo.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {benefits.map((benefit, idx) => (
            <div 
              key={idx} 
              className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-red-600 transition-all group"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center text-white overflow-hidden relative" data-aos="zoom-in">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">¿TENÉS UN USADO?</h2>
            <p className="text-slate-400 text-lg mb-10">
              Lo tomamos como parte de pago al mejor valor de mercado. Vení con tu auto y llevate el que siempre quisiste.
            </p>
            <Link 
              to="/consignacion"
              className="inline-flex items-center gap-2 bg-white text-slate-900 px-10 py-4 rounded-full font-bold text-lg transition-all shadow-xl shadow-white/10"
            >
              Cotizar mi auto <ArrowRight size={20} />
            </Link>
          </div>
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600 rounded-full blur-[120px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Financiacion;
