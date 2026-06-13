import { useState } from 'react';
import { cn } from '../lib/utils';

export interface CalendarEvent {
  day: number;
  text: string;
  type?: 'earnings' | 'dividend' | 'other';
}

export interface CalendarProps {
  year: number;
  month: number;
  events?: CalendarEvent[];
  onMonthChange?: (year: number, month: number) => void;
  className?: string;
}

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function daysInMonth(year: number, month: number): number {
  return new Date(year, month, 0).getDate();
}

function firstDayOfMonth(year: number, month: number): number {
  return new Date(year, month - 1, 1).getDay();
}

const eventColorMap: Record<NonNullable<CalendarEvent['type']>, string> = {
  earnings: 'bg-[var(--up)]',
  dividend: 'bg-[var(--accent)]',
  other: 'bg-[var(--text-tertiary)]',
};

export function Calendar({
  year,
  month,
  events = [],
  onMonthChange,
  className,
}: CalendarProps) {
  const [viewYear, setViewYear] = useState(year);
  const [viewMonth, setViewMonth] = useState(month);

  const today = new Date();
  const todayDate = today.getDate();
  const todayYear = today.getFullYear();
  const todayMonth = today.getMonth() + 1;

  const totalDays = daysInMonth(viewYear, viewMonth);
  const startDay = firstDayOfMonth(viewYear, viewMonth);
  const cells: (number | null)[] = Array(42).fill(null);

  for (let d = 1; d <= totalDays; d++) {
    cells[startDay + d - 1] = d;
  }

  const handlePrev = () => {
    let ny = viewYear;
    let nm = viewMonth - 1;
    if (nm < 1) { nm = 12; ny -= 1; }
    setViewYear(ny);
    setViewMonth(nm);
    onMonthChange?.(ny, nm);
  };

  const handleNext = () => {
    let ny = viewYear;
    let nm = viewMonth + 1;
    if (nm > 12) { nm = 1; ny += 1; }
    setViewYear(ny);
    setViewMonth(nm);
    onMonthChange?.(ny, nm);
  };

  const dayEvents = (day: number) =>
    events.filter((e) => e.day === day);

  return (
    <div
      className={cn(
        'rounded-[var(--card-radius)] border border-[var(--border-main)] bg-[var(--bg-card)] overflow-hidden',
        className,
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--border-sub)]">
        <button
          onClick={handlePrev}
          className="w-7 h-7 flex items-center justify-center rounded text-[var(--text-secondary)] hover:bg-[var(--bg-card-hover)] transition-colors text-[var(--text-base)] leading-none"
          aria-label="Previous month"
        >
          &#8249;
        </button>
        <span className="text-[var(--text-lg)] font-semibold text-[var(--text-primary)]">
          {viewYear}.{String(viewMonth).padStart(2, '0')}
        </span>
        <button
          onClick={handleNext}
          className="w-7 h-7 flex items-center justify-center rounded text-[var(--text-secondary)] hover:bg-[var(--bg-card-hover)] transition-colors text-[var(--text-base)] leading-none"
          aria-label="Next month"
        >
          &#8250;
        </button>
      </div>

      {/* Weekday headers */}
      <div className="grid grid-cols-7 border-b border-[var(--border-sub)]">
        {WEEKDAYS.map((w) => (
          <div
            key={w}
            className="text-center py-2 text-[10px] font-medium text-[var(--text-tertiary)] tracking-[0.04em] uppercase"
          >
            {w}
          </div>
        ))}
      </div>

      {/* Day grid */}
      <div className="grid grid-cols-7">
        {cells.map((day, idx) => {
          const isToday =
            day !== null &&
            viewYear === todayYear &&
            viewMonth === todayMonth &&
            day === todayDate;

          const dayEvts = day !== null ? dayEvents(day) : [];

          return (
            <div
              key={idx}
              className={cn(
                'relative min-h-[56px] p-1.5 border-b border-r border-[var(--border-sub)] transition-colors',
                day !== null && 'hover:bg-[var(--bg-card-hover)]',
                isToday && 'ring-1 ring-inset ring-[var(--accent)]',
              )}
              style={day === null ? { background: 'var(--bg-root)' } : undefined}
            >
              {day !== null && (
                <>
                  <span
                    className={cn(
                      'text-[11px] font-medium',
                      isToday
                        ? 'text-[var(--accent)]'
                        : 'text-[var(--text-secondary)]',
                    )}
                  >
                    {day}
                  </span>
                  {dayEvts.length > 0 && (
                    <div className="mt-1 flex flex-wrap gap-0.5">
                      {dayEvts.map((evt, ei) => (
                        <div
                          key={ei}
                          className={cn(
                            'w-1.5 h-1.5 rounded-full shrink-0',
                            eventColorMap[evt.type ?? 'other'],
                          )}
                          title={evt.text}
                        />
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
