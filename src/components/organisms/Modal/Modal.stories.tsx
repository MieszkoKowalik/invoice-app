import { ComponentStory, ComponentMeta } from "@storybook/react";

import Modal from "./Modal";

export default {
  title: "components/organisms/Modal",
  component: Modal,
  args: {
    children: "Modal content",
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Default = Template.bind({});
