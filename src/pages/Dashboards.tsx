
import PageTransition from '@/components/ui/PageTransition';
import AnimatedCard from '@/components/ui/AnimatedCard';
import Carousel from '@/components/ui/Carousel';
import { CheckCircle, BarChart3, Database, MonitorDot, HeartHandshake } from 'lucide-react';

const DashboardsPage = () => {
  return (
    <PageTransition>
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-to-b from-dacta-light-blue/50 to-white">
        <div className="page-container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-dacta-blue mb-6 animate-slide-down">Dashboard & Analytics Solutions</h1>
            <p className="text-lg text-gray-600 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Unlock the full potential of your data with our customized dashboards and analytics solutions. We design intuitive, real-time dashboards that provide actionable insights, enabling businesses to monitor performance, identify trends, and make data-driven decisions with confidence.
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
                  title="Consultation" 
                  icon={<HeartHandshake className="h-5 w-5" />}
                  delay="0.1s"
                >
                  Engage with stakeholders to understand business objectives, key performance indicators (KPIs), and specific analytical needs.
                </ProcessStep>
                
                <ProcessStep 
                  number="02" 
                  title="Data Integration" 
                  icon={<Database className="h-5 w-5" />}
                  delay="0.2s"
                >
                  Aggregate data from diverse sources, ensuring accuracy, consistency, and completeness.
                </ProcessStep>
                
                <ProcessStep 
                  number="03" 
                  title="Dashboard Design" 
                  icon={<BarChart3 className="h-5 w-5" />}
                  delay="0.3s"
                >
                  Utilize industry-leading tools to create customized, user-friendly dashboards tailored to client specifications.
                </ProcessStep>
                
                <ProcessStep 
                  number="04" 
                  title="Implementation & Training" 
                  icon={<MonitorDot className="h-5 w-5" />}
                  delay="0.4s"
                >
                  Deploy the dashboard within the client's environment and provide comprehensive training to ensure effective utilization.
                </ProcessStep>
                
                <ProcessStep 
                  number="05" 
                  title="Ongoing Support" 
                  icon={<CheckCircle className="h-5 w-5" />}
                  delay="0.5s"
                >
                  Offer continuous monitoring, updates, and support to adapt to evolving business needs and ensure sustained value.
                </ProcessStep>
              </div>
            </div>
            
            <div className="glass-card rounded-xl p-6 animate-slide-right" style={{ animationDelay: '0.3s' }}>
              <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="text-center p-6">
                  <BarChart3 className="h-16 w-16 text-dacta-blue/20 mx-auto mb-4" />
                  <p className="text-gray-500 italic">Dashboard screenshot placeholder</p>
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
            {dashboardTools.map((tool) => (
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
                  <BarChart3 className="h-16 w-16 text-dacta-blue/20 mx-auto mb-4" />
                  <p className="text-gray-500 italic">Case study visualization placeholder</p>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 animate-slide-right" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-dacta-blue mb-6">Case Study: Sales Performance Dashboard</h2>
              <p className="text-gray-600 mb-4">
                A mid-sized retail company partnered with DACTA Creative to develop a comprehensive sales performance dashboard. By integrating data from their CRM and sales platforms, we created a real-time dashboard that highlighted sales trends, regional performance, and product profitability.
              </p>
              <p className="text-gray-600 mb-4">
                Our solution provided:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Comprehensive view of sales performance across regions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Product profitability analysis with trend indicators</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Real-time sales tracking with customizable alerts</span>
                </li>
              </ul>
              <p className="text-dacta-blue font-medium">
                This solution led to a 15% increase in quarterly sales by enabling the client to identify underperforming products and optimize marketing strategies.
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

const dashboardTools = [
  {
    name: "Microsoft Power BI",
    description: "Interactive data visualization with powerful business intelligence capabilities."
  },
  {
    name: "Tableau",
    description: "Advanced analytics and stunning visualizations for deeper data insights."
  },
  {
    name: "Looker Studio",
    description: "Seamless integration with Google Analytics and other data sources."
  },
  {
    name: "Domo",
    description: "Cloud-based platform with real-time data visualization and collaboration."
  },
  {
    name: "QlikView",
    description: "Associative data analytics with flexible business intelligence features."
  }
];

export default DashboardsPage;
