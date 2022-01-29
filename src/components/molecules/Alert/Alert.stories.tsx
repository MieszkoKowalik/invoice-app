import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Alert } from "./Alert";

export default {
  title: "components/molecules/Alert",
  component: Alert,
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const Success = Template.bind({});
Success.args = {
  variant: "success",
  children: "This is a success alert",
};

export const Warning = Template.bind({});
Warning.args = {
  variant: "warning",
  children: "This is a warning alert",
};
export const Danger = Template.bind({});
Danger.args = {
  variant: "danger",
  children: "This is a danger alert",
};
