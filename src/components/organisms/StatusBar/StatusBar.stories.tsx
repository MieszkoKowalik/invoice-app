import { ComponentStory, ComponentMeta } from "@storybook/react";
import StatusBar from "./StatusBar";

export default {
  title: "components/organisms/StatusBar",
  component: StatusBar,
} as ComponentMeta<typeof StatusBar>;

const Template: ComponentStory<typeof StatusBar> = (args) => (
  <StatusBar {...args} />
);

export const Paid = Template.bind({});
Paid.args = {
  status: "paid",
};

export const Pending = Template.bind({});
Pending.args = {
  status: "pending",
};

export const Draft = Template.bind({});
Draft.args = {
  status: "draft",
};
