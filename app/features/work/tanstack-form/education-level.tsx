import { withForm } from '@/components/tanstack-form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

import { workFormOptions } from './schemas';

const OPTIONS = [
  {
    label: 'No Formal Education',
    value: 'noFormalEducation',
  },
  {
    label: 'High School Diploma',
    value: 'highSchoolDiploma',
  },
  {
    label: 'Bachelors Degree',
    value: 'bachelorsDegree',
  },
] as const;

export const EducationLevel = withForm({
  ...workFormOptions,
  render: ({ form }) => {
    const { AppField: FormField, Subscribe: FormSubscribe } = form;
    return (
      <>
        <FormField name="educationLevel">
          {(field) => {
            return (
              <div className="flex flex-row items-center gap-2">
                <field.Label>Education Level</field.Label>
                <RadioGroup
                  onValueChange={(e) =>
                    field.handleChange(
                      e as
                        | 'noFormalEducation'
                        | 'highSchoolDiploma'
                        | 'bachelorsDegree'
                    )
                  }
                  defaultValue={field.state.value}
                  className="flex flex-col space-y-1"
                >
                  {OPTIONS.map(({ label, value }) => {
                    return (
                      <div
                        key={`radio-item-${label}`}
                        className="flex items-center space-y-0 space-x-3"
                      >
                        <RadioGroupItem value={value} />
                        <field.Label className="font-normal">
                          {label}
                        </field.Label>
                      </div>
                    );
                  })}
                </RadioGroup>
              </div>
            );
          }}
        </FormField>

        <FormSubscribe selector={(state) => state.values.educationLevel}>
          {(educationLevel) => (
            <>
              {educationLevel === 'bachelorsDegree' && (
                <FormField name="universityName">
                  {(field) => {
                    return (
                      <div className="flex flex-col gap-2">
                        <field.Text placeholder="University name..." />
                      </div>
                    );
                  }}
                </FormField>
              )}
              {educationLevel === 'highSchoolDiploma' && (
                <FormField name="schoolName">
                  {(field) => {
                    return (
                      <div className="flex flex-col gap-2">
                        <field.Text placeholder="High Scool Name..." />
                      </div>
                    );
                  }}
                </FormField>
              )}
            </>
          )}
        </FormSubscribe>
      </>
    );
  },
});
