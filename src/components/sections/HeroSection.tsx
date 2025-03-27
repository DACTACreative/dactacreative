
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
}

const HeroSection = ({
  subtitle,
  ctaText = "Explore Our Services",
  ctaLink = "/dashboards"
}: HeroSectionProps) => {
  return (
    <section className="relative overflow-hidden pb-16 pt-32 md:pt-36 md:pb-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-dacta-accent/5 to-transparent -z-10" />
      
      {/* Animated shape for background interest */}
      <div className="absolute top-1/4 -right-64 w-96 h-96 rounded-full bg-dacta-accent/5 blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 -left-64 w-96 h-96 rounded-full bg-gray-900/5 blur-3xl animate-pulse-slow" />
      
      <div className="page-container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 animate-slide-down">
            DACTA Creative
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-dacta-accent mb-6 animate-slide-down" style={{ animationDelay: '0.1s' }}>
            ALL THINGS DATA
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {subtitle}
          </p>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Link
              to={ctaLink}
              className="inline-flex items-center px-6 py-3 rounded-full bg-gray-900 text-white hover:bg-dacta-accent transition-colors duration-300 shadow-sm hover:shadow-md"
            >
              {ctaText}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
