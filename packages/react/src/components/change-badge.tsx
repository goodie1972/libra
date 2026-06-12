import { cn } from '../lib/utils';

export interface ChangeBadgeProps {
  value: number;
  showPercent?: boolean;
  showSign?: boolean;
  size?: 'sm' | 'md';
  className?: string;
}

function getVariant(value: number): 'up' | 'down' | 'flat' {
  if (value > 0) return 'up';
  if (value < 0) return 'down';
  return 'flat';
}

const variantStyles: Record<string, string> = {
  up: 'bg-[var(--up-bg)] text-[var(--up)]',
  down: 'bg-[var(--down-bg)] text-[var(--down)]',
  flat: 'bg-[var(--bg-card-hover)] text-[var(--flat)]',
};

export function ChangeBadge({
  value,
  showPercent = true,
  showSign = true,
  size = 'md',
  className,
}: ChangeBadgeProps) {
  const variant = getVariant(value);
  const absValue = Math.abs(value);

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-[4px] font-[var(--font-mono)] font-medium leading-none',
        variantStyles[variant],
        size === 'sm' ? 'px-1.5 py-[3px] text-[11px]' : 'px-2.5 py-[5px] text-[13px]',
        className,
      )}
      style={{ fontVariantNumeric: 'tabular-nums' }}
    >
      {showSign && value !== 0 && (value > 0 ? '+' : '\u2212')}
      {absValue.toFixed(2)}
      {showPercent && '%'}
    </span>
  );
}
