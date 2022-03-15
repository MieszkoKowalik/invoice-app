import { ComponentStory, ComponentMeta } from "@storybook/react";
import Badge from "./Badge";

export default {
  title: "components/atoms/Badge",
  component: Badge,
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const Draft = Template.bind({});
Draft.args = {
  variant: "draft",
};

export const paid = Template.bind({});
paid.args = {
  variant: "paid",
};

export const panding = Template.bind({});
panding.args = {
  variant: "pending",
};
