import React from 'react';
import { Crown, Star, Gem, Globe } from 'lucide-react';
import ServiceCard from './ServiceCard';

const Services = () => {
  return (
    <section id="services" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Services d'Exception</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Une gamme complète de services personnalisés pour répondre à vos désirs les plus exigeants.
            Chaque expérience est méticuleusement conçue pour dépasser vos attentes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard
            Icon={Crown}
            title="Lifestyle Personnalisé"
            description="Un service sur mesure qui s'adapte à votre style de vie, anticipant vos besoins et orchestrant chaque détail de votre quotidien."
          />
          <ServiceCard
            Icon={Star}
            title="Conciergerie de Luxe"
            description="Accès privilégié aux établissements les plus prestigieux, réservations exclusives et expériences uniques."
          />
          <ServiceCard
            Icon={Gem}
            title="Événements Privés"
            description="Organisation d'événements exceptionnels, du concept à la réalisation, avec une attention particulière portée aux moindres détails."
          />
          <ServiceCard
            Icon={Globe}
            title="Service International"
            description="Une présence mondiale pour vous accompagner partout, avec des partenaires d'excellence dans les plus grandes villes."
          />
        </div>
      </div>
    </section>
  );
};

export default Services;