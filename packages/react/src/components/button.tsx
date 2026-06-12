import { cn } from '../lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'secondary' | 'ghost' | 'danger';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

export function Button({
  className,
  variant = 'default',
  size = 'default',
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[var(--btn-radius)] text-[13px] font-medium transition-all duration-200 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
        variant === 'default' && 'bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)]',
        variant === 'secondary' && 'bg-transparent text-[var(--text-primary)] border border-[var(--border-main)] hover:border-[var(--accent)]',
        variant === 'ghost' && 'bg-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card-hover)]',
        variant === 'danger' && 'bg-[var(--error)] text-white hover:opacity-90',
        size === 'default' && 'h-9 px-[18px] py-2',
        size === 'sm' && 'h-8 px-3 text-[12px]',
        size === 'lg' && 'h-10 px-6 text-[14px]',
        size === 'icon' && 'h-8 w-8',
        className,
      )}
      {...props}
    />
  );
}
