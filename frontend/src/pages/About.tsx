import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold text-charcoal mb-6">
            Our Story
          </h1>
          <p className="text-xl text-warm-gray max-w-3xl mx-auto">
            Founded on the belief that exceptional design and sustainable practices can coexist beautifully.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-playfair font-bold text-charcoal mb-6">
                Timeless Design, Conscious Creation
              </h2>
              <p className="text-warm-gray mb-6">
                At Aurora, we believe that true style transcends trends. Our mission is to create clothing that not only looks beautiful but also stands the test of time, both in design and construction.
              </p>
              <p className="text-warm-gray mb-6">
                Every piece in our collection is thoughtfully designed with attention to detail, quality materials, and ethical manufacturing practices. We're committed to creating fashion that you'll love wearing for years to come.
              </p>
              <Button variant="sage" size="lg" asChild>
                <Link to="/products">Explore Our Collection</Link>
              </Button>
            </div>
            <div className="aspect-[4/3] bg-sage-light rounded-lg"></div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-sage-light/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-playfair font-bold text-charcoal mb-4">
              Our Values
            </h2>
            <p className="text-warm-gray max-w-2xl mx-auto">
              These principles guide every decision we make and every piece we create.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-sage rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">Q</span>
              </div>
              <h3 className="font-playfair font-semibold text-xl text-charcoal mb-3">
                Quality First
              </h3>
              <p className="text-warm-gray">
                We source the finest materials and work with skilled artisans to ensure every piece meets our exacting standards.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-sage rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <h3 className="font-playfair font-semibold text-xl text-charcoal mb-3">
                Sustainability
              </h3>
              <p className="text-warm-gray">
                Environmental responsibility is at the heart of our business, from sourcing to packaging.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-sage rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <h3 className="font-playfair font-semibold text-xl text-charcoal mb-3">
                Timeless Style
              </h3>
              <p className="text-warm-gray">
                We create pieces that transcend seasonal trends, designed to be loved and worn for years.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-playfair font-bold text-charcoal mb-4">
              Meet Our Team
            </h2>
            <p className="text-warm-gray max-w-2xl mx-auto">
              The passionate individuals behind Aurora, dedicated to bringing you exceptional fashion.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="aspect-square bg-sage-light rounded-lg mb-4"></div>
              <h3 className="font-semibold text-charcoal mb-1">Sarah Chen</h3>
              <p className="text-warm-gray text-sm mb-2">Creative Director</p>
              <p className="text-warm-gray text-sm">
                With over 15 years in fashion design, Sarah brings a unique vision that blends modern aesthetics with timeless appeal.
              </p>
            </div>
            
            <div className="text-center">
              <div className="aspect-square bg-sage-light rounded-lg mb-4"></div>
              <h3 className="font-semibold text-charcoal mb-1">Marcus Rodriguez</h3>
              <p className="text-warm-gray text-sm mb-2">Sustainability Lead</p>
              <p className="text-warm-gray text-sm">
                Marcus ensures our commitment to ethical practices and environmental responsibility in every aspect of our business.
              </p>
            </div>
            
            <div className="text-center">
              <div className="aspect-square bg-sage-light rounded-lg mb-4"></div>
              <h3 className="font-semibold text-charcoal mb-1">Elena Kim</h3>
              <p className="text-warm-gray text-sm mb-2">Head of Production</p>
              <p className="text-warm-gray text-sm">
                Elena oversees our manufacturing partnerships and ensures the highest quality standards in every piece we create.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-playfair font-bold text-white mb-6">
            Join Our Journey
          </h2>
          <p className="text-warm-gray mb-8 max-w-2xl mx-auto">
            Be part of a community that values quality, sustainability, and timeless style.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="sage" size="lg" asChild>
              <Link to="/products">Shop Now</Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-charcoal">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;