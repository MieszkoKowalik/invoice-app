import { ComponentStory, ComponentMeta } from "@storybook/react";
import Loader from "./Loader";

export default {
  title: "components/molecules/Loader",
  component: Loader,
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const Default = Template.bind({});
