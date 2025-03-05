import { ComponentProps } from 'react';

import { cn } from '@/lib/tailwind-utils';

import { useFieldContext } from '.';

export type FieldLabelProps = ComponentProps<'label'> & {
  required?: boolean;
};
export function FieldLabel({
  children,
  htmlFor,
  className,
  required,
  ...rest
}: FieldLabelProps) {
  const field = useFieldContext();

  const _htmlFor = htmlFor ?? field.name;

  return (
    <label
      htmlFor={_htmlFor}
      className={cn(
        {
          'text-destructive': !!field.state.meta.errors.length,
        },
        className
      )}
      {...rest}
    >
      {children}
      {required && <span className="text-sm text-destructive">&nbsp;*</span>}
    </label>
  );
}
