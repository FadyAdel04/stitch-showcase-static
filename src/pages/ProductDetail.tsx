import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';
import { useWishlist } from '@/contexts/WishlistContext';
import { useToast } from '@/hooks/use-toast';
import ProductCard from '@/components/ProductCard';
import { useProducts } from '@/data/products';
import { Heart, Star, ArrowLeft, Plus, Minus, Truck, RotateCcw, Shield } from 'lucide-react';
import { getImageUrl } from '@/lib/utils';

const ProductDetail = () => {
  const { id } = useParams();
  const { addItem } = useCart();
  const { addItem: addToWishlist, removeItem: removeFromWishlist, isInWishlist } = useWishlist();
  const { toast } = useToast();
  const { data: products = [], isLoading, isError } = useProducts();
  const product = useMemo(() => products.find(p => p.id === id), [products, id]);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);

  const relatedProducts = useMemo(() =>
    product ? products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4) : [],
    [products, product]
  );
  const isOnSale = product && product.originalPrice && product.originalPrice > product.price;
  const inWishlist = product ? isInWishlist(product.id) : false;

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading product...</div>;
  }

  if (isError || !product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-charcoal mb-4">Product not found</h1>
          <Link to="/products">
            <Button variant="outline">Back to Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast({
        title: "Please select a size",
        description: "You need to select a size before adding to cart.",
        variant: "destructive",
      });
      return;
    }
    if (!selectedColor) {
      toast({
        title: "Please select a color",
        description: "You need to select a color before adding to cart.",
        variant: "destructive",
      });
      return;
    }
    addItem(product, selectedSize, selectedColor, quantity);
    toast({
      title: "Added to cart!",
      description: `${product.name} (${selectedSize}, ${selectedColor}) has been added to your cart.`,
    });
  };

  const handleWishlistToggle = () => {
    if (inWishlist) {
      removeFromWishlist(product.id);
      toast({
        title: "Removed from wishlist",
        description: `${product.name} has been removed from your wishlist.`,
      });
    } else {
      addToWishlist(product);
      toast({
        title: "Added to wishlist!",
        description: `${product.name} has been added to your wishlist.`,
      });
    }
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link to="/products" className="flex items-center text-warm-gray hover:text-charcoal transition-smooth">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Products
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-medium">
              <img
                src={getImageUrl(product.image)}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              {product.isNew && (
                <Badge variant="default" className="bg-sage text-white mb-4">
                  New Arrival
                </Badge>
              )}
              <h1 className="text-3xl md:text-4xl font-playfair font-bold text-charcoal mb-4">
                {product.name}
              </h1>
              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-warm-gray">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
              {/* Price */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl font-bold text-charcoal">
                  ${product.price}
                </span>
                {isOnSale && (
                  <span className="text-xl text-warm-gray line-through">
                    ${product.originalPrice}
                  </span>
                )}
                {isOnSale && (
                  <Badge variant="destructive">
                    Save ${product.originalPrice! - product.price}
                  </Badge>
                )}
              </div>
              <p className="text-warm-gray mb-6">
                {product.description}
              </p>
            </div>
            {/* Size Selection */}
            <div>
              <h3 className="font-semibold text-charcoal mb-3">Size</h3>
              <div className="flex gap-2">
                {product.sizes.map((size) => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>
            {/* Color Selection */}
            <div>
              <h3 className="font-semibold text-charcoal mb-3">Color</h3>
              <div className="flex gap-2">
                {product.colors.map((color) => (
                  <Button
                    key={color}
                    variant={selectedColor === color ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedColor(color)}
                  >
                    {color}
                  </Button>
                ))}
              </div>
            </div>
            {/* Quantity */}
            <div>
              <h3 className="font-semibold text-charcoal mb-3">Quantity</h3>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="text-lg font-medium w-12 text-center">
                  {quantity}
                </span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
            {/* Add to Cart */}
            <div className="space-y-4">
              <Button variant="sage" size="lg" className="w-full" onClick={handleAddToCart}>
                Add to Cart - ${(product.price * quantity).toFixed(2)}
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full"
                onClick={handleWishlistToggle}
              >
                <Heart className={`h-4 w-4 mr-2 ${inWishlist ? 'fill-current text-red-500' : ''}`} />
                {inWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
              </Button>
            </div>
            {/* Features */}
            <div className="space-y-3 pt-6 border-t border-border">
              <div className="flex items-center gap-3">
                <Truck className="h-5 w-5 text-sage" />
                <span className="text-sm text-warm-gray">Free shipping on orders over $100</span>
              </div>
              <div className="flex items-center gap-3">
                <RotateCcw className="h-5 w-5 text-sage" />
                <span className="text-sm text-warm-gray">30-day easy returns</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-sage" />
                <span className="text-sm text-warm-gray">2-year quality guarantee</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mb-16">
          <div className="bg-card rounded-lg shadow-soft p-6">
            <h3 className="font-playfair font-bold text-xl text-charcoal mb-4">
              Product Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-charcoal mb-2">Material</h4>
                <p className="text-warm-gray text-sm">{product.material}</p>
              </div>
              <div>
                <h4 className="font-semibold text-charcoal mb-2">Care Instructions</h4>
                <ul className="text-warm-gray text-sm space-y-1">
                  {product.care.map((instruction, index) => (
                    <li key={index}>• {instruction}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h3 className="text-2xl font-playfair font-bold text-charcoal mb-8">
              You Might Also Like
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;