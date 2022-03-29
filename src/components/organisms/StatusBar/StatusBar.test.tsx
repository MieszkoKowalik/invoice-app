import { render, screen } from "test-utils";
import StatusBar from "./StatusBar";

describe("StatusBar component", () => {
  it("Displays paid status", () => {
    render(<StatusBar status="paid" />);
    expect(screen.getByText(/^paid$/i)).toBeInTheDocument();
  });

  it("Displays pending status", () => {
    render(<StatusBar status="pending" />);
    expect(screen.getByText(/^pending$/i)).toBeInTheDocument();
  });

  it("Displays draft status", () => {
    render(<StatusBar status="draft" />);
    expect(screen.getByText(/^draft$/i)).toBeInTheDocument();
  });
});
