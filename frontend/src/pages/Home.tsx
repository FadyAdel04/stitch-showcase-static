import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import ProductCard from '@/components/ProductCard';
import { useProducts, categories, Product } from '@/data/products';
import heroImage from '@/assets/hero-image.jpg';
import { ArrowRight, Star, Truck, Shield, RotateCcw } from 'lucide-react';

const Home = () => {
  const { data: products = [], isLoading, isError } = useProducts();

  // Featured: first 3 new products
  const featuredProducts = useMemo(() =>
    products.filter(p => p.isNew).slice(0, 3),
    [products]
  );
  // Trending: first 4 products
  const trendingProducts = useMemo(() =>
    products.slice(0, 4),
    [products]
  );

  const testimonials = [
    {
      name: "Sarah Chen",
      comment: "Absolutely love the quality and attention to detail. The fit is perfect!",
      rating: 5
    },
    {
      name: "Marcus Thompson",
      comment: "Finally found a brand that combines style with comfort. Highly recommend!",
      rating: 5
    },
    {
      name: "Elena Rodriguez",
      comment: "The materials are luxurious and the designs are timeless. Worth every penny.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-charcoal/30"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <Badge variant="outline" className="bg-background/80 text-charcoal border-charcoal mb-6">
            New Collection 2024
          </Badge>
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-6 leading-tight">
            Timeless
            <br />
            <span className="text-sage-light">Elegance</span>
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Discover our curated collection of sophisticated pieces designed for the modern lifestyle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/products">
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="minimal" size="xl" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-charcoal">
              Explore Collection
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charcoal mb-4">
              Shop by Category
            </h2>
            <p className="text-warm-gray max-w-2xl mx-auto">
              Explore our carefully curated collections designed for every occasion and lifestyle.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link
                key={category.slug}
                to={`/products?category=${category.slug}`}
                className="group relative aspect-[4/5] rounded-lg overflow-hidden shadow-soft hover:shadow-medium transition-smooth"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent z-10" />
                <div className="absolute inset-0 bg-sage-light group-hover:scale-105 transition-smooth" />
                <div className="absolute bottom-6 left-6 z-20">
                  <h3 className="text-2xl font-playfair font-bold text-white mb-2">
                    {category.name}
                  </h3>
                  <p className="text-white/80 text-sm">
                    {category.count} items
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charcoal mb-4">
              New Arrivals
            </h2>
            <p className="text-warm-gray max-w-2xl mx-auto">
              Fresh styles crafted with care and attention to detail.
            </p>
          </div>
          {isLoading ? (
            <div className="text-center py-12">Loading products...</div>
          ) : isError ? (
            <div className="text-center py-12 text-red-500">Failed to load products.</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
          <div className="text-center">
            <Button variant="outline" size="lg" asChild>
              <Link to="/products">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trending Products */}
      <section className="py-20 bg-sage-light/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charcoal mb-4">
              Trending Now
            </h2>
            <p className="text-warm-gray max-w-2xl mx-auto">
              Our most loved pieces this season.
            </p>
          </div>
          {isLoading ? (
            <div className="text-center py-12">Loading products...</div>
          ) : isError ? (
            <div className="text-center py-12 text-red-500">Failed to load products.</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {trendingProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-sage-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-sage" />
              </div>
              <h3 className="font-semibold text-charcoal mb-2">Free Shipping</h3>
              <p className="text-warm-gray text-sm">Free shipping on orders over $100</p>
            </div>
            <div className="text-center">
              <div className="bg-sage-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <RotateCcw className="h-8 w-8 text-sage" />
              </div>
              <h3 className="font-semibold text-charcoal mb-2">Easy Returns</h3>
              <p className="text-warm-gray text-sm">30-day return policy</p>
            </div>
            <div className="text-center">
              <div className="bg-sage-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-sage" />
              </div>
              <h3 className="font-semibold text-charcoal mb-2">Quality Guarantee</h3>
              <p className="text-warm-gray text-sm">Premium materials and craftsmanship</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-4">
              What Our Customers Say
            </h2>
            <p className="text-warm-gray max-w-2xl mx-auto">
              Join thousands of satisfied customers who love our products.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-background/5 rounded-lg p-6 backdrop-blur-sm">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-white mb-4 italic">"{testimonial.comment}"</p>
                <p className="text-sage font-medium">— {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charcoal mb-4">
            Stay in the Loop
          </h2>
          <p className="text-warm-gray mb-8 max-w-2xl mx-auto">
            Be the first to know about new arrivals, exclusive offers, and style inspiration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1"
            />
            <Button variant="sage" size="default">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;