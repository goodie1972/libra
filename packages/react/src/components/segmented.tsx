import { cn } from '../lib/utils';

export interface SegmentedOption {
  value: string;
  label: string;
}

export interface SegmentedProps {
  options: SegmentedOption[];
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export function Segmented({ options, value, onChange, className }: SegmentedProps) {
  return (
    <div
      className={cn(
        'inline-flex rounded-[8px] bg-[var(--bg-card-hover)] p-[2px]',
        className,
      )}
      role="radiogroup"
    >
      {options.map((option) => {
        const isSelected = value === option.value;
        return (
          <button
            key={option.value}
            type="button"
            role="radio"
            aria-checked={isSelected}
            onClick={() => onChange?.(option.value)}
            className={cn(
              'rounded-[6px] px-3.5 py-1.5 text-[13px] font-medium transition-all duration-150',
              isSelected
                ? 'bg-[var(--accent)] text-white shadow-sm'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]',
            )}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
