import { ComponentStory, ComponentMeta } from "@storybook/react";
import LabeledInput from "./LabeledInput";

export default {
  title: "components/molecules/LabeledInput",
  component: LabeledInput,
} as ComponentMeta<typeof LabeledInput>;

const Template: ComponentStory<typeof LabeledInput> = (args) => (
  <LabeledInput {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Label",
};
