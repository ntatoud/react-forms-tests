import { Plus, Trash2 } from 'lucide-react';
import { useEffect } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/react-hook-form';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';

import type { WorkApplicationForm } from '@/features/work/react-hook-form/schemas';

export const KnowsOtherLanguages = () => {
  const form = useFormContext<WorkApplicationForm>();

  const { fields, replace, append, remove } = useFieldArray({
    control: form.control,
    name: 'languages',
  });

  const knowsOtherLanguages = form.watch('knowsOtherLanguages');

  useEffect(() => {
    if (knowsOtherLanguages) {
      replace([{ name: '' }]);
    }
  }, [knowsOtherLanguages, replace]);
  return (
    <div className="flex flex-col gap-3">
      <FormField
        control={form.control}
        name="knowsOtherLanguages"
        render={({ field }) => (
          <FormItem className="flex flex-row items-start space-y-0">
            <FormControl>
              <Checkbox
                className="cursor-pointer"
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <div className="space-y-1 leading-none">
              <FormLabel className="cursor-pointer">
                Know other languages ?
              </FormLabel>
            </div>
          </FormItem>
        )}
      />
      {knowsOtherLanguages && (
        <>
          {fields.map((field, index) => (
            <FormField
              key={field.id}
              control={form.control}
              name={`languages.${index}.name`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="cursor-pointer">
                    Language name
                  </FormLabel>
                  <div className="flex flex-row items-start gap-2">
                    <div className="flex flex-1 flex-col">
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </div>
                    <Button
                      variant="destructive-secondary"
                      size="icon"
                      disabled={fields.length === 1}
                      onClick={() => remove(index)}
                    >
                      <Trash2 />
                    </Button>
                  </div>
                </FormItem>
              )}
            />
          ))}
          <Button
            variant="secondary"
            type="button"
            size="xs"
            className="self-end"
            onClick={() => append({ name: '' })}
          >
            <Plus /> Add language
          </Button>
        </>
      )}
    </div>
  );
};
