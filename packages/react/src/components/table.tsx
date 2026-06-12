import { cn } from '../lib/utils';
import type { HTMLAttributes, ThHTMLAttributes, TdHTMLAttributes } from 'react';

export function Table({ className, ...props }: HTMLAttributes<HTMLTableElement>) {
  return (
    <div className="relative w-full overflow-auto">
      <table
        className={cn(
          'w-full caption-bottom text-[13px] text-[var(--text-primary)]',
          className,
        )}
        {...props}
      />
    </div>
  );
}

export function TableHeader({ className, ...props }: HTMLAttributes<HTMLTableSectionElement>) {
  return (
    <thead
      className={cn(
        '[&_tr]:border-b [&_tr]:border-[var(--border-sub)]',
        className,
      )}
      {...props}
    />
  );
}

export function TableHead({ className, ...props }: ThHTMLAttributes<HTMLTableHeaderCellElement>) {
  return (
    <th
      className={cn(
        'h-10 px-5 text-left align-middle text-[11px] font-medium text-[var(--text-secondary)] tracking-[0.03em]',
        className,
      )}
      {...props}
    />
  );
}

export function TableRow({ className, ...props }: HTMLAttributes<HTMLTableRowElement>) {
  return (
    <tr
      className={cn(
        'border-b border-[var(--border-sub)] transition-colors hover:bg-[var(--bg-card-hover)]',
        className,
      )}
      {...props}
    />
  );
}

export function TableCell({ className, ...props }: TdHTMLAttributes<HTMLTableDataCellElement>) {
  return (
    <td
      className={cn('p-3 px-5 align-middle', className)}
      {...props}
    />
  );
}
