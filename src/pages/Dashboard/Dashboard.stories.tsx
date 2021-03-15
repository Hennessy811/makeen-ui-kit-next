import React from 'react';
// eslint-disable-next-line import/no-unresolved
import { Story, Meta } from '@storybook/react/types-6-0';
import Dashboard from './Dashboard';

export default {
  title: 'Pages samples/Dashboard',
  component: Dashboard,
} as Meta;

const Template: Story = () => <Dashboard />;

export const Default = Template.bind({});
