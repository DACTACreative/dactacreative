
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
}

const HeroSection = ({
  title,
  subtitle,
  ctaText = "Explore Our Services",
  ctaLink = "/dashboards"
}: HeroSectionProps) => {
  return (
    <section className="relative overflow-hidden pb-16 pt-24 md:pt-32 md:pb-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-dacta-light-blue/50 to-transparent -z-10" />
      
      {/* Animated shape for background interest */}
      <div className="absolute top-1/4 -right-64 w-96 h-96 rounded-full bg-dacta-neon-blue/5 blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 -left-64 w-96 h-96 rounded-full bg-dacta-blue/5 blur-3xl animate-pulse-slow" />
      
      <div className="page-container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="animate-slide-down font-semibold text-dacta-blue mb-6">
            {title}
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {subtitle}
          </p>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Link
              to={ctaLink}
              className="inline-flex items-center px-6 py-3 rounded-full bg-dacta-blue text-white hover:bg-dacta-neon-blue transition-colors duration-300 shadow-sm hover:shadow-md"
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
