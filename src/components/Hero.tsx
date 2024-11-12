import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

const images = [
  'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1590073844006-33379778ae09?auto=format&fit=crop&q=80'
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen">
      {/* Background Carousel */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentImage === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Luxury lifestyle ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-light mb-6 tracking-wider fade-in">
              Les Portes du Songe
            </h1>
            <p className="text-xl md:text-2xl font-light mb-8 tracking-wide fade-in">
              Entrez dans un univers où l'imaginaire et le luxe se rencontrent
            </p>
            <p className="text-lg mb-12 text-gray-200 fade-in">
              L'imagination peut ouvrir toutes les portes. Nous vous offrons la clé.
            </p>
            <a 
              href="#services" 
              className="gold-button inline-flex items-center group fade-in"
            >
              Découvrez nos services
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;