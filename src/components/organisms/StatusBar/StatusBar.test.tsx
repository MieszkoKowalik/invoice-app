import { render, screen } from "test-utils";
import StatusBar from "./StatusBar";
import { setMediaMatches } from "setupTests";

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

  it("Displays controls on screens wider then 768px", () => {
    setMediaMatches("(min-width:768px)", true);
    render(<StatusBar status="pending" />);
    expect(screen.getAllByRole("button")).toBeTruthy();
  });
});
