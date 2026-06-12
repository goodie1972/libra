import { useEffect, useState, createContext, useContext, type ReactNode } from 'react';

interface ThemeCtx {
  mix: number;
  setMix: (v: number) => void;
}

const Ctx = createContext<ThemeCtx>({ mix: 0.7, setMix: () => {} });
export const useTheme = () => useContext(Ctx);

function lerpColor(h1: string, h2: string, t: number): string {
  const c1 = parseInt(h1.slice(1), 16), c2 = parseInt(h2.slice(1), 16);
  const r1 = (c1 >> 16) & 0xff, g1 = (c1 >> 8) & 0xff, b1 = c1 & 0xff;
  const r2 = (c2 >> 16) & 0xff, g2 = (c2 >> 8) & 0xff, b2 = c2 & 0xff;
  const r = Math.round(Math.sqrt((1 - t) * r1 * r1 + t * r2 * r2));
  const g = Math.round(Math.sqrt((1 - t) * g1 * g1 + t * g2 * g2));
  const b = Math.round(Math.sqrt((1 - t) * b1 * b1 + t * b2 * b2));
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}

function lerpLinear(h1: string, h2: string, t: number): string {
  const c1 = parseInt(h1.slice(1), 16), c2 = parseInt(h2.slice(1), 16);
  return `#${((1 << 24) + (Math.round(((c1 >> 16) & 0xff) + (((c2 >> 16) & 0xff) - ((c1 >> 16) & 0xff)) * t) << 16) + (Math.round(((c1 >> 8) & 0xff) + (((c2 >> 8) & 0xff) - ((c1 >> 8) & 0xff)) * t) << 8) + Math.round((c1 & 0xff) + ((c2 & 0xff) - (c1 & 0xff)) * t)).toString(16).slice(1)}`;
}

function textCurve(t: number) { return 1 - Math.pow(1 - t, 5); }

const DARK: Record<string, string> = {
  'bg-root': '#0c0c0e', 'bg-card': '#121214', 'bg-card-hover': '#18181b',
  'bg-input': '#18181b', 'bg-sidebar': '#0c0c0e', 'bg-chart': '#0c0c0e',
  'bg-sub-panel': '#121214',
  'border-main': '#1e1e22', 'border-sub': '#161618', 'border-input': '#1e1e22',
  'text-primary': '#e8e8ed', 'text-secondary': '#9a9aa0', 'text-tertiary': '#63636a',
  'accent': '#4a6cf7', 'accent-hover': '#5d7cf9',
  'grid-line': '#18191c', 'code-bg': '#08080a',
};

const LIGHT: Record<string, string> = {
  'bg-root': '#f5f5f7', 'bg-card': '#ffffff', 'bg-card-hover': '#f0f0f2',
  'bg-input': '#eaeaee', 'bg-sidebar': '#f5f5f7', 'bg-chart': '#f5f5f7',
  'bg-sub-panel': '#ffffff',
  'border-main': '#d4d4d8', 'border-sub': '#e8e8ec', 'border-input': '#d4d4d8',
  'text-primary': '#0d0d12', 'text-secondary': '#555566', 'text-tertiary': '#8e8e98',
  'accent': '#533afd', 'accent-hover': '#4527e0',
  'grid-line': '#e8ecf0', 'code-bg': '#1a1a1e',
};

function applyMix(t: number, root: HTMLElement) {
  const s = root.style;
  const tt = textCurve(t);
  const vars = Object.keys(DARK);
  const bgKeys = ['bg-root', 'bg-card', 'bg-card-hover', 'bg-input', 'bg-sidebar', 'bg-chart', 'bg-sub-panel', 'border-main', 'border-sub', 'border-input', 'grid-line', 'code-bg'];
  const textKeys = ['text-primary', 'text-secondary', 'text-tertiary', 'accent', 'accent-hover'];

  for (const k of bgKeys) {
    s.setProperty(`--${k}`, lerpColor(DARK[k], LIGHT[k], t));
  }
  for (const k of textKeys) {
    s.setProperty(`--${k}`, lerpLinear(DARK[k], LIGHT[k], tt));
  }
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mix, setMix] = useState(0.7);

  useEffect(() => {
    applyMix(mix, document.documentElement);
  }, [mix]);

  return <Ctx.Provider value={{ mix, setMix }}>{children}</Ctx.Provider>;
}
