import React from 'react';

interface WellnessCardProps {
  image: string;
  title: string;
  description: string;
}

const WellnessCard: React.FC<WellnessCardProps> = ({ image, title, description }) => {
  return (
    <div className="group relative overflow-hidden">
      <div className="relative h-0 pb-[75%]">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500" />
      </div>
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <h3 className="text-xl font-light mb-2 tracking-wide">{title}</h3>
        <p className="text-gray-300 text-sm transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
          {description}
        </p>
      </div>
    </div>
  );
};

export default WellnessCard;