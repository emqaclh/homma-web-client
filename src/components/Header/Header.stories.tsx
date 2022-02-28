import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Header from './Header';

export default {
    component: Header,
    title: 'Ho.MMa/Header',
    argTypes: {
        color: { control: 'color' },
    },
    parameters: {
        docs: {
            page: null
        }
    }
} as ComponentMeta<typeof Header>;
  
const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Hover = Template.bind({});
Hover.args = {mode: 'active', tag: 'DATASET_1', color: 'salmon'};
  