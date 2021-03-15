import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
// eslint-disable-next-line import/no-unresolved
import { Story, Meta } from '@storybook/react/types-6-0';
import Select, { SelectProps } from './Select';

export default {
  title: 'Makeen UI-Kit/Theme demo/Select',
  component: Select,
  argTypes: {
    value: {
      control: {
        type: 'check',
        options: ['one', 'two', '3'],
      },
    },
  },
} as Meta;

const Template: Story<SelectProps> = args => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  options: [
    {
      title: 'Option One',
      subtitle: 'Hello world!',
      value: 'one',
    },
    {
      title: 'Option Two',
      subtitle: 'Hello world!',
      value: 'two',
    },
    {
      title: 'Option 3',
      subtitle: 'Hello world!',
      value: '3',
    },
  ],
  value: ['one'],
  onChange: e => {
    console.log(e);
  },
};
