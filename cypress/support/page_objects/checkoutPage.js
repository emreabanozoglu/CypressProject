let priceFromCartPage;
const inventoryItemPriceLocator = ".inventory_item_price";
const firstNameLocator = "#first-name";
const lastNameLocator = "#last-name";
const zipCodeLocator = "#postal-code";
const continueButtonLocator = "#continue";
const pageTitleLocator = ".title";
const finishButtonLocator = "#finish";
const checkoutCompleteHeaderLocator = ".complete-header";
const checkoutComleteTextLocator = ".complete-text";

export class CheckoutPage {
  getPriceFromCheckoutPage() {
    cy.get(inventoryItemPriceLocator)
      .invoke("text")
      .then((price) => {
        priceFromCartPage = price;
      });
  }

  clickTheContinueButtonAndVerifyTextAreas() {
    cy.contains("Checkout").click();
    cy.get(".title").should("contain", "Checkout: Your Information");

    cy.get(firstNameLocator)
      .invoke("attr", "placeholder")
      .then((firstNamePlaceHolder) => {
        expect(firstNamePlaceHolder).to.equal("First Name");
      });

    cy.get(lastNameLocator)
      .invoke("attr", "placeholder")
      .then((firstNamePlaceHolder) => {
        expect(firstNamePlaceHolder).to.equal("Last Name");
      });

    cy.get(zipCodeLocator)
      .invoke("attr", "placeholder")
      .then((firstNamePlaceHolder) => {
        expect(firstNamePlaceHolder).to.equal("Zip/Postal Code");
      });
  }

  fillTheInformationsAndTheClickContinue(firstname, lastname, zipcode) {
    cy.get(firstNameLocator).type(firstname);
    cy.get(lastNameLocator).type(lastname);
    cy.get(zipCodeLocator).type(zipcode);
    cy.get(continueButtonLocator).click();
  }

  checkInformationsOnThePage() {
    cy.get(pageTitleLocator).should("contain", "Checkout: Overview");
    cy.get(inventoryItemPriceLocator)
      .invoke("text")
      .then((priceFromOverviewPage) => {
        expect(priceFromOverviewPage).to.equal(priceFromCartPage);
      });
  }

  clickTheFinishButtonAndVerifyCheckoutIsSuccess() {
    cy.get(finishButtonLocator).click();
    cy.get(pageTitleLocator).should("contain", "Checkout: Complete!");
    cy.get(checkoutCompleteHeaderLocator).should(
      "contain",
      "THANK YOU FOR YOUR ORDER"
    );
    cy.get(checkoutComleteTextLocator).should(
      "contain",
      "Your order has been dispatched, and will arrive just as fast as the pony can get there!"
    );
  }
}

export const onCheckoutPage = new CheckoutPage();
