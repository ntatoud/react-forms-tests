import type { Meta } from '@storybook/react';
import { AlertCircle } from 'lucide-react';

import { Label } from '@/components/ui/label';

export default {
  title: 'Components/Label',
  component: Label,
} satisfies Meta<typeof Label>;

export const Default = () => {
  return <Label>Default Label</Label>;
};

export const Disabled = () => {
  return (
    <div className="group" data-disabled>
      <Label>Disabled Label</Label>
    </div>
  );
};

export const WithIcon = () => {
  return (
    <Label>
      <AlertCircle />
      Label with Icon
    </Label>
  );
};
