describe('Seachs on UI', function(){

    //For run the preconditions for global TestSuite
    before(function(){
        cy.log('Here is where runs the preconditions');
    })

    //For run the postconditions for global TestSuite
    after(function(){
        cy.log('Here is where runs the postconditions');
    })

    //For run the preconditions for each TestCase
    beforeEach(function(){
        cy.visit('https://automationpractice.com/index.php');
    })

    //For run the preconditions for each TestCase
    afterEach(function(){
        cy.log('Text of example of AfterEach')
    })
    
    //TestCase #1
    it('Search Dresses', function(){
        cy.get('#search_query_top').type('Dresses');
        cy.get('#searchbox > .btn').click();
        cy.get('.lighter').contains('"Dresses"');
    })

    //TestCase #2
    it('Search Hats', function(){
        cy.get('#search_query_top').type('Hats');
        cy.get('#searchbox > .btn').click();
        cy.get('.lighter').contains('"Hats"');
    })

    
})