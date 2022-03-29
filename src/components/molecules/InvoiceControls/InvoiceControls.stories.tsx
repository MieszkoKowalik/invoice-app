import { ComponentStory, ComponentMeta } from "@storybook/react";
import InvoiceControls from "./InvoiceControls";

export default {
  title: "components/molecules/InvoiceControls",
  component: InvoiceControls,
} as ComponentMeta<typeof InvoiceControls>;

const Template: ComponentStory<typeof InvoiceControls> = (args) => (
  <InvoiceControls {...args} />
);

export const Paid = Template.bind({});
Paid.args = {
  status: "paid",
};

export const Pending = Template.bind({});
Pending.args = {
  status: "pending",
};

export const Draft = Template.bind({});
Draft.args = {
  status: "draft",
};
