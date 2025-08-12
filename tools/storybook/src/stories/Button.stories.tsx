import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '@components';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ["solid", "faded", "bordered", "light", "flat", "ghost", "shadow"],
    },
    isPrimary: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Primary',
  },
};
export const Secondary: Story = {
  args: {
    children: 'Secondary',
    isPrimary: false
  },
};

const variants = ["solid", "faded", "bordered", "light", "flat", "ghost", "shadow"] as const;

export const Variants: Story = {
  args: {
    children: 'Button',
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
      {variants.map((variant) => (
        <div key={variant} style={{ display: 'flex', gap: '10px' }}>
          <Button {...args} variant={variant} isPrimary>
            {variant}
          </Button>
        </div>
      ))}
    </div>
  ),
};