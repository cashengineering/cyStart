// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import ProductPage from '../support/PageObjects/ProductPage';

Cypress.Commands.add("selectProduct", (productName, size, color) => {
    //Instantiates A ProductPage
    const productPage = new ProductPage();

    //Searches Shirts
    productPage.getSearchClick().click();
    productPage.getSearchTextBox().type('Shirt');
    productPage.getSearchTextBox().type('{enter}');

    //Loops over Yielded Products, using productName to determine which one to click
    productPage.getProductsName().each(($el, index, $list) => {
        if($el.text().includes(productName)) {
            cy.get($el).click();
        }
    })

    productPage.getSelectColor().select(color);
    productPage.getSelectSize().select(size);
    productPage.getAddtoCartButton().click();
})