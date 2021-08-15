const addToCardButtonLocator = ".btn_inventory";
const shoppingCardLocator = ".shopping_cart_badge";
const priceFromDetailLocator = ".inventory_details_price";
const priceFromInventoryLocator = ".inventory_item_price";

export class DetailPage {
  clickTheAddToCardAndVerifyTheBadgeNumber() {
    cy.get(addToCardButtonLocator).click();
    cy.get(shoppingCardLocator).should("contain", "1");
  }

  clickTheShoppingCardAndVerifyThePrice() {
    cy.get(priceFromDetailLocator)
      .invoke("text")
      .then((priceFromDetailPage) => {
        cy.wrap().get(shoppingCardLocator).click();
        cy.get(priceFromInventoryLocator)
          .invoke("text")
          .then((priceFromCheckoutPage) => {
            expect(priceFromDetailPage).to.equal(priceFromCheckoutPage);
          });
      });
  }
}

export const onDetailPage = new DetailPage();
