
import PageTransition from '@/components/ui/PageTransition';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ServiceCarousel, { ServiceCarouselItem } from '@/components/ui/ServiceCarousel';

const Dashboards = () => {
  return (
    <PageTransition>
      <section className="section-padding bg-gradient-to-b from-dacta-light-blue/50 to-white">
        <div className="page-container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-dacta-blue mb-8 animate-slide-down">Dashboard & Analytics Solutions</h1>
            
            <p className="text-xl text-gray-600 mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Unlock the full potential of your data with our customized dashboards and analytics solutions. We design intuitive, real-time dashboards that provide actionable insights, enabling businesses to monitor performance, identify trends, and make data-driven decisions with confidence.
            </p>
          </div>
        </div>
      </section>
      
      <section className="section-padding bg-white">
        <div className="page-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-dacta-blue mb-8 animate-fade-in">Our Process</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="subtle-card p-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <div className="rounded-full bg-dacta-light-blue/20 w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-xl font-semibold text-dacta-blue">1</span>
                </div>
                <h3 className="text-xl font-medium text-dacta-blue mb-3">Consultation</h3>
                <p className="text-gray-600">
                  Engage with stakeholders to understand business objectives, key performance indicators (KPIs), and specific analytical needs.
                </p>
              </div>
              
              <div className="subtle-card p-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="rounded-full bg-dacta-light-blue/20 w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-xl font-semibold text-dacta-blue">2</span>
                </div>
                <h3 className="text-xl font-medium text-dacta-blue mb-3">Data Integration</h3>
                <p className="text-gray-600">
                  Aggregate data from diverse sources, ensuring accuracy, consistency, and completeness.
                </p>
              </div>
              
              <div className="subtle-card p-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <div className="rounded-full bg-dacta-light-blue/20 w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-xl font-semibold text-dacta-blue">3</span>
                </div>
                <h3 className="text-xl font-medium text-dacta-blue mb-3">Dashboard Design</h3>
                <p className="text-gray-600">
                  Utilize industry-leading tools to create customized, user-friendly dashboards tailored to client specifications.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="subtle-card p-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="rounded-full bg-dacta-light-blue/20 w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-xl font-semibold text-dacta-blue">4</span>
                </div>
                <h3 className="text-xl font-medium text-dacta-blue mb-3">Implementation & Training</h3>
                <p className="text-gray-600">
                  Deploy the dashboard within the client's environment and provide comprehensive training to ensure effective utilization.
                </p>
              </div>
              
              <div className="subtle-card p-6 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <div className="rounded-full bg-dacta-light-blue/20 w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-xl font-semibold text-dacta-blue">5</span>
                </div>
                <h3 className="text-xl font-medium text-dacta-blue mb-3">Ongoing Support</h3>
                <p className="text-gray-600">
                  Offer continuous monitoring, updates, and support to adapt to evolving business needs and ensure sustained value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section-padding bg-gradient-to-b from-white to-dacta-light-blue/30">
        <div className="page-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-dacta-blue mb-8 animate-fade-in">Tools We Use</h2>
            
            <ServiceCarousel animationDelay="0.3s">
              <ServiceCarouselItem>
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" 
                  alt="Microsoft Power BI" 
                  className="h-16 w-auto mb-4 object-contain" 
                />
                <h3 className="text-lg font-medium text-dacta-blue">Microsoft Power BI</h3>
              </ServiceCarouselItem>
              
              <ServiceCarouselItem>
                <img 
                  src="https://logos-world.net/wp-content/uploads/2021/10/Tableau-Symbol.png" 
                  alt="Tableau" 
                  className="h-16 w-auto mb-4 object-contain" 
                />
                <h3 className="text-lg font-medium text-dacta-blue">Tableau</h3>
              </ServiceCarouselItem>
              
              <ServiceCarouselItem>
                <img 
                  src="/tool-logos/looker-studio.svg" 
                  alt="Looker Studio" 
                  className="h-16 w-auto mb-4 object-contain" 
                />
                <h3 className="text-lg font-medium text-dacta-blue">Looker Studio</h3>
              </ServiceCarouselItem>
              
              <ServiceCarouselItem>
                <img 
                  src="/tool-logos/domo.png" 
                  alt="Domo" 
                  className="h-16 w-auto mb-4 object-contain" 
                />
                <h3 className="text-lg font-medium text-dacta-blue">Domo</h3>
              </ServiceCarouselItem>
              
              <ServiceCarouselItem>
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/3/32/Qlik_Logo.svg" 
                  alt="QlikView" 
                  className="h-16 w-auto mb-4 object-contain" 
                />
                <h3 className="text-lg font-medium text-dacta-blue">QlikView</h3>
              </ServiceCarouselItem>
            </ServiceCarousel>
          </div>
        </div>
      </section>
      
      <section className="section-padding bg-white">
        <div className="page-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-dacta-blue mb-8 animate-fade-in">Dashboard Preview</h2>
            
            <div className="aspect-video bg-gray-100 rounded-xl mb-8 flex items-center justify-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <p className="text-gray-500">Dashboard preview image will be displayed here</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section-padding bg-dacta-blue text-white">
        <div className="page-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-8 animate-fade-in">Case Study: Sales Performance Dashboard</h2>
            
            <div className="subtle-card bg-white/10 p-8 rounded-xl mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <p className="text-dacta-light-blue mb-6">
                A mid-sized retail company partnered with DACTA Creative to develop a comprehensive sales performance dashboard. By integrating data from their CRM and sales platforms, we created a real-time dashboard that highlighted sales trends, regional performance, and product profitability. 
              </p>
              <p className="text-dacta-light-blue font-semibold">
                This solution led to a 15% increase in quarterly sales by enabling the client to identify underperforming products and optimize marketing strategies.
              </p>
            </div>
            
            <div className="text-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 rounded-full bg-white text-dacta-blue hover:bg-dacta-neon-blue hover:text-white transition-colors duration-300 shadow-sm hover:shadow-md animate-fade-in"
                style={{ animationDelay: '0.3s' }}
              >
                Discuss Your Dashboard Needs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Dashboards;
