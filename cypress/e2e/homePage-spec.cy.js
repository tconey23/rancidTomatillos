describe('home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('should display the title of the application', () => {
    cy.contains("Rancid Tomatillos")
  })
})