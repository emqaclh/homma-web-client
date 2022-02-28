import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Feature from './Feature';

export default {
    component: Feature,
    title: 'Ho.MMa/Feature',
    argTypes: {
        color: { control: 'color' },
    },
    parameters: {
        docs: {
            page: null
        }
    }
} as ComponentMeta<typeof Feature>;
  
const Template: ComponentStory<typeof Feature> = (args) => <Feature {...args} />;

export const Hover = Template.bind({});
Hover.args = {mode: 'hover', label: 'COLUMN_NAME', color: 'salmon'};
  