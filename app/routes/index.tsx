import { createFileRoute } from '@tanstack/react-router';

import { WorkApplicationForm } from '@/features/work/react-hook-form/work-application-form';

export const Route = createFileRoute('/')({
  component: Home,
});

function Home() {
  return (
    <div className="flex h-screen w-full flex-1 items-center justify-center">
      <WorkApplicationForm />
    </div>
  );
}
