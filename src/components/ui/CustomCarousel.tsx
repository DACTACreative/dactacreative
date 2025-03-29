
import { useState, useEffect, useRef, ReactNode } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CarouselProps {
  children: ReactNode[];
  autoSlide?: boolean;
  autoSlideInterval?: number;
  className?: string;
}

const Carousel = ({
  children,
  autoSlide = true,
  autoSlideInterval = 3000,
  className
}: CarouselProps) => {
  const [curr, setCurr] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const itemsPerSlide = children.length > 3 ? 3 : children.length;
  const maxIndex = Math.ceil(children.length / itemsPerSlide) - 1;
  
  const autoSlideRef = useRef<NodeJS.Timeout | null>(null);

  const prev = () => setCurr((curr) => (curr === 0 ? maxIndex : curr - 1));
  
  const next = () => setCurr((curr) => (curr === maxIndex ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide || isHovering) return;
    
    if (autoSlideRef.current) {
      clearInterval(autoSlideRef.current);
    }
    
    autoSlideRef.current = setInterval(next, autoSlideInterval);
    
    return () => {
      if (autoSlideRef.current) {
        clearInterval(autoSlideRef.current);
      }
    };
  }, [autoSlide, autoSlideInterval, isHovering]);

  const visibleItems = () => {
    const start = curr * itemsPerSlide;
    return children.slice(start, start + itemsPerSlide);
  };

  return (
    <div 
      className={cn("relative", className)}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="overflow-hidden">
        <div className="flex transition-transform duration-500 ease-out gap-4 py-8">
          {visibleItems().map((item, index) => (
            <div key={index} className="flex-1 min-w-0">
              <div className="flex justify-center items-center h-full animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                {item}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation arrows - only show if there are more slides than can be displayed */}
      {maxIndex > 0 && (
        <>
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 flex justify-center items-center rounded-full bg-white shadow-md text-dacta-blue z-10 hover:bg-dacta-light-blue transition-colors"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 flex justify-center items-center rounded-full bg-white shadow-md text-dacta-blue z-10 hover:bg-dacta-light-blue transition-colors"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </>
      )}
      
      {/* Indicator dots */}
      {maxIndex > 0 && (
        <div className="absolute bottom-0 left-0 right-0">
          <div className="flex items-center justify-center gap-2 py-2">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurr(i)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  curr === i 
                    ? "bg-dacta-neon-blue w-4" 
                    : "bg-dacta-light-blue"
                )}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Carousel;
