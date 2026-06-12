import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import {
  Button, Card, CardHeader, CardTitle, CardContent,
  Badge, Input, ChangeBadge, PriceDisplay, StockCard,
  Select, Tabs, Tag, Modal, Tooltip, Switch,
  Table, TableHeader, TableHead, TableRow, TableCell,
  MarketTable, cn,
} from '@libra/react';

// ============================================================
// cn utility
// ============================================================
describe('cn()', () => {
  it('merges class names', () => {
    expect(cn('a', 'b')).toBe('a b');
  });
  it('handles conditional classes', () => {
    expect(cn('base', false && 'hidden', 'visible')).toBe('base visible');
  });
  it('handles tailwind merge', () => {
    expect(cn('px-4', 'px-6')).toBe('px-6');
  });
});

// ============================================================
// Button
// ============================================================
describe('Button', () => {
  it('renders children', () => {
    render(<Button>Click</Button>);
    expect(screen.getByText('Click')).toBeInTheDocument();
  });
  it('applies variant styles', () => {
    const { container } = render(<Button variant="danger">Delete</Button>);
    expect(container.firstChild).toHaveClass('bg-[var(--error)]');
  });
  it('applies size styles', () => {
    const { container } = render(<Button size="sm">Small</Button>);
    expect(container.firstChild).toHaveClass('h-8');
  });
  it('passes additional props', () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByText('Disabled')).toBeDisabled();
  });
  it('fires onClick', () => {
    const fn = vi.fn();
    render(<Button onClick={fn}>Click</Button>);
    fireEvent.click(screen.getByText('Click'));
    expect(fn).toHaveBeenCalledOnce();
  });
});

// ============================================================
// Card
// ============================================================
describe('Card', () => {
  it('renders children', () => {
    render(<Card><p>Content</p></Card>);
    expect(screen.getByText('Content')).toBeInTheDocument();
  });
  it('CardHeader + CardTitle + CardContent compose', () => {
    render(
      <Card>
        <CardHeader><CardTitle>Title</CardTitle></CardHeader>
        <CardContent>Body</CardContent>
      </Card>,
    );
    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('Body')).toBeInTheDocument();
  });
});

// ============================================================
// Badge
// ============================================================
describe('Badge', () => {
  it('renders text', () => {
    render(<Badge variant="up">+2.13%</Badge>);
    expect(screen.getByText('+2.13%')).toBeInTheDocument();
  });
  it('applies direction colors', () => {
    const { container } = render(<Badge variant="down">-1.34%</Badge>);
    expect(container.firstChild).toHaveClass('text-[var(--down)]');
  });
});

// ============================================================
// Input
// ============================================================
describe('Input', () => {
  it('renders input', () => {
    render(<Input placeholder="Search" />);
    expect(screen.getByPlaceholderText('Search')).toBeInTheDocument();
  });
  it('shows error state', () => {
    const { container } = render(<Input hasError />);
    expect(container.firstChild).toHaveClass('border-[var(--error)]');
  });
  it('handles value change', () => {
    const fn = vi.fn();
    render(<Input onChange={fn} />);
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'abc' } });
    expect(fn).toHaveBeenCalled();
  });
});

// ============================================================
// ChangeBadge
// ============================================================
describe('ChangeBadge', () => {
  it('renders positive change', () => {
    render(<ChangeBadge value={2.13} />);
    expect(screen.getByText('+2.13%')).toBeInTheDocument();
  });
  it('renders negative change', () => {
    render(<ChangeBadge value={-1.34} />);
    expect(screen.getByText((c) => c.includes('1.34'))).toBeInTheDocument();
  });
  it('renders zero change as flat', () => {
    render(<ChangeBadge value={0} />);
    expect(screen.getByText('0.00%')).toBeInTheDocument();
  });
});

// ============================================================
// PriceDisplay
// ============================================================
describe('PriceDisplay', () => {
  it('renders price value', () => {
    render(<PriceDisplay value={3382.45} />);
    expect(screen.getByText('3382.45')).toBeInTheDocument();
  });
  it('shows positive change with arrow', () => {
    render(<PriceDisplay value={100} change={5} changePercent={5} />);
    expect(screen.getByText((c) => c.includes('5.00'))).toBeInTheDocument();
  });
  it('shows negative change', () => {
    render(<PriceDisplay value={100} change={-3} />);
    expect(screen.getByText('-3.00')).toBeInTheDocument();
  });
  it('renders without change', () => {
    render(<PriceDisplay value={50} />);
    expect(screen.getByText('50.00')).toBeInTheDocument();
  });
});

// ============================================================
// StockCard
// ============================================================
describe('StockCard', () => {
  const props = { code: 'sh600519', name: 'Moutai', price: 1689.5, change: 35.2, changePercent: 2.13 };
  it('renders stock info', () => {
    render(<StockCard {...props} />);
    expect(screen.getByText('Moutai')).toBeInTheDocument();
    expect(screen.getByText('sh600519')).toBeInTheDocument();
    expect(screen.getByText('1689.50')).toBeInTheDocument();
  });
  it('handles click', () => {
    const fn = vi.fn();
    render(<StockCard {...props} onClick={fn} />);
    fireEvent.click(screen.getByText('Moutai').closest('[role="button"]')!);
    expect(fn).toHaveBeenCalledOnce();
  });
});

// ============================================================
// Select
// ============================================================
describe('Select', () => {
  it('renders options', () => {
    render(<Select options={[{ value: 'a', label: 'Option A' }]} />);
    expect(screen.getByText('Option A')).toBeInTheDocument();
  });
  it('fires change event', () => {
    const fn = vi.fn();
    render(<Select options={[{ value: 'a', label: 'A' }]} onChange={fn} />);
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'a' } });
    expect(fn).toHaveBeenCalled();
  });
});

// ============================================================
// Tabs
// ============================================================
describe('Tabs', () => {
  it('renders tabs', () => {
    render(<Tabs tabs={[{ value: '1m', label: '1M' }, { value: '5m', label: '5M' }]} value="1m" onChange={() => {}} />);
    expect(screen.getByText('1M')).toBeInTheDocument();
    expect(screen.getByText('5M')).toBeInTheDocument();
  });
  it('fires onChange', () => {
    const fn = vi.fn();
    render(<Tabs tabs={[{ value: '1m', label: '1M' }]} value="" onChange={fn} />);
    fireEvent.click(screen.getByText('1M'));
    expect(fn).toHaveBeenCalledWith('1m');
  });
  it('highlights active tab', () => {
    render(<Tabs tabs={[{ value: '1m', label: '1M' }]} value="1m" onChange={() => {}} />);
    expect(screen.getByRole('tab')).toHaveAttribute('aria-selected', 'true');
  });
});

// ============================================================
// Tag
// ============================================================
describe('Tag', () => {
  it('renders tag text', () => {
    render(<Tag>Label</Tag>);
    expect(screen.getByText('Label')).toBeInTheDocument();
  });
  it('shows remove button', () => {
    const fn = vi.fn();
    render(<Tag onRemove={fn}>Dismiss</Tag>);
    fireEvent.click(screen.getByLabelText('Remove'));
    expect(fn).toHaveBeenCalledOnce();
  });
});

// ============================================================
// Modal
// ============================================================
describe('Modal', () => {
  it('renders when open', () => {
    render(<Modal open={true} onClose={() => {}} title="Title"><p>Content</p></Modal>);
    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('Content')).toBeInTheDocument();
  });
  it('does not render when closed', () => {
    render(<Modal open={false} onClose={() => {}} title="Hidden"><p>Content</p></Modal>);
    expect(screen.queryByText('Hidden')).not.toBeInTheDocument();
  });
  it('calls onClose on background click', () => {
    const fn = vi.fn();
    render(<Modal open={true} onClose={fn}><p>Content</p></Modal>);
    fireEvent.click(screen.getByRole('dialog').querySelector('[class*="inset-0"]')!);
    expect(fn).toHaveBeenCalledOnce();
  });
});

// ============================================================
// Tooltip
// ============================================================
describe('Tooltip', () => {
  it('shows content on hover', () => {
    render(<Tooltip content="Tooltip text"><button>Hover</button></Tooltip>);
    expect(screen.queryByText('Tooltip text')).not.toBeInTheDocument();
    fireEvent.mouseEnter(screen.getByText('Hover'));
    expect(screen.getByText('Tooltip text')).toBeInTheDocument();
  });
});

// ============================================================
// Switch
// ============================================================
describe('Switch', () => {
  it('toggles state', () => {
    const fn = vi.fn();
    render(<Switch checked={false} onChange={fn} />);
    fireEvent.click(screen.getByRole('switch'));
    expect(fn).toHaveBeenCalledWith(true);
  });
  it('shows checked state', () => {
    render(<Switch checked={true} onChange={() => {}} />);
    expect(screen.getByRole('switch')).toHaveAttribute('aria-checked', 'true');
  });
});

// ============================================================
// Table
// ============================================================
describe('Table components', () => {
  it('renders table structure', () => {
    render(
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Header</TableHead>
          </TableRow>
        </TableHeader>
        <tbody>
          <TableRow>
            <TableCell>Cell</TableCell>
          </TableRow>
        </tbody>
      </Table>,
    );
    expect(screen.getByText('Header')).toBeInTheDocument();
    expect(screen.getByText('Cell')).toBeInTheDocument();
  });
});

// ============================================================
// MarketTable
// ============================================================
describe('MarketTable', () => {
  const data = [
    { code: 'A', name: 'Stock A', price: 100, change: 5, changePercent: 5.25 },
    { code: 'B', name: 'Stock B', price: 50, change: -2, changePercent: -3.85 },
  ];
  const columns = [
    { key: 'code' as const, label: 'Code', sortable: true },
    { key: 'name' as const, label: 'Name' },
    { key: 'price' as const, label: 'Price', align: 'right' as const, sortable: true },
  ];

  it('renders data rows', () => {
    render(<MarketTable data={data} columns={columns} />);
    expect(screen.getByText('Stock A')).toBeInTheDocument();
    expect(screen.getByText('Stock B')).toBeInTheDocument();
  });
  it('sorts by column', () => {
    render(<MarketTable data={data} columns={columns} />);
    const codeHeader = screen.getByText('Code');
    fireEvent.click(codeHeader);
    expect(codeHeader.textContent).toContain('\u25BC');
  });
});
