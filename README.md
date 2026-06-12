# libra Design System

> 面向金融数据的自研设计语言。暗色为骨，留白为肉，数据为主角。

**libra Design** 是一套面向金融数据可视化场景的**自研设计语言**，包含完整的设计 Token、双主题混合引擎和组件库。

```
@libra/tokens   — 设计 Token（CSS 变量 + TypeScript 类型）
@libra/theme    — 双主题混合引擎（暗色 ↔ 亮色无缝过渡）
@libra/cli      — CLI 工具（类似 shadcn，组件源码复制到你的项目）
```

---

## 设计哲学

| 原则 | 含义 |
|------|------|
| **一页一主角** | 每页只有一个视觉重心，K 线页主角是图表 |
| **数据优先** | 装饰服务于数据，不抢戏 |
| **间距即语言** | 4px 为基数，间距大小 = 信息亲密度 |
| **减法制造张力** | 层次靠明度差和间距，不靠颜色多 |

**风格锚定**：Linear（暗色体系）+ Stripe（金融排版）+ Bloomberg Terminal（金融数据基因）

---

## 快速开始

### 安装 Token

```bash
# 在你的项目中安装
npm install @libra/tokens

# 在入口文件引入
import '@libra/tokens/css';
```

### 安装主题引擎（可选，需要浏览器环境）

```bash
npm install @libra/theme
```

```ts
import { applyMix, applyPreset } from '@libra/theme';

// 切换预置主题
applyPreset('dark');   // 🌙 暗色（0%）
applyPreset('soft');   // 🌤️ 柔光（70%，默认）
applyPreset('light');  // ☀️ 亮色（100%）

// 或者手动调节
applyMix(0.35); // 介于暗色和柔光之间
```

### 用 CLI 安装组件（类似 shadcn）

```bash
# 初始化 tokens.css 到项目
npx @libra/cli init

# 添加组件（源码复制到 src/components/ui/）
npx @libra/cli add button
npx @libra/cli add card
npx @libra/cli add table
```

---

## 色彩系统

A 股惯例 — **红涨绿跌**。全界面只有涨（红）和跌（绿）两种有彩色，其余全部中性。

| Token | 色值 | 用途 |
|-------|------|------|
| `--up` | `#ef5350` | 涨/阳线/正值 |
| `--down` | `#26a69a` | 跌/阴线/负值 |
| `--flat` | `#9e9e9e` | 平盘 |

### 双主题混合

通过 gamma-aware 颜色插值，在暗色和亮色端点之间平滑过渡：

```
暗色 (t=0)  ─────────── 柔光 (t=0.7) ─────────── 亮色 (t=1)
#0d0e10      渐进过渡       #f8f9fb      渐进过渡       #ffffff
```

- **背景色**：gamma-aware 插值（`sqrt` 加权），过渡平滑自然
- **文字色**：线性 RGB 插值 + 五次方加速曲线，避免灰色带撞色
- **边框**：gamma-aware 插值 + 平方加速曲线

---

## 字体系统

```css
--font-display: 'Inter Display', 'PingFang SC', sans-serif;  /* 展示 */
--font-body:    'Inter', 'PingFang SC', 'Microsoft YaHei', sans-serif;  /* 正文 */
--font-mono:    'JetBrains Mono', 'SF Mono', monospace;  /* 等宽数字 */
```

所有数值类文本（价格、涨幅、成交量）使用等宽字体 + `tabular-nums`，确保小数点对齐。

---

## 间距系统

4px 基数体系：

```
--space-1: 4px   --space-2: 8px   --space-3: 12px  --space-4: 16px
--space-5: 24px  --space-6: 32px  --space-7: 48px  --space-8: 64px
```

---

## 项目结构

```
libra/
├── packages/
│   ├── tokens/       # @libra/tokens — 设计 Token
│   ├── theme/        # @libra/theme — 双主题引擎
│   └── cli/          # @libra/cli — 组件 CLI 工具
└── docs/             # 设计文档
```

---

## 许可

MIT
