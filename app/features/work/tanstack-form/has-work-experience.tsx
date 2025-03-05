import { withForm } from '@/components/tanstack-form';

import { workFormOptions } from './schemas';

export const HasWorkExperience = withForm({
  ...workFormOptions,
  render: ({ form }) => {
    const { AppField: FormField, Subscribe: FormSubscribe } = form;
    return (
      <>
        <FormField name="hasWorkExperience">
          {(field) => {
            return (
              <div className="flex flex-row items-center gap-2">
                <field.Checkbox />
                <field.Label className="space-y-1 leading-none">
                  Work experience ?
                </field.Label>
              </div>
            );
          }}
        </FormField>
        <FormSubscribe selector={(state) => state.values.hasWorkExperience}>
          {(hasWorkExperience) =>
            hasWorkExperience && (
              <FormField name="company.name">
                {(field) => {
                  return (
                    <div className="flex flex-col gap-2">
                      <field.Text placeholder="Company name..." />
                    </div>
                  );
                }}
              </FormField>
            )
          }
        </FormSubscribe>
      </>
    );
  },
});
