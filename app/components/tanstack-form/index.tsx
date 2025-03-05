import { createFormHook, createFormHookContexts } from '@tanstack/react-form';

import { FieldCheckbox } from './field-checkbox';
import { FieldInfo } from './field-info';
import { FieldLabel } from './field-label';
import { FieldText } from './field-text';

const { fieldContext, formContext, useFieldContext, useFormContext } =
  createFormHookContexts();

const { useAppForm, withForm } = createFormHook({
  fieldContext,
  formContext,
  fieldComponents: {
    Text: FieldText,
    Label: FieldLabel,
    Info: FieldInfo,
    Checkbox: FieldCheckbox,
  },
  formComponents: {},
});

export { useFieldContext, useAppForm as useForm, useFormContext, withForm };
