import { z } from 'zod';

const workExperienceSchema = z.discriminatedUnion('hasWorkExperience', [
  z.object({
    hasWorkExperience: z.literal(true),
    company: z.object({
      name: z.string().min(1, { message: 'Field is required.' }),
    }),
  }),
  z.object({
    hasWorkExperience: z.literal(false),
  }),
]);

const languageKnowledgeSchema = z.discriminatedUnion('knowsOtherLanguages', [
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

const educationSchema = z.discriminatedUnion('educationLevel', [
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

export const zFormWorkApplication = z
  .object({
    title: z.string().min(1, { message: 'Field is required.' }),
  })
  .and(workExperienceSchema)
  .and(languageKnowledgeSchema)
  .and(educationSchema);

export type FormWorkApplication = z.infer<typeof zFormWorkApplication>;
