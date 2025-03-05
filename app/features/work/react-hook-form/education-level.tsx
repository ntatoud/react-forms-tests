import { useFormContext } from 'react-hook-form';

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/react-hook-form';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

import type { WorkApplicationForm } from '@/features/work/react-hook-form/schemas';

export const EducationLevel = () => {
  const form = useFormContext<WorkApplicationForm>();
  const educationLevel = form.watch('educationLevel');
  return (
    <>
      <FormField
        control={form.control}
        name="educationLevel"
        render={({ field }) => (
          <FormItem className="space-y-3">
            <FormLabel>Education level</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex flex-col space-y-1"
              >
                <FormItem className="flex items-center space-y-0 space-x-3">
                  <FormControl>
                    <RadioGroupItem value="noFormalEducation" />
                  </FormControl>
                  <FormLabel className="font-normal">
                    No Formal Education
                  </FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-y-0 space-x-3">
                  <FormControl>
                    <RadioGroupItem value="highSchoolDiploma" />
                  </FormControl>
                  <FormLabel className="font-normal">
                    High School Diploma
                  </FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-y-0 space-x-3">
                  <FormControl>
                    <RadioGroupItem value="bachelorsDegree" />
                  </FormControl>
                  <FormLabel className="font-normal">
                    Bachelors Degree
                  </FormLabel>
                </FormItem>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      {educationLevel === 'bachelorsDegree' && (
        <FormField
          control={form.control}
          name="universityName"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input {...field} placeholder="University name..." />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      )}
      {educationLevel === 'highSchoolDiploma' && (
        <FormField
          control={form.control}
          name="schoolName"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input {...field} placeholder="High Shcool name..." />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      )}
    </>
  );
};
