import React, { FC } from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
// eslint-disable-next-line import/no-unresolved
import { Story, Meta } from '@storybook/react/types-6-0';
import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@material-ui/core';

interface ButtonProps extends MuiButtonProps {}

/**
 *
 * This demo show theme customization for Button
 *
 * Refer to Material UI button to get full set of features
 *
 */

const Button: FC<ButtonProps> = props => <MuiButton {...props} />;

export default {
  title: 'Makeen UI-Kit/Theme demo/Button',
  component: Button,
  argTypes: {
    children: { control: 'text' },
    variant: {
      control: {
        type: 'select',
        options: ['contained', 'outlined', 'text', undefined],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['large', 'medium', 'small', undefined],
      },
    },
    disabled: {
      control: 'boolean',
    },
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
