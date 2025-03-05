import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Home,
});

function Home() {
  return (
    <div className="flex h-screen w-full flex-1 items-center justify-center">
      TODO
    </div>
  );
}
