import { cn } from '../lib/utils';

export interface OrderLevel {
  price: number;
  size: number;
  total: number;
}

export interface OrderBookProps {
  bids: OrderLevel[];
  asks: OrderLevel[];
  maxLevels?: number;
  className?: string;
}

export function OrderBook({ bids, asks, maxLevels = 10, className }: OrderBookProps) {
  const maxTotal = Math.max(
    ...bids.map((b) => b.total),
    ...asks.map((a) => a.total),
    1,
  );

  const renderRow = (level: OrderLevel, side: 'bid' | 'ask', i: number) => {
    const pct = (level.total / maxTotal) * 100;
    const barColor = side === 'bid' ? 'var(--vol-up)' : 'var(--vol-down)';
    const textColor = side === 'bid' ? 'var(--up)' : 'var(--down)';

    return (
      <div key={`${side}${i}`} className="relative" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', padding: '3px 12px', fontSize: 11 }}>
        <div className="absolute right-0 top-0 bottom-0 opacity-20" style={{ width: `${pct}%`, background: barColor }} />
        <span style={{ fontFamily: 'var(--font-mono)', color: textColor, fontVariantNumeric: 'tabular-nums', zIndex: 1 }}>{level.price.toFixed(2)}</span>
        <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-primary)', textAlign: 'right', fontVariantNumeric: 'tabular-nums', zIndex: 1 }}>{level.size.toFixed(4)}</span>
        <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)', textAlign: 'right', fontVariantNumeric: 'tabular-nums', zIndex: 1 }}>{level.total.toFixed(4)}</span>
      </div>
    );
  };

  return (
    <div className={cn('rounded-[var(--card-radius)] border border-[var(--border-main)] bg-[var(--bg-card)] overflow-hidden', className)}>
      {/* Header */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', padding: '6px 12px', borderBottom: '1px solid var(--border-sub)', fontSize: 10, color: 'var(--text-tertiary)', fontWeight: 500 }}>
        <span>Price</span>
        <span style={{ textAlign: 'right' }}>Size</span>
        <span style={{ textAlign: 'right' }}>Total</span>
      </div>

      {/* Asks (reversed: highest near spread) */}
      <div style={{ borderBottom: '2px solid var(--border-sub)', paddingBottom: 2, marginBottom: 2 }}>
        {[...asks].reverse().slice(0, maxLevels).map((level, i) => renderRow(level, 'ask', i))}
      </div>

      {/* Spread indicator */}
      {asks.length && bids.length ? (
        <div style={{ textAlign: 'center', padding: '3px 0', fontSize: 10, color: 'var(--text-tertiary)', fontFamily: 'var(--font-mono)' }}>
          {(asks[asks.length - 1]?.price - bids[0]?.price).toFixed(2)}
        </div>
      ) : null}

      {/* Bids */}
      <div style={{ paddingTop: 2 }}>
        {bids.slice(0, maxLevels).map((level, i) => renderRow(level, 'bid', i))}
      </div>
    </div>
  );
}
