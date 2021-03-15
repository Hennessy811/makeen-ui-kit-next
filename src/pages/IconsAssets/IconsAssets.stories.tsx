import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, Story } from '@storybook/react';

import IconsAssets from './IconsAssets';

export default {
  title: 'Pages samples/IconsAssets',
} as Meta;

const IconsAssetsTemplate: Story<any> = (props: any) => <IconsAssets {...props} />;

export const IconsAssetsPage = IconsAssetsTemplate.bind({});
IconsAssetsPage.args = {};
