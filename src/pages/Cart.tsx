import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { products } from '@/data/products';
import { Minus, Plus, X, ArrowLeft } from 'lucide-react';

const Cart = () => {
  // Mock cart items - in real app this would come from state management
  const cartItems = [
    { ...products[0], quantity: 2, selectedSize: 'M', selectedColor: 'Charcoal' },
    { ...products[2], quantity: 1, selectedSize: 'S', selectedColor: 'Sage' },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 100 ? 0 : 15;
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-16">
            <h1 className="text-3xl font-playfair font-bold text-charcoal mb-4">
              Your Cart is Empty
            </h1>
            <p className="text-warm-gray mb-8">
              Looks like you haven't added anything to your cart yet.
            </p>
            <Button variant="sage" size="lg" asChild>
              <Link to="/products">Continue Shopping</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link to="/products" className="flex items-center text-warm-gray hover:text-charcoal transition-smooth mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Continue Shopping
          </Link>
          <h1 className="text-3xl font-playfair font-bold text-charcoal">
            Shopping Cart ({cartItems.length} items)
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <div key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} className="bg-card rounded-lg shadow-soft p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-30 object-cover rounded-md"
                    />
                  </div>
                  
                  <div className="flex-1 space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-charcoal">{item.name}</h3>
                        <p className="text-warm-gray text-sm">
                          Size: {item.selectedSize} | Color: {item.selectedColor}
                        </p>
                        <p className="text-lg font-semibold text-charcoal mt-2">
                          ${item.price}
                        </p>
                      </div>
                      <Button variant="ghost" size="icon">
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Button variant="outline" size="icon">
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="text-lg font-medium w-8 text-center">
                          {item.quantity}
                        </span>
                        <Button variant="outline" size="icon">
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      <p className="text-lg font-bold text-charcoal">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-lg shadow-soft p-6 sticky top-8">
              <h2 className="text-xl font-playfair font-bold text-charcoal mb-6">
                Order Summary
              </h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-warm-gray">Subtotal</span>
                  <span className="font-semibold">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-warm-gray">Shipping</span>
                  <span className="font-semibold">
                    {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                {shipping === 0 && (
                  <Badge variant="default" className="bg-sage text-white">
                    Free shipping unlocked!
                  </Badge>
                )}
                {shipping > 0 && (
                  <p className="text-xs text-warm-gray">
                    Add ${(100 - subtotal).toFixed(2)} more for free shipping
                  </p>
                )}
                <div className="border-t pt-4">
                  <div className="flex justify-between">
                    <span className="text-lg font-semibold">Total</span>
                    <span className="text-lg font-bold">${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              
              <Button variant="sage" size="lg" className="w-full mb-4" asChild>
                <Link to="/checkout">Proceed to Checkout</Link>
              </Button>
              
              <Button variant="outline" size="lg" className="w-full" asChild>
                <Link to="/products">Continue Shopping</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;