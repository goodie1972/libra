import { cn } from '../lib/utils';
import { useState, useRef, useEffect } from 'react';

export interface PopoverProps {
  trigger: React.ReactNode;
  content: React.ReactNode;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  className?: string;
}

const placementStyles: Record<string, string> = {
  top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
  bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
  left: 'right-full top-1/2 -translate-y-1/2 mr-2',
  right: 'left-full top-1/2 -translate-y-1/2 ml-2',
};

export function Popover({ trigger, content, placement = 'bottom', open: controlledOpen, onOpenChange, className }: PopoverProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const isControlled = controlledOpen !== undefined;
  const isOpen = isControlled ? controlledOpen : internalOpen;
  const ref = useRef<HTMLDivElement>(null);

  const setOpen = (val: boolean) => {
    if (!isControlled) setInternalOpen(val);
    onOpenChange?.(val);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <div ref={ref} className={cn('relative inline-flex', className)}>
      <div onClick={() => setOpen(!isOpen)} className="cursor-pointer">
        {trigger}
      </div>
      {isOpen && (
        <div className={cn('absolute z-50', placementStyles[placement])}>
          <div className="rounded-[8px] bg-[var(--bg-card)] border border-[var(--border-main)] shadow-lg p-3 min-w-[160px]">
            {content}
          </div>
        </div>
      )}
    </div>
  );
}
