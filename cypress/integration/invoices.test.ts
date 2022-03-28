describe("Invoices view", () => {
  beforeEach(() => {
    cy.resetInvoicesDB();
    cy.visit("/");
    cy.logout();
    cy.login("0NkQafvuOo5jySTN8Bx6GcThDUzp");
  });

  beforeEach(function () {
    cy.fixture("invoice").then(function (data) {
      this.invoice = data;
    });
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

  it("Can add pending invoice", function () {
    cy.findByText("No invoices").should("exist");
    cy.log(this.invoice.senderAddress.street);
    cy.findByRole("button", { name: "New Invoice" }).click();

    cy.get('input[name="senderAddress.street"]').type(
      this.invoice.senderAddress.street
    );
    cy.get('input[name="senderAddress.city"]').type(
      this.invoice.senderAddress.city
    );
    cy.get('input[name="senderAddress.postCode"]').type(
      this.invoice.senderAddress.postCode
    );
    cy.get('input[name="senderAddress.country"]').type(
      this.invoice.senderAddress.country
    );
    cy.get('input[name="clientName"]').type(this.invoice.clientName);
    cy.get('input[name="clientEmail"]').type(this.invoice.clientEmail);
    cy.get('input[name="clientAddress.street"]').type(
      this.invoice.clientAddress.street
    );
    cy.get('input[name="clientAddress.city"]').type(
      this.invoice.clientAddress.city
    );
    cy.get('input[name="clientAddress.postCode"]').type(
      this.invoice.clientAddress.postCode
    );
    cy.get('input[name="clientAddress.country"]').type(
      this.invoice.clientAddress.country
    );
    cy.get('input[name="createdAt"]').type(this.invoice.createdAt);
    cy.findByText("Payment Terms").click();
    cy.findByText(this.invoice.paymentTerms.label).click();
    cy.get('input[name="description"]').type(this.invoice.description);
    cy.findByText("Add item").click();
    cy.findByLabelText("Item Name").type(this.invoice.items[0].name);
    cy.findByLabelText("Qty").type(this.invoice.items[0].quantity);
    cy.findByLabelText("Price").type(this.invoice.items[0].price);

    cy.findByText("save & send").click();
    cy.findByText("There is 1 invoice").should("exist");
    cy.findByText(this.invoice.clientName).should("exist");
  });

  it("Redirects to invoice view on invoice click", function () {
    cy.callFirestore("set", `invoices/${this.invoice.id}`, this.invoice);
    cy.findByText(this.invoice.id).click();
    cy.location("pathname").should("eq", `/invoice/${this.invoice.id}`);
  });
});
