describe("login", () => {
  beforeEach(() => {
    cy.logout();
  });

  it("Displays login page", () => {
    cy.visit("/");
    cy.findByText("Log in").should("exist");
    cy.findByLabelText(/Email/).should("exist");
  });

  it("Shows errors when invalid data provided", () => {
    cy.visit("/");
    cy.findByText("Log in").click();
    cy.findAllByText("Can't be empty").should("have.length", 2);

    cy.findByLabelText(/Email/).type("Test123");
    cy.findByText("Please enter valid email").should("exist");

    cy.findByLabelText(/Email/).clear();
    cy.findByLabelText(/Password/).clear();
    cy.findByLabelText(/Email/).type("Test123@test123.com");
    cy.findByLabelText(/Password/).type("WrongPassword");
    cy.findByText("Log in").click();
    cy.findByText("Wrong password").should("exist");

    cy.findByLabelText(/Email/).clear();
    cy.findByLabelText(/Password/).clear();
    cy.findByLabelText(/Email/).type("WrongEmail@test123.com");
    cy.findByLabelText(/Password/).type("Test123");
    cy.findByText("Log in").click();
    cy.findByText("We couldn't find an account conected to this email.").should(
      "exist"
    );

    cy.intercept(
      { method: "POST", url: "**" },
      {
        statusCode: 400,
        body: {
          message: "Error",
        },
      }
    );
    cy.findByText("Log in").click();
    cy.findByText("We were unable to log you in, please try again").should(
      "exist"
    );
  });

  it("Logins user when valid data provided", () => {
    cy.visit("/");
    cy.findByLabelText("Email").type("Test123@test123.com");
    cy.findByLabelText("Password").type("Test123");
    cy.findByText("Log in").click();
    cy.findByText("Sign Out").should("exist");
  });
});
