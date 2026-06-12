import { cn } from '../lib/utils';

export interface BadgeProps {
  variant?: 'up' | 'down' | 'flat' | 'success' | 'warning' | 'error' | 'default';
  className?: string;
  children: React.ReactNode;
}

const variantStyles: Record<string, string> = {
  up: 'bg-[var(--up-bg)] text-[var(--up)]',
  down: 'bg-[var(--down-bg)] text-[var(--down)]',
  flat: 'bg-[var(--bg-card-hover)] text-[var(--flat)]',
  success: 'bg-[var(--bg-card-hover)] text-[var(--success)]',
  warning: 'bg-[var(--bg-card-hover)] text-[var(--warning)]',
  error: 'bg-[var(--bg-card-hover)] text-[var(--error)]',
  default: 'bg-[var(--bg-card-hover)] text-[var(--text-secondary)]',
};

export function Badge({ variant = 'default', className, children }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-[4px] px-2 py-[2px] text-[11px] font-medium leading-[1.3]',
        variantStyles[variant] || variantStyles.default,
        className,
      )}
    >
      {children}
    </span>
  );
}
