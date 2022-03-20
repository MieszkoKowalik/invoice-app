describe("login", () => {
  beforeEach(() => {
    indexedDB.deleteDatabase("firebaseLocalStorageDb");
    cy.login();
    cy.resetInvoicesDB();
  });

  it("Can add draft invoice", () => {
    cy.findByText("No invoices").should("exist");
    cy.findByRole("button", { name: "New Invoice" }).click();
    cy.findByText("save as draft").click();
    cy.findByText("There is 1 invoice").should("exist");
  });
});
