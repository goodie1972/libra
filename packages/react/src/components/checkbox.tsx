import { cn } from '../lib/utils';

export interface CheckboxOption {
  value: string;
  label: React.ReactNode;
  disabled?: boolean;
}

export interface CheckboxProps {
  options: CheckboxOption[];
  value?: string[];
  onChange?: (value: string[]) => void;
  direction?: 'row' | 'column';
  className?: string;
}

export function Checkbox({
  options,
  value = [],
  onChange,
  direction = 'column',
  className,
}: CheckboxProps) {
  const allSelected = options.every((o) => value.includes(o.value));
  const someSelected = options.some((o) => value.includes(o.value));

  const toggleAll = () => {
    onChange?.(allSelected ? [] : options.map((o) => o.value));
  };

  const toggle = (v: string) => {
    onChange?.(value.includes(v) ? value.filter((x) => x !== v) : [...value, v]);
  };

  return (
    <div className={cn('flex gap-2', direction === 'column' ? 'flex-col' : 'flex-row flex-wrap items-center', className)}>
      {options.length > 1 && (
        <label className="flex items-center gap-2 cursor-pointer group">
          <input
            type="checkbox"
            checked={allSelected}
            ref={(el) => { if (el) el.indeterminate = someSelected && !allSelected; }}
            onChange={toggleAll}
            className="sr-only"
          />
          <span
            className={cn(
              'flex h-4 w-4 shrink-0 items-center justify-center rounded-[3px] border transition-colors duration-150',
              allSelected
                ? 'border-[var(--accent)] bg-[var(--accent)]'
                : someSelected
                  ? 'border-[var(--accent)] bg-[var(--accent)]/30'
                  : 'border-[var(--border-input)] group-hover:border-[var(--accent)]',
            )}
          >
            {(allSelected || someSelected) && (
              <svg viewBox="0 0 12 12" className="h-2.5 w-2.5 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                {allSelected
                  ? <polyline points="2 6 5 9 10 2" />
                  : <line x1="2" y1="6" x2="10" y2="6" />}
              </svg>
            )}
          </span>
          <span className="text-[12px] text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
            Select All
          </span>
        </label>
      )}
      {options.map((opt) => {
        const checked = value.includes(opt.value);
        return (
          <label
            key={opt.value}
            className={cn(
              'flex items-center gap-2 cursor-pointer group',
              opt.disabled && 'opacity-40 cursor-not-allowed',
            )}
          >
            <input
              type="checkbox"
              checked={checked}
              disabled={opt.disabled}
              onChange={() => toggle(opt.value)}
              className="sr-only"
            />
            <span
              className={cn(
                'flex h-4 w-4 shrink-0 items-center justify-center rounded-[3px] border transition-colors duration-150',
                checked
                  ? 'border-[var(--accent)] bg-[var(--accent)]'
                  : 'border-[var(--border-input)] group-hover:border-[var(--accent)]',
              )}
            >
              {checked && (
                <svg viewBox="0 0 12 12" className="h-2.5 w-2.5 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="2 6 5 9 10 2" />
                </svg>
              )}
            </span>
            <span className="text-[13px] text-[var(--text-primary)]">{opt.label}</span>
          </label>
        );
      })}
    </div>
  );
}
