import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { products } from '@/data/products';
import { ArrowLeft, CreditCard, Lock } from 'lucide-react';

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  
  // Mock cart items
  const cartItems = [
    { ...products[0], quantity: 2, selectedSize: 'M', selectedColor: 'Charcoal' },
    { ...products[2], quantity: 1, selectedSize: 'S', selectedColor: 'Sage' },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 100 ? 0 : 15;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Order placed');
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link to="/cart" className="flex items-center text-warm-gray hover:text-charcoal transition-smooth mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Cart
          </Link>
          <h1 className="text-3xl font-playfair font-bold text-charcoal">
            Checkout
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Checkout Form */}
          <div className="space-y-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Contact Information */}
              <div className="bg-card rounded-lg shadow-soft p-6">
                <h2 className="text-xl font-semibold text-charcoal mb-4">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  <Input type="email" placeholder="Email address" required />
                  <div className="flex items-center space-x-2">
                    <Checkbox id="newsletter" />
                    <label htmlFor="newsletter" className="text-sm text-warm-gray">
                      Email me with news and offers
                    </label>
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div className="bg-card rounded-lg shadow-soft p-6">
                <h2 className="text-xl font-semibold text-charcoal mb-4">
                  Shipping Address
                </h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input placeholder="First name" required />
                    <Input placeholder="Last name" required />
                  </div>
                  <Input placeholder="Address" required />
                  <Input placeholder="Apartment, suite, etc. (optional)" />
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Input placeholder="City" required />
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="State" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ny">New York</SelectItem>
                        <SelectItem value="ca">California</SelectItem>
                        <SelectItem value="tx">Texas</SelectItem>
                        <SelectItem value="fl">Florida</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input placeholder="ZIP code" required />
                  </div>
                </div>
              </div>

              {/* Shipping Method */}
              <div className="bg-card rounded-lg shadow-soft p-6">
                <h2 className="text-xl font-semibold text-charcoal mb-4">
                  Shipping Method
                </h2>
                <div className="space-y-3">
                  <div className="border border-border rounded-md p-3 flex justify-between items-center">
                    <div>
                      <div className="flex items-center space-x-2">
                        <input type="radio" name="shipping" value="standard" defaultChecked />
                        <span className="font-medium">Standard Shipping</span>
                      </div>
                      <p className="text-sm text-warm-gray ml-6">5-7 business days</p>
                    </div>
                    <span className="font-semibold">Free</span>
                  </div>
                  <div className="border border-border rounded-md p-3 flex justify-between items-center">
                    <div>
                      <div className="flex items-center space-x-2">
                        <input type="radio" name="shipping" value="express" />
                        <span className="font-medium">Express Shipping</span>
                      </div>
                      <p className="text-sm text-warm-gray ml-6">2-3 business days</p>
                    </div>
                    <span className="font-semibold">$15.00</span>
                  </div>
                </div>
              </div>

              {/* Payment */}
              <div className="bg-card rounded-lg shadow-soft p-6">
                <h2 className="text-xl font-semibold text-charcoal mb-4">
                  Payment Information
                </h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      className={`p-3 border rounded-md flex items-center justify-center space-x-2 ${
                        paymentMethod === 'card' ? 'border-sage bg-sage-light' : 'border-border'
                      }`}
                      onClick={() => setPaymentMethod('card')}
                    >
                      <CreditCard className="h-4 w-4" />
                      <span>Credit Card</span>
                    </button>
                    <button
                      type="button"
                      className={`p-3 border rounded-md flex items-center justify-center space-x-2 ${
                        paymentMethod === 'paypal' ? 'border-sage bg-sage-light' : 'border-border'
                      }`}
                      onClick={() => setPaymentMethod('paypal')}
                    >
                      <span>PayPal</span>
                    </button>
                  </div>

                  {paymentMethod === 'card' && (
                    <div className="space-y-4">
                      <Input placeholder="Card number" required />
                      <div className="grid grid-cols-2 gap-4">
                        <Input placeholder="MM / YY" required />
                        <Input placeholder="CVC" required />
                      </div>
                      <Input placeholder="Name on card" required />
                    </div>
                  )}

                  <div className="flex items-center space-x-2">
                    <Checkbox id="billing" />
                    <label htmlFor="billing" className="text-sm text-warm-gray">
                      Billing address is the same as shipping address
                    </label>
                  </div>
                </div>
              </div>

              <Button type="submit" variant="sage" size="lg" className="w-full">
                <Lock className="h-4 w-4 mr-2" />
                Complete Order
              </Button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-lg shadow-soft p-6 sticky top-8">
              <h2 className="text-xl font-playfair font-bold text-charcoal mb-6">
                Order Summary
              </h2>
              
              {/* Cart Items */}
              <div className="space-y-4 mb-6">
                {cartItems.map((item) => (
                  <div key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} className="flex space-x-3">
                    <div className="relative">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-20 object-cover rounded-md"
                      />
                      <span className="absolute -top-2 -right-2 bg-sage text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                        {item.quantity}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-charcoal text-sm">{item.name}</h4>
                      <p className="text-xs text-warm-gray">
                        {item.selectedSize} / {item.selectedColor}
                      </p>
                      <p className="font-semibold text-charcoal">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Totals */}
              <div className="space-y-3 border-t pt-4">
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
                <div className="flex justify-between">
                  <span className="text-warm-gray">Tax</span>
                  <span className="font-semibold">${tax.toFixed(2)}</span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between">
                    <span className="text-lg font-semibold">Total</span>
                    <span className="text-lg font-bold">${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;