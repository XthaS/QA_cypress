Cypress.on('uncaught:exception', () => {
  return false;
  });
describe('Practice Form page', () => {
  it('opens the form', () => {
    cy.visit('https://demoqa.com/automation-practice-form')
  });

  it('fills the form successfully with valid data', () => {
    cy.visit('https://demoqa.com/text-box');



  });

  
});