import { cn } from '../lib/utils';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'children'> {
  options: SelectOption[];
  placeholder?: string;
  hasError?: boolean;
}

export function Select({
  className,
  options,
  placeholder,
  hasError,
  ...props
}: SelectProps) {
  return (
    <select
      className={cn(
        'flex h-9 w-full rounded-[6px] border bg-[var(--bg-input)] px-3 py-2 text-[13px] text-[var(--text-primary)] transition-colors duration-200 focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 appearance-none bg-[length:16px] bg-[right_12px_center] bg-no-repeat',
        hasError
          ? 'border-[var(--error)] focus-visible:border-[var(--error)]'
          : 'border-[var(--border-input)] focus-visible:border-[var(--accent)]',
        className,
      )}
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2363636a' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
      }}
      {...props}
    >
      {placeholder && (
        <option value="" disabled>
          {placeholder}
        </option>
      )}
      {options.map((opt) => (
        <option key={opt.value} value={opt.value} disabled={opt.disabled}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}
