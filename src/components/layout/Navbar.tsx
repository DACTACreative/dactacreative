
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Dashboards & Analytics', path: '/dashboards' },
  { name: 'GIS Mapping', path: '/gis-mapping' },
  { name: 'Automation', path: '/automation' },
  { name: 'MEL Solutions', path: '/mel-solutions' },
  { name: 'Contact', path: '/contact' }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out',
        scrolled 
          ? 'bg-white/80 backdrop-blur-lg shadow-sm border-b border-gray-100' 
          : 'bg-transparent'
      )}
    >
      <div className="page-container">
        <div className="flex h-16 items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center font-medium text-xl"
          >
            <span className="text-gradient font-semibold">DACTA</span>
            <span className="ml-1 text-dacta-blue">Creative</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'px-3 py-2 text-sm rounded-md font-medium transition-colors duration-200',
                  location.pathname === link.path
                    ? 'text-dacta-neon-blue'
                    : 'text-dacta-blue hover:text-dacta-neon-blue hover:bg-dacta-light-blue/30'
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-dacta-blue hover:text-dacta-neon-blue hover:bg-dacta-light-blue/30"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 transition-transform" />
            ) : (
              <Menu className="h-6 w-6 transition-transform" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div
        className={cn(
          'md:hidden fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        style={{ top: '64px' }}
      >
        <nav className="flex flex-col space-y-1 p-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'px-4 py-3 rounded-md text-base font-medium transition-colors duration-200',
                location.pathname === link.path
                  ? 'bg-dacta-light-blue/30 text-dacta-neon-blue'
                  : 'text-dacta-blue hover:bg-dacta-light-blue/20 hover:text-dacta-neon-blue'
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
