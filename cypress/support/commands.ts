// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import "@testing-library/cypress/add-commands";

Cypress.Commands.add("resetInvoicesDB", () => {
  cy.request(
    "DELETE",
    "http://localhost:8080/emulator/v1/projects/invoiceapp-5584a/databases/(default)/documents/invoices"
  );
});

Cypress.Commands.add("login", () => {
  cy.visit("/");
  cy.findByLabelText("Email").type("Test123@test123.com");
  cy.findByLabelText("Password").type("Test123");
  cy.findByText("Log in").click();
});
