describe('Dream Up Pup -- landing page', () => {
  beforeEach(() => {
    cy.fixture('mockBreeds').then(( data ) => {
      cy.intercept('https://dog.ceo/api/breeds/list/all', {
      statusCode: 200,
      body:  data
      })
    })
    cy.visit('http://localhost:3000/')
  });

  it('Should see a navigation bar', () => {
    cy.get('.nav-bar')
      .contains('Dream Up Pup')
      .get('img')
      .should('have.class', 'nav-bar__home--img')
  });
});
