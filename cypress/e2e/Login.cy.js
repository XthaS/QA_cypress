describe('Login Page', () => {

  // -------------------- 1. Homepage Loads --------------------
  it('opens the SauceDemo Login page', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.title().should('include', 'Swag Labs');
  });

  // -------------------- 2. Valid Login --------------------
  it('logs in successfully with valid credentials', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();

    cy.url().should('include', '/inventory.html');
    cy.get('.inventory_list').should('be.visible');
  });5

  // -------------------- 3. Invalid Login --------------------
  it('shows error when logging in with invalid credentials', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').type('ram');
    cy.get('#password').type('ram1');
    cy.get('#login-button').click();

    cy.get('[data-test="error"]').should('be.visible')
      .and('contain', 'Username and password do not match any user in this service');
  });

  // -------------------- 4. Login with no credentials --------------------
  it('shows error when trying login with empty username and password', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('#login-button').click();

    cy.get('[data-test="error"]').should('be.visible')
      .and('contain', 'Username is required');
  });

  // -------------------- 5. Login with only username --------------------
  it('shows error when only username is entered', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').type('standard_user');  // Only username
    cy.get('#login-button').click();

    cy.get('[data-test="error"]').should('be.visible')
      .and('contain', 'Password is required');
  });

  // -------------------- 6. Login with only password --------------------
  it('shows error when only password is entered', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('#password').type('secret_sauce');  // Only password
    cy.get('#login-button').click();

    cy.get('[data-test="error"]').should('be.visible')
      .and('contain', 'Username is required');
  });

});
