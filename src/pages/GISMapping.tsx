
import PageTransition from '@/components/ui/PageTransition';
import AnimatedCard from '@/components/ui/AnimatedCard';
import Carousel from '@/components/ui/Carousel';
import { CheckCircle, Globe, Database, Map, Activity, BookOpen } from 'lucide-react';

const GISMappingPage = () => {
  return (
    <PageTransition>
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-to-b from-dacta-light-blue/50 to-white">
        <div className="page-container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-dacta-blue mb-6 animate-slide-down">GIS Mapping & Geospatial Analytics</h1>
            <p className="text-lg text-gray-600 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Spatial Insights for Strategic Impact. Harness advanced Geographic Information Systems (GIS) to interpret complex spatial data. At DACTA Creative, we empower organisations across environment, agriculture, urban planning, real estate, and beyond, to leverage powerful visual analytics and spatial decision-making tools.
            </p>
          </div>
        </div>
      </section>
      
      <section className="section-padding bg-white">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-dacta-blue mb-6 animate-slide-left">Our Process</h2>
              <div className="space-y-6">
                <ProcessStep 
                  number="01" 
                  title="Initial Discovery & Needs Assessment" 
                  icon={<BookOpen className="h-5 w-5" />}
                  delay="0.1s"
                >
                  Collaborative workshop to identify your goals, objectives, and spatial data needs clearly. Identify relevant data sources and outline desired outcomes.
                </ProcessStep>
                
                <ProcessStep 
                  number="02" 
                  title="Comprehensive Data Acquisition" 
                  icon={<Database className="h-5 w-5" />}
                  delay="0.2s"
                >
                  Gather high-quality spatial data from satellites, governmental databases, IoT sensors, field surveys, and open-source platforms.
                </ProcessStep>
                
                <ProcessStep 
                  number="03" 
                  title="Advanced Spatial Analysis" 
                  icon={<Activity className="h-5 w-5" />}
                  delay="0.3s"
                >
                  Apply cutting-edge analytical techniques like spatial clustering, hotspot analysis, spatial interpolation, and predictive modelling.
                </ProcessStep>
                
                <ProcessStep 
                  number="04" 
                  title="Interactive Mapping & Visualization" 
                  icon={<Map className="h-5 w-5" />}
                  delay="0.4s"
                >
                  Create interactive maps tailored to client specifications, allowing intuitive exploration of complex geographic data.
                </ProcessStep>
                
                <ProcessStep 
                  number="05" 
                  title="Insights & Recommendations" 
                  icon={<CheckCircle className="h-5 w-5" />}
                  delay="0.5s"
                >
                  Generate strategic reports translating complex data into actionable insights and clear, practical recommendations.
                </ProcessStep>
              </div>
            </div>
            
            <div className="glass-card rounded-xl p-6 animate-slide-right" style={{ animationDelay: '0.3s' }}>
              <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="text-center p-6">
                  <Globe className="h-16 w-16 text-dacta-blue/20 mx-auto mb-4" />
                  <p className="text-gray-500 italic">GIS mapping visualization placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section-padding bg-dacta-light-blue/30">
        <div className="page-container">
          <h2 className="text-dacta-blue text-center mb-12 animate-fade-in">Tools We Use</h2>
          
          <Carousel className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {gisTools.map((tool) => (
              <ToolCard key={tool.name} name={tool.name} description={tool.description} />
            ))}
          </Carousel>
        </div>
      </section>
      
      <section className="section-padding bg-white">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 glass-card rounded-xl p-6 animate-slide-left" style={{ animationDelay: '0.2s' }}>
              <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="text-center p-6">
                  <Globe className="h-16 w-16 text-dacta-blue/20 mx-auto mb-4" />
                  <p className="text-gray-500 italic">Environmental impact visualization placeholder</p>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 animate-slide-right" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-dacta-blue mb-6">Case Study: Environmental Impact Assessment</h2>
              <p className="text-gray-600 mb-4">
                DACTA Creative partnered with an environmental NGO to map critical habitats affected by climate change. By analyzing spatial patterns of deforestation and biodiversity loss, our GIS solution facilitated targeted conservation initiatives.
              </p>
              <p className="text-gray-600 mb-4">
                Our solution provided:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Comprehensive mapping of vulnerable forest areas</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Biodiversity hotspot identification using spatial analysis</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Predictive modeling of climate change impact</span>
                </li>
              </ul>
              <p className="text-dacta-blue font-medium">
                This GIS solution successfully protected and restored 500 hectares of vulnerable forest through targeted conservation initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

interface ProcessStepProps {
  number: string;
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  delay?: string;
}

const ProcessStep = ({ number, title, children, icon, delay = '0s' }: ProcessStepProps) => {
  return (
    <div className="flex animate-slide-left" style={{ animationDelay: delay }}>
      <div className="mr-4 flex-shrink-0">
        <div className="w-10 h-10 rounded-full bg-dacta-light-blue flex items-center justify-center text-dacta-blue font-medium">
          {number}
        </div>
      </div>
      <div>
        <div className="flex items-center mb-2">
          {icon && <div className="mr-2 text-dacta-neon-blue">{icon}</div>}
          <h3 className="font-medium text-lg text-dacta-blue">{title}</h3>
        </div>
        <p className="text-gray-600">{children}</p>
      </div>
    </div>
  );
};

interface ToolCardProps {
  name: string;
  description: string;
}

const ToolCard = ({ name, description }: ToolCardProps) => {
  return (
    <div className="subtle-card h-full p-6 text-center">
      <h3 className="font-medium text-dacta-blue mb-2">{name}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

const gisTools = [
  {
    name: "ArcGIS Pro (Esri)",
    description: "Industry-leading GIS software for creating and managing spatial data."
  },
  {
    name: "QGIS",
    description: "Open-source GIS platform with powerful mapping and analysis capabilities."
  },
  {
    name: "Google Earth Engine",
    description: "Cloud-based platform for planetary-scale environmental data analysis."
  },
  {
    name: "Mapbox",
    description: "Custom maps with interactive, location-aware features and live data."
  },
  {
    name: "GeoServer",
    description: "Open source server for sharing geospatial data using open standards."
  }
];

export default GISMappingPage;
