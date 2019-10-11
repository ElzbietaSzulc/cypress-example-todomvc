/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
describe('My tests in ToDoApp', function () {
  let TODO_ITEM_ONE = 'go to the shopping center'
  let TODO_ITEM_TWO = 'go to the gym'
  let TODO_ITEM_THREE = 'pay the bills'
})

beforeEach(function () {
  cy.visit('/')
})

context('When page is opened', function () {
  it('should focus on the todo input field', function () {
    cy.focused().should('have.class', 'new-todo')
  })
})

context('When I add two action to the list', function () {
  it('should add actions to list', function () {
    cy.get('.new-todo')
    .type('learn javascript{enter}')
    .type('learn testing{enter}')

    cy.get('.todo-list li').should('have.length', 2)
  })
})

context('When there is no actions', function () {
  it('should hide #main and #footer', function () {
    cy.get('.todo-list li').should('not.exist')
    cy.get('.main').should('not.exist')
    cy.get('.footer').should('not.exist')
  })
})

context('When add new items to list', function () {
  it('should allow me to add new items', function () {
    cy.get('.new-todo').type(TODO_ITEM_ONE).type('{enter}')
    cy.get('.todo-list li').eq(0).find('label').should('contain', TODO_ITEM_ONE)
    cy.get('.new-todo').type(TODO_ITEM_TWO).type('{enter}')
    cy.get('.todo-list li').eq(1).find('label').should('contain', TODO_ITEM_TWO)
  })
})
