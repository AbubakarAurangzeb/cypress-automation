

describe('testing', () => {
  beforeEach( () => {
    cy.visit('https://demoqa.com/')
    cy.get('.card-body').eq(0).click()
    cy.wait(3000)
    cy.get('#item-3').click()
  })
  
  it('checking to see if all values are getting written', () => {
  
    cy.get('#addNewRecordButton').click()
    cy.get('[class=" mr-sm-2 form-control"]').eq(0).type('Alden')
    cy.get('[class=" mr-sm-2 form-control"]').eq(1).type('Cantrell')
    cy.get('#userEmail').eq(0).type('test@test.com')
    cy.get('[class=" mr-sm-2 form-control"]').eq(2).type('30')
    cy.get('#salary').type('12345')
    cy.get('#department').type('QA')
    cy.get('#submit').click()
  })
  
    it('only run this one', () => {
      cy.wait(1000)
      cy.get('#edit-record-3').click()
      cy.get('#age').clear().type('35')
      cy.get('#submit').click()
      
    

    })
})