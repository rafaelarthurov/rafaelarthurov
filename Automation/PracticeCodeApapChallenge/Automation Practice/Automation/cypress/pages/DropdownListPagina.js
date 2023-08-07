/// <reference types="Cypress"/>

class DropdownListPagina {
    visit() {
        cy.visit('https://the-internet.herokuapp.com/dropdown');
    }

    get getDropdown() {
        return cy.get('#dropdown');
    }

    selectOption(num) {
        this.getDropdown.select(num);
    }

    verifySelectedOption(num) {
        this.getDropdown.should('have.value', num)
    }
}

export default new DropdownListPagina();