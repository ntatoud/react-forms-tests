import { Plus, Trash2 } from 'lucide-react';

import { withForm } from '@/components/tanstack-form';
import { Button } from '@/components/ui/button';

import { workFormOptions } from './schemas';

export const KnowsOtherLanguages = withForm({
  ...workFormOptions,
  render: ({ form }) => {
    const { AppField: FormField, Subscribe: FormSubscribe } = form;
    return (
      <>
        <FormField name="knowsOtherLanguages">
          {(field) => {
            return (
              <div className="flex flex-row items-center gap-2">
                <field.Checkbox />
                <field.Label className="space-y-1 leading-none">
                  Know other languages ?
                </field.Label>
              </div>
            );
          }}
        </FormField>

        <FormSubscribe selector={(state) => state.values.knowsOtherLanguages}>
          {(knowsOtherLanguages) =>
            knowsOtherLanguages && (
              <FormField name="languages" mode="array">
                {(languagesField) => (
                  <>
                    {languagesField.state.value.map((_, i) => (
                      <FormField
                        name={`languages[${i}].name`}
                        // eslint-disable-next-line sonarjs/no-nested-functions
                        children={(field) => (
                          <div className="flex w-full flex-row justify-between gap-2">
                            <field.Text className="w-full" />
                            <Button
                              variant="destructive-secondary"
                              size="icon"
                              className="self-end"
                              disabled={
                                languagesField.state.value?.length === 1
                              }
                              onClick={() => languagesField.removeValue(i)}
                            >
                              <Trash2 />
                            </Button>
                          </div>
                        )}
                      />
                    ))}
                    <Button
                      type="button"
                      variant="outline"
                      className="self-end"
                      onClick={() => languagesField.pushValue({ name: '' })}
                    >
                      <Plus /> Add language
                    </Button>
                  </>
                )}
              </FormField>
            )
          }
        </FormSubscribe>
      </>
    );
  },
});
