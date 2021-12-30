/// <reference types="Cypress"  />
describe('Login', () => {
  it('sucessfuly', () => {
    cy.login()
    cy.get('.qa-user-avatar').should('exist')
  })
})