import type { Meta } from '@storybook/react';
import { useEffect, useState } from 'react';

import { Progress } from '@/components/ui/progress';

export default {
  title: 'Components/Progress',
  component: Progress,
} satisfies Meta<typeof Progress>;

export const Default = () => {
  return <Progress value={50} />;
};

export const DifferentValues = () => {
  return (
    <div className="flex w-64 flex-col gap-4">
      <Progress value={10} />
      <Progress value={30} />
      <Progress value={50} />
      <Progress value={80} />
      <Progress value={100} />
    </div>
  );
};

export const Animated = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 10));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <Progress value={progress} />;
};
