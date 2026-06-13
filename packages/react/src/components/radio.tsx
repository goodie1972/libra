import { cn } from '../lib/utils';

export interface RadioOption {
  value: string;
  label: React.ReactNode;
  disabled?: boolean;
}

export interface RadioGroupProps {
  options: RadioOption[];
  value?: string;
  onChange?: (value: string) => void;
  direction?: 'row' | 'column';
  variant?: 'default' | 'button';
  className?: string;
}

export function RadioGroup({
  options,
  value,
  onChange,
  direction = 'column',
  variant = 'default',
  className,
}: RadioGroupProps) {
  if (variant === 'button') {
    return (
      <div className={cn('inline-flex rounded-[6px] bg-[var(--bg-input)] p-1', className)} role="radiogroup">
        {options.map((opt) => (
          <button
            key={opt.value}
            role="radio"
            aria-checked={value === opt.value}
            disabled={opt.disabled}
            onClick={() => onChange?.(opt.value)}
            className={cn(
              'rounded-[4px] px-3.5 py-1.5 text-[12px] font-medium transition-all duration-200',
              value === opt.value
                ? 'bg-[var(--bg-card)] text-[var(--text-primary)] shadow-xs'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]',
              opt.disabled && 'opacity-40 cursor-not-allowed',
            )}
          >
            {opt.label}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className={cn('flex gap-2', direction === 'column' ? 'flex-col' : 'flex-row flex-wrap items-center', className)} role="radiogroup">
      {options.map((opt) => (
        <label
          key={opt.value}
          className={cn(
            'flex items-center gap-2 cursor-pointer group',
            opt.disabled && 'opacity-40 cursor-not-allowed',
          )}
        >
          <input
            type="radio"
            checked={value === opt.value}
            disabled={opt.disabled}
            onChange={() => onChange?.(opt.value)}
            className="sr-only"
          />
          <span
            className={cn(
              'flex h-4 w-4 shrink-0 items-center justify-center rounded-full border transition-colors duration-150',
              value === opt.value
                ? 'border-[var(--accent)]'
                : 'border-[var(--border-input)] group-hover:border-[var(--accent)]',
            )}
          >
            {value === opt.value && (
              <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
            )}
          </span>
          <span className="text-[13px] text-[var(--text-primary)]">{opt.label}</span>
        </label>
      ))}
    </div>
  );
}
