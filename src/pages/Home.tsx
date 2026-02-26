import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Shield, Star, Users, ArrowRight, Car, Truck, LayoutGrid, Timer, Instagram, MapPin, Clock } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import VehicleCard from '../components/VehicleCard';
import { VEHICLES } from '../data';

const Home = () => {
  const navigate = useNavigate();
  const featuredVehicles = VEHICLES.filter(v => v.featured);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  const vehicleTypes = [
    { name: 'SUV', icon: <Car size={32} />, filter: 'SUV' },
    { name: 'Sedan', icon: <Car size={32} />, filter: 'Sedan' },
    { name: 'Hatchback', icon: <Car size={32} />, filter: 'Hatchback' },
    { name: 'Pickup', icon: <Truck size={32} />, filter: 'Pickup' },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center px-6">
        <div className="absolute inset-0 z-0">
          <img
            src="https://imgur.com/lQcU4dw.jpg"
            alt="Hero Background"
            className="w-full h-full object-cover brightness-[0.4]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent hidden md:block" />
          <div className="absolute inset-0 bg-black/40 md:hidden" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full" data-aos="fade-up">
          <div className="max-w-2xl text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 leading-tight">
              TU PRÓXIMO AUTO <br />
              <span className="text-white underline decoration-slate-500 underline-offset-8">EMPIEZA ACÁ.</span>
            </h1>
            <p className="text-base md:text-lg text-slate-300 mb-8 max-w-lg mx-auto md:mx-0 font-medium leading-relaxed">
              En Di Parma Motors combinamos transparencia, seriedad y la mejor atención personalizada de Villa Lugano.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                to="/catalogo"
                className="group bg-white text-slate-900 px-7 py-3 md:px-10 md:py-4 rounded-full font-bold text-base md:text-lg transition-all shadow-xl shadow-white/5 flex items-center justify-center gap-2 hover:bg-slate-100 hover:scale-105 active:scale-95"
              >
                Ver Catálogo
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/consignacion"
                className="bg-white/5 hover:bg-white/10 backdrop-blur-md text-white border border-white/20 px-7 py-3 md:px-10 md:py-4 rounded-full font-bold text-base md:text-lg transition-all flex items-center justify-center gap-2 hover:scale-105 active:scale-95"
              >
                Vender mi Auto
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Banners de Inicio */}
      <section className="py-12 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900 text-white p-8 rounded-3xl flex flex-col justify-between h-64" data-aos="fade-up">
            <h3 className="text-2xl font-black leading-tight">NUEVOS <br /> INGRESOS</h3>
            <p className="text-slate-400 text-sm">Unidades seleccionadas que acaban de entrar a nuestro stock.</p>
            <Link to="/catalogo" className="text-white font-bold flex items-center gap-2 mt-4">Ver ahora <ArrowRight size={16} /></Link>
          </div>
          <div className="bg-white text-slate-900 p-8 rounded-3xl border border-slate-200 flex flex-col justify-between h-64" data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-2xl font-black leading-tight">MEJORES <br /> PRECIOS</h3>
            <p className="text-slate-500 text-sm">Oportunidades únicas con valores competitivos de mercado.</p>
            <Link to="/catalogo" className="text-slate-900 font-bold flex items-center gap-2 mt-4">Explorar <ArrowRight size={16} /></Link>
          </div>
          <div className="bg-slate-200 text-slate-900 p-8 rounded-3xl flex flex-col justify-between h-64" data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-2xl font-black leading-tight">ENTREGA <br /> INMEDIATA</h3>
            <p className="text-slate-600 text-sm">Documentación lista para transferir y retirar en el día.</p>
            <Link to="/financiacion" className="text-slate-900 font-bold flex items-center gap-2 mt-4">Consultar <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* Diferenciales */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight uppercase">¿Por qué elegirnos?</h2>
            <div className="w-20 h-1.5 bg-slate-900 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center" data-aos="fade-up" data-aos-delay="100">
              <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center text-slate-900 mx-auto mb-6 shadow-sm border border-slate-100">
                <Shield size={40} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Seriedad</h3>
              <p className="text-slate-600 leading-relaxed">
                Operaciones seguras y transparentes. Documentación al día garantizada en cada unidad.
              </p>
            </div>
            <div className="text-center" data-aos="fade-up" data-aos-delay="200">
              <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center text-slate-900 mx-auto mb-6 shadow-sm border border-slate-100">
                <Star size={40} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Transparencia</h3>
              <p className="text-slate-600 leading-relaxed">
                Sin sorpresas ni costos ocultos. Te mostramos el estado real de cada vehículo.
              </p>
            </div>
            <div className="text-center" data-aos="fade-up" data-aos-delay="300">
              <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center text-slate-900 mx-auto mb-6 shadow-sm border border-slate-100">
                <Users size={40} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Atención Personalizada</h3>
              <p className="text-slate-600 leading-relaxed">
                Te asesoramos para que encuentres el auto que realmente se adapta a tus necesidades.
              </p>
            </div>
          </div>
        </div>
      </section>

{/* Instagram Section */}
<section className="py-24 px-6 bg-slate-900 text-white overflow-hidden">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
    
    {/* Texto */}
    <div data-aos="fade-right">
      <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter leading-tight">
        ¿TODAVÍA NO <br /> NOS SEGUÍS?
      </h2>
      <p className="text-slate-400 text-lg mb-10 leading-relaxed max-w-xl">
        Unite a nuestra comunidad en Instagram y no te pierdas ninguna de nuestras novedades,
        lanzamientos exclusivos y autos de todas las gamas.
      </p>
      <a
        href="https://instagram.com/diparma.motors"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 bg-white text-slate-900 px-10 py-4 rounded-full font-bold text-lg transition-all hover:bg-slate-200"
      >
        <Instagram size={24} />
        Seguir en Instagram
      </a>
    </div>

    {/* Imagen Instagram */}
    <div
      className="relative flex justify-center lg:justify-center -translate-x-6 lg:-translate-x-12"
      data-aos="fade-left"
    >
      <img
        src="https://imgur.com/8JfRF9G.jpg"
        alt="Instagram Community"
        referrerPolicy="no-referrer"
        className="
          w-auto
          h-auto
          max-w-[260px]
          md:max-w-[300px]
          lg:max-w-[340px]
          rotate-6
          drop-shadow-2xl
        "
      />

      {/* Badge */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 md:-left-6 md:translate-x-0 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-white">
            <Instagram size={20} />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-900">@diparma.motors</p>
            <p className="text-[10px] text-slate-500">Villa Lugano, BA</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>
      {/* Selector de Tipo */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight uppercase">Buscá por categoría</h2>
            <p className="text-slate-500">Encontrá el estilo que mejor te define</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {vehicleTypes.map((type, idx) => (
              <button
                key={type.name}
                onClick={() => navigate(`/catalogo?type=${type.filter}`)}
                className="group bg-white p-8 rounded-3xl border border-slate-200 hover:border-slate-900 hover:shadow-xl transition-all duration-300 text-center"
                data-aos="zoom-in"
                data-aos-delay={idx * 100}
              >
                <div className="text-slate-400 group-hover:text-slate-900 transition-colors mb-4 flex justify-center">
                  {type.icon}
                </div>
                <span className="text-lg font-bold text-slate-900">{type.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Vehicles */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12" data-aos="fade-up">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-2 tracking-tight uppercase">Destacados</h2>
              <p className="text-slate-500">Unidades seleccionadas por su estado impecable</p>
            </div>
            <Link to="/catalogo" className="text-slate-900 font-bold flex items-center gap-2 hover:gap-3 transition-all">
              Ver todos <ArrowRight size={20} />
            </Link>
          </div>

          <div className="flex overflow-x-auto pb-6 md:grid md:grid-cols-3 gap-8 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0">
            {featuredVehicles.map((vehicle) => (
              <div key={vehicle.id} className="min-w-[280px] sm:min-w-[320px] md:min-w-0 snap-center">
                <VehicleCard vehicle={vehicle} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ubicación Section (Inferred from incomplete request) */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div data-aos="fade-right">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 tracking-tight uppercase">Nuestra Ubicación</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-200 flex items-center justify-center text-slate-900 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Villa Lugano</p>
                  <p className="text-slate-500">Buenos Aires, Argentina</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-200 flex items-center justify-center text-slate-900 shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Horarios de Atención</p>
                  <p className="text-slate-500">Lunes a Viernes: 09:00 - 19:00</p>
                  <p className="text-slate-500">Sábados: 09:00 - 14:00</p>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <a 
                href="https://maps.google.com" 
                target="_blank"
                className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-bold transition-all hover:bg-black"
              >
                Cómo llegar <ArrowRight size={20} />
              </a>
            </div>
          </div>
          <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white" data-aos="fade-left">
            <img 
              src="https://imgur.com/OJKJWft.jpg" 
              alt="Ubicación Di Parma Motors" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Banners Informativos - Rediseñados */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Banner Financiación */}
          <div 
            className="relative h-[500px] rounded-[2.5rem] overflow-hidden group shadow-2xl"
            data-aos="fade-right"
          >
            <img 
              src="https://imgur.com/tyHZprV.jpg" 
              alt="Financiación Di Parma" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
            
            <div className="absolute inset-0 p-10 flex flex-col justify-end">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 w-fit px-4 py-1 rounded-full mb-4">
                <span className="text-white text-[10px] font-bold tracking-widest uppercase">Planes a medida</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tighter leading-tight">
                FINANCIACIÓN <br /> EXCLUSIVA
              </h3>
              <p className="text-slate-300 mb-8 max-w-sm font-medium">
                Accedé a tu próximo vehículo con cuotas fijas y la tasa más competitiva del mercado.
              </p>
              <Link 
                to="/financiacion" 
                className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-slate-100 transition-all w-fit group/btn"
              >
                Ver planes
                <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Banner Consignación */}
          <div 
            className="relative h-[500px] rounded-[2.5rem] overflow-hidden group shadow-2xl"
            data-aos="fade-left"
          >
            <img 
              src="https://imgur.com/0yAPaFz.jpg" 
              alt="Consignación Di Parma" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
            
            <div className="absolute inset-0 p-10 flex flex-col justify-end">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 w-fit px-4 py-1 rounded-full mb-4">
                <span className="text-white text-[10px] font-bold tracking-widest uppercase">Gestión integral</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tighter leading-tight">
                VENDEMOS <br /> TU AUTO
              </h3>
              <p className="text-slate-300 mb-8 max-w-sm font-medium">
                Despreocupate de todo. Nosotros nos encargamos de vender tu vehículo al mejor precio.
              </p>
              <Link 
                to="/consignacion" 
                className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-black transition-all w-fit group/btn"
              >
                Vender ahora
                <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

