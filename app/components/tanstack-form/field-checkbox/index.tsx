import { cn } from '@/lib/tailwind-utils';

import { Checkbox, CheckboxProps } from '@/components/ui/checkbox';

import { useFieldContext } from '..';

export type FieldCheckboxProps = CheckboxProps;

export function FieldCheckbox({ className, ...rest }: FieldCheckboxProps) {
  const field = useFieldContext<boolean>();

  return (
    <Checkbox
      className={cn('cursor-pointer', className)}
      checked={field.state.value}
      onCheckedChange={(e) => {
        field.handleChange(!!e);
      }}
      {...rest}
    />
  );
}
