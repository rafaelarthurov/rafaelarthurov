
describe('Interacting with some CheckBoxes', function () {
    
    beforeEach(function(){
        cy.visit('http://automationpractice.com/index.php?id_category=3&controller=category')
    })
    //Test Case checking and unchecking some RadioButtons
    it('Large Tops search', function(){
        
        //Checking a radio button
        cy.get('#layered_category_4').check();
        //Checking another radio button
        cy.get('#layered_id_attribute_group_3').check();
        //Uncheking the second radio button
        cy.get('#layered_id_attribute_group_3').uncheck();
         //Uncheking the first radio button
         cy.get('#layered_category_4').uncheck();

    })
    //Test Case selecting the value "Highest Price"
    it('Selecting order by -Highest Price-', function(){
        cy.get('#selectProductSort').select('Price: Highest first');
    })
    //Test Case selecting the value "In stock"
    it('Selecting order by -In stock-', function(){
        cy.get('#selectProductSort').select('In stock');
    })
    

})