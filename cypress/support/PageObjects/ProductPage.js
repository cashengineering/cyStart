class ProductPage {
    getSearchClick() {
        return cy.get('div[class*="noo-navbar-header"] .noo-search').contains("Search");
    }
    getSearchTextBox() {
        return cy.get('form[class*="noo-mebla-searchform"] input[type*="search"]');
    }
    getProductsName() {
        return cy.get('div[class*="noo-product-inner"] h3');
    }
    getSelectSize() {
        return cy.get('td[class*="value"] select[id="pa_size"]'); 
    }
    getSelectColor() {
        return cy.get('td[class*="value"] select[id="pa_color"]');
    }
    getAddtoCartButton() {
        return cy.get('div[class*="add-to-cart"] button[class*="single_add_to_cart_button"]').contains("Add to cart");
    }
}

export default ProductPage