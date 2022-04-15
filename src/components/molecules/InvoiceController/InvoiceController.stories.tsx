import { ComponentStory, ComponentMeta } from "@storybook/react";
import InvoiceController from "./InvoiceControllers";

export default {
  title: "components/molecules/InvoiceController",
  component: InvoiceController,
} as ComponentMeta<typeof InvoiceController>;

const Template: ComponentStory<typeof InvoiceController> = (args) => (
  <InvoiceController {...args} />
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
