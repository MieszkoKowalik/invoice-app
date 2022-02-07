import { ComponentStory, ComponentMeta } from "@storybook/react";
import CustomSelect from "./CustomSelect";

const options = [
  { value: 1, label: "Net 1 day" },
  { value: 7, label: "Net 7 days" },
  { value: 14, label: "Net 14 days" },
  { value: 30, label: "Net 30 days" },
];

export default {
  title: "components/molecules/CustomSelect",
  component: CustomSelect,
  args: {
    label: "Select Label",
    placeholder: "placeholder text",
  },
} as ComponentMeta<typeof CustomSelect>;

const Template: ComponentStory<typeof CustomSelect> = (args) => (
  <CustomSelect {...args} />
);

export const Default = Template.bind({});
Default.args = {
  options: options,
};

export const Error = Template.bind({});
Error.args = {
  options: options,
  error: "Error message",
};
