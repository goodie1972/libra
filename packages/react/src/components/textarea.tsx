import { cn } from '../lib/utils';
import { useState } from 'react';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  hasError?: boolean;
  showCount?: boolean;
  maxLength?: number;
}

export function Textarea({
  className,
  hasError,
  showCount,
  maxLength,
  onChange,
  value: controlledValue,
  defaultValue,
  ...props
}: TextareaProps) {
  const [internalValue, setInternalValue] = useState(defaultValue?.toString() ?? '');
  const isControlled = controlledValue !== undefined;
  const currentValue = isControlled ? controlledValue.toString() : internalValue;

  return (
    <div className="relative">
      <textarea
        className={cn(
          'flex min-h-[80px] w-full rounded-[6px] border bg-[var(--bg-input)] px-3 py-2 text-[13px] text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] transition-colors duration-200 focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 resize-y',
          hasError
            ? 'border-[var(--error)] focus-visible:border-[var(--error)]'
            : 'border-[var(--border-input)] focus-visible:border-[var(--accent)]',
          className,
        )}
        value={isControlled ? controlledValue : undefined}
        defaultValue={!isControlled ? defaultValue : undefined}
        onChange={(e) => {
          if (!isControlled) setInternalValue(e.target.value);
          onChange?.(e);
        }}
        maxLength={maxLength}
        {...props}
      />
      {showCount && maxLength && (
        <div className="absolute bottom-2 right-3 text-[10px] text-[var(--text-tertiary)] font-[var(--font-mono)] pointer-events-none">
          {currentValue.length}/{maxLength}
        </div>
      )}
    </div>
  );
}
