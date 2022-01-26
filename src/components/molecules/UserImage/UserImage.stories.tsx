import { ComponentStory, ComponentMeta } from "@storybook/react";

import UserImage from "./UserImage";
import UserAvatar from "assets/images/image-avatar.jpg";

export default {
  title: "components/molecules/UserImage",
  component: UserImage,
} as ComponentMeta<typeof UserImage>;

const Template: ComponentStory<typeof UserImage> = (args) => (
  <UserImage {...args} />
);

export const Default = Template.bind({});
export const WithImage = Template.bind({});
WithImage.args = {
  source: UserAvatar,
};
