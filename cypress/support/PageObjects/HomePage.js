class HomePage {
    getUserName() {
        return cy.get('form[class*="register"] #reg_username');
    }
    getEmail(){
        return cy.get('form[class*="register"] #reg_email');
    }
    getPassword(){
        return cy.get('form[class*="register"] #reg_password');
    }
    getLoginUserName(){
        return cy.get('form[class*="login"] #username');
    }
    getRegisterButton() {
        return cy.get('form[class*="register"] button[name="register"]').contains("Register");
    }
}

export default HomePage