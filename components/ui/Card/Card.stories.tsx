import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "./Card";
import { Button } from "../Button"; // Assuming you have a Button component

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  ),
};

export const WithCustomContent: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Notification</CardTitle>
        <CardDescription>You have a new message</CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          Hello! This is a sample message content. Hope you're having a great
          day!
        </p>
      </CardContent>
      <CardFooter>
        <Button>Mark as Read</Button>
      </CardFooter>
    </Card>
  ),
};

export const WithImage: Story = {
  render: () => (
    <Card className="w-[350px]">
      <img
        src="/api/placeholder/350/200"
        alt="Placeholder"
        className="h-[200px] w-full rounded-t-xl object-cover"
      />
      <CardHeader>
        <CardTitle>Beautiful Scenery</CardTitle>
        <CardDescription>A picturesque landscape</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Enjoy this stunning view of nature's beauty.</p>
      </CardContent>
    </Card>
  ),
};

export const Minimal: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardContent>
        <p>This is a minimal card with only content.</p>
      </CardContent>
    </Card>
  ),
};

export const Interactive: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Interactive Card</CardTitle>
        <CardDescription>Click the buttons below</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This card demonstrates interactive elements.</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Submit</Button>
      </CardFooter>
    </Card>
  ),
};
