import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, Icon }) => {
  return (
    <div className="group p-8 bg-dark-gray hover:bg-gold/10 transition-all duration-500 cursor-default">
      <Icon className="w-8 h-8 text-gold mb-4 group-hover:scale-110 transition-transform duration-500" />
      <h3 className="text-xl font-light mb-4 tracking-wide">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  );
};

export default ServiceCard;