import { ReactNode } from '@tanstack/react-router';

import { Button } from '@/components/ui/button';

import { useFormContext } from '..';

export function SubmitButton({ children }: { children: ReactNode }) {
  const form = useFormContext();
  return (
    <form.Subscribe selector={(state) => state.isSubmitting}>
      {(isSubmitting) => <Button loading={isSubmitting}>{children}</Button>}
    </form.Subscribe>
  );
}
