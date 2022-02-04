import { ComponentStory, ComponentMeta } from "@storybook/react";
import InvoiceCard from "./InvoiceCard";

const mockedData = {
  id: "RT3080",
  createdAt: "2021-08-18",
  paymentDue: "2021-08-19",
  description: "Re-branding",
  paymentTerms: 1,
  clientName: "Jensen Huang",
  clientEmail: "jensenh@mail.com",
  status: "paid",
  senderAddress: {
    street: "19 Union Terrace",
    city: "London",
    postCode: "E1 3EZ",
    country: "United Kingdom",
  },
  clientAddress: {
    street: "106 Kendell Street",
    city: "Sharrington",
    postCode: "NR24 5WQ",
    country: "United Kingdom",
  },
  items: [
    {
      name: "Brand Guidelines",
      quantity: 1,
      price: 1800.9,
      total: 1800.9,
    },
  ],
  total: 1800.9,
};

export default {
  title: "components/molecules/InvoiceListCard",
  component: InvoiceCard,
  args: {
    invoice: mockedData,
  },
} as ComponentMeta<typeof InvoiceCard>;

const Template: ComponentStory<typeof InvoiceCard> = (args) => (
  <InvoiceCard {...args} />
);

export const Default = Template.bind({});
Default.args = {};
