import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

Given('A user visit login page', () => {
  cy.visit('/')
  cy.get('a[href="#login"]').click()
});

When('A user enters the email in login page', (table) => {
  table.hashes().forEach(row => {
    cy.get('[placeholder="Email"]').type(row.email)
    cy.get('button').click()
  })
})

And ('A user enters the password in login page', (table) => {
  table.hashes().forEach(row => {
    cy.get('[placeholder="Password"]').type(row.password)
    cy.get('button').click()
  })
})

Then('A user will direct to homepage', () => {
  cy.get('[href="#@wilson"]').should('be.visible')
})

Then('Error message will be displayed in login page', (table) => {
  table.hashes().forEach(row => {
    cy.get('ul[class="error-messages"]').should('be.visible').and('have.text',row.error)
  });
})

When('A user enters credentials in login page', (table) => {
  table.hashes().forEach(row => {
    cy.get('[placeholder="Email"]').clear().type(row.email)
    cy.get('[placeholder="Password"]').clear().type(row.password)
    cy.get('button').click()
  });
})
