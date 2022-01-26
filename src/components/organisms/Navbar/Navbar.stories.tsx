import { ComponentStory, ComponentMeta } from "@storybook/react";

import Navbar from "./Navbar";
import { Grid } from "components/templates/MainTemplate/MainTemplate.styles";

export default {
  title: "components/organisms/Navbar",
  component: Navbar,
  decorators: [
    (Story) => (
      <Grid>
        <Story />
      </Grid>
    ),
  ],
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
