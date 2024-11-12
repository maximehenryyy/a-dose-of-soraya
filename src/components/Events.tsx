import React from 'react';
import { Calendar, Users, Gift, Music } from 'lucide-react';
import EventCard from './EventCard';

const events = [
  {
    title: "Soirées Privées",
    description: "Des événements sur mesure dans les lieux les plus prestigieux, orchestrés dans les moindres détails pour créer des moments inoubliables.",
    image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&q=80",
    icon: Calendar,
    features: ["Lieux d'exception", "Chef étoilé", "Entertainment personnalisé"]
  },
  {
    title: "Mariages de Luxe",
    description: "Une célébration unique, où chaque détail est pensé pour créer le mariage de vos rêves, de la cérémonie à la réception.",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80",
    icon: Users,
    features: ["Design sur mesure", "Coordination complète", "Services VIP"]
  },
  {
    title: "Lancements Exclusifs",
    description: "Organisation d'événements corporatifs haut de gamme, du lancement de produit aux soirées de gala.",
    image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&q=80",
    icon: Gift,
    features: ["Scénographie unique", "Relations presse", "Invités prestigieux"]
  },
  {
    title: "Festivals Privés",
    description: "Création d'expériences festives personnalisées, mêlant art, musique et gastronomie dans des cadres exceptionnels.",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&q=80",
    icon: Music,
    features: ["Artistes exclusifs", "Décor immersif", "Expériences uniques"]
  }
];

const Events = () => {
  return (
    <section id="events" className="py-24 bg-dark-gray">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title">Événements d'Exception</h2>
          <p className="text-gray-400">
            De l'intime à l'extraordinaire, nous créons des moments uniques qui transcendent l'ordinaire.
            Chaque événement est une œuvre d'art, méticuleusement orchestrée pour émerveiller vos invités.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gold italic mb-8">
            "Chaque événement est une histoire unique qui mérite d'être racontée avec excellence"
          </p>
          <a href="#contact" className="gold-button">
            Planifier votre Événement
          </a>
        </div>
      </div>
    </section>
  );
};

export default Events;