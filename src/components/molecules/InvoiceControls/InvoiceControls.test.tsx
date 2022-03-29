import { render, screen } from "test-utils";
import InvoiceControls from "./InvoiceControls";

describe("InvoiceControls component", () => {
  it("Displays proper buttons if status is pending", () => {
    render(<InvoiceControls status="pending" />);
    expect(screen.getByText(/edit/i)).toBeInTheDocument();
    expect(screen.getByText(/delete/i)).toBeInTheDocument();
    expect(screen.getByText(/mark as paid/i)).toBeInTheDocument();
  });

  it("Displays proper buttons if status is draft", () => {
    render(<InvoiceControls status="draft" />);
    expect(screen.getByText(/edit/i)).toBeInTheDocument();
    expect(screen.getByText(/delete/i)).toBeInTheDocument();
    expect(screen.queryByText(/mark as paid/i)).not.toBeInTheDocument();
  });

  it("Displays proper buttons if status is paid", () => {
    render(<InvoiceControls status="paid" />);
    expect(screen.queryByText(/edit/i)).not.toBeInTheDocument();
    expect(screen.getByText(/delete/i)).toBeInTheDocument();
    expect(screen.queryByText(/mark as paid/i)).not.toBeInTheDocument();
  });
});
