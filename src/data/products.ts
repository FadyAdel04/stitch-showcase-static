export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  description: string;
  rating: number;
  reviews: number;
  sizes: string[];
  colors: string[];
  isNew?: boolean;
  care: string[];
  material: string;
}

import { useQuery } from '@tanstack/react-query';
import productsData from './products.json';
import categoriesData from './categories.json';

export function useProducts() {
  return useQuery<Product[]>({
    queryKey: ['products'],
    queryFn: async () => {
      // Simulate a small delay to mimic API behavior
      await new Promise(resolve => setTimeout(resolve, 100));
      return productsData as Product[];
    },
  });
}

export const categories = categoriesData;