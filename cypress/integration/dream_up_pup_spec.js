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
      .get('.nav-bar__home--img').should('have.attr', 'alt', 'doghouse')
      .get('.nav-bar__shelf--img').should('have.attr', 'alt', 'three books on a shelf')
  });

  it('Should have a sentence with nested dropdown', () => {
    cy.get('.landing__sentence')
      .contains('I want to write a story about')
      .get('select').should('have.value', 'Affenpinscher')
      .get('select').should('not.have.value', 'Beagle')
  });

  it('Should have a button to kick off story writing', () => {
    cy.get('button')
      .contains('Write story')
  });

  it('Should be able to select a different breed', () => {
    cy.get('select').select('Beagle').should('have.value', 'Beagle')
    cy.get('select').select('Boxer').should('have.value', 'Boxer')
    cy.get('select').select('Beagle').should('not.have.value', 'Boxer')
  });

  it('Should take user to a new URL when button is clicked', () => {
    cy.get('button').click()
      .location('pathname').should('eq', '/create')
  });
});
