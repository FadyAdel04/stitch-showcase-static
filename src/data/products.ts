import blazerImage from '@/assets/product-blazer.jpg';
import sweaterImage from '@/assets/product-sweater.jpg';
import dressImage from '@/assets/product-dress.jpg';
import trenchImage from '@/assets/product-trench.jpg';
import shirtImage from '@/assets/product-shirt.jpg';
import skirtImage from '@/assets/product-skirt.jpg';
import jeansImage from '@/assets/product-jeans.jpg';
import turtleneckImage from '@/assets/product-turtleneck.jpg';
import handbagImage from '@/assets/product-handbag.jpg';

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