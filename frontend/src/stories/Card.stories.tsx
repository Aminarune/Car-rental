import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Card } from '../components/Card/Card';

export default {
  title: 'Components/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Desktop = Template.bind({});
Desktop.args = {
  mobile: false,
};
export const Mobile = Template.bind({});
Mobile.args = {
  mobile: true,
};
