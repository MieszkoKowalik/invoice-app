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
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import "firebase/compat/firestore";
import { attachCustomCommands } from "cypress-firebase";

Cypress.Commands.add("resetInvoicesDB", () => {
  cy.request(
    "DELETE",
    "http://localhost:8080/emulator/v1/projects/invoiceapp-5584a/databases/(default)/documents/invoices"
  );
});

const firebaseConfig = {
  apiKey: Cypress.env("REACT_APP_FIREBASE_API"),
  authDomain: Cypress.env("REACT_APP_FIREBASE_DOMAIN"),
  projectId: Cypress.env("REACT_APP_FIREBASE_PROJECT_ID"),
  storageBucket: Cypress.env("REACT_APP_FIREBASE_BUCKET"),
  messagingSenderId: Cypress.env("REACT_APP_FIREBASE_SENDER_ID"),
  appId: Cypress.env("REACT_APP_FIREBASE_APP_ID"),
  measurementId: Cypress.env("REACT_APP_FIREBASE_MEASUREMENT_ID"),
};

firebase.initializeApp(firebaseConfig);

firebase.auth().useEmulator(`http://localhost:9099/`);

attachCustomCommands({ Cypress, cy, firebase });
