import type { Meta, StoryFn } from '@storybook/react';

import { Badge } from '@/components/ui/badge';

const meta = {
  title: 'Components/Badge',
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryFn<typeof meta>;

export const Default: Story = () => {
  return <Badge>Default</Badge>;
};

export const Variants: Story = () => {
  return (
    <div className="flex gap-4">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Destructive</Badge>
    </div>
  );
};

export const AsChild: Story = () => {
  return (
    <Badge asChild>
      <a href="#">Anchor as child</a>
    </Badge>
  );
};
