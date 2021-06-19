describe('Advice', () => {
  it('contains the initial elements', () => {
    cy.visit('http://localhost:3000/advice');
    cy.get('h1').contains('Advice');
    cy.get('h2').contains('Advice of the Day');
    cy.get('p');
    cy.get('button').contains('Personal Advice');
    cy.get('input').should('have.attr', 'placeholder', 'Search Term');
  });
  // ? How do I control the function of a random api search with cypress?
  // TODO ('has a functioning search');
  // TODO ('gets advice by id');
});
