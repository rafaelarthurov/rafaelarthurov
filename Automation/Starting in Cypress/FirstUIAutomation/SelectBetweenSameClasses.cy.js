
describe('Selecting between classes with the same name', function(){

     //For run the preconditions for global TestSuite
     before(function(){
        cy.visit('https://automationpractice.com/index.php');
    })

    //For selecting the first element with the same classes
    it('Selecting Womens section', function(){
        cy.get('[class=sf-with-ul]').first().click();
    })

    //For selecting one element of the list with the same classes
    it('Selecting Dresses section', function(){
        cy.get('[class=sf-with-ul]').eq(3).click();
    })

})