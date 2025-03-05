import { createServerFn } from '@tanstack/start';
import { z } from 'vinxi';

const zSessionType = z.enum(['Bloc', 'Voie']);

const zSession = () =>
  z.object({
    id: z.number(),
    date: z.string().date(),
    location: z.string(),
    type: zSessionType,
    duration: z.number(),
  });

const mockSessions = [
  {
    id: 1,
    date: '2024-02-28',
    location: 'Salle BlocX',
    type: 'Bloc',
    duration: 90,
  },
  {
    id: 2,
    date: '2024-02-29',
    location: 'Falaise Saint-Victoire',
    type: 'Voie',
    duration: 120,
  },
  {
    id: 3,
    date: '2024-03-01',
    location: 'Salle Arkose',
    type: 'Bloc',
    duration: 75,
  },
];

export const getSessions = createServerFn({ method: 'GET' }).handler(() => {
  return z.array(zSession()).parse(mockSessions);
});
