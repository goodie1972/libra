import { cn } from '../lib/utils';

export interface ToggleProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  pressed?: boolean;
  onPressedChange?: (pressed: boolean) => void;
  variant?: 'default' | 'outline';
}

export function Toggle({ pressed = false, onPressedChange, variant = 'default', className, children, ...props }: ToggleProps) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      onClick={() => onPressedChange?.(!pressed)}
      className={cn(
        'inline-flex items-center justify-center rounded-[6px] px-3 py-1.5 text-[13px] font-medium transition-all duration-150 focus-visible:outline-hidden disabled:opacity-50 disabled:cursor-not-allowed',
        variant === 'default' && [
          pressed
            ? 'bg-[var(--accent)] text-white shadow-sm'
            : 'bg-[var(--bg-card-hover)] text-[var(--text-secondary)] hover:bg-[var(--border-sub)] hover:text-[var(--text-primary)]',
        ],
        variant === 'outline' && [
          'border',
          pressed
            ? 'border-[var(--accent)] bg-[var(--accent)]/10 text-[var(--accent)]'
            : 'border-[var(--border-main)] text-[var(--text-secondary)] hover:border-[var(--border-sub)] hover:text-[var(--text-primary)]',
        ],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
