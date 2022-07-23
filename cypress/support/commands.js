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
Cypress.Commands.add("launch", () => {
  cy.viewport("macbook-16");
  cy.log(" =====> User navigates on the registration page <===== ");
  cy.visit(Cypress.env("url"));
});

// -- This is a parent command --
Cypress.Commands.add("tearDown", () => {
  cy.log(" =====> User closes an application <===== ");
});

// -- This is a parent command --
Cypress.Commands.add("login", (email, password) => {
  cy.log("User enters email in the email field");
  cy.get("#userEmail").type(email).should("have.value", email);

  cy.log("User enters password in the password field");
  cy.get("#userPassword").type(password).should("have.value", password);

  cy.log("User clicks on the login button");
  cy.get("#login").click();
});

//
//

// -- This is a child command --
Cypress.Commands.add("logout", () => {
  cy.get(":nth-child(5) > .btn").click();
  cy.wait(2500);
});

//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
