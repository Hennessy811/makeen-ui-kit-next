import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
// eslint-disable-next-line import/no-unresolved
import { Story, Meta } from '@storybook/react/types-6-0';

// eslint-disable-next-line import/no-named-default
import { default as Button, ButtonProps } from './Button';

export default {
  title: 'Makeen UI-Kit/Overrides/Button',
  component: Button,
  argTypes: {
    children: { control: 'text' },
  },
} as Meta;

const Template: Story<ButtonProps> = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Hello World',
  variant: 'contained',
  color: 'primary',
};

export const SecondarySmall = Template.bind({});
SecondarySmall.args = {
  size: 'small',
  children: 'Hello World',
  variant: 'contained',
  color: 'secondary',
};
