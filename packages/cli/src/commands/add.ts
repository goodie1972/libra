import { existsSync, writeFileSync, mkdirSync } from 'fs';
import { resolve } from 'path';

/**
 * 组件清单：组件名 → 生成代码
 *
 * 消费方运行 `npx libra add button` 后，
 * CLI 将对应组件源码复制到用户项目的 src/components/ui/ 下。
 */
const COMPONENTS: Record<string, (pkg: string) => string> = {
  button: (pkg) => `import { cn } from "${pkg}/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[var(--btn-radius)] text-[13px] font-medium transition-colors focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)]",
        secondary: "bg-transparent text-[var(--text-primary)] border border-[var(--border-main)] hover:border-[var(--accent)]",
        ghost: "bg-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card-hover)]",
        danger: "bg-[var(--error)] text-white hover:opacity-90",
      },
      size: {
        default: "h-9 px-[18px] py-2",
        sm: "h-8 px-3 text-[12px]",
        lg: "h-10 px-6 text-[14px]",
        icon: "h-8 w-8",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
`,

  card: (pkg) => `import { cn } from "${pkg}/lib/utils";
import type { HTMLAttributes } from "react";

function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-[var(--card-radius)] border-[var(--card-border)] bg-[var(--bg-card)] shadow-[var(--card-shadow)]",
        className
      )}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex flex-col gap-2 p-5 pb-3", className)} {...props} />;
}

function CardTitle({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn(
        "text-[16px] font-semibold text-[var(--text-primary)] tracking-[var(--tracking-subtitle)]",
        className
      )}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-5 pt-0", className)} {...props} />;
}

export { Card, CardHeader, CardTitle, CardContent };
`,

  table: (pkg) => `import { cn } from "${pkg}/lib/utils";
import type { HTMLAttributes, ThHTMLAttributes, TdHTMLAttributes } from "react";

function Table({ className, ...props }: HTMLAttributes<HTMLTableElement>) {
  return (
    <div className="relative w-full overflow-auto">
      <table
        className={cn(
          "w-full caption-bottom text-[13px] text-[var(--text-primary)]",
          className
        )}
        {...props}
      />
    </div>
  );
}

function TableHeader({ className, ...props }: HTMLAttributes<HTMLTableSectionElement>) {
  return (
    <thead
      className={cn(
        "[&_tr]:border-b [&_tr]:border-[var(--border-sub)]",
        className
      )}
      {...props}
    />
  );
}

function TableHead({ className, ...props }: ThHTMLAttributes<HTMLTableHeaderCellElement>) {
  return (
    <th
      className={cn(
        "h-10 px-5 text-left align-middle text-[11px] font-medium text-[var(--text-tertiary)] tracking-[0.03em]",
        className
      )}
      {...props}
    />
  );
}

function TableRow({ className, ...props }: HTMLAttributes<HTMLTableRowElement>) {
  return (
    <tr
      className={cn(
        "border-b border-[var(--border-sub)] transition-colors hover:bg-[var(--bg-card-hover)] data-[state=selected]:bg-[var(--bg-card-hover)]",
        className
      )}
      {...props}
    />
  );
}

function TableCell({ className, ...props }: TdHTMLAttributes<HTMLTableDataCellElement>) {
  return (
    <td
      className={cn(
        "p-3 px-5 align-middle",
        className
      )}
      {...props}
    />
  );
}

export { Table, TableHeader, TableHead, TableRow, TableCell };
`,
};

/**
 * 执行 libra add <name> 命令。
 * 从内置组件清单中找到对应组件源码，复制到目标项目。
 */
export function addCommand(name: string): void {
  const cwd = process.cwd();
  const component = COMPONENTS[name.toLowerCase()];

  if (!component) {
    console.error('');
    console.error(`  ✗ 未知组件 "${name}"`);
    console.error(`  可用组件: ${Object.keys(COMPONENTS).join(', ')}`);
    console.error('');
    process.exit(1);
  }

  const targetDir = resolve(cwd, 'src/components/ui');
  const targetPath = resolve(targetDir, `${name}.tsx`);

  if (!existsSync(targetDir)) {
    mkdirSync(targetDir, { recursive: true });
  }

  if (existsSync(targetPath)) {
    console.error(`  ⚠  ${targetPath} 已存在，跳过。`);
    process.exit(0);
  }

  // 解析 @libra/tokens 在用户项目中的路径
  // 简单处理：假设用户项目安装了 @libra/tokens 或用的是相对路径
  const pkgPath = findStockuiPath(cwd) || '@/components/ui';

  writeFileSync(targetPath, component(pkgPath), 'utf-8');
  console.log('');
  console.log(`  ✓ 添加组件: ${name} → ${targetPath}`);
  console.log('');
  console.log('  提示：确保已在入口处 import tokens.css');
  console.log('');
}

function findStockuiPath(cwd: string): string | null {
  try {
    const pkg = resolve(cwd, 'package.json');
    const content = JSON.parse(require('fs').readFileSync(pkg, 'utf-8'));
    const deps = { ...content.dependencies, ...content.devDependencies };

    if (deps['@libra/tokens']) return '@libra/tokens';
    if (deps['libra']) return 'libra/packages/tokens';

    return null;
  } catch {
    return null;
  }
}
