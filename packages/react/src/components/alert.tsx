import { cn } from '../lib/utils';

export interface AlertProps {
  variant?: 'info' | 'success' | 'warning' | 'error';
  title?: React.ReactNode;
  children: React.ReactNode;
  onClose?: () => void;
  className?: string;
}

const variantStyles: Record<string, { container: string; icon: string }> = {
  info:    { container: 'border-[var(--accent)]/20 bg-[var(--accent)]/8',   icon: 'text-[var(--accent)]' },
  success: { container: 'border-[var(--success)]/20 bg-[var(--success)]/8', icon: 'text-[var(--success)]' },
  warning: { container: 'border-[var(--warning)]/20 bg-[var(--warning)]/8', icon: 'text-[var(--warning)]' },
  error:   { container: 'border-[var(--error)]/20 bg-[var(--error)]/8',     icon: 'text-[var(--error)]' },
};

const icons: Record<string, string> = {
  info:    '\u2139\uFE0F',
  success: '\u2705',
  warning: '\u26A0\uFE0F',
  error:   '\u274C',
};

export function Alert({ variant = 'info', title, children, onClose, className }: AlertProps) {
  const vs = variantStyles[variant];
  return (
    <div
      className={cn(
        'relative flex gap-3 rounded-[8px] border p-4',
        vs.container,
        className,
      )}
      role="alert"
    >
      <span className={cn('text-[16px] leading-none mt-0.5', vs.icon)}>
        {icons[variant]}
      </span>
      <div className="flex-1 min-w-0">
        {title && (
          <div className="text-[13px] font-semibold text-[var(--text-primary)] mb-1">
            {title}
          </div>
        )}
        <div className="text-[12px] text-[var(--text-secondary)] leading-relaxed">
          {children}
        </div>
      </div>
      {onClose && (
        <button
          onClick={onClose}
          className="text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors text-[16px] leading-none self-start"
          aria-label="Close"
        >
          &times;
        </button>
      )}
    </div>
  );
}
