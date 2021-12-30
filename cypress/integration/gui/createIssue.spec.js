/// <reference types="Cypress" />
const faker = require('faker')

describe('Create Issue', () => {
  const issue = {
    title: `issue-${faker.random.uuid()}`,
    description: faker.random.words(3),
    project: {
      nome: `project-${faker.random.uuid()}`,
      description: faker.random.words(5)
    }
  }
  beforeEach(() => {
    cy.login()
    cy.gui_createProject(issue.project)
  })
  it('successfully', () => {
    cy.gui_createIssue(issue)

    cy.get('.detail-page-description')
      .should('contain', issue.title)
      .and('contain', issue.description)
  })

})

