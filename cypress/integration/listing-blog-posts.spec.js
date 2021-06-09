describe('Blog', function () {
  it('opens the main blog page', function () {
    cy.visit('http://localhost:3000/blog');
    cy.get('h1').contains('Blog');
  });
  it('contains sample blog posts', function () {
    cy.visit('http://localhost:3000/blog');
    cy.contains('My First Blog');
    cy.contains('Opening Party!');
  });
});
