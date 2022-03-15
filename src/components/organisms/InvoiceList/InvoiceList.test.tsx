import { render, screen } from "test-utils";
import InvoiceList from "./InvoiceList";
import { mockInvoices } from "mocks/data/invoices";

describe("InvoiceList component", () => {
  it("Renders invoices when provided", () => {
    render(<InvoiceList invoices={mockInvoices} />);
    expect(screen.getByText(/RT3080/i)).toBeInTheDocument();
    expect(screen.getByText(/XM9141/i)).toBeInTheDocument();
  });

  it("Renders empty list message when empty array provided", () => {
    render(<InvoiceList invoices={[]} />);
    expect(screen.getByText("There is nothing here")).toBeInTheDocument();
  });
});
