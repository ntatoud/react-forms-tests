import type { Meta } from '@storybook/react';

import { Textarea } from '@/components/ui/textarea';

export default {
  title: 'Components/Textarea',
  component: Textarea,
} satisfies Meta<typeof Textarea>;

export const Default = () => {
  return (
    <div className="space-y-4">
      <Textarea placeholder="Placeholder" />
    </div>
  );
};

export const Disabled = () => {
  return (
    <div className="space-y-4">
      <Textarea placeholder="Placeholder" disabled />
    </div>
  );
};

export const WithErrorState = () => {
  return (
    <div className="space-y-4">
      <Textarea placeholder="Placeholder" aria-invalid />
    </div>
  );
};

export const LargeTextarea = () => {
  return (
    <div className="space-y-4">
      <Textarea className="min-h-32" placeholder="Placeholder" />
    </div>
  );
};
