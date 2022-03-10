import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Status from "./Status";

export default {
  component: Status,
  title: "Ho.MMa/Status",
  parameters: {
    docs: {
      page: null,
    },
  },
} as ComponentMeta<typeof Status>;

const Template: ComponentStory<typeof Status> = (args) => <Status {...args} />;

export const Default = Template.bind({});
Default.args = { sessions: [{ id: "1", name: "session" }] };
