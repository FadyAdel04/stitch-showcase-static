import blazerImage from '@/assets/product-blazer.jpg';
import sweaterImage from '@/assets/product-sweater.jpg';
import dressImage from '@/assets/product-dress.jpg';

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

export const products: Product[] = [
  {
    id: '1',
    name: 'Structured Wool Blazer',
    price: 189,
    originalPrice: 249,
    image: blazerImage,
    category: 'women',
    description: 'A timeless wool blazer crafted for the modern woman. Features a tailored fit with subtle shoulder padding and sophisticated lapels.',
    rating: 4.8,
    reviews: 124,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Charcoal', 'Navy', 'Camel'],
    isNew: false,
    care: ['Dry clean only', 'Store hanging', 'Steam to refresh'],
    material: '85% Wool, 15% Polyester'
  },
  {
    id: '2',
    name: 'Merino Wool Sweater',
    price: 95,
    image: sweaterImage,
    category: 'men',
    description: 'Luxuriously soft merino wool sweater with a relaxed fit. Perfect for layering or wearing solo.',
    rating: 4.6,
    reviews: 89,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Cream', 'Sage', 'Charcoal'],
    isNew: true,
    care: ['Hand wash cold', 'Lay flat to dry', 'Store folded'],
    material: '100% Merino Wool'
  },
  {
    id: '3',
    name: 'Sage Silk Midi Dress',
    price: 156,
    image: dressImage,
    category: 'women',
    description: 'Elegant silk dress in our signature sage color. Features a flattering midi length and subtle draping.',
    rating: 4.9,
    reviews: 203,
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Sage', 'Cream', 'Dusty Rose'],
    isNew: true,
    care: ['Dry clean recommended', 'Can hand wash', 'Iron on low heat'],
    material: '100% Silk'
  },
  {
    id: '4',
    name: 'Cotton Linen Shirt',
    price: 78,
    image: sweaterImage, // Placeholder - you can generate more specific images
    category: 'men',
    description: 'Breathable cotton-linen blend shirt with a classic collar and relaxed fit.',
    rating: 4.4,
    reviews: 67,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['White', 'Sage', 'Navy'],
    isNew: false,
    care: ['Machine wash cold', 'Tumble dry low', 'Iron while damp'],
    material: '60% Cotton, 40% Linen'
  },
  {
    id: '5',
    name: 'Cashmere Cardigan',
    price: 225,
    originalPrice: 275,
    image: blazerImage, // Placeholder
    category: 'women',
    description: 'Luxurious cashmere cardigan with mother-of-pearl buttons and ribbed trim.',
    rating: 4.7,
    reviews: 156,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Cream', 'Charcoal', 'Camel'],
    isNew: false,
    care: ['Hand wash only', 'Lay flat to dry', 'Store with cedar'],
    material: '100% Cashmere'
  },
  {
    id: '6',
    name: 'Tailored Trousers',
    price: 112,
    image: dressImage, // Placeholder
    category: 'women',
    description: 'High-waisted tailored trousers with a straight leg and pressed crease.',
    rating: 4.5,
    reviews: 91,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Charcoal', 'Navy', 'Sage'],
    isNew: true,
    care: ['Dry clean preferred', 'Steam to refresh', 'Store hanging'],
    material: '70% Wool, 30% Polyester'
  }
];

export const categories = [
  { name: 'Women', slug: 'women', count: 4 },
  { name: 'Men', slug: 'men', count: 2 },
  { name: 'Accessories', slug: 'accessories', count: 0 },
];

export const featuredProducts = products.filter(p => p.isNew).slice(0, 3);
export const trendingProducts = products.slice(0, 4);