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

export function useProducts() {
  return useQuery<Product[]>({
    queryKey: ['products'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/api/products');
      if (!res.ok) throw new Error('Failed to fetch products');
      return res.json();
    },
  });
}

export const categories = [
  { name: 'Women', slug: 'women', count: 6 },
  { name: 'Men', slug: 'men', count: 4 },
  { name: 'Accessories', slug: 'accessories', count: 1 },
];