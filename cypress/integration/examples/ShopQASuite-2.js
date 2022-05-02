// type definitions for Cypress object "cy"
/// <reference types="cypress" />
import CartPage from '../../support/PageObjects/CartPage';

describe('Test Wishlist From Cart Suite', function() {
    
    //Collects Data from fixtures/example.json
    before(function(){
    cy.fixture('example').then(function(data)
    {
        this.data=data ;
    })
    })
    
    it('Cypress Test Case', function() {
    //Object Creation for PageObject Page Class and assigning it to a constant variable

    const cartPage = new CartPage();
    
    //Calling
    cy.visit('https://shop.demoqa.com/my-account/');
    cartPage.getUserName().type(this.data.Username);
    cartPage.getEmail().type(this.data.Email);
    cartPage.getPassword().type(this.data.NewPassword);
    cartPage.getRegisterButton().click();

    //Checking whether the Registration is successful and whether UserName is populated under login section
    cartPage.getLoginUserName().should('have.value',this.data.Username);

    //For Loop for Accessing productName array from Fixtures File
    this.data.productName.forEach(function(element){
        cy.selectProduct(element[0],element[1],element[2]);
    })

    })
})