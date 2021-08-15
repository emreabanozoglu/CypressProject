const itemNameLocatorFromDetailPage = ".inventory_details_name";
const inventoryNameLocator = ".inventory_item_name";
const headerTitleLocator = ".title";

export class InventoryPage {
  verifyTheInventoryPageOpened() {
    cy.get(headerTitleLocator).should("contain", "Products");
  }

  clickTheRandomItemAndVerifyItemName() {
    cy.get(inventoryNameLocator)
      .any()
      .then((randomInventoryItem) => {
        cy.wrap(randomInventoryItem)
          .click()
          .invoke("text")
          .then((inventoryNameFromProductPage) => {
            cy.get(itemNameLocatorFromDetailPage)
              .invoke("text")
              .then((inventoryItemNameFromDetailPage) => {
                expect(inventoryNameFromProductPage).to.equal(
                  inventoryItemNameFromDetailPage
                );
              });
          });
      });
  }
}

export const onInventoryPage = new InventoryPage();
