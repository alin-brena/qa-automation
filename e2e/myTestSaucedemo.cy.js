describe('Login user 1', { testIsolation: false }, () => {
  it('Debería iniciar sesión con credenciales válidas', () => {
    cy.visit('https://www.saucedemo.com/'); 
    cy.get('input[name="user-name"]').type('standard_user');
    cy.get('input[name="password"]').type('secret_sauce');
    cy.get('input[name="login-button"]').click();
  });
});





  


  
