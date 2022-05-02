class CartPage {
    getCart() {
        return cy.get('#nav-menu-item-cart');
    }
    getProductName(){
        return cy.get('td .product-name');
    }
    getProductWishlist(){
        return cy.get('a .add_to_wishlist');
    }
    getProductStatus(){
        return cy.get('td .product-stock-status');
    }
    getProductRemove() {
        return cy.get('td .remove_from_wishlist');
    }
}

export default CartPage