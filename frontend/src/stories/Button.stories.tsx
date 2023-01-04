import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "../components/Button/Button";
import { TrashFilled } from "../assets";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Component/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  type: "primary",
  children: "Button",
  size: "small",
  position: "left",
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: "secondary",
  children: "Button",
};

export const Minimal = Template.bind({});
Minimal.args = {
  type: "minimal",
  children: "Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  children: "Button",
};

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
  children: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  children: "Button",
};

export const Left = Template.bind({});
Left.args = {
  type: "primary",
  size: "small",
  icon: <TrashFilled />,
  position: "left",
  children: "Button",
};

export const Right = Template.bind({});
Right.args = {
  type: "primary",
  size: "small",
  icon: <TrashFilled />,
  position: "right",
  children: "Button",
};

export const Icon = Template.bind({});
Icon.args = {
  type: "primary",
  size: "small",
  icon: <TrashFilled />,
  position: "right",
};
