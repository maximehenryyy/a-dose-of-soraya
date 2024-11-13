import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

interface HeroContent {
  title: string;
  subtitle: string;
  description: string;
  carousel: Array<{
    image: string;
    title: string;
  }>;
}

const defaultContent: HeroContent = {
  title: "Les Portes du Songe",
  subtitle: "Entrez dans un univers où l'imaginaire et le luxe se rencontrent",
  description: "L'imagination peut ouvrir toutes les portes. Nous vous offrons la clé.",
  carousel: [
    {
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80",
      title: "Luxury Experience 1"
    },
    {
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80",
      title: "Luxury Experience 2"
    },
    {
      image: "https://images.unsplash.com/photo-1590073844006-33379778ae09?auto=format&fit=crop&q=80",
      title: "Luxury Experience 3"
    }
  ]
};

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [content, setContent] = useState<HeroContent>(defaultContent);

  useEffect(() => {
    fetch('/content/home/main.md')
      .then(response => response.text())
      .then(text => {
        const matches = text.match(/---([\s\S]*?)---/);
        if (matches && matches[1]) {
          const frontmatter = matches[1].trim().split('\n').reduce((acc: any, line) => {
            const [key, ...valueParts] = line.split(':');
            if (key && valueParts.length) {
              const value = valueParts.join(':').trim();
              try {
                if (key.trim() === 'carousel') {
                  // Parse YAML array format
                  const carouselItems = value.split('\n')
                    .filter(item => item.includes('-'))
                    .map(item => {
                      const [_, ...itemContent] = item.split('-');
                      const itemStr = itemContent.join('-').trim();
                      const [image, title] = itemStr.split('\n')
                        .map(s => s.trim())
                        .filter(Boolean)
                        .map(s => s.replace(/^(image|title):\s*["']?([^"']*)["']?$/, '$2'));
                      return { image, title };
                    });
                  acc[key.trim()] = carouselItems;
                } else {
                  acc[key.trim()] = value.replace(/^["']|["']$/g, '');
                }
              } catch (e) {
                console.warn(`Error parsing ${key}:`, e);
                acc[key.trim()] = value;
              }
            }
            return acc;
          }, {} as HeroContent);

          if (frontmatter.carousel?.length > 0) {
            setContent(prevContent => ({
              ...prevContent,
              ...frontmatter,
              carousel: Array.isArray(frontmatter.carousel) ? frontmatter.carousel : defaultContent.carousel
            }));
          }
        }
      })
      .catch(error => {
        console.warn('Error fetching hero content:', error);
      });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % content.carousel.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [content.carousel]);

  return (
    <section className="relative h-screen">
      <div className="absolute inset-0">
        {content.carousel.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentImage === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
        ))}
      </div>

      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-light mb-6 tracking-wider fade-in">
              {content.title}
            </h1>
            <p className="text-xl md:text-2xl font-light mb-8 tracking-wide fade-in">
              {content.subtitle}
            </p>
            <p className="text-lg mb-12 text-gray-200 fade-in">
              {content.description}
            </p>
            <a 
              href="#services" 
              className="gold-button inline-flex items-center group fade-in"
            >
              Découvrez nos services
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;