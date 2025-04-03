
import PageTransition from '@/components/ui/PageTransition';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ServiceCarousel, { ServiceCarouselItem } from '@/components/ui/ServiceCarousel';

const GISMapping = () => {
  return (
    <PageTransition>
      <section className="section-padding bg-gradient-to-b from-dacta-light-blue/50 to-white">
        <div className="page-container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-dacta-blue mb-8 animate-slide-down">GIS Mapping & Geospatial Analytics</h1>
            
            <p className="text-xl text-gray-600 mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Spatial Insights for Strategic Impact. Harness advanced Geographic Information Systems (GIS) to interpret complex spatial data. At DACTA Creative, we empower organisations across environment, agriculture, urban planning, real estate, and beyond, to leverage powerful visual analytics and spatial decision-making tools.
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
                <h3 className="text-xl font-medium text-dacta-blue mb-3">Initial Discovery & Needs Assessment</h3>
                <p className="text-gray-600">
                  Collaborative workshop to identify your goals, objectives, and spatial data needs clearly.
                </p>
              </div>
              
              <div className="subtle-card p-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="rounded-full bg-dacta-light-blue/20 w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-xl font-semibold text-dacta-blue">2</span>
                </div>
                <h3 className="text-xl font-medium text-dacta-blue mb-3">Comprehensive Data Acquisition</h3>
                <p className="text-gray-600">
                  Gather high-quality spatial data from satellites, governmental databases, IoT sensors, field surveys, and open-source platforms.
                </p>
              </div>
              
              <div className="subtle-card p-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <div className="rounded-full bg-dacta-light-blue/20 w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-xl font-semibold text-dacta-blue">3</span>
                </div>
                <h3 className="text-xl font-medium text-dacta-blue mb-3">Advanced Spatial Analysis</h3>
                <p className="text-gray-600">
                  Apply cutting-edge analytical techniques like spatial clustering, hotspot analysis, spatial interpolation, and predictive modelling.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="subtle-card p-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="rounded-full bg-dacta-light-blue/20 w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-xl font-semibold text-dacta-blue">4</span>
                </div>
                <h3 className="text-xl font-medium text-dacta-blue mb-3">Interactive Mapping & Visualization</h3>
                <p className="text-gray-600">
                  Create interactive maps tailored to client specifications, allowing intuitive exploration of complex geographic data.
                </p>
              </div>
              
              <div className="subtle-card p-6 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <div className="rounded-full bg-dacta-light-blue/20 w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-xl font-semibold text-dacta-blue">5</span>
                </div>
                <h3 className="text-xl font-medium text-dacta-blue mb-3">Insights & Recommendations</h3>
                <p className="text-gray-600">
                  Generate strategic reports translating complex data into actionable insights and clear, practical recommendations.
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
                  src="/tool-logos/arcgis.png" 
                  alt="ArcGIS Pro (Esri)" 
                  className="h-16 w-auto mb-4 object-contain" 
                />
                <h3 className="text-lg font-medium text-dacta-blue">ArcGIS Pro (Esri)</h3>
              </ServiceCarouselItem>
              
              <ServiceCarouselItem>
                <img 
                  src="/tool-logos/gee.png" 
                  alt="Google Earth Engine" 
                  className="h-16 w-auto mb-4 object-contain" 
                />
                <h3 className="text-lg font-medium text-dacta-blue">Google Earth Engine</h3>
              </ServiceCarouselItem>
              
              <ServiceCarouselItem>
                <img 
                  src="/tool-logos/postgis-logo.png" 
                  alt="PostGIS" 
                  className="h-16 w-auto mb-4 object-contain" 
                />
                <h3 className="text-lg font-medium text-dacta-blue">PostGIS</h3>
              </ServiceCarouselItem>
              
              <ServiceCarouselItem>
                <img 
                  src="/tool-logos/geoserver.png" 
                  alt="GeoServer" 
                  className="h-16 w-auto mb-4 object-contain" 
                />
                <h3 className="text-lg font-medium text-dacta-blue">GeoServer</h3>
              </ServiceCarouselItem>
            </ServiceCarousel>
          </div>
        </div>
      </section>
      
      <section className="section-padding bg-white">
        <div className="page-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-dacta-blue mb-8 animate-fade-in">GIS Project Example</h2>
            
            <div className="aspect-video bg-gray-100 rounded-xl mb-8 overflow-hidden animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <img 
                src="/examples/gis-heatmap.png" 
                alt="Transport Accessibility Heat Map Example" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="section-padding bg-dacta-blue text-white">
        <div className="page-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-8 animate-fade-in">Case Study: Environmental Impact Assessment</h2>
            
            <div className="subtle-card bg-white/10 p-8 rounded-xl mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <p className="text-dacta-light-blue mb-6">
                DACTA Creative partnered with an environmental NGO to map critical habitats affected by climate change. By analyzing spatial patterns of deforestation and biodiversity loss, our GIS solution facilitated targeted conservation initiatives.
              </p>
              <p className="text-dacta-light-blue font-semibold">
                This project successfully protected and restored 500 hectares of vulnerable forest.
              </p>
            </div>
            
            <div className="text-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 rounded-full bg-white text-dacta-blue hover:bg-dacta-neon-blue hover:text-white transition-colors duration-300 shadow-sm hover:shadow-md animate-fade-in"
                style={{ animationDelay: '0.3s' }}
              >
                Discuss Your GIS Mapping Needs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default GISMapping;
