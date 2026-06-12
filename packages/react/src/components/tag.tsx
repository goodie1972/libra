import { cn } from '../lib/utils';

export interface TagProps {
  variant?: 'up' | 'down' | 'accent' | 'default';
  size?: 'sm' | 'md';
  className?: string;
  children: React.ReactNode;
  onRemove?: () => void;
}

const variantStyles: Record<string, string> = {
  up: 'bg-[var(--up-bg)] text-[var(--up)] border-[var(--up)]/20',
  down: 'bg-[var(--down-bg)] text-[var(--down)] border-[var(--down)]/20',
  accent: 'bg-[var(--accent)]/10 text-[var(--accent)] border-[var(--accent)]/20',
  default: 'bg-[var(--bg-card-hover)] text-[var(--text-secondary)] border-[var(--border-sub)]',
};

export function Tag({
  variant = 'default',
  size = 'md',
  className,
  children,
  onRemove,
}: TagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-[4px] border font-medium leading-none',
        variantStyles[variant],
        size === 'sm' ? 'px-1.5 py-[2px] text-[10px]' : 'px-2 py-[3px] text-[11px]',
        className,
      )}
    >
      {children}
      {onRemove && (
        <button
          type="button"
          onClick={onRemove}
          className="ml-0.5 opacity-50 hover:opacity-100 transition-opacity"
          aria-label="Remove"
        >
          &times;
        </button>
      )}
    </span>
  );
}
