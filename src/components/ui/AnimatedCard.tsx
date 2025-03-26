
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedCardProps {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
  delay?: string;
}

const AnimatedCard = ({ 
  title, 
  icon, 
  children, 
  className,
  delay = '0s' 
}: AnimatedCardProps) => {
  return (
    <div 
      className={cn(
        'subtle-card p-6 hover-card animate-fade-in',
        className
      )}
      style={{ animationDelay: delay }}
    >
      <div className="flex items-center mb-4">
        {icon && <div className="mr-3 text-dacta-neon-blue">{icon}</div>}
        <h3 className="text-xl font-medium text-dacta-blue">{title}</h3>
      </div>
      <div className="text-gray-600">{children}</div>
    </div>
  );
};

export default AnimatedCard;
