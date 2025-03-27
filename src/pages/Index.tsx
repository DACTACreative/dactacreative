
import { Link } from 'react-router-dom';
import PageTransition from '@/components/ui/PageTransition';
import HeroSection from '@/components/sections/HeroSection';
import AnimatedCard from '@/components/ui/AnimatedCard';
import { BarChart3, Globe, Settings, BarChart2, ArrowRight } from 'lucide-react';

const Index = () => {
  return (
    <PageTransition>
      <HeroSection
        subtitle="We specialize in empowering organizations by harnessing the power of data. Our expertise spans dashboard creation, GIS mapping, business process automation, and comprehensive Monitoring, Evaluation & Learning (MEL) solutions."
      />
      
      <section className="section-padding bg-white">
        <div className="page-container">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-gray-900 mb-6 animate-fade-in">Our Mission</h2>
            <p className="text-lg text-gray-600 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              We are committed to delivering innovative, user-centric solutions that drive informed decision-making and operational excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatedCard 
              title="Dashboards & Analytics" 
              icon={<BarChart3 className="h-6 w-6" />}
              delay="0.1s"
            >
              <p className="mb-4">Designing intuitive dashboards for real-time business insights.</p>
              <Link
                to="/dashboards"
                className="text-dacta-accent hover:text-gray-900 inline-flex items-center font-medium"
              >
                Learn more <ArrowIcon className="ml-1 w-4 h-4" />
              </Link>
            </AnimatedCard>
            
            <AnimatedCard 
              title="GIS Mapping" 
              icon={<Globe className="h-6 w-6" />}
              delay="0.2s"
            >
              <p className="mb-4">Leveraging spatial data for strategic planning and analysis.</p>
              <Link
                to="/gis-mapping"
                className="text-dacta-accent hover:text-gray-900 inline-flex items-center font-medium"
              >
                Learn more <ArrowIcon className="ml-1 w-4 h-4" />
              </Link>
            </AnimatedCard>
            
            <AnimatedCard 
              title="Process Automation" 
              icon={<Settings className="h-6 w-6" />}
              delay="0.3s"
            >
              <p className="mb-4">Streamlining operations through intelligent automation.</p>
              <Link
                to="/automation"
                className="text-dacta-accent hover:text-gray-900 inline-flex items-center font-medium"
              >
                Learn more <ArrowIcon className="ml-1 w-4 h-4" />
              </Link>
            </AnimatedCard>
            
            <AnimatedCard 
              title="MEL Solutions" 
              icon={<BarChart2 className="h-6 w-6" />}
              delay="0.4s"
            >
              <p className="mb-4">Comprehensive support for project assessment and improvement.</p>
              <Link
                to="/mel-solutions"
                className="text-dacta-accent hover:text-gray-900 inline-flex items-center font-medium"
              >
                Learn more <ArrowIcon className="ml-1 w-4 h-4" />
              </Link>
            </AnimatedCard>
          </div>
        </div>
      </section>
      
      <section className="section-padding bg-gradient-to-b from-white to-dacta-accent/5">
        <div className="page-container">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-6 animate-fade-in">Why Choose DACTA Creative?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="subtle-card p-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Data Expertise</h3>
              <p className="text-gray-600">
                We transform complex data into clear, actionable insights through carefully crafted visualizations and analytics.
              </p>
            </div>
            
            <div className="subtle-card p-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Client-Centered Approach</h3>
              <p className="text-gray-600">
                Every solution is tailored to your specific needs, ensuring maximum relevance and impact for your organization.
              </p>
            </div>
            
            <div className="subtle-card p-6 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Innovative Solutions</h3>
              <p className="text-gray-600">
                We combine technical expertise with creative problem-solving to deliver cutting-edge data solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section-padding bg-dacta-accent text-white">
        <div className="page-container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="mb-8 animate-fade-in">Ready to Transform Your Data?</h2>
            <p className="text-white mb-8 text-lg animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Discover how DACTA Creative can help your organization leverage data for better decision-making and improved outcomes.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 rounded-full bg-white text-dacta-accent hover:bg-white/90 hover:text-dacta-accent transition-colors duration-300 shadow-sm hover:shadow-md animate-fade-in"
              style={{ animationDelay: '0.3s' }}
            >
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

// Small arrow icon component
const ArrowIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 20 20" 
    fill="currentColor" 
    className={className}
  >
    <path 
      fillRule="evenodd" 
      d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" 
      clipRule="evenodd" 
    />
  </svg>
);

export default Index;
