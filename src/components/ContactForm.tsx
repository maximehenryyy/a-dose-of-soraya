import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-dark-gray p-8">
      <div className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-light text-gray-300 mb-2">
            Nom Complet
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-black border border-gray-800 text-white px-4 py-3 focus:outline-none focus:border-gold transition-colors"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-light text-gray-300 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-black border border-gray-800 text-white px-4 py-3 focus:outline-none focus:border-gold transition-colors"
            required
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-light text-gray-300 mb-2">
            Téléphone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full bg-black border border-gray-800 text-white px-4 py-3 focus:outline-none focus:border-gold transition-colors"
          />
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-light text-gray-300 mb-2">
            Service Souhaité
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full bg-black border border-gray-800 text-white px-4 py-3 focus:outline-none focus:border-gold transition-colors"
            required
          >
            <option value="">Sélectionnez un service</option>
            <option value="lifestyle">Lifestyle Personnalisé</option>
            <option value="conciergerie">Conciergerie de Luxe</option>
            <option value="events">Événements Privés</option>
            <option value="wellness">Bien-être & Art de Vivre</option>
            <option value="mystical">Expériences Mystiques</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-light text-gray-300 mb-2">
            Votre Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            className="w-full bg-black border border-gray-800 text-white px-4 py-3 focus:outline-none focus:border-gold transition-colors resize-none"
            required
          ></textarea>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="gold-button w-full md:w-auto"
          >
            Envoyer votre Demande
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;