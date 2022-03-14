import { ComponentStory, ComponentMeta } from "@storybook/react";
import InvoiceList from "./InvoiceList";
import { mockInvoices } from "mocks/data/invoices";

export default {
  title: "components/organisms/InvoiceList",
  component: InvoiceList,
  args: {
    invoices: mockInvoices,
  },
} as ComponentMeta<typeof InvoiceList>;

const Template: ComponentStory<typeof InvoiceList> = (args) => (
  <InvoiceList {...args} />
);

export const Default = Template.bind({});
