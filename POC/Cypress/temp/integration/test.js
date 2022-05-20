describe('My First Test', function() {
  it('Visits the Mirror Website', function() {
    cy.visit('https://www.mirror.co.uk')

    cy.title().should('eq', 'Mirror Online: The intelligent tabloid. #madeuthink')
  })
})
