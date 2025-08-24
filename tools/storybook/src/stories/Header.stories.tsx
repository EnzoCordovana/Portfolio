import type { Meta, StoryObj } from '@storybook/react-vite';
import { Header } from '@components';

const meta = {
    title: 'Components/Header',
    component: Header,
    tags: ['autodocs'],
    argTypes: {
        title: { control: 'text' },
        nav: { control: 'object' }
    },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    title: 'BNK4970',
    nav: [
        { label: 'accueil', path: '' },
        { label: 'à propos', path: '#about' },
        { label: 'projets', path: '#projects' },
        { label: 'compétances', path: '#skills' },
        { label: 'contact', path: '#contact' },
    ]
  },
};