import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import CollapsedFeatures from "./CollapsedFeatures";

export default {
  component: CollapsedFeatures,
  title: "Ho.MMa/CollapsedFeatures",
  parameters: {
    docs: {
      page: null,
    },
  },
} as ComponentMeta<typeof CollapsedFeatures>;

const Template: ComponentStory<typeof CollapsedFeatures> = (args) => (
  <CollapsedFeatures {...args} />
);

export const Default = Template.bind({});
Default.args = {
  features: [
    { name: "CATEGORICAL_COL", datatype: "no-numerical" },
    { name: "NUMERICAL_COL", datatype: "numerical" },
  ],
};
