import { cn } from '../lib/utils';
import { useEffect, useState, useCallback } from 'react';
import { createPortal } from 'react-dom';

// ============================================================
// Toast Container (global)
// ============================================================

interface ToastItem {
  id: number;
  variant: 'success' | 'error' | 'info' | 'loading';
  message: string;
}

let toastId = 0;
let listeners: Array<(toasts: ToastItem[]) => void> = [];
let toasts: ToastItem[] = [];

function notify() {
  listeners.forEach((l) => l([...toasts]));
}

export function toast(variant: ToastItem['variant'], message: string) {
  const id = ++toastId;
  toasts = [...toasts, { id, variant, message }];
  notify();
  if (variant !== 'loading') {
    setTimeout(() => dismiss(id), 3000);
  }
  return id;
}

export function dismiss(id: number) {
  toasts = toasts.filter((t) => t.id !== id);
  notify();
}

export function toastSuccess(msg: string) { toast('success', msg); }
export function toastError(msg: string) { toast('error', msg); }
export function toastInfo(msg: string) { toast('info', msg); }
export function toastLoading(msg: string) { return toast('loading', msg); }

const variantIcons: Record<string, string> = {
  success: '\u2705',
  error: '\u274C',
  info: '\u2139\uFE0F',
  loading: '\u23F3',
};

export function Toaster() {
  const [items, setItems] = useState<ToastItem[]>([]);

  useEffect(() => {
    listeners.push(setItems);
    return () => { listeners = listeners.filter((l) => l !== setItems); };
  }, []);

  const dismiss_ = useCallback((id: number) => dismiss(id), []);

  if (items.length === 0) return null;

  return createPortal(
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-2 max-w-sm">
      {items.map((item) => (
        <div
          key={item.id}
          className={cn(
            'flex items-center gap-3 rounded-[8px] border bg-[var(--bg-card)] px-4 py-3 shadow-lg animate-in slide-in-from-right',
          )}
          style={{ animation: 'slideIn 0.3s ease' }}
        >
          <span className="text-[16px]">{variantIcons[item.variant]}</span>
          <span className="flex-1 text-[13px] text-[var(--text-primary)]">{item.message}</span>
          <button
            onClick={() => dismiss_(item.id)}
            className="text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors text-[14px] leading-none"
            aria-label="Dismiss"
          >
            &times;
          </button>
        </div>
      ))}
      <style>{`
        @keyframes slideIn {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      `}</style>
    </div>,
    document.body,
  );
}
