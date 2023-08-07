import indexPage from '../../../support/PageObjectClasses/indexPageObject';
import articlesPage from '../../../support/PageObjectClasses/articlesPageObject';

describe('Page Objects practice', function(){

    //For run the preconditions for each TestCase
    beforeEach(function(){
        cy.visit('https://automationpractice.com/index.php');
    })
    
    //TestCase #1
    it('Search Dresses', function(){
        //Making a reference from the file of the PageObject and instance the function to make the actions.
        indexPage.search('Dresses');
        //Making a reference from the file of the PageObject and instance the function to make an asserts.
        articlesPage.verifyArticle('Dresses');
    })

    //TestCase #2
    it('Search Hats', function(){
        //Making a reference from the file of the PageObject and instance the function to make the actions.
        indexPage.search('Hats');
        //Making a reference from the file of the PageObject and instance the function to make an asserts.
        articlesPage.verifyArticle('Hats');
    })
    
})