import { formOptions } from '@tanstack/react-form';
import { toast } from 'sonner';
import { z } from 'zod';

const zCompany = z.object({
  name: z.string().min(1, { message: 'Field is required.' }),
});

const zWorkExperience = z.discriminatedUnion('hasWorkExperience', [
  z.object({
    hasWorkExperience: z.literal(true),
    company: zCompany,
  }),
  z.object({
    hasWorkExperience: z.literal(false),
  }),
]);

const zLanguageKnowledge = z.discriminatedUnion('knowsOtherLanguages', [
  z.object({
    knowsOtherLanguages: z.literal(true),
    languages: z.array(
      z.object({
        name: z.string().min(1, { message: 'Field is required.' }),
      })
    ),
  }),
  z.object({
    knowsOtherLanguages: z.literal(false),
  }),
]);

const zEducation = z.discriminatedUnion('educationLevel', [
  z.object({
    educationLevel: z.literal('noFormalEducation'),
    schoolName: z.literal(''),
    universityName: z.literal(''),
  }),
  z.object({
    educationLevel: z.literal('highSchoolDiploma'),
    schoolName: z.string().min(1, { message: 'Field is required.' }),
    universityName: z.literal(''),
  }),
  z.object({
    educationLevel: z.literal('bachelorsDegree'),
    universityName: z.string().min(1, { message: 'Field is required.' }),
    schoolName: z.literal(''),
  }),
]);

const zWorkApplicationForm = z
  .object({
    title: z.string().min(1, { message: 'Field is required.' }),
  })
  .and(zWorkExperience)
  .and(zLanguageKnowledge)
  .and(zEducation);

type WorkApplicationForm = z.infer<typeof zWorkApplicationForm>;

export const workFormOptions = formOptions({
  defaultValues: {
    title: '',
    hasWorkExperience: false,
    knowsOtherLanguages: false,
    languages: [
      {
        name: '',
      },
    ],
    educationLevel: 'noFormalEducation',
    schoolName: '',
    universityName: '',
  } as WorkApplicationForm,
  validators: {
    onSubmit: zWorkApplicationForm,
  },
  onSubmit: async ({ value }) => {
    await new Promise<void>((resolve) => {
      setTimeout(() => {
        toast.success('Form submitted!', {
          duration: 5000,
          description: JSON.stringify(value),
        });
        resolve(); // Ensure the promise resolves after the toast
      }, 2000);
    });
  },
});
