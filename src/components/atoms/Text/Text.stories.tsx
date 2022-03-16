import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Text } from "./Text";

export default {
  title: "components/atoms/Text",
  component: Text,
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum ut dicta laborum odit impedit optio modi perferendis sunt alias? Asperiores deserunt expedita, beatae eos necessitatibus hic recusandae fugit modi nulla?",
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});

export const Bold = Template.bind({});
Bold.args = {
  isBold: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  isSecondary: true,
};

export const SecondaryBold = Template.bind({});
SecondaryBold.args = {
  isSecondary: true,
  isBold: true,
};
