import type { Meta } from '@storybook/react';
import { Home, Settings, User } from 'lucide-react';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default {
  title: 'Components/Tabs',
  component: Tabs,
} satisfies Meta<typeof Tabs>;

export const Default = () => {
  return (
    <Tabs defaultValue="tab1" className="w-full max-w-md">
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <p>Content for Tab 1</p>
      </TabsContent>
      <TabsContent value="tab2">
        <p>Content for Tab 2</p>
      </TabsContent>
      <TabsContent value="tab3">
        <p>Content for Tab 3</p>
      </TabsContent>
    </Tabs>
  );
};

export const WithIcons = () => {
  return (
    <Tabs defaultValue="home" className="w-full max-w-md">
      <TabsList>
        <TabsTrigger value="home">
          <Home /> Home
        </TabsTrigger>
        <TabsTrigger value="profile">
          <User /> Profile
        </TabsTrigger>
        <TabsTrigger value="settings">
          <Settings /> Settings
        </TabsTrigger>
      </TabsList>
      <TabsContent value="home">
        <p>Welcome to the Home tab.</p>
      </TabsContent>
      <TabsContent value="profile">
        <p>This is the Profile tab.</p>
      </TabsContent>
      <TabsContent value="settings">
        <p>Here are your settings.</p>
      </TabsContent>
    </Tabs>
  );
};
