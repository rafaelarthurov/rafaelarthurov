
describe('Search on searcher object', function(){

    it('Lets write and then clear', function(){

        cy.visit('https://automationpractice.com/index.php');
        
        /*cy.get('#search_query_top').clear();
        cy.get('#search_query_top').type('Dress');
        cy.get('#search_query_top').clear();
        cy.get('#search_query_top').type('Jeans');*/

        cy.get('#search_query_top').clear().type('Dress').clear().type('Jeans');
        

    })

})