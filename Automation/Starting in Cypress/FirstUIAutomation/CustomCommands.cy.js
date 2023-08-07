describe('Creating Customs Commands', function(){

    //For run the preconditions for each TestCase
    beforeEach(function(){
        cy.visit('https://automationpractice.com/index.php');
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

        //Normal form
        cy.log('Log whatever on the screen console');
        //Custom Commands on Cypress
        cy.LogSpecFormat('Say Hello to new format');

    })

})