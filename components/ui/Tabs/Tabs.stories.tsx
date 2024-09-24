import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./Tabs";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="tab1" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="tab1">Account</TabsTrigger>
        <TabsTrigger value="tab2">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <p>Make changes to your account here.</p>
      </TabsContent>
      <TabsContent value="tab2">
        <p>Change your password here.</p>
      </TabsContent>
    </Tabs>
  ),
};

export const WithMultipleTabs: Story = {
  render: () => (
    <Tabs defaultValue="tab1" className="w-[600px]">
      <TabsList>
        <TabsTrigger value="tab1">General</TabsTrigger>
        <TabsTrigger value="tab2">Privacy</TabsTrigger>
        <TabsTrigger value="tab3">Notifications</TabsTrigger>
        <TabsTrigger value="tab4">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <h3 className="text-lg font-medium">General Settings</h3>
        <p>Configure general account settings here.</p>
      </TabsContent>
      <TabsContent value="tab2">
        <h3 className="text-lg font-medium">Privacy Settings</h3>
        <p>Manage your privacy preferences.</p>
      </TabsContent>
      <TabsContent value="tab3">
        <h3 className="text-lg font-medium">Notification Preferences</h3>
        <p>Choose how you want to receive notifications.</p>
      </TabsContent>
      <TabsContent value="tab4">
        <h3 className="text-lg font-medium">Advanced Settings</h3>
        <p>Adjust advanced account settings here.</p>
      </TabsContent>
    </Tabs>
  ),
};

export const WithDisabledTab: Story = {
  render: () => (
    <Tabs defaultValue="tab1" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="tab1">Active</TabsTrigger>
        <TabsTrigger value="tab2">Inactive</TabsTrigger>
        <TabsTrigger value="tab3" disabled>
          Disabled
        </TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <p>This is an active tab.</p>
      </TabsContent>
      <TabsContent value="tab2">
        <p>This is an inactive tab.</p>
      </TabsContent>
      <TabsContent value="tab3">
        <p>This content is not accessible.</p>
      </TabsContent>
    </Tabs>
  ),
};

export const WithCustomStyling: Story = {
  render: () => (
    <Tabs defaultValue="tab1" className="w-[400px]">
      <TabsList className="rounded-t-lg bg-blue-100 p-2">
        <TabsTrigger
          value="tab1"
          className="text-blue-700 data-[state=active]:bg-white"
        >
          Tab 1
        </TabsTrigger>
        <TabsTrigger
          value="tab2"
          className="text-blue-700 data-[state=active]:bg-white"
        >
          Tab 2
        </TabsTrigger>
      </TabsList>
      <TabsContent
        value="tab1"
        className="rounded-b-lg border border-blue-200 bg-white p-4"
      >
        <p>Content for Tab 1</p>
      </TabsContent>
      <TabsContent
        value="tab2"
        className="rounded-b-lg border border-blue-200 bg-white p-4"
      >
        <p>Content for Tab 2</p>
      </TabsContent>
    </Tabs>
  ),
};
