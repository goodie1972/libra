import { cn } from '../lib/utils';
import { useState } from 'react';

export interface CollapsibleProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
}

export function Collapsible({ title, children, defaultOpen = false, className }: CollapsibleProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={cn('border border-[var(--border-sub)] rounded-[8px] overflow-hidden', className)}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between px-4 py-3 text-[13px] font-medium text-[var(--text-primary)] hover:bg-[var(--bg-card-hover)] transition-colors text-left"
      >
        {title}
        <span
          className={cn(
            'text-[10px] text-[var(--text-tertiary)] transition-transform duration-200',
            isOpen && 'rotate-180',
          )}
        >
          &#9660;
        </span>
      </button>
      <div
        className={cn(
          'overflow-hidden transition-all duration-200',
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0',
        )}
      >
        <div className="px-4 pb-4 text-[12px] text-[var(--text-secondary)] leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}
