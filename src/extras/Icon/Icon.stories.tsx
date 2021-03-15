import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, Story } from '@storybook/react';
// eslint-disable-next-line import/no-named-default
import { default as Icon, IconProps } from './Icon';

export default {
  title: 'Makeen UI-Kit/Extras/Icon',
  component: Icon,
  argTypes: {
    fill: { control: 'color' },
  },
} as Meta;

const Template: Story<IconProps> = args => <Icon {...args} />;

export const Default = Template.bind({});

Default.args = {
  fill: 'green',
  name: 'check-circle',
  group: '',
};

export const FilledHeart = Template.bind({});

FilledHeart.args = {
  fill: 'red',
  group: 'filled',
  name: 'heart',
};

export const LinearSmile = Template.bind({});

LinearSmile.args = {
  fill: 'darkorange',
  group: 'linear',
  name: 'smile',
};

export const ColorHome = Template.bind({});

ColorHome.args = {
  group: 'color',
  name: 'home-colourful',
};

export const ThinPhoto = Template.bind({});

ThinPhoto.args = {
  group: 'thin',
  name: 'photo',
};

export const WithViewBox = Template.bind({});

WithViewBox.args = {
  group: 'color',
  name: 'file-types-json',
  height: 256,
  width: 256,
  viewBox: '0 0 24 24',
};
