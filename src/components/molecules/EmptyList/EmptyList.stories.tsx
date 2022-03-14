import { ComponentStory, ComponentMeta } from "@storybook/react";
import EmptyList from "./EmptyList";

export default {
  title: "components/molecules/EmptyList",
  component: EmptyList,
} as ComponentMeta<typeof EmptyList>;

const Template: ComponentStory<typeof EmptyList> = (args) => (
  <EmptyList {...args} />
);

export const Default = Template.bind({});
Default.args = {};
