import { AnyFieldApi } from '@tanstack/react-form';

import { cn } from '@/lib/tailwind-utils';

export function FieldInfo({ field }: { field: AnyFieldApi }) {
  return (
    <>
      {field.state.meta.isTouched && field.state.meta.errors.length ? (
        <em className={cn('text-sm text-destructive')}>
          {field.state.meta.errors.map((err) => err.message).join(',')}
        </em>
      ) : null}
      {field.state.meta.isValidating ? 'Validating...' : null}
    </>
  );
}
