import React from 'react';
import { Sparkle, Moon, Compass, Stars } from 'lucide-react';
import MysticalCard from './MysticalCard';

const mysticalExperiences = [
  {
    icon: Sparkle,
    title: "Voyance & Divination",
    description: "Consultations privées avec des médiums et voyants d'exception, sélectionnés pour leur don authentique et leur discrétion absolue.",
    image: "https://images.unsplash.com/photo-1631016800696-5ea8801b3c2a?auto=format&fit=crop&q=80"
  },
  {
    icon: Moon,
    title: "Rituels Énergétiques",
    description: "Cérémonies personnalisées pour purifier les énergies, renforcer votre aura et harmoniser votre espace de vie.",
    image: "https://images.unsplash.com/photo-1507290439931-a861b5a38200?auto=format&fit=crop&q=80"
  },
  {
    icon: Compass,
    title: "Retraites Spirituelles",
    description: "Séjours exclusifs dans des lieux sacrés, accompagnés par des guides spirituels de renom.",
    image: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?auto=format&fit=crop&q=80"
  },
  {
    icon: Stars,
    title: "Astrologie de Luxe",
    description: "Analyses astrologiques approfondies et thèmes astraux détaillés par nos experts pour éclairer vos choix de vie.",
    image: "https://images.unsplash.com/photo-1532968961962-8a0cb3a2d4f5?auto=format&fit=crop&q=80"
  }
];

const Mystical = () => {
  return (
    <section id="mystical" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title">Expériences Mystiques</h2>
          <p className="text-gray-400">
            Explorez les mystères de l'univers à travers nos expériences ésotériques exclusives. 
            Un voyage unique où luxe et spiritualité se rencontrent pour éveiller vos sens et votre conscience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mysticalExperiences.map((experience, index) => (
            <MysticalCard key={index} {...experience} reversed={index % 2 !== 0} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gold italic mb-8">
            "L'invisible guide nos pas vers la lumière de la connaissance"
          </p>
          <a href="#contact" className="gold-button">
            Réserver une Expérience
          </a>
        </div>
      </div>
    </section>
  );
};

export default Mystical;