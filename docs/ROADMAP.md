# Libra Design System — 路线图

> 最后更新：2026-06-12

---

## 当前状态

### 已有资产（6 个包）

| 包 | 版本 | 状态 | 说明 |
|---|------|------|------|
| @libra/tokens | 0.1.0 | ✅ 完成 | CSS 变量 + TypeScript 类型定义，142 个 token |
| @libra/theme | 0.1.0 | ✅ 完成 | 双主题混合引擎（gamma-aware 插值），3 预设 |
| @libra/cli | 0.1.0 | 🟡 可用 | `init` + `add`，支持 15 个组件源码复制 |
| @libra/mcp-server | 0.1.0 | ✅ 完成 | 7 个 MCP 工具，集成 @libra/react |
| @libra/react | 0.1.0 | 🟡 可用 | 15 个 React 组件，40 个单元测试 |
| libra-skill | — | ✅ 完成 | Claude Code Skill，设计体系速查 |

### 组件清单（15 个）

```
P0 基础     Button · Card · Table · cn()
P1 语义     Badge · Input · ChangeBadge · PriceDisplay
P2 业务     StockCard · Select · Tabs · Tag
P3 交互     Modal · Tooltip · Switch · MarketTable(可排序)
```

### 测试覆盖

| 指标 | 数值 |
|------|------|
| 测试框架 | Vitest + React Testing Library + jsdom |
| 测试文件 | 1 个 |
| 测试总数 | 40 个 |
| 通过率 | 100% |

### 展示站

- 设计展：https://goodie1972.github.io/libra/
- 组件演示：https://goodie1972.github.io/libra/react-demo/

---

## 差距分析

### vs shadcn/ui（50+ 组件）

| 分类 | shadcn/ui | Libra | 缺口 |
|------|-----------|-------|------|
| 表单输入 | 18 个 | 3 个 | 15 |
| 数据展示 | 10 个 | 4 个 | 6 |
| 导航 | 10 个 | 1 个 | 9 |
| 反馈 | 7 个 | 2 个 | 5 |
| 布局 | 9 个 | 0 个 | 9 |
| 图表 | 6 个 | 0 个 | 6 |

**总缺口：约 50 个组件**

### vs Ant Design（70+ 组件）

| 维度 | Ant Design | Libra |
|------|-----------|-------|
| 组件数 | 70+ | 15 |
| 文档站 | ant.design | docs/index.html |
| 国际化 | 多语言 | ❌ 暂无需求 |
| 无障碍 | ARIA 完整 | ❌ |
| 图标 | @ant-design/icons | ❌ |
| CI/CD | GitHub Actions | ❌ |
| CHANGELOG | 完整 | ❌ |

---

## Phase 1 — 补齐基础组件（预计 2-3 天）

优先级 P0，从最高频场景开始。

### P0 表单组件（4 个）

```typescript
Textarea   带 resize、error 态、字符计数
Checkbox   多选组 + 全选/半选
Radio      单选框组 + 按钮样式
Slider     数值滑块 + 区间模式
```

### P0 反馈组件（4 个）

```typescript
Alert     内联提示（info/success/warning/error）
Toast     全局消息提示（成功/错误/加载）
Progress  进度条（线性 + 环形）
Skeleton  骨架屏加载
Spin      加载中旋转
```

### P1 导航组件（4 个）

```typescript
Breadcrumb    面包屑导航
Pagination    分页器
DropdownMenu  下拉菜单
Accordion     折叠面板
```

### P1 布局组件（3 个）

```typescript
Divider  分割线
Space    间距容器
Flex     弹性布局
```

### P2 数据展示（3 个）

```typescript
Avatar     头像
Empty      空状态
Statistic  数值展示
```

**Phase 1 目标：** 15 → 30 组件，覆盖 80% 常见 UI 场景。

---

## Phase 2 — 工程化基建（预计 3-5 天）

```
- Storybook 文档站
  - 交互式组件演示
  - 自动生成 Props 表格
  - 主题切换集成
  - 部署到 GitHub Pages

- GitHub Actions CI
  - PR → lint → typecheck → test(40) → build
  - Release workflow（npm publish）

- 无障碍
  - ARIA 属性补全
  - 键盘导航
  - Focus management
  - 色弱模式支持

- 图标方案
  - lucide-react 集成（与 shadcn 一致）
  - 或自建 SVG sprite
```

---

## Phase 3 — 金融数据组件 ✅ 完成

| 组件 | 文件 | 技术 |
|------|------|------|
| KLineChart | `kline-chart.tsx` | SVG candlestick + MA5/10/20 + volume bars |
| DepthChart | `depth-chart.tsx` | SVG area chart, bid/ask cummulative |
| TimeShareChart | `timeshare-chart.tsx` | SVG line + volume, avg price |
| StockTable | `stock-table.tsx` | 基于 MarketTable, 涨跌色 + 等宽数字 |
| MarketBoard | `market-board.tsx` | 盘口五档, 深度条 + spread |
| OrderBook | `order-book.tsx` | 累积订单簿, 进度条 |
| Heatmap | `heatmap.tsx` | 涨跌色阶网格, hover scale |

---

## Phase 4 — 发布与生态（预计 3 天）

```
- npm publish 自动化
  - changeset + GitHub Releases
  - CHANGELOG 自动生成
  - 语义化版本

- 官网发布
  - 独立域名
  - SEO
  - 使用量统计

- 社区
  - README 完善
  - 贡献指南
  - 问题模板
```

---

## 明天（2026-06-13）工作重点

1. **Phase 1 P0：** Textarea / Checkbox / Radio / Slider（4 个表单组件）
2. **Phase 1 P0：** Alert / Toast / Progress / Skeleton（4 个反馈组件）
3. **每个组件：** 组件文件 + 单元测试 + barrel export
4. **CLI + MCP Server：** 自动注册新组件
5. **Demo 页：** 添加新组件展示
