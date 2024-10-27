/// <reference types="Cypress" />

describe('My First Test', () => {
  it('shows a list of players and sort accordingly', () => {
    cy.visit('https://geyuqiu.github.io/react-exercise/')
    cy.get('[data-testid="overview-item-list"]').first().should('have.text', 'Brianna ForbesDreamlurk The UnstoppableFoghammer Lead')
    cy.get('[data-testid="overview-item-list"]').should('have.length', 6)

    cy.get('[data-testid="sortDesc"]').click();
    cy.get('[data-testid="overview-item-list"]').first().should('have.text', 'Hillary GibbsSpeedsoulShifting Rainshadow Iron')

    cy.get('[data-testid="sortAsc"]').click();
    cy.get('[data-testid="overview-item-list"]').first().should('have.text', 'Brianna ForbesDreamlurk The UnstoppableFoghammer Lead')
  })
})
