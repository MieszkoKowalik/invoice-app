describe("Invoice view", () => {
  beforeEach(function () {
    cy.resetInvoicesDB();
    cy.fixture("invoice").then(function (data) {
      this.invoice = data;
      cy.visit(`/invoice/${this.invoice.id}`);
      cy.callFirestore("set", `invoices/${this.invoice.id}`, this.invoice);
    });
    cy.login("0NkQafvuOo5jySTN8Bx6GcThDUzp");
  });

  it("Redirects to home page on 'Go back' click", () => {
    cy.findByText("Go back").click();
    cy.location("pathname").should("eq", `/`);
  });
});
