
import PageTransition from '@/components/ui/PageTransition';
import AnimatedCard from '@/components/ui/AnimatedCard';
import Carousel from '@/components/ui/Carousel';
import { CheckCircle, BarChart2, Database, FileSpreadsheet, Calendar, BrainCircuit } from 'lucide-react';

const MELSolutionsPage = () => {
  return (
    <PageTransition>
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-to-b from-dacta-light-blue/50 to-white">
        <div className="page-container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-dacta-blue mb-6 animate-slide-down">Monitoring, Evaluation & Learning (MEL) Solutions</h1>
            <p className="text-lg text-gray-600 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Comprehensive MEL Solutions, from Start to Insight. DACTA Creative provides end-to-end MEL solutions specifically designed for NGOs, development projects, government initiatives, and social enterprises. We guide your organisation from precise data collection through to impactful reporting, enabling evidence-based decision-making and meaningful project outcomes.
            </p>
          </div>
        </div>
      </section>
      
      <section className="section-padding bg-white">
        <div className="page-container">
          <h2 className="text-dacta-blue text-center mb-12 animate-fade-in">Our Process Timeline</h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-dacta-light-blue/70 -ml-0.5 md:ml-0"></div>
            
            <div className="space-y-12">
              <TimelineStep 
                week="Week 1–2" 
                title="Initial Meeting & Objective Setting" 
                icon={<Calendar className="h-5 w-5" />}
                align="right"
              >
                Identify clear quantitative and qualitative KPIs aligned with your project's goals. Establish baseline metrics and expected outcomes.
              </TimelineStep>
              
              <TimelineStep 
                week="Week 3–4" 
                title="Tailored Data Collection Design" 
                icon={<FileSpreadsheet className="h-5 w-5" />}
                align="left"
              >
                Recommend and integrate robust data collection tools (e.g., KoboToolbox, SurveyCTO, Qualtrics). Train your teams for effective, accurate data collection.
              </TimelineStep>
              
              <TimelineStep 
                week="Week 5–6" 
                title="Interactive Database Setup" 
                icon={<Database className="h-5 w-5" />}
                align="right"
              >
                Develop secure and efficient databases (SQL, Airtable, Google Sheets). Ensure seamless integration of collected data into your MEL framework.
              </TimelineStep>
              
              <TimelineStep 
                week="Week 7–9" 
                title="Advanced Dashboard Creation" 
                icon={<BarChart2 className="h-5 w-5" />}
                align="left"
              >
                Design and deploy interactive dashboards (Tableau, Power BI, Looker Studio) tailored to your unique MEL needs. Facilitate easy access to real-time data insights and visual storytelling.
              </TimelineStep>
              
              <TimelineStep 
                week="Week 10–11 (Optional)" 
                title="Geospatial Data Integration" 
                icon={<CheckCircle className="h-5 w-5" />}
                align="right"
              >
                Incorporate GIS analytics to address geographically sensitive project insights (e.g., identifying underserved healthcare regions, disaster-prone areas, or environmental hot spots).
              </TimelineStep>
              
              <TimelineStep 
                week="Week 12 (Optional)" 
                title="AI & Conversational Analytics" 
                icon={<BrainCircuit className="h-5 w-5" />}
                align="left"
              >
                Implement conversational AI tools to allow stakeholders to query and interact with MEL data effortlessly.
              </TimelineStep>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section-padding bg-dacta-light-blue/30">
        <div className="page-container">
          <h2 className="text-dacta-blue text-center mb-12 animate-fade-in">Tools We Use</h2>
          
          <Carousel className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {melTools.map((tool) => (
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
                  <BarChart2 className="h-16 w-16 text-dacta-blue/20 mx-auto mb-4" />
                  <p className="text-gray-500 italic">MEL dashboard visualization placeholder</p>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 animate-slide-right" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-dacta-blue mb-6">Case Study: Health Program in Papua New Guinea</h2>
              <p className="text-gray-600 mb-4">
                DACTA Creative collaborated with an international health NGO in Papua New Guinea to develop a comprehensive MEL solution. The project involved deploying KoboToolbox for rural health data collection, establishing a centralized interactive database, and designing a Tableau dashboard that visually tracked vaccination distribution and healthcare access.
              </p>
              <p className="text-gray-600 mb-4">
                Our solution provided:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Mobile data collection tools optimized for remote areas</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Real-time healthcare access visualization with geographic mapping</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Automatic alert system for critical vaccination shortages</span>
                </li>
              </ul>
              <p className="text-dacta-blue font-medium">
                The resulting insights directly contributed to a 25% improvement in targeted healthcare delivery.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

interface TimelineStepProps {
  week: string;
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  align: 'left' | 'right';
}

const TimelineStep = ({ week, title, children, icon, align }: TimelineStepProps) => {
  return (
    <div className={`relative flex items-start ${align === 'right' ? 'md:flex-row-reverse' : ''}`}>
      <div className="flex-1 md:w-1/2 md:px-8">
        <div className={`subtle-card p-6 animate-${align === 'right' ? 'slide-left' : 'slide-right'}`}>
          <span className="inline-block px-3 py-1 bg-dacta-light-blue text-dacta-blue text-sm font-medium rounded-full mb-3">
            {week}
          </span>
          <div className="flex items-center mb-2">
            {icon && <div className="mr-2 text-dacta-neon-blue">{icon}</div>}
            <h3 className="font-medium text-lg text-dacta-blue">{title}</h3>
          </div>
          <p className="text-gray-600">{children}</p>
        </div>
      </div>
      
      {/* Timeline dot */}
      <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-dacta-neon-blue rounded-full -ml-2 md:ml-0 md:-translate-x-1/2 mt-6 z-10" />
      
      {/* Empty space for the other side (only visible on mobile) */}
      <div className="hidden md:block flex-1 md:w-1/2"></div>
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

const melTools = [
  {
    name: "KoboToolbox",
    description: "Powerful data collection tool optimized for challenging environments."
  },
  {
    name: "SurveyCTO",
    description: "Secure digital data collection platform for high-stakes research."
  },
  {
    name: "Qualtrics",
    description: "Advanced survey and feedback collection with powerful analytics."
  },
  {
    name: "Tableau",
    description: "Interactive data visualization tools for insights and storytelling."
  },
  {
    name: "Power BI",
    description: "Business intelligence platform with real-time analytics dashboards."
  },
  {
    name: "Looker Studio",
    description: "Data visualization tool with strong Google Analytics integration."
  },
  {
    name: "Airtable",
    description: "Flexible database with powerful features for data management."
  },
  {
    name: "SQL Databases",
    description: "Enterprise-grade data storage for secure, scalable MEL systems."
  }
];

export default MELSolutionsPage;
