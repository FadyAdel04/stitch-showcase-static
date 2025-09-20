import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-playfair font-bold text-charcoal mb-4">
            Get in Touch
          </h1>
          <p className="text-warm-gray max-w-2xl mx-auto">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card rounded-lg shadow-soft p-8">
            <h2 className="text-2xl font-playfair font-bold text-charcoal mb-6">
              Send us a Message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-charcoal mb-2">
                    First Name
                  </label>
                  <Input id="firstName" type="text" required />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-charcoal mb-2">
                    Last Name
                  </label>
                  <Input id="lastName" type="text" required />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                  Email
                </label>
                <Input id="email" type="email" required />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-charcoal mb-2">
                  Subject
                </label>
                <Input id="subject" type="text" required />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  rows={6} 
                  placeholder="Tell us how we can help you..."
                  required 
                />
              </div>
              
              <Button type="submit" variant="sage" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-playfair font-bold text-charcoal mb-6">
                Contact Information
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-sage mt-1" />
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Address</h3>
                    <p className="text-warm-gray">
                      123 Fashion Street<br />
                      New York, NY 10001<br />
                      United States
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-sage mt-1" />
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Phone</h3>
                    <p className="text-warm-gray">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-sage mt-1" />
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Email</h3>
                    <p className="text-warm-gray">hello@aurora.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-sage mt-1" />
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Business Hours</h3>
                    <div className="text-warm-gray text-sm space-y-1">
                      <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                      <p>Saturday: 10:00 AM - 6:00 PM</p>
                      <p>Sunday: 12:00 PM - 5:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div>
              <h3 className="font-semibold text-charcoal mb-4">Find Us</h3>
              <div className="aspect-[4/3] bg-sage-light rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-sage mx-auto mb-4" />
                  <p className="text-warm-gray">Interactive Map</p>
                  <p className="text-sm text-warm-gray">123 Fashion Street, NY</p>
                </div>
              </div>
            </div>

            {/* FAQ Quick Links */}
            <div className="bg-sage-light/20 rounded-lg p-6">
              <h3 className="font-semibold text-charcoal mb-4">Quick Help</h3>
              <div className="space-y-3">
                <a href="#" className="block text-sm text-warm-gray hover:text-sage transition-smooth">
                  Size Guide & Fit Information
                </a>
                <a href="#" className="block text-sm text-warm-gray hover:text-sage transition-smooth">
                  Shipping & Returns Policy
                </a>
                <a href="#" className="block text-sm text-warm-gray hover:text-sage transition-smooth">
                  Care Instructions
                </a>
                <a href="#" className="block text-sm text-warm-gray hover:text-sage transition-smooth">
                  Track Your Order
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;