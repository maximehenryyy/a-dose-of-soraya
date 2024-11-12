import React from 'react';
import WellnessCard from './WellnessCard';

const wellnessServices = [
  {
    image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80',
    title: 'Méditation & Relaxation',
    description: 'Des séances personnalisées pour retrouver équilibre et sérénité dans votre quotidien.'
  },
  {
    image: 'https://images.unsplash.com/photo-1591343395082-e120087004b4?auto=format&fit=crop&q=80',
    title: 'Lithothérapie',
    description: 'Découvrez le pouvoir des pierres pour harmoniser votre énergie et votre bien-être.'
  },
  {
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80',
    title: 'Yoga Exclusif',
    description: 'Des cours privés adaptés à vos besoins, dans un cadre d\'exception.'
  },
  {
    image: 'https://images.unsplash.com/photo-1583416750470-965b2707b355?auto=format&fit=crop&q=80',
    title: 'Art de Vivre',
    description: 'Un accompagnement holistique pour cultiver l\'excellence dans tous les aspects de votre vie.'
  }
];

const Wellness = () => {
  return (
    <section id="wellness" className="py-24 bg-dark-gray">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title">Bien-être & Art de Vivre</h2>
          <p className="text-gray-400">
            Découvrez une approche holistique du bien-être, où chaque expérience est conçue pour 
            nourrir corps et esprit. Notre philosophie allie traditions ancestrales et innovations modernes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {wellnessServices.map((service, index) => (
            <WellnessCard key={index} {...service} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="#contact" className="gold-button">
            Réserver une Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Wellness;