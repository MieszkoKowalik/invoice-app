import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "./Button";

export default {
  title: "components/atoms/Button",
  component: Button,
  args: {
    children: "Click me",
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
};

export const Danger = Template.bind({});
Danger.args = {
  variant: "danger",
};

export const Bordered = Template.bind({});
Bordered.args = {
  variant: "bordered",
};
