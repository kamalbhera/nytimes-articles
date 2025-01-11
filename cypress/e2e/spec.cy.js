describe('NY Times App', () => {
    it('loads the home page', () => {
      cy.visit('http://localhost:3000');
      cy.contains('NY Times Most Popular Articles');
    });
  
    it('selects an article and displays details', () => {
      cy.visit('http://localhost:3000');
      cy.get('.article-item').first().click();
      cy.get('.article-detail').should('be.visible');
    });
  });
  