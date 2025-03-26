
import { useState } from 'react';
import PageTransition from '@/components/ui/PageTransition';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const ContactPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission with a timeout
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Message sent",
        description: "We have received your message and will get back to you soon.",
      });
      setFormData({
        name: '',
        email: '',
        company: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <PageTransition>
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-to-b from-dacta-light-blue/50 to-white">
        <div className="page-container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-dacta-blue mb-6 animate-slide-down">Contact Us</h1>
            <p className="text-lg text-gray-600 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Get in touch with our team to discuss how we can help transform your data into actionable insights.
            </p>
          </div>
        </div>
      </section>
      
      <section className="section-padding bg-white">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3 animate-slide-right">
              <div className="subtle-card p-8 h-full">
                <h2 className="text-2xl font-medium text-dacta-blue mb-6">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company">Company/Organization</Label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Your company name"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Your Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="How can we help you?"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full min-h-[150px]"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full md:w-auto bg-dacta-blue hover:bg-dacta-neon-blue transition-colors"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
            
            <div className="lg:col-span-2 animate-slide-left">
              <div className="subtle-card p-8 h-full">
                <h2 className="text-2xl font-medium text-dacta-blue mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-dacta-neon-blue mr-4 mt-1" />
                    <div>
                      <h3 className="font-medium text-dacta-blue mb-1">Email Us</h3>
                      <a href="mailto:info@dactacreative.com.au" className="text-gray-600 hover:text-dacta-neon-blue transition-colors">
                        info@dactacreative.com.au
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-dacta-neon-blue mr-4 mt-1" />
                    <div>
                      <h3 className="font-medium text-dacta-blue mb-1">Call Us</h3>
                      <a href="tel:+61000000000" className="text-gray-600 hover:text-dacta-neon-blue transition-colors">
                        +61 0 0000 0000
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-dacta-neon-blue mr-4 mt-1" />
                    <div>
                      <h3 className="font-medium text-dacta-blue mb-1">Our Location</h3>
                      <p className="text-gray-600">
                        Victoria, Australia
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-gray-100">
                  <h3 className="font-medium text-dacta-blue mb-4">Business Hours</h3>
                  <div className="space-y-1 text-gray-600">
                    <p>Monday - Friday: 9:00 AM - 5:00 PM AEST</p>
                    <p>Saturday - Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section-padding bg-dacta-light-blue/30">
        <div className="page-container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-dacta-blue mb-6">We're Ready to Help</h2>
            <p className="text-gray-600 mb-6">
              Whether you have a specific project in mind or just want to explore how data solutions can benefit your organization, we're here to guide you through the process.
            </p>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default ContactPage;
