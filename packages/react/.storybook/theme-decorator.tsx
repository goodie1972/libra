import type { Decorator } from '@storybook/react';
import { useEffect } from 'react';

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
  'bg-root': '#0c0c0e', 'bg-main': '#0c0c0e', 'bg-sidebar': '#0c0c0e',
  'bg-card': '#121214', 'bg-card-hover': '#18181b', 'bg-input': '#18181b',
  'bg-chart': '#0c0c0e', 'bg-sub-panel': '#121214',
  'border-main': '#1e1e22', 'border-sub': '#161618', 'border-input': '#1e1e22',
  'text-primary': '#e8e8ed', 'text-secondary': '#9a9aa0', 'text-tertiary': '#63636a',
  'accent': '#4a6cf7', 'accent-hover': '#5d7cf9', 'grid-line': '#18191c', 'code-bg': '#08080a',
};

const LIGHT: Record<string, string> = {
  'bg-root': '#f5f5f7', 'bg-main': '#f5f5f7', 'bg-sidebar': '#f5f5f7',
  'bg-card': '#ffffff', 'bg-card-hover': '#f0f0f2', 'bg-input': '#eaeaee',
  'bg-chart': '#f5f5f7', 'bg-sub-panel': '#ffffff',
  'border-main': '#d4d4d8', 'border-sub': '#e8e8ec', 'border-input': '#d4d4d8',
  'text-primary': '#0d0d12', 'text-secondary': '#555566', 'text-tertiary': '#8e8e98',
  'accent': '#533afd', 'accent-hover': '#4527e0', 'grid-line': '#e8ecf0', 'code-bg': '#1a1a1e',
};

function applyMix(t: number) {
  const root = document.documentElement.style;
  const tt = textCurve(t);
  const bgKeys = ['bg-root', 'bg-main', 'bg-sidebar', 'bg-card', 'bg-card-hover', 'bg-input', 'bg-chart', 'bg-sub-panel', 'border-main', 'border-sub', 'border-input', 'grid-line', 'code-bg'];
  const textKeys = ['text-primary', 'text-secondary', 'text-tertiary', 'accent', 'accent-hover'];
  for (const k of bgKeys) root.setProperty(`--${k}`, lerpColor(DARK[k], LIGHT[k], t));
  for (const k of textKeys) root.setProperty(`--${k}`, lerpLinear(DARK[k], LIGHT[k], tt));
  root.setProperty('--btn-radius', `${Math.round(8 + t * 12)}px`);
  root.setProperty('--card-radius', `${Math.round(10 + t * 2)}px`);
  root.setProperty('--card-shadow', t < 0.01 ? 'none' : `0 1px 3px rgba(0,0,0,${(t * 0.04).toFixed(2)}), 0 3px 12px rgba(0,0,0,${(t * 0.024).toFixed(3)})`);
  root.setProperty('--card-border', t > 0.5 ? 'none' : '1px solid var(--border-main)');
}

const themeValues: Record<string, number> = { dark: 0, soft: 0.7, light: 1 };

export const withTheme: Decorator = (Story, context) => {
  const theme = (context.globals as Record<string, string>)?.theme ?? 'soft';
  const t = themeValues[theme] ?? 0.7;

  useEffect(() => { applyMix(t); }, [t]);

  return (
    <div style={{ background: 'var(--bg-root)', color: 'var(--text-primary)', padding: '24px', fontFamily: 'var(--font-body)', transition: 'background 0.6s, color 0.6s', minHeight: '100vh' }}>
      <Story />
    </div>
  );
};
