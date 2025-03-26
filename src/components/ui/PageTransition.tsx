
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface PageTransitionProps {
  children: ReactNode;
  className?: string;
}

const PageTransition = ({ children, className }: PageTransitionProps) => {
  return (
    <div 
      className={cn(
        'animate-fade-in min-h-screen pt-16', // pt-16 to account for fixed navbar
        className
      )}
    >
      {children}
    </div>
  );
};

export default PageTransition;
