import React from 'react';
import { cn } from '@/lib/utils';
import { CheckCircle2Icon } from 'lucide-react';

interface FeatureItem {
  text: string;
  icon?: React.ReactNode;
}

interface FeatureListProps {
  items: FeatureItem[];
  className?: string;
  iconClassName?: string;
  textClassName?: string;
  itemClassName?: string;
}

const FeatureList: React.FC<FeatureListProps> = ({
  items,
  className = '',
  iconClassName = '',
  textClassName = '',
  itemClassName = '',
}) => {
  if (!items || items.length === 0) return null;
  
  return (
    <ul className={cn('space-y-3 md:space-y-4', className)}>
      {items.map((item, index) => (
        <li key={index} className={cn('feature-list-item', itemClassName)}>
          <div className={cn('feature-list-icon', iconClassName)}>
            {item.icon || <CheckCircle2Icon className="w-4 h-4 md:w-5 md:h-5 text-accent" />}
          </div>
          <span className={cn('feature-list-text', textClassName)}>
            {item.text}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default FeatureList; 