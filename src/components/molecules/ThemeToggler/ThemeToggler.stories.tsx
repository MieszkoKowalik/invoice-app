import { ComponentStory, ComponentMeta } from "@storybook/react";
import ThemeToggler from "./ThemeToggler";

export default {
  title: "components/molecules/ThemeToggler",
  component: ThemeToggler,
} as ComponentMeta<typeof ThemeToggler>;

const Template: ComponentStory<typeof ThemeToggler> = (args) => (
  <ThemeToggler {...args} />
);

export const Default = Template.bind({});
