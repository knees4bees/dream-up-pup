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

  it('Should be able to select a different breed', () => {
    cy.get('select').select('Beagle').should('have.value', 'Beagle')
    cy.get('select').select('Boxer').should('have.value', 'Boxer')
    cy.get('select').select('Beagle').should('not.have.value', 'Boxer')
  });

  it('Should have a button to kick off story writing', () => {
    cy.get('button')
      .contains('Write story')
  });

  it('Should take user to a new URL when button is clicked', () => {
    cy.get('button').click()
      .location('pathname').should('eq', '/create')
  });
});

describe('Dream Up Pup -- create page', () => {
  beforeEach(() => {
    cy.fixture('mockImages').then(( data ) => {
      cy.intercept('https://dog.ceo/api/breed/', {
      statusCode: 200,
      body:  data
      })
    })
    cy.visit('http://localhost:3000/create')
  });

  it('Should see a navigation bar', () => {
    cy.get('.nav-bar')
      .contains('Dream Up Pup')
      .get('.nav-bar__home--img').should('have.attr', 'alt', 'doghouse')
      .get('.nav-bar__shelf--img').should('have.attr', 'alt', 'three books on a shelf')
  });

  it('Should have a title input element', () => {
    cy.get('h2').should('have.class', 'create__title--words')
      .contains('Title:')
      .get('.create__title--input').type('My dog story')
      .should('have.value', 'My dog story')
  });

  it('Should see three dog images', () => {
    cy.get('.create__panel--container')
      .find('.create__panel--image')
      .should('have.length', 3)
  });

  it('Should see three sentence input boxes', () => {
    cy.get('.create__panel--container')
      .find('.create__panel--input')
      .should('have.length', 3)
  });

  it('Should accept user input in input boxes', () => {
    cy.get('[placeholder="Sentence 1"]')
      .type('I woke up on the bed today.')
      .should('have.value', 'I woke up on the bed today.')
      .get('[placeholder="Sentence 2"]')
      .type('I went for a walk with my friends.')
      .should('have.value', 'I went for a walk with my friends.')
      .get('[placeholder="Sentence 3"]')
      .type('Then I took a longgggggg nap!')
      .should('have.value', 'Then I took a longgggggg nap!')
  });

  it('Should have a button to create the story', () => {
    cy.get('button')
      .contains('Create story')
  });

  it('Should take user to a new URL when button is clicked', () => {
    cy.get('button').click()
      .location('pathname').should('eq', '/story')
  });
});
