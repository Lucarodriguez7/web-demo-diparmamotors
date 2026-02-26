import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Gauge, Fuel } from 'lucide-react';
import { Vehicle } from '../types';
import { formatPrice } from '../utils';

interface VehicleCardProps {
  vehicle: Vehicle;
}

const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle }) => {
  return (
    <Link
      to={`/catalogo?id=${vehicle.id}`}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full"
      data-aos="fade-up"
    >
     <div className="relative aspect-[4/3] overflow-hidden">
  <img
    src={vehicle.images[0]}
    alt={`${vehicle.brand} ${vehicle.model}`}
    className="w-full h-full object-cover object-bottom transition-transform duration-500 group-hover:scale-110"
    referrerPolicy="no-referrer"
  />
  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-slate-900">
    {vehicle.type}
  </div>
</div>

      <div className="p-5 flex flex-col flex-grow">
        <div className="mb-4">
          <h3 className="text-lg font-bold text-slate-900 group-hover:text-slate-600 transition-colors">
            {vehicle.brand} {vehicle.model}
          </h3>
          <p className="text-2xl font-black text-slate-900 mt-1">
            {formatPrice(vehicle.price)}
          </p>
        </div>

        <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-50 mt-auto">
          <div className="flex flex-col items-center text-slate-500">
            <Calendar size={16} className="mb-1" />
            <span className="text-xs font-medium">{vehicle.year}</span>
          </div>
          <div className="flex flex-col items-center text-slate-500 border-x border-slate-100">
            <Gauge size={16} className="mb-1" />
            <span className="text-xs font-medium">{vehicle.km.toLocaleString()} km</span>
          </div>
          <div className="flex flex-col items-center text-slate-500">
            <Fuel size={16} className="mb-1" />
            <span className="text-xs font-medium truncate w-full text-center">{vehicle.fuel}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VehicleCard;
