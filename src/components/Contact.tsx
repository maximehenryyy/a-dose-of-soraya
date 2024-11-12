import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title">Contact Privilégié</h2>
          <p className="text-gray-400">
            Votre demande est unique, notre réponse sera personnalisée. 
            Laissez-nous vous accompagner dans la réalisation de vos désirs les plus exclusifs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-12">
            <div className="relative">
              <div className="absolute -inset-1">
                <div className="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-gold via-gold/50 to-transparent"></div>
              </div>
              <div className="relative bg-dark-gray p-8">
                <h3 className="text-xl font-light mb-6 tracking-wide">Informations de Contact</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 text-gold mt-1 mr-4" />
                    <div>
                      <p className="font-light">Email</p>
                      <p className="text-gray-400">contact@adoseofsoraya.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="w-5 h-5 text-gold mt-1 mr-4" />
                    <div>
                      <p className="font-light">Téléphone</p>
                      <p className="text-gray-400">+33 (0)1 XX XX XX XX</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-gold mt-1 mr-4" />
                    <div>
                      <p className="font-light">Adresse</p>
                      <p className="text-gray-400">Paris, France</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-gold mt-1 mr-4" />
                    <div>
                      <p className="font-light">Disponibilité</p>
                      <p className="text-gray-400">Sur rendez-vous uniquement</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-dark-gray p-8">
              <h3 className="text-xl font-light mb-6 tracking-wide">Notre Engagement</h3>
              <p className="text-gray-400 leading-relaxed">
                Chaque demande est traitée avec la plus grande confidentialité. 
                Notre équipe s'engage à vous répondre dans les 24 heures pour 
                débuter l'organisation de votre expérience personnalisée.
              </p>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;