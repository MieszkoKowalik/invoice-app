import { render, screen, RenderOptions } from "test-utils";
import userEvent from "@testing-library/user-event";
import Login from "./Login";
import { ReactElement } from "react";
import { AuthContext } from "providers/AuthProvider";
import { waitFor } from "@testing-library/react";

const authValue = {
  user: null,
  isAuthLoading: true,
  logIn: jest.fn(),
  logOut: jest.fn(),
};

const renderWithAuthProvider = (
  ui: ReactElement,
  renderOptions?: RenderOptions
) => {
  return render(
    <AuthContext.Provider value={authValue}>{ui}</AuthContext.Provider>,
    renderOptions
  );
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

  it("Submits form if valid email and password are used", async () => {
    renderWithAuthProvider(<Login />);
    userEvent.type(screen.getByLabelText(/email/i), "test123@test123.com");
    userEvent.type(screen.getByLabelText(/password/i), "Test123");
    userEvent.click(screen.getByText(/log in/i));
    await waitFor(() => {
      expect(authValue.logIn).toBeCalled();
    });
  });
});
