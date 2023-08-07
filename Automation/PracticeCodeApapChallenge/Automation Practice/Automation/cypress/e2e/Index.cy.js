/// <reference types="Cypress"/>

import SesionPagina from '../pages/SesionPagina';
import InputsPagina from '../pages/InputsPagina';
import HoversPage from '../pages/HoverPagina';
import DropdownPage from '../pages/DropdownListPagina';

describe('Practica tecnica APAP - herokuapp.com', () => {


    it.skip('Probando las credenciales en el login', () => {
        cy.fixture('example').then((example) => {
            SesionPagina.visit();
            /*
            usuario  pass1, pass2, pass3
                     pass1, pass2, pass3
            tomsmith pass1, pass2, pass3
            El foreach anidado utiliza todos los pass por cada usuario
            */
            example.loginUser[0].Users.forEach((user) => {
                example.loginPass[0].Pass.forEach((pass) => {
                    SesionPagina.login(user, pass);
                })
            })
        })
    });

    it.skip('Probando introducir un numero y validarlo', () => {
        cy.fixture('example').then((example) => {
            InputsPagina.visit();
            example.InputId[0].IDs.forEach((id) => {
                InputsPagina.input(id);
                InputsPagina.verify(id);
            })
        });
    });

    it.skip('Haciendo over encima de los elementos y validando el link', () => {
        cy.fixture('example').then((example) => {
            HoversPage.visit();
            example.HoverId[0].IDs.forEach((id) => {
                HoversPage.hoverOverAvatar(id);
                HoversPage.verifyProfileLinkIsVisible(id);
            })
        })
    });

    it.skip('Probando las diferentes opciones del dropdown list', () => {
        cy.fixture('example').then((example) => {
            DropdownPage.visit();
            example.DropdownIDs[0].IDs.forEach((id) => {
                DropdownPage.selectOption(id);
                DropdownPage.verifySelectedOption(id);
            })
           
        })
    });
});