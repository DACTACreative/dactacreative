
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import PageTransition from '@/components/ui/PageTransition';
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <PageTransition className="bg-gradient-to-b from-dacta-light-blue/50 to-white">
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-8xl font-bold text-dacta-blue mb-6 animate-slide-down">404</h1>
          <p className="text-2xl text-gray-600 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Oops! We couldn't find the page you're looking for.
          </p>
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Link
              to="/"
              className="inline-flex items-center px-6 py-3 rounded-full bg-dacta-blue text-white hover:bg-dacta-neon-blue transition-colors"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default NotFound;
