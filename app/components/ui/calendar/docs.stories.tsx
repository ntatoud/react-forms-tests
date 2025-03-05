import type { Meta } from '@storybook/react';
import { useState } from 'react';
import { DateRange } from 'react-day-picker';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';

export default {
  title: 'Components/Calendar',
} satisfies Meta<typeof Button>;

export const Default = () => {
  const date = new Date();

  return (
    <Calendar mode="default" selected={date} className="rounded-md border" />
  );
};

export const Single = () => {
  const [date, setDate] = useState<Date>();

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
    />
  );
};

export const Multiple = () => {
  const [date, setDate] = useState<Date[]>();

  return (
    <Calendar
      mode="multiple"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
    />
  );
};

export const Range = () => {
  const [date, setDate] = useState<DateRange>();

  return (
    <Calendar
      mode="range"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
    />
  );
};
