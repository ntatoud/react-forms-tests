import { useForm } from '@/components/tanstack-form';
import { SubmitButton } from '@/components/tanstack-form/submit-button';

import { EducationLevel } from './education-level';
import { HasWorkExperience } from './has-work-experience';
import { KnowsOtherLanguages } from './knows-other-languages';
import { workFormOptions } from './schemas';

export const WorkApplicationForm = () => {
  const form = useForm({
    ...workFormOptions,
  });

  const { AppField: FormField, AppForm } = form;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
    >
      <div className="flex flex-col gap-4">
        <FormField name="title">
          {(field) => {
            return (
              <div className="flex flex-col gap-2">
                <field.Label required>Title</field.Label>
                <field.Text size="lg" />
              </div>
            );
          }}
        </FormField>
        <HasWorkExperience form={form} />
        <KnowsOtherLanguages form={form} />
        <EducationLevel form={form} />
        <AppForm>
          <SubmitButton>Submit</SubmitButton>
        </AppForm>
      </div>
    </form>
  );
};
