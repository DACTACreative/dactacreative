
import PageTransition from '@/components/ui/PageTransition';
import AnimatedCard from '@/components/ui/AnimatedCard';
import Carousel from '@/components/ui/Carousel';
import { CheckCircle, Settings, Database, PlayCircle, FileSpreadsheet, Infinity } from 'lucide-react';

const AutomationPage = () => {
  return (
    <PageTransition>
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-to-b from-dacta-light-blue/50 to-white">
        <div className="page-container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-dacta-blue mb-6 animate-slide-down">Business Process Automation</h1>
            <p className="text-lg text-gray-600 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Work Smarter, Automate Smarter. DACTA Creative transforms tedious manual tasks into seamless automated workflows. We empower your team to reclaim productivity, minimize errors, and ensure your business operations run smoothly 24/7.
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
                  title="Workflow Audit & Consultation" 
                  icon={<FileSpreadsheet className="h-5 w-5" />}
                  delay="0.1s"
                >
                  Analyze existing business processes through detailed consultations. Identify repetitive, time-consuming tasks ripe for automation.
                </ProcessStep>
                
                <ProcessStep 
                  number="02" 
                  title="Tailored Automation Planning" 
                  icon={<Infinity className="h-5 w-5" />}
                  delay="0.2s"
                >
                  Craft personalized automation strategies aligned with your business objectives. Define clear automation milestones and expected efficiency improvements.
                </ProcessStep>
                
                <ProcessStep 
                  number="03" 
                  title="Tool Identification & Integration" 
                  icon={<Settings className="h-5 w-5" />}
                  delay="0.3s"
                >
                  Select optimal automation platforms tailored to your existing systems. Integrate new automated workflows without disruption.
                </ProcessStep>
                
                <ProcessStep 
                  number="04" 
                  title="Automation Implementation" 
                  icon={<PlayCircle className="h-5 w-5" />}
                  delay="0.4s"
                >
                  Develop and implement robust automation solutions to streamline your workflow. Conduct rigorous testing to ensure seamless performance.
                </ProcessStep>
                
                <ProcessStep 
                  number="05" 
                  title="Training & Ongoing Support" 
                  icon={<CheckCircle className="h-5 w-5" />}
                  delay="0.5s"
                >
                  Provide comprehensive training to ensure smooth adoption. Offer ongoing monitoring, optimization, and dedicated support.
                </ProcessStep>
              </div>
            </div>
            
            <div className="glass-card rounded-xl p-6 animate-slide-right" style={{ animationDelay: '0.3s' }}>
              <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="text-center p-6">
                  <Settings className="h-16 w-16 text-dacta-blue/20 mx-auto mb-4" />
                  <p className="text-gray-500 italic">Automation workflow visualization placeholder</p>
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
            {automationTools.map((tool) => (
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
                  <Settings className="h-16 w-16 text-dacta-blue/20 mx-auto mb-4" />
                  <p className="text-gray-500 italic">Onboarding automation visualization placeholder</p>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 animate-slide-right" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-dacta-blue mb-6">Case Study: Client Onboarding Automation</h2>
              <p className="text-gray-600 mb-4">
                A professional consulting firm worked with DACTA Creative to automate their client onboarding process. Implementing an intelligent workflow that automatically processed client information, scheduled introductory calls, and sent confirmation emails.
              </p>
              <p className="text-gray-600 mb-4">
                Our solution provided:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Automated client intake forms with data validation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Calendar integration for seamless appointment scheduling</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Personalized email sequences triggered by client actions</span>
                </li>
              </ul>
              <p className="text-dacta-blue font-medium">
                This automation solution reduced onboarding time by 40%, significantly enhancing client satisfaction and internal productivity.
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

const automationTools = [
  {
    name: "Zapier",
    description: "Connect apps and automate workflows with easy-to-use integration platform."
  },
  {
    name: "Microsoft Power Automate",
    description: "Create automated workflows between apps and services to synchronize files, get notifications, and collect data."
  },
  {
    name: "Integromat (Make)",
    description: "Advanced automation platform with visual workflow builder and powerful integrations."
  },
  {
    name: "Airtable",
    description: "Part spreadsheet, part database with automation capabilities for flexible workflows."
  },
  {
    name: "Notion",
    description: "All-in-one workspace with database capabilities and automation options."
  }
];

export default AutomationPage;
