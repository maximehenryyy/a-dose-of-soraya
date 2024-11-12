import React from 'react';
import { LucideIcon } from 'lucide-react';

interface EventCardProps {
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
  features: string[];
}

const EventCard: React.FC<EventCardProps> = ({ title, description, image, icon: Icon, features }) => {
  return (
    <div className="group bg-black overflow-hidden">
      <div className="relative h-64">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500" />
        <div className="absolute top-4 left-4 bg-gold/90 p-2 rounded-full">
          <Icon className="w-6 h-6 text-black" />
        </div>
      </div>
      
      <div className="p-8">
        <h3 className="text-2xl font-light mb-4 tracking-wide">{title}</h3>
        <p className="text-gray-400 mb-6 leading-relaxed">{description}</p>
        
        <div className="space-y-2">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center">
              <span className="w-1.5 h-1.5 bg-gold rounded-full mr-3"></span>
              <span className="text-sm text-gray-300">{feature}</span>
            </div>
          ))}
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-800">
          <button className="text-gold text-sm uppercase tracking-wider hover:text-white transition-colors duration-300 flex items-center group">
            Découvrir
            <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;