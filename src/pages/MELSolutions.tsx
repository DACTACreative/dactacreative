
import PageTransition from '@/components/ui/PageTransition';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ServiceCarousel, { ServiceCarouselItem } from '@/components/ui/ServiceCarousel';

const MELSolutions = () => {
  return (
    <PageTransition>
      <section className="section-padding bg-gradient-to-b from-dacta-light-blue/50 to-white">
        <div className="page-container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-dacta-blue mb-8 animate-slide-down">Monitoring, Evaluation & Learning (MEL) Solutions</h1>
            
            <p className="text-xl text-gray-600 mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Comprehensive MEL Solutions, from Start to Insight. DACTA Creative provides end-to-end MEL solutions specifically designed for NGOs, development projects, government initiatives, and social enterprises. We guide your organisation from precise data collection through to impactful reporting, enabling evidence-based decision-making and meaningful project outcomes.
            </p>
          </div>
        </div>
      </section>
      
      <section className="section-padding bg-white">
        <div className="page-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-dacta-blue mb-8 animate-fade-in">Our Process</h2>
            
            <div className="space-y-8">
              <div className="subtle-card p-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <div className="flex items-center mb-4">
                  <div className="rounded-full bg-dacta-light-blue/20 w-12 h-12 flex items-center justify-center mr-4">
                    <span className="text-xl font-semibold text-dacta-blue">1</span>
                  </div>
                  <h3 className="text-xl font-medium text-dacta-blue">Initial Meeting & Objective Setting <span className="text-sm text-gray-500">(Week 1–2)</span></h3>
                </div>
                <p className="text-gray-600 ml-16">
                  Identify clear quantitative and qualitative KPIs aligned with your project's goals and establish baseline metrics and expected outcomes.
                </p>
              </div>
              
              <div className="subtle-card p-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center mb-4">
                  <div className="rounded-full bg-dacta-light-blue/20 w-12 h-12 flex items-center justify-center mr-4">
                    <span className="text-xl font-semibold text-dacta-blue">2</span>
                  </div>
                  <h3 className="text-xl font-medium text-dacta-blue">Tailored Data Collection Design <span className="text-sm text-gray-500">(Week 3–4)</span></h3>
                </div>
                <p className="text-gray-600 ml-16">
                  Recommend and integrate robust data collection tools and train your teams for effective, accurate data collection.
                </p>
              </div>
              
              <div className="subtle-card p-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <div className="flex items-center mb-4">
                  <div className="rounded-full bg-dacta-light-blue/20 w-12 h-12 flex items-center justify-center mr-4">
                    <span className="text-xl font-semibold text-dacta-blue">3</span>
                  </div>
                  <h3 className="text-xl font-medium text-dacta-blue">Interactive Database Setup <span className="text-sm text-gray-500">(Week 5–6)</span></h3>
                </div>
                <p className="text-gray-600 ml-16">
                  Develop secure and efficient databases and ensure seamless integration of collected data into your MEL framework.
                </p>
              </div>
              
              <div className="subtle-card p-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="flex items-center mb-4">
                  <div className="rounded-full bg-dacta-light-blue/20 w-12 h-12 flex items-center justify-center mr-4">
                    <span className="text-xl font-semibold text-dacta-blue">4</span>
                  </div>
                  <h3 className="text-xl font-medium text-dacta-blue">Advanced Dashboard Creation <span className="text-sm text-gray-500">(Week 7–9)</span></h3>
                </div>
                <p className="text-gray-600 ml-16">
                  Design and deploy interactive dashboards tailored to your unique MEL needs, facilitating easy access to real-time data insights and visual storytelling.
                </p>
              </div>
              
              <div className="subtle-card p-6 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center mb-4">
                  <div className="rounded-full bg-dacta-light-blue/20 w-12 h-12 flex items-center justify-center mr-4">
                    <span className="text-xl font-semibold text-dacta-blue">5</span>
                  </div>
                  <h3 className="text-xl font-medium text-dacta-blue">Geospatial Data Integration <span className="text-sm text-gray-500">(Optional, Week 10–11)</span></h3>
                </div>
                <p className="text-gray-600 ml-16">
                  Incorporate GIS analytics to address geographically sensitive project insights (e.g., identifying underserved healthcare regions, disaster-prone areas, or environmental hot spots).
                </p>
              </div>
              
              <div className="subtle-card p-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <div className="flex items-center mb-4">
                  <div className="rounded-full bg-dacta-light-blue/20 w-12 h-12 flex items-center justify-center mr-4">
                    <span className="text-xl font-semibold text-dacta-blue">6</span>
                  </div>
                  <h3 className="text-xl font-medium text-dacta-blue">AI & Conversational Analytics <span className="text-sm text-gray-500">(Optional, Week 12)</span></h3>
                </div>
                <p className="text-gray-600 ml-16">
                  Implement conversational AI tools to allow stakeholders to query and interact with MEL data effortlessly.
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
                <img src="/placeholder.svg" alt="KoboToolbox" className="h-16 w-auto mb-4" />
                <h3 className="text-lg font-medium text-dacta-blue">KoboToolbox</h3>
              </ServiceCarouselItem>
              
              <ServiceCarouselItem>
                <img src="/placeholder.svg" alt="SurveyCTO" className="h-16 w-auto mb-4" />
                <h3 className="text-lg font-medium text-dacta-blue">SurveyCTO</h3>
              </ServiceCarouselItem>
              
              <ServiceCarouselItem>
                <img src="/placeholder.svg" alt="Qualtrics" className="h-16 w-auto mb-4" />
                <h3 className="text-lg font-medium text-dacta-blue">Qualtrics</h3>
              </ServiceCarouselItem>
              
              <ServiceCarouselItem>
                <img src="/placeholder.svg" alt="Tableau" className="h-16 w-auto mb-4" />
                <h3 className="text-lg font-medium text-dacta-blue">Tableau</h3>
              </ServiceCarouselItem>
              
              <ServiceCarouselItem>
                <img src="/placeholder.svg" alt="Power BI" className="h-16 w-auto mb-4" />
                <h3 className="text-lg font-medium text-dacta-blue">Power BI</h3>
              </ServiceCarouselItem>
              
              <ServiceCarouselItem>
                <img src="/placeholder.svg" alt="Looker Studio" className="h-16 w-auto mb-4" />
                <h3 className="text-lg font-medium text-dacta-blue">Looker Studio</h3>
              </ServiceCarouselItem>
              
              <ServiceCarouselItem>
                <img src="/placeholder.svg" alt="Airtable" className="h-16 w-auto mb-4" />
                <h3 className="text-lg font-medium text-dacta-blue">Airtable</h3>
              </ServiceCarouselItem>
              
              <ServiceCarouselItem>
                <img src="/placeholder.svg" alt="SQL Databases" className="h-16 w-auto mb-4" />
                <h3 className="text-lg font-medium text-dacta-blue">SQL Databases</h3>
              </ServiceCarouselItem>
            </ServiceCarousel>
          </div>
        </div>
      </section>
      
      <section className="section-padding bg-white">
        <div className="page-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-dacta-blue mb-8 animate-fade-in">MEL Dashboard Example</h2>
            
            <div className="aspect-video bg-gray-100 rounded-xl mb-8 flex items-center justify-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <p className="text-gray-500">MEL dashboard and analytical interface screenshot will be displayed here</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section-padding bg-dacta-blue text-white">
        <div className="page-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-8 animate-fade-in">Case Study: Health Program in Papua New Guinea</h2>
            
            <div className="subtle-card bg-white/10 p-8 rounded-xl mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <p className="text-dacta-light-blue mb-6">
                DACTA Creative collaborated with an international health NGO in Papua New Guinea to develop a comprehensive MEL solution. The project involved deploying KoboToolbox for rural health data collection, establishing a centralized interactive database, and designing a Tableau dashboard that visually tracked vaccination distribution and healthcare access.
              </p>
              <p className="text-dacta-light-blue font-semibold">
                The resulting insights directly contributed to a 25% improvement in targeted healthcare delivery.
              </p>
            </div>
            
            <div className="text-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 rounded-full bg-white text-dacta-blue hover:bg-dacta-neon-blue hover:text-white transition-colors duration-300 shadow-sm hover:shadow-md animate-fade-in"
                style={{ animationDelay: '0.3s' }}
              >
                Discuss Your MEL Solution Needs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default MELSolutions;
