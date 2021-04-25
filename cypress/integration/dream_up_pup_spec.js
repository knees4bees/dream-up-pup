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

  it('Should take user to main page when home button is clicked', () => {
    cy.get('.nav-bar__home').click()
      .location('pathname').should('eq', '/')
  });
});

describe('Dream Up Pup -- view story page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/story')
  });

  it('Should see a navigation bar', () => {
    cy.get('.nav-bar')
      .contains('Dream Up Pup')
      .get('.nav-bar__home--img').should('have.attr', 'alt', 'doghouse')
      .get('.nav-bar__shelf--img').should('have.attr', 'alt', 'three books on a shelf')
  });

  it('Should have story container', () => {
    cy.get('.story__panel--container')
      .find('.story__panel')
      .should('have.length', 3)
  });

  it('Should show three images', () => {
    cy.get('.story__panel')
      .find('.story__panel--image')
      .should('have.length', 3)
  });

  it('Should show three captions', () => {
    cy.get('.story__panel')
      .find('.story__panel--text')
      .should('have.length', 3)
  });

  it.skip('Should have a button to save the story', () => {
    cy.get('button')
      .contains('Save story')
  });

  it('Should take user to main page when home button is clicked', () => {
    cy.get('.nav-bar__home').click()
      .location('pathname').should('eq', '/')
  });
});

describe('Dream Up Pup -- entire user flow', () => {
  it('Should see a navigation bar', () => {
    cy.visit('http://localhost:3000')
      .get('.nav-bar')
      .contains('Dream Up Pup')
      .get('.nav-bar__home--img').should('have.attr', 'alt', 'doghouse')
      .get('.nav-bar__shelf--img').should('have.attr', 'alt', 'three books on a shelf')
  });

  it('Should select a breed and change mind', () => {
    cy.get('select')
      .select('Beagle')
      .select('Labrador')
  });

  it('Should be taken to next page to write story', () => {
    cy.get('button')
      .contains('Write story')
      .click()
  });

  it('Should be able to go back home', () => {
    cy.get('.nav-bar__home').click()
      .location('pathname').should('eq', '/')
  });

  it('Should select a breed again', () => {
    cy.get('select')
      .select('Labrador')
  });

  it('Should be taken to next page to write story', () => {
    cy.get('button')
      .contains('Write story')
      .click()
  });

  it('Should enter a title', () => {
    cy.get('.create__title--input').type('My doggie day')
      .should('have.value', 'My doggie day')
  });

  it('Should accept user input in input boxes', () => {
    cy.get('[placeholder="Sentence 1"]')
      .type('This morning I went outside to sniff things.')
      .should('have.value', 'This morning I went outside to sniff things.')
      .get('[placeholder="Sentence 2"]')
      .type('Then in the afternoon I had a snack. And also sniffed more things.')
      .should('have.value', 'Then in the afternoon I had a snack. And also sniffed more things.')
      .get('[placeholder="Sentence 3"]')
      .type('And then I ate some garbage for dessert!')
      .should('have.value', 'And then I ate some garbage for dessert!')
  });

  it('Should take user to next page to view story', () => {
    cy.get('button').click()
      .location('pathname').should('eq', '/story')
  });

  it('Should show three images', () => {
    cy.get('.story__panel')
      .find('.story__panel--image')
      .should('have.length', 3)
  });

  it('Should show three captions', () => {
    cy.get('.story__panel')
      .find('.story__panel--text')
      .should('have.length', 3)
  });

  it('Should show the user\'s captions', () => {
    cy.get('.story__panel--text').eq(0)
      .contains('went outside to sniff things')
    cy.get('.story__panel--text').eq(1)
      .contains('Then in the afternoon')
    cy.get('.story__panel--text').eq(2)
      .contains('ate some garbage')
  });

  it.skip('Should save the story', () => {
    cy.get('button')
      .contains('Save story')
      .click()
  });

  it.skip('Should display the saved story on the shelf', () => {
    cy.get('.nav-bar__shelf').click()
      .location('pathname').should('eq', '/shelf')
      // .contains
  });

});

