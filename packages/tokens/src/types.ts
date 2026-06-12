/**
 * @libra/tokens — TypeScript 类型定义
 *
 * 这些类型与 CSS Token 一一对应，供消费方 TypeScript 项目类型检查。
 */

/** 涨跌方向 */
export type Direction = 'up' | 'down' | 'flat';

/** 均线周期 */
export type MAPeriod = 5 | 10 | 20 | 60 | 120 | 250;

/** 预置主题模式 */
export type ThemePreset = 'dark' | 'soft' | 'light' | 'custom';

/** 主题混合比例 */
export type ThemeMix = number; // 0 = dark, 0.7 = soft, 1 = light

/** 字体层级 */
export type TextLevel = 'xs' | 'sm' | 'base' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';

/** 间距层级 */
export type SpaceLevel = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

/** 语义色映射 */
export const SEMANTIC_COLORS = {
  up: '#ef5350',
  down: '#26a69a',
  flat: '#9e9e9e',
  ma5: '#f8b500',
  ma10: '#4a6cf7',
  ma20: '#9c27b0',
  ma60: '#009688',
  ma120: '#ff7043',
  ma250: '#78909c',
  success: '#34a853',
  warning: '#fbbc04',
  error: '#ea4335',
} as const;

/** 暗色端点色值（t=0） */
export const DARK_ENDPOINT = {
  'bg-root': '#0d0e10',
  'bg-main': '#0d0e10',
  'bg-sidebar': '#0d0e10',
  'bg-card': '#131416',
  'bg-card-hover': '#16171b',
  'bg-input': '#191a1d',
  'bg-chart': '#0d0e10',
  'bg-sub-panel': '#0d0e10',
  'border-main': '#1e1f23',
  'border-sub': '#1a1b1e',
  'border-input': '#1e1f23',
  'text-primary': '#e8e8ea',
  'text-secondary': '#a0a1a7',
  'text-tertiary': '#6b6c73',
  accent: '#4a6cf7',
  'accent-hover': '#5d7cf9',
  'grid-line': '#18191c',
} as const;

/** 亮色端点色值（t=1） */
export const LIGHT_ENDPOINT = {
  'bg-root': '#ffffff',
  'bg-main': '#f8f9fb',
  'bg-sidebar': '#fafbfc',
  'bg-card': '#ffffff',
  'bg-card-hover': '#fafbfc',
  'bg-input': '#f0f2f5',
  'bg-chart': '#0f1117',
  'bg-sub-panel': '#ffffff',
  'border-main': '#e3e8ee',
  'border-sub': '#f0f2f5',
  'border-input': '#e3e8ee',
  'text-primary': '#0d253d',
  'text-secondary': '#6b7c93',
  'text-tertiary': '#8e9bae',
  accent: '#533afd',
  'accent-hover': '#4527e0',
  'grid-line': '#e8ecf0',
} as const;

/** 所有主题变量名 */
export type ThemeVariable = keyof typeof DARK_ENDPOINT;

/** 字号定义 */
export const FONT_SIZES = {
  xs: 10,
  sm: 12,
  base: 13,
  md: 14,
  lg: 16,
  xl: 20,
  '2xl': 24,
  '3xl': 32,
  '4xl': 40,
} as const;

/** 间距定义 */
export const SPACING = {
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 24,
  6: 32,
  7: 48,
  8: 64,
} as const;
