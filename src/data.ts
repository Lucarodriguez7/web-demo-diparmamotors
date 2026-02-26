import { Vehicle } from './types';

export const VEHICLES: Vehicle[] = [
  {
    id: '1',
    brand: 'Audi',
    model: ' A4 2.0 T FSI QUATTRO',
    year: 2017,
    price: 33500,
    type: 'Sedan',
    km: 120000,
    fuel: 'Diesel',
    transmission: 'Automática',
    images: [
      'https://imgur.com/GiuQtHh.jpg',
      'https://picsum.photos/seed/hilux2/800/600',
      'https://picsum.photos/seed/hilux3/800/600'
    ],
    description: 'Excelente estado, único dueño. Todos los servicios oficiales. Cubiertas nuevas, listo para transferir, aceptamos permutas de nuestro interés.',
    featured: true
  },
  {
    id: '2',
    brand: 'KIA',
    model: 'Sportage Ex 2.0 A/T 4X2',
    year: 2020,
    price: 23000,
    type: 'Pickup',
    km: 80000,
    fuel: 'Diesel',
    transmission: 'Automática DSG',
    images: [
      
      'https://imgur.com/b6KlsK2.jpg'
    ],
    description: 'Impecable estado, service al día. Cubiertas nuevas.',
    featured: true
  },
  {
    id: '3',
    brand: 'Citroen',
    model: 'C3',
    year: 2023,
    price: 38500,
    type: 'SUV',
    km: 12000,
    fuel: 'Nafta',
    transmission: 'Automática',
    images: [
      'https://imgur.com/zLQBdFR.jpg',
      'https://picsum.photos/seed/compass2/800/600'
    ],
    description: 'Prácticamente nueva. Garantía de fábrica vigente.',
    featured: true
  },
  {
    id: '4',
    brand: 'Citroen',
    model: 'C3',
    year: 2022,
    price: 19500,
    type: 'Hatchback',
    km: 22000,
    fuel: 'Nafta',
    transmission: 'Automática',
    images: [
      'https://imgur.com/CL3eZuA.jpg',
      'https://picsum.photos/seed/208-2/800/600'
    ],
    description: 'Full equipo, techo panorámico, cámara 360.'
  },
  {
    id: '5',
    brand: 'Volkswagen',
    model: 'Golf 1.6 Trendline',
    year: 2016,
    price: 14000,
    type: 'Hatchback',
    km: 139000,
    fuel: 'Diesel',
    transmission: 'Automática',
    images: [
      'https://imgur.com/VWhI7WD.jpg'
    ],
    description: 'Lista para trabajar o viajar. Muy cuidada.'
  },
  {
    id: '6',
    brand: 'Ford',
    model: 'Ranger DC 4X4 LTD AT 3.2L',
    year: 2018,
    price: 24000,
    type: 'Pickup',
    km: 170000,
    fuel: 'Nafta',
    transmission: 'Automática',
    images: [
      'https://imgur.com/rTqwWmI.jpg'
    ],
    description: 'Tecnología OnStar, WiFi nativo, excelente consumo.'
  }
];
