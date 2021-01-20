import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { withKnobs } from "@storybook/addon-knobs";

// import { default as Button, ButtonProps } from "./Button";
import Dashboard from "./Dashboard";

export default {
  title: "Pages samples/Dashboard",
  component: Dashboard,
  decorators: [withKnobs],
} as Meta;

const Template: Story = (args) => <Dashboard />;

export const Default = Template.bind({});
