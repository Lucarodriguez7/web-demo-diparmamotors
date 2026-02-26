import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, MessageCircle, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="text-2xl font-bold tracking-tighter mb-6 block">
            DI PARMA <span className="text-white">MOTORS</span>
          </Link>
          <p className="text-slate-400 max-w-md mb-6">
            Concesionaria líder en Villa Lugano. Nos especializamos en la venta, consignación y financiación de vehículos seleccionados con la mayor transparencia del mercado.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-colors">
              <MessageCircle size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">Navegación</h4>
          <ul className="space-y-4 text-slate-400">
            <li><Link to="/" className="hover:text-white transition-colors">Inicio</Link></li>
            <li><Link to="/catalogo" className="hover:text-white transition-colors">Catálogo</Link></li>
            <li><Link to="/financiacion" className="hover:text-white transition-colors">Financiación</Link></li>
            <li><Link to="/consignacion" className="hover:text-white transition-colors">Consignación</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">Contacto</h4>
          <ul className="space-y-4 text-slate-400">
            <li className="flex items-start gap-3">
              <MapPin size={20} className="text-white shrink-0" />
              <span>Villa Lugano, Buenos Aires</span>
            </li>
            <li className="flex items-center gap-3">
              <MessageCircle size={20} className="text-white shrink-0" />
              <span>+54 9 11 5154-7087</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={20} className="text-white shrink-0" />
              <span>diparmamotors@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} Di Parma Motors. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
