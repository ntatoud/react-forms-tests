import { useFormContext } from 'react-hook-form';

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/react-hook-form';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';

import type { WorkApplicationForm } from '@/features/work/react-hook-form/schemas';

export const HasWorkExperienceFields = () => {
  const form = useFormContext<WorkApplicationForm>();

  const hasWorkExperience = form.watch('hasWorkExperience');
  return (
    <div className="flex flex-col gap-3">
      <FormField
        control={form.control}
        name="hasWorkExperience"
        render={({ field }) => (
          <FormItem className="flex flex-row items-start space-y-0">
            <FormControl>
              <Checkbox
                className="cursor-pointer"
                checked={field.value}
                onCheckedChange={field.onChange}
              ></Checkbox>
            </FormControl>
            <div className="space-y-1 leading-none">
              <FormLabel className="cursor-pointer">
                Work experience ?
              </FormLabel>
            </div>
          </FormItem>
        )}
      />
      {hasWorkExperience && (
        <FormField
          shouldUnregister={false}
          control={form.control}
          name="company.name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input {...field} placeholder="Company name..." />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      )}
    </div>
  );
};
