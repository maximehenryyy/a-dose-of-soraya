import React from 'react';
import { LucideIcon } from 'lucide-react';

interface MysticalCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
  reversed?: boolean;
}

const MysticalCard: React.FC<MysticalCardProps> = ({ icon: Icon, title, description, image, reversed }) => {
  return (
    <div className={`group flex flex-col md:flex-row ${reversed ? 'md:flex-row-reverse' : ''} bg-dark-gray overflow-hidden h-full`}>
      <div className="relative w-full md:w-1/2 h-72 md:h-auto">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-500" />
      </div>
      
      <div className="w-full md:w-1/2 p-8 flex flex-col justify-center items-center text-center md:items-start md:text-left">
        <div className="mb-6 flex items-center">
          <Icon className="w-6 h-6 text-gold mr-3" />
          <h3 className="text-xl font-light tracking-wide">{title}</h3>
        </div>
        <p className="text-gray-400 leading-relaxed max-w-md">{description}</p>
        <div className="mt-6">
          <button className="text-gold text-sm uppercase tracking-wider hover:text-white transition-colors duration-300 flex items-center group">
            En savoir plus
            <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MysticalCard;