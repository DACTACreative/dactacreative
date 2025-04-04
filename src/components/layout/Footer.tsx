
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dacta-accent text-white">
      <div className="page-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center font-medium text-xl">
              <span className="text-white font-semibold">DACTA</span>
              <span className="ml-1 text-white">Creative</span>
            </div>
            <p className="text-white/90 text-sm max-w-md">
              Transforming data into actionable insights. We specialize in dashboard creation, 
              GIS mapping, business process automation, and comprehensive MEL solutions.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="mailto:info@dactacreative.com.au" className="text-white hover:text-white/80 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="tel:+61000000000" className="text-white hover:text-white/80 transition-colors">
                <Phone className="h-5 w-5" />
              </a>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition-colors">
                <MapPin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/dashboards" className="text-white/90 hover:text-white transition-colors">
                  Dashboards & Analytics
                </Link>
              </li>
              <li>
                <Link to="/gis-mapping" className="text-white/90 hover:text-white transition-colors">
                  GIS Mapping & Geospatial Analytics
                </Link>
              </li>
              <li>
                <Link to="/automation" className="text-white/90 hover:text-white transition-colors">
                  Business Process Automation
                </Link>
              </li>
              <li>
                <Link to="/mel-solutions" className="text-white/90 hover:text-white transition-colors">
                  MEL Solutions
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/90 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/90 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="text-white/90 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-white/90 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/70 text-sm">
          <p>© {currentYear} DACTA Creative. All rights reserved. Based in Victoria, Australia.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
