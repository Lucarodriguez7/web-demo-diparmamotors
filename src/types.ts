import { Type } from "@google/genai";

export interface Vehicle {
  id: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  type: 'SUV' | 'Sedan' | 'Hatchback' | 'Pickup';
  km: number;
  fuel: string;
  transmission: string;
  images: string[];
  description: string;
  featured?: boolean;
}

export interface FinancingOption {
  id: string;
  label: string;
  description: string;
}
