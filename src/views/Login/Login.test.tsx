import { render, screen, RenderOptions } from "test-utils";
import userEvent from "@testing-library/user-event";
import Login from "./Login";
import { ReactElement } from "react";
import AuthProvider from "providers/AuthProvider";

const renderWithAuthProvider = (
  ui: ReactElement,
  renderOptions?: RenderOptions
) => {
  return render(<AuthProvider>{ui}</AuthProvider>, renderOptions);
};

describe("Login view", () => {
  it("Renders the component", () => {
    renderWithAuthProvider(<Login />);
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByText(/log in/i)).toBeInTheDocument();
  });

  it("Displays errors if login inputs are empty", async () => {
    renderWithAuthProvider(<Login />);
    userEvent.click(screen.getByText(/log in/i));
    expect(await screen.findAllByText(/can't be empty/i)).toHaveLength(2);
  });

  it("Displays error if email is not valid", async () => {
    renderWithAuthProvider(<Login />);
    userEvent.type(screen.getByLabelText(/email/i), "test");
    userEvent.click(screen.getByText(/log in/i));
    expect(
      await screen.findByText(/Please enter valid email/i)
    ).toBeInTheDocument();
  });

  it("Signs in user if entered valid email and password", async () => {
    renderWithAuthProvider(<Login />);
    userEvent.type(screen.getByLabelText(/email/i), "test123@test123.com");
    userEvent.type(screen.getByLabelText(/password/i), "Test123");
    userEvent.click(screen.getByText(/log in/i));
    expect(
      screen.queryByText(/Please enter valid email/i)
    ).not.toBeInTheDocument();
    expect(screen.queryByText(/can't be empty/i)).not.toBeInTheDocument();
  });

  it("Displays error when there is no account with provided email", async () => {
    renderWithAuthProvider(<Login />);
    userEvent.type(screen.getByLabelText(/email/i), "invalidEmail@test123.com");
    userEvent.type(screen.getByLabelText(/password/i), "Test123");
    userEvent.click(screen.getByText(/log in/i));
    expect(
      await screen.findByText(
        /We couldn't find an account conected to this email/i
      )
    ).toBeInTheDocument();
  });

  it("Displays error when wrong password is provided", async () => {
    renderWithAuthProvider(<Login />);
    userEvent.type(screen.getByLabelText(/email/i), "test123@test123.com");
    userEvent.type(screen.getByLabelText(/password/i), "InvalidPassword");
    userEvent.click(screen.getByText(/log in/i));
    expect(await screen.findByText(/Wrong password/i)).toBeInTheDocument();
  });
});
