describe("Invoice view", () => {
  beforeEach(function () {
    cy.resetInvoicesDB();
    cy.login("0NkQafvuOo5jySTN8Bx6GcThDUzp");
    cy.fixture("invoice").then(function (data) {
      this.invoice = data;
      cy.callFirestore("set", `invoices/${this.invoice.id}`, this.invoice);
      cy.visit(`/invoice/${this.invoice.id}`);
    });
  });

  it("Redirects to home page on 'Go back' click", () => {
    cy.findByText("Go back").click();
    cy.location("pathname").should("eq", `/`);
  });
});
