import HomePage from '../../support/PageObjects/HomePage';

describe('Login and Cart Suite', function() {
    
    it('Logs In And Adds Items to Cart', function() {
    //Object Creation for HomePage Class

    const homePage = new HomePage();
    
    //Visits Page and Begins Test Suite
    cy.visit('https://shop.demoqa.com/my-account/');
    homePage.getUserName().type(this.data.Username);
    homePage.getEmail().type(this.data.Email);
    homePage.getPassword().type(this.data.NewPassword);
    homePage.getRegisterButton().click();

    //Checking whether the Registration is successful and whether UserName is populated under login section
    homePage.getLoginUserName().should('have.value',this.data.Username);

    //For Loop for Accessing productName array from Data
    this.data.productName.forEach(function(element){
        cy.selectProduct(element[0],element[1],element[2]);
    })

    })
})