

describe ('Different ways to find an elements', function(){

    it('Using the searchers', function(){

        cy.visit('https://automationpractice.com/index.php');
        //Finding a TextBox for class
        cy.get('.search_query.form-control.ac_input').type('class');
        //Finding a TextBox for ID
        cy.get('#search_query_top').type(' ID');
        //Finding a TextBox for name propierty
        cy.get('[name="search_query"]').type(' name propierty');
        //Delete the text on the TextBox by placeholder propierty
        cy.get('[placeholder="Search"]').clear();

    })
    
})