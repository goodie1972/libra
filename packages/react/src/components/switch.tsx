import { cn } from '../lib/utils';

export interface SwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
  id?: string;
}

export function Switch({ checked, onChange, disabled, className, id }: SwitchProps) {
  return (
    <button
      id={id}
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={() => onChange(!checked)}
      className={cn(
        'inline-flex h-[22px] w-[38px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors duration-200 focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50',
        checked ? 'bg-[var(--accent)]' : 'bg-[var(--border-main)]',
        className,
      )}
    >
      <span
        className={cn(
          'pointer-events-none block h-[16px] w-[16px] rounded-full bg-white shadow-sm ring-0 transition-transform duration-200',
          checked ? 'translate-x-[18px]' : 'translate-x-[1px]',
        )}
      />
    </button>
  );
}
