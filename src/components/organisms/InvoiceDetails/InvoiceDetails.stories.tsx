import { ComponentStory, ComponentMeta } from "@storybook/react";
import InvoiceDetails from "./InvoiceDetails";
import { mockInvoices } from "mocks/data/invoices";

export default {
  title: "components/organisms/InvoiceDetails",
  component: InvoiceDetails,
  args: {
    invoice: mockInvoices[0],
  },
} as ComponentMeta<typeof InvoiceDetails>;

const Template: ComponentStory<typeof InvoiceDetails> = (args) => (
  <InvoiceDetails {...args} />
);

export const Default = Template.bind({});
