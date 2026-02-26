import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, ChevronRight } from 'lucide-react';
import { cn } from '../utils';

interface FinancingSelectorProps {
  vehicleName: string;
  onSelect: (option: string, installments: number) => void;
}

const FinancingSelector: React.FC<FinancingSelectorProps> = ({ vehicleName, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState<'contado' | 'financiado' | 'anticipo'>('contado');
  const [installments, setInstallments] = useState<number>(12);

  const options = [
    { id: 'contado', label: 'Contado', description: 'Pago total al momento de la entrega.' },
    { id: 'financiado', label: 'Financiado', description: 'Financiación bancaria o prendaria.' },
    { id: 'anticipo', label: 'Anticipo + Cuotas', description: 'Entrega tu usado o efectivo y financia el resto.' },
  ];

  const installmentOptions = [12, 24, 36, 48];

  const handleWhatsApp = () => {
    const optionLabel = options.find(o => o.id === selectedOption)?.label;
    const message = `Hola, estoy interesado en el vehículo ${vehicleName} publicado en Di Parma Motors.
Opción de financiación: ${optionLabel}${selectedOption !== 'contado' ? ` (${installments} cuotas)` : ''}.
Quedo atento, gracias.`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5491151547087?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="bg-slate-50 rounded-3xl p-6 md:p-8 border border-slate-200">
      <h3 className="text-xl font-bold text-slate-900 mb-6">Opciones de Financiación</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => setSelectedOption(option.id as any)}
            className={cn(
              "text-left p-5 rounded-2xl border-2 transition-all duration-200 relative overflow-hidden",
              selectedOption === option.id 
                ? "border-slate-900 bg-white shadow-md" 
                : "border-transparent bg-white/50 hover:bg-white"
            )}
          >
            {selectedOption === option.id && (
              <div className="absolute top-2 right-2 text-slate-900">
                <Check size={20} />
              </div>
            )}
            <p className="font-bold text-slate-900 mb-1">{option.label}</p>
            <p className="text-xs text-slate-500 leading-relaxed">{option.description}</p>
          </button>
        ))}
      </div>

      {selectedOption !== 'contado' && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="mb-8"
        >
          <p className="text-sm font-bold text-slate-700 mb-4">Seleccionar Cuotas</p>
          <div className="flex flex-wrap gap-3">
            {installmentOptions.map((num) => (
              <button
                key={num}
                onClick={() => setInstallments(num)}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-bold transition-all",
                  installments === num
                    ? "bg-slate-900 text-white"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-slate-400"
                )}
              >
                {num} cuotas
              </button>
            ))}
          </div>
        </motion.div>
      )}

      <button
        onClick={handleWhatsApp}
        className="w-full bg-slate-900 hover:bg-black text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-black/20"
      >
        Consultar por WhatsApp
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default FinancingSelector;
