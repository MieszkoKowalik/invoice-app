import { render, screen } from "test-utils";
import InvoiceForm from "./InvoiceForm";
import userEvent from "@testing-library/user-event";
import { waitFor } from "@testing-library/react";

describe("InvoiceForm component", () => {
  const mockOnDiscard = jest.fn();
  const mockOnSubmit = jest.fn();

  it("Renders the component", () => {
    render(<InvoiceForm onDiscard={mockOnDiscard} onSubmit={mockOnSubmit} />);
    expect(screen.getByText(/new invoice/i)).toBeInTheDocument();
  });

  it("Discards the form when 'Discard button is clicked", async () => {
    render(<InvoiceForm onDiscard={mockOnDiscard} onSubmit={mockOnSubmit} />);
    expect(screen.getByText(/new invoice/i)).toBeInTheDocument();
    userEvent.click(screen.getByText(/discard/i));
    await waitFor(() => {
      expect(mockOnDiscard).toBeCalled();
    });
  });

  it("Adds an invoice when 'save as draft' button is clicked", async () => {
    render(<InvoiceForm onDiscard={mockOnDiscard} onSubmit={mockOnSubmit} />);
    expect(screen.getByText(/new invoice/i)).toBeInTheDocument();
    userEvent.click(screen.getByText(/save as draft/i));
    await waitFor(() => {
      expect(mockOnSubmit).toBeCalled();
    });
  });

  it("Invalidates form when 'save & send' button is clicked and inputs are empty", async () => {
    render(<InvoiceForm onDiscard={mockOnDiscard} onSubmit={mockOnSubmit} />);
    expect(screen.getByText(/new invoice/i)).toBeInTheDocument();
    userEvent.click(screen.getByText(/save & send/i));
    expect(await screen.findAllByText(/can't be empty/i)).toHaveLength(12);
    expect(
      await screen.findByText(/An item must be added/i)
    ).toBeInTheDocument();
  });

  it("Adds an invoice when 'save & send' button is clicked and form is properly filled", async () => {
    render(<InvoiceForm onDiscard={mockOnDiscard} onSubmit={mockOnSubmit} />);
    expect(screen.getByText(/new invoice/i)).toBeInTheDocument();
    userEvent.click(screen.getByText(/save as draft/i));
    await waitFor(() => {
      expect(mockOnSubmit).toBeCalled();
    });
  });
});
