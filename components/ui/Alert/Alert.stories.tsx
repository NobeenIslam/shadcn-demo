import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Alert, AlertTitle, AlertDescription } from "./Alert";
import {
  ExclamationTriangleIcon,
  InfoCircledIcon,
} from "@radix-ui/react-icons";

const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {
    children: (
      <>
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </>
    ),
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: (
      <>
        <ExclamationTriangleIcon className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Your session has expired. Please log in again.
        </AlertDescription>
      </>
    ),
  },
};

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <InfoCircledIcon className="h-4 w-4" />
        <AlertTitle>Note</AlertTitle>
        <AlertDescription>
          This is an informational alert with an icon.
        </AlertDescription>
      </>
    ),
  },
};

export const LongText: Story = {
  args: {
    children: (
      <>
        <AlertTitle>Privacy Notice</AlertTitle>
        <AlertDescription>
          We use cookies and similar technologies to help personalize content,
          tailor and measure ads, and provide a better experience. By clicking
          OK or turning an option on in Cookie Preferences, you agree to this,
          as outlined in our Cookie Policy. To change preferences or withdraw
          consent, please update your Cookie Preferences.
        </AlertDescription>
      </>
    ),
  },
};

export const CustomClassName: Story = {
  args: {
    className: "border-purple-500 bg-purple-100 text-purple-900",
    children: (
      <>
        <AlertTitle>Custom Styled Alert</AlertTitle>
        <AlertDescription>
          This alert uses custom classes for styling.
        </AlertDescription>
      </>
    ),
  },
};
