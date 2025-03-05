import { ComponentProps } from 'react';

import { cn } from '@/lib/tailwind-utils';

import { Input, InputProps } from '@/components/ui/input';

import { useFieldContext } from '..';
import { FieldInfo } from '../field-info';

export type FieldTextProps = ComponentProps<'div'> &
  Pick<InputProps, 'placeholder' | 'size'> & {
    inputProps?: Omit<InputProps, 'placeholder' | 'size'>;
  };

export function FieldText({
  className,
  inputProps,
  placeholder,
  size,
  ...rest
}: FieldTextProps) {
  const field = useFieldContext<string>();

  const isInvalid = !!field.state.meta.errors.length;
  return (
    <div className={cn('flex flex-col gap-1', className)} {...rest}>
      <Input
        id={field.name}
        name={field.name}
        value={field.state.value}
        onBlur={field.handleBlur}
        onChange={(e) => field.handleChange(e.target.value)}
        aria-invalid={isInvalid}
        placeholder={placeholder}
        size={size}
        {...inputProps}
      />
      <FieldInfo field={field} />
    </div>
  );
}
