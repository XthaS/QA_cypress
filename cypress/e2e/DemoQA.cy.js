describe('DemoQA Text Box Page', () => {

  it('opens the DemoQA Text Box page', () => {
    cy.visit('https://demoqa.com/text-box');
    cy.title().should('include', 'DEMOQA');   
    cy.get('h1').should('contain', 'Text Box'); 
  });

  it('fills the form successfully with valid data', () => {
    cy.visit('https://demoqa.com/text-box');

    // Fill the form fields
    cy.get('#userName').type('Ram');
    cy.get('#userEmail').type('ram@example.com');
    cy.get('#currentAddress').type('Kathmandu');
    cy.get('#permanentAddress').type('Bhaktapur');
    
    // Submit the form
    cy.get('#submit').click();

    // Assertions: Verify form output is displayed
    cy.get('#output').should('be.visible');
    cy.get('#name').should('contain', 'Ram');
    cy.get('#email').should('contain', 'ram@example.com');
    cy.get('.border > #currentAddress').should('contain', 'Kathmandu');
    cy.get('.border > #permanentAddress').should('contain', 'Bhaktapur');
  });

});
