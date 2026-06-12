import { cn } from '../lib/utils';

export interface Tab {
  value: string;
  label: React.ReactNode;
  disabled?: boolean;
}

export interface TabsProps {
  tabs: Tab[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export function Tabs({ tabs, value, onChange, className }: TabsProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-1 rounded-[8px] bg-[var(--bg-input)] p-1',
        className,
      )}
      role="tablist"
    >
      {tabs.map((tab) => (
        <button
          key={tab.value}
          role="tab"
          aria-selected={value === tab.value}
          disabled={tab.disabled}
          onClick={() => onChange(tab.value)}
          className={cn(
            'rounded-[6px] px-3.5 py-1.5 text-[12px] font-medium transition-all duration-200',
            value === tab.value
              ? 'bg-[var(--bg-card)] text-[var(--text-primary)] shadow-xs'
              : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]',
            tab.disabled && 'opacity-40 cursor-not-allowed',
          )}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
