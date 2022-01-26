import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Input } from "./Input";

export default {
  title: "components/atoms/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: "Placeholder text",
};
