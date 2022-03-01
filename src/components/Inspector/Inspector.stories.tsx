import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Inspector from "./Inspector";

export default {
  component: Inspector,
  title: "Ho.MMa/Inspector",
  parameters: {
    docs: {
      page: null,
    },
  },
} as ComponentMeta<typeof Inspector>;

const Template: ComponentStory<typeof Inspector> = (args) => (
  <Inspector {...args} />
);

export const Undescribed = Template.bind({});
Undescribed.args = { described: false };

export const Categorical = Template.bind({});
Categorical.args = {
  described: true,
  datatype: "no-numerical",
  columnName: "CATEGORICAL_COLUMN",
  description: {
    count: 58000000,
    distinct: 18,
    missing: 5498,
    c_labels: ["0", "1"],
    c_values: [7, 6],
  },
};

export const Numerical = Template.bind({});
Numerical.args = {
  described: true,
  datatype: "numerical",
  columnName: "NUMERICAL_COLUMN",
  description: {
    count: 58000000,
    mean: 0.5,
    std: 0.332232355,
    min: 0.0,
    max: 0.0,
    p25: 0.45512211,
    p50: 0.47448489456156,
    p75: 0.6666555,
    missing: 5498,
    zeros: 4,
    negative: 0,
    infinite: 0,
    c_labels: ["0", "1", "2", "5", "9", "12", "24", "50", "51", "52"],
    c_values: [0, 0.8, 1, 0.4, 1, 1, 1, 2, 3, 1],
  },
};
