import { render, screen } from "test-utils";
import userEvent from "@testing-library/user-event";

import Login from "./Login";
import { waitFor } from "@testing-library/react";

describe("Login view", () => {
  it("Renders the component", () => {
    render(<Login />);
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByText(/log in/i)).toBeInTheDocument();
  });
  it("Displays errors if login inputs are empty", async () => {
    render(<Login />);
    userEvent.click(screen.getByText(/log in/i));
    expect(await screen.findAllByText(/can't be empty/i)).toHaveLength(2);
  });
  it("Displays error if email is not valid", async () => {
    render(<Login />);
    userEvent.type(screen.getByLabelText(/email/i), "test");
    userEvent.click(screen.getByText(/log in/i));
    expect(
      await screen.findByText(/Please enter valid email/i)
    ).toBeInTheDocument();
  });
  it("Does not display errors if both inputs are valid", async () => {
    render(<Login />);
    userEvent.type(screen.getByLabelText(/email/i), "test@test.pl");
    userEvent.type(screen.getByLabelText(/password/i), "test");
    userEvent.click(screen.getByText(/log in/i));
    await waitFor(() => {
      expect(
        screen.queryByText(/Please enter valid email/i)
      ).not.toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.queryByText(/can't be empty/i)).not.toBeInTheDocument();
    });
  });
});
