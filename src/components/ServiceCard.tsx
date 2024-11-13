import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  features?: {
    title: string;
    description: string;
  }[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, Icon, features }) => {
  return (
    <div className="group p-8 bg-dark-gray hover:bg-gold/10 transition-all duration-500 cursor-default">
      <Icon className="w-8 h-8 text-gold mb-4 group-hover:scale-110 transition-transform duration-500" />
      <h3 className="text-xl font-light mb-4 tracking-wide">{title}</h3>
      <p className="text-gray-400 leading-relaxed mb-6">{description}</p>
      
      {features && features.length > 0 && (
        <div className="space-y-4 mt-6 pt-6 border-t border-gray-800">
          {features.map((feature, index) => (
            <div key={index} className="space-y-2">
              <h4 className="text-sm font-medium text-gold">{feature.title}</h4>
              <p className="text-sm text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ServiceCard;