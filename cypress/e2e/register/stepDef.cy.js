import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

Given('A user visit register page', () => {
  cy.visit('/')
  cy.get('a[href="#register"]').click()
});

When('A user enters credentials in register page', (table) => {
  table.hashes().forEach(row => {
    cy.get('[placeholder="Username"]').type(row.username)
    cy.get('[placeholder="Email"]').type(row.email)
    cy.get('[placeholder="Password"]').type(row.password)
  });
})

And('A user clicks sign in button', () => {
  cy.get('button').click()
})

Then('A user will direct to homepage', () => {
  cy.contains('Your Feed').should('be.visible')
})

Then('Error message will be displayed in register page', (table) => {
  table.hashes().forEach(row => {
    cy.get('ul[class="error-messages"]').should('be.visible').and('have.text',row.error)
  });
})

When('A user enters the password in register page', (table) => {
  table.hashes().forEach(row => {
    cy.get('[placeholder="Password"]').type(row.password)
  })
})

When('A user enters the email in register page', (table) => {
  table.hashes().forEach(row => {
    cy.get('[placeholder="Email"]').type(row.email)
  })
})

When('A user enters the username and email in register page', (table) => {
  table.hashes().forEach(row => {
    cy.get('[placeholder="Username"]').type(row.username)
    cy.get('[placeholder="Email"]').type(row.email)
  })
})