import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import {
  type WorkApplicationForm as WorkApplicationFormSchema,
  zWorkApplicationForm,
} from '@/features/work/react-hook-form/schemas';

import { EducationLevel } from './education-level';
import { HasWorkExperienceFields } from './has-work-experience-fields';
import { KnowsOtherLanguages } from './knows-other-languages';

const defaultValues: WorkApplicationFormSchema = {
  title: '',
  hasWorkExperience: false,
  knowsOtherLanguages: false,
  educationLevel: 'noFormalEducation',
};

export const WorkApplicationForm = () => {
  const form = useForm<WorkApplicationFormSchema>({
    mode: 'onSubmit',
    resolver: zodResolver(zWorkApplicationForm),
    defaultValues,
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const onSubmit = (data) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast.success('Form submitted !', {
        duration: 5000,
        description: JSON.stringify(data),
      });
    }, 2000);
  };

  return (
    <Form {...form} onSubmit={onSubmit}>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input size="lg" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <HasWorkExperienceFields />
          <KnowsOtherLanguages />
          <EducationLevel />
        </div>

        <Button type="submit" loading={isLoading}>
          Submit <ArrowRight />
        </Button>
      </div>
    </Form>
  );
};
