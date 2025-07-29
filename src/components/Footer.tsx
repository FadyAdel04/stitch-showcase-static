import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Instagram, 
  Twitter, 
  Facebook, 
  Mail,
  MapPin,
  Phone
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Newsletter Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-playfair font-semibold mb-4">
            Stay Updated
          </h3>
          <p className="text-warm-gray mb-6 max-w-md mx-auto">
            Subscribe to our newsletter for the latest collections and exclusive offers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your email"
              className="bg-background/10 border-warm-gray text-cream placeholder:text-warm-gray"
            />
            <Button variant="sage" size="default">
              Subscribe
            </Button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h4 className="text-xl font-playfair font-bold mb-4">AURORA</h4>
            <p className="text-warm-gray text-sm mb-4">
              Crafting timeless pieces that blend sophistication with modern elegance.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-warm-gray hover:text-sage">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-warm-gray hover:text-sage">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-warm-gray hover:text-sage">
                <Facebook className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/products" className="text-warm-gray hover:text-sage transition-smooth">All Products</Link></li>
              <li><Link to="/products?category=women" className="text-warm-gray hover:text-sage transition-smooth">Women</Link></li>
              <li><Link to="/products?category=men" className="text-warm-gray hover:text-sage transition-smooth">Men</Link></li>
              <li><Link to="/products?category=accessories" className="text-warm-gray hover:text-sage transition-smooth">Accessories</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/contact" className="text-warm-gray hover:text-sage transition-smooth">Contact Us</Link></li>
              <li><a href="#" className="text-warm-gray hover:text-sage transition-smooth">Size Guide</a></li>
              <li><a href="#" className="text-warm-gray hover:text-sage transition-smooth">Shipping & Returns</a></li>
              <li><a href="#" className="text-warm-gray hover:text-sage transition-smooth">FAQ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-sage" />
                <span className="text-warm-gray">123 Fashion St, NY 10001</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-sage" />
                <span className="text-warm-gray">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-sage" />
                <span className="text-warm-gray">hello@aurora.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-warm-gray/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-warm-gray text-sm">
            © 2024 AURORA. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-warm-gray hover:text-sage text-sm transition-smooth">
              Privacy Policy
            </a>
            <a href="#" className="text-warm-gray hover:text-sage text-sm transition-smooth">
              Terms of Service
            </a>
            <a href="#" className="text-warm-gray hover:text-sage text-sm transition-smooth">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;