import React, { useState, useEffect } from 'react';
import { Crown, Star, Gem, Globe, LucideIcon } from 'lucide-react';
import ServiceCard from './ServiceCard';

interface ServiceFeature {
  title: string;
  description: string;
}

interface Service {
  title: string;
  description: string;
  icon: string;
  features?: ServiceFeature[];
}

interface ServicesData {
  services: Service[];
}

const iconMap: Record<string, LucideIcon> = {
  Crown,
  Star,
  Gem,
  Globe
};

const defaultServices: Service[] = [
  {
    title: "Lifestyle Personnalisé",
    description: "Un service sur mesure qui s'adapte à votre style de vie, anticipant vos besoins et orchestrant chaque détail de votre quotidien.",
    icon: "Crown"
  },
  {
    title: "Conciergerie de Luxe",
    description: "Accès privilégié aux établissements les plus prestigieux, réservations exclusives et expériences uniques.",
    icon: "Star"
  },
  {
    title: "Événements Privés",
    description: "Organisation d'événements exceptionnels, du concept à la réalisation, avec une attention particulière portée aux moindres détails.",
    icon: "Gem"
  },
  {
    title: "Service International",
    description: "Une présence mondiale pour vous accompagner partout, avec des partenaires d'excellence dans les plus grandes villes.",
    icon: "Globe"
  }
];

const Services = () => {
  const [services, setServices] = useState<Service[]>(defaultServices);

  useEffect(() => {
    const loadServices = async () => {
      try {
        const response = await fetch('/content/services/services.json');
        if (response.ok) {
          const data: ServicesData = await response.json();
          if (Array.isArray(data.services)) {
            setServices(data.services);
          } else {
            console.warn('Services data is not in expected format');
          }
        }
      } catch (error) {
        console.warn('Error loading services:', error);
      }
    };

    loadServices();
  }, []);

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
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              Icon={iconMap[service.icon]}
              title={service.title}
              description={service.description}
              features={service.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;