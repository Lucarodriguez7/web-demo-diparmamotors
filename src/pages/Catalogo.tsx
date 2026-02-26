import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, Filter, X, ChevronLeft, Info, Phone, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { VEHICLES } from '../data';
import VehicleCard from '../components/VehicleCard';
import FinancingSelector from '../components/FinancingSelector';
import { formatPrice, cn } from '../utils';

const Catalogo = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<string>(searchParams.get('type') || 'Todos');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const vehicleId = searchParams.get('id');
  const selectedVehicle = useMemo(() => 
    vehicleId ? VEHICLES.find(v => v.id === vehicleId) : null
  , [vehicleId]);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    const typeFromUrl = searchParams.get('type');
    if (typeFromUrl) setSelectedType(typeFromUrl);
    // Reset active image when vehicle changes
    setActiveImageIndex(0);
  }, [searchParams, vehicleId]);

  const filteredVehicles = useMemo(() => {
    return VEHICLES.filter(v => {
      const matchesSearch = (v.brand + ' ' + v.model).toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = selectedType === 'Todos' || v.type === selectedType;
      return matchesSearch && matchesType;
    });
  }, [searchTerm, selectedType]);

  const similarVehicles = useMemo(() => {
    if (!selectedVehicle) return [];
    return VEHICLES.filter(v => 
      v.id !== selectedVehicle.id && 
      (v.type === selectedVehicle.type || v.brand === selectedVehicle.brand)
    ).slice(0, 3);
  }, [selectedVehicle]);

  const types = ['Todos', 'SUV', 'Sedan', 'Hatchback', 'Pickup'];

  if (selectedVehicle) {
    return (
      <div className="pt-24 pb-24 px-6 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto">
          <button 
            onClick={() => setSearchParams({})}
            className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-bold mb-8 transition-colors"
          >
            <ChevronLeft size={20} /> Volver al catálogo
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Galería */}
            <div className="space-y-4" data-aos="fade-right">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-slate-100 border border-slate-200">
                <img 
                  src={selectedVehicle.images[activeImageIndex]} 
                  alt={selectedVehicle.model} 
                  className="w-full h-full object-cover transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {selectedVehicle.images.map((img, idx) => (
                  <button 
                    key={idx} 
                    onClick={() => setActiveImageIndex(idx)}
                    className={cn(
                      "aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 border transition-all",
                      activeImageIndex === idx ? "border-slate-900 ring-2 ring-slate-900 ring-offset-2" : "border-slate-200 opacity-60 hover:opacity-100"
                    )}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            </div>

            {/* Info */}
            <div data-aos="fade-left">
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-slate-900 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                    {selectedVehicle.type}
                  </span>
                  <span className="text-slate-400 font-bold">{selectedVehicle.year}</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-2">
                  {selectedVehicle.brand} {selectedVehicle.model}
                </h1>
                <p className="text-3xl font-black text-slate-900">{formatPrice(selectedVehicle.price)}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <p className="text-xs text-slate-500 font-bold uppercase mb-1">Kilometraje</p>
                  <p className="text-lg font-bold text-slate-900">{selectedVehicle.km.toLocaleString()} km</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <p className="text-xs text-slate-500 font-bold uppercase mb-1">Combustible</p>
                  <p className="text-lg font-bold text-slate-900">{selectedVehicle.fuel}</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <p className="text-xs text-slate-500 font-bold uppercase mb-1">Transmisión</p>
                  <p className="text-lg font-bold text-slate-900">{selectedVehicle.transmission}</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <p className="text-xs text-slate-500 font-bold uppercase mb-1">Ubicación</p>
                  <p className="text-lg font-bold text-slate-900">Villa Lugano</p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <Info size={20} className="text-slate-900" /> Descripción
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {selectedVehicle.description}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={`https://wa.me/5491151547087?text=Hola, estoy interesado en el ${selectedVehicle.brand} ${selectedVehicle.model}`}
                  target="_blank"
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-green-600/20"
                >
                  <MessageCircle size={20} /> WhatsApp
                </a>
                <a 
                  href="tel:+5491151547087"
                  className="flex-1 bg-slate-900 hover:bg-black text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-black/20"
                >
                  <Phone size={20} /> Llamar ahora
                </a>
              </div>
            </div>
          </div>

          {/* Financiación Section */}
          <div className="mb-24" data-aos="fade-up">
            <FinancingSelector vehicleName={`${selectedVehicle.brand} ${selectedVehicle.model}`} onSelect={() => {}} />
          </div>

          {/* Similares */}
          {similarVehicles.length > 0 && (
            <div data-aos="fade-up">
              <h2 className="text-2xl font-black text-slate-900 mb-8 tracking-tight">VEHÍCULOS SIMILARES</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {similarVehicles.map(v => (
                  <VehicleCard key={v.id} vehicle={v} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-24 px-6 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-black text-slate-900 tracking-tighter mb-2">CATÁLOGO</h1>
            <p className="text-slate-500">Explorá nuestras unidades seleccionadas</p>
          </div>

          <div className="flex w-full md:w-auto gap-3">
            <div className="relative flex-grow md:w-64">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Buscar marca o modelo..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-2xl border border-slate-200 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 outline-none transition-all bg-white"
              />
            </div>
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className={cn(
                "p-3 rounded-2xl border transition-all flex items-center gap-2 font-bold",
                isFilterOpen ? "bg-slate-900 text-white border-slate-900" : "bg-white text-slate-600 border-slate-200"
              )}
            >
              <Filter size={18} />
              <span className="hidden sm:inline">Filtros</span>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isFilterOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white p-6 rounded-3xl border border-slate-200 mb-12 shadow-sm"
            >
              <div className="flex flex-wrap gap-3">
                {types.map(type => (
                  <button
                    key={type}
                    onClick={() => {
                      setSelectedType(type);
                      setSearchParams(type === 'Todos' ? {} : { type });
                    }}
                    className={cn(
                      "px-6 py-2 rounded-full text-sm font-bold transition-all",
                      selectedType === type
                        ? "bg-slate-900 text-white"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    )}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {filteredVehicles.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVehicles.map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-white rounded-3xl border border-dashed border-slate-300">
            <X size={48} className="mx-auto text-slate-300 mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">No encontramos resultados</h3>
            <p className="text-slate-500">Probá ajustando los filtros o la búsqueda.</p>
            <button 
              onClick={() => {
                setSearchTerm('');
                setSelectedType('Todos');
                setSearchParams({});
              }}
              className="mt-6 text-slate-900 font-bold hover:underline"
            >
              Limpiar filtros
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Catalogo;
