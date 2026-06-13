import { cn } from '../lib/utils';

export interface DatePickerProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export function DatePicker({ value, onChange, placeholder = 'Select date', className }: DatePickerProps) {
  return (
    <input
      type="date"
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      placeholder={placeholder}
      className={cn(
        'h-[36px] w-full rounded-[8px] border border-[var(--border-main)] bg-[var(--bg-card)] px-3 text-[13px] text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] outline-hidden transition-colors focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]',
        'font-[var(--font-mono)] tabular-nums',
        className,
      )}
    />
  );
}
