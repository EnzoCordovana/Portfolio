import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '@components';

const meta = {
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'solid',
    isPrimary: true,
    children: 'Primary',
  },
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    isPrimary: false,
    children: 'Secondary',
  },
};