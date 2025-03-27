
import React from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'; // Note: lowercase 'carousel' to match the actual file
import { cn } from '@/lib/utils';

interface ServiceCarouselProps {
  children: React.ReactNode;
  className?: string;
  animationDelay?: string;
}

const ServiceCarousel = ({ 
  children, 
  className,
  animationDelay = '0.3s' 
}: ServiceCarouselProps) => {
  return (
    <div 
      className={cn("animate-fade-in", className)}
      style={{ animationDelay }}
    >
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {children}
        </CarouselContent>
        <CarouselPrevious className="ml-2" />
        <CarouselNext className="mr-2" />
      </Carousel>
    </div>
  );
};

export const ServiceCarouselItem = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <CarouselItem className={cn("md:basis-1/2 lg:basis-1/3", className)}>
      <div className="p-1">
        <div className="subtle-card rounded-xl border border-border p-6 h-full flex flex-col items-center justify-center">
          {children}
        </div>
      </div>
    </CarouselItem>
  );
};

export default ServiceCarousel;
