describe("login", () => {
  beforeEach(() => {
    cy.resetInvoicesDB();
    cy.visit("/");
    cy.logout();
    cy.login("0NkQafvuOo5jySTN8Bx6GcThDUzp");
  });

  it("Can add draft invoice", () => {
    cy.findByText("No invoices").should("exist");
    cy.findByRole("button", { name: "New Invoice" }).click();
    cy.findByText("save as draft").click();
    cy.findByText("There is 1 invoice").should("exist");
  });

  it("Shows form errors on 'save & send' click", () => {
    cy.findByRole("button", { name: "New Invoice" }).click();
    cy.findByText("save & send").click();
    cy.findAllByText("Can't be empty").should("have.length", 12);
    cy.findByText("An item must be added").should("exist");
  });
});
