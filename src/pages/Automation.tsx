
import PageTransition from '@/components/ui/PageTransition';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ServiceCarousel, { ServiceCarouselItem } from '@/components/ui/ServiceCarousel';

const Automation = () => {
  return (
    <PageTransition>
      <section className="section-padding bg-gradient-to-b from-dacta-light-blue/50 to-white">
        <div className="page-container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-dacta-blue mb-8 animate-slide-down">Business Process Automation</h1>
            
            <p className="text-xl text-gray-600 mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Work Smarter, Automate Smarter. DACTA Creative transforms tedious manual tasks into seamless automated workflows. We empower your team to reclaim productivity, minimize errors, and ensure your business operations run smoothly 24/7.
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
                <h3 className="text-xl font-medium text-dacta-blue mb-3">Workflow Audit & Consultation</h3>
                <p className="text-gray-600">
                  Analyze existing business processes through detailed consultations and identify repetitive, time-consuming tasks ripe for automation.
                </p>
              </div>
              
              <div className="subtle-card p-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="rounded-full bg-dacta-light-blue/20 w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-xl font-semibold text-dacta-blue">2</span>
                </div>
                <h3 className="text-xl font-medium text-dacta-blue mb-3">Tailored Automation Planning</h3>
                <p className="text-gray-600">
                  Craft personalized automation strategies aligned with your business objectives and define clear automation milestones.
                </p>
              </div>
              
              <div className="subtle-card p-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <div className="rounded-full bg-dacta-light-blue/20 w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-xl font-semibold text-dacta-blue">3</span>
                </div>
                <h3 className="text-xl font-medium text-dacta-blue mb-3">Tool Identification & Integration</h3>
                <p className="text-gray-600">
                  Select optimal automation platforms tailored to your existing systems and integrate new automated workflows without disruption.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="subtle-card p-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="rounded-full bg-dacta-light-blue/20 w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-xl font-semibold text-dacta-blue">4</span>
                </div>
                <h3 className="text-xl font-medium text-dacta-blue mb-3">Automation Implementation</h3>
                <p className="text-gray-600">
                  Develop and implement robust automation solutions to streamline your workflow and conduct rigorous testing to ensure seamless performance.
                </p>
              </div>
              
              <div className="subtle-card p-6 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <div className="rounded-full bg-dacta-light-blue/20 w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-xl font-semibold text-dacta-blue">5</span>
                </div>
                <h3 className="text-xl font-medium text-dacta-blue mb-3">Training & Ongoing Support</h3>
                <p className="text-gray-600">
                  Provide comprehensive training to ensure smooth adoption and offer ongoing monitoring, optimization, and dedicated support.
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
                <img src="/placeholder.svg" alt="Zapier" className="h-16 w-auto mb-4" />
                <h3 className="text-lg font-medium text-dacta-blue">Zapier</h3>
              </ServiceCarouselItem>
              
              <ServiceCarouselItem>
                <img src="/placeholder.svg" alt="Microsoft Power Automate" className="h-16 w-auto mb-4" />
                <h3 className="text-lg font-medium text-dacta-blue">Microsoft Power Automate</h3>
              </ServiceCarouselItem>
              
              <ServiceCarouselItem>
                <img src="/placeholder.svg" alt="Integromat (Make)" className="h-16 w-auto mb-4" />
                <h3 className="text-lg font-medium text-dacta-blue">Integromat (Make)</h3>
              </ServiceCarouselItem>
              
              <ServiceCarouselItem>
                <img src="/placeholder.svg" alt="Airtable" className="h-16 w-auto mb-4" />
                <h3 className="text-lg font-medium text-dacta-blue">Airtable</h3>
              </ServiceCarouselItem>
              
              <ServiceCarouselItem>
                <img src="/placeholder.svg" alt="Notion" className="h-16 w-auto mb-4" />
                <h3 className="text-lg font-medium text-dacta-blue">Notion</h3>
              </ServiceCarouselItem>
            </ServiceCarousel>
          </div>
        </div>
      </section>
      
      <section className="section-padding bg-white">
        <div className="page-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-dacta-blue mb-8 animate-fade-in">Automation Example</h2>
            
            <div className="aspect-video bg-gray-100 rounded-xl mb-8 flex items-center justify-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <p className="text-gray-500">Business automation workflow example will be displayed here</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section-padding bg-dacta-blue text-white">
        <div className="page-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-8 animate-fade-in">Case Study: Client Onboarding Automation</h2>
            
            <div className="subtle-card bg-white/10 p-8 rounded-xl mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <p className="text-dacta-light-blue mb-6">
                A professional consulting firm worked with DACTA Creative to automate their client onboarding process. Implementing an intelligent workflow that automatically processed client information, scheduled introductory calls, and sent confirmation emails.
              </p>
              <p className="text-dacta-light-blue font-semibold">
                This solution reduced onboarding time by 40%, significantly enhancing client satisfaction and internal productivity.
              </p>
            </div>
            
            <div className="text-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 rounded-full bg-white text-dacta-blue hover:bg-dacta-neon-blue hover:text-white transition-colors duration-300 shadow-sm hover:shadow-md animate-fade-in"
                style={{ animationDelay: '0.3s' }}
              >
                Discuss Your Automation Needs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Automation;
