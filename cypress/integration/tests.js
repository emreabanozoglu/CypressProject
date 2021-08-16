/// <reference types="cypress" />

import { onLoginPage } from "../support/page_objects/loginPage";
import { onInventoryPage } from "../support/page_objects/inventoryPage";
import { onDetailPage } from "../support/page_objects/detailPage";
import { onCheckoutPage } from "../support/page_objects/checkoutPage";

describe("Cypress Home Task Project", () => {
  beforeEach("Open SauceLab Demo WebSite", () => {
    cy.visit("/");
    cy.title().should("contain", "Swag Labs");
  });

  it("Add To Card An Item And Checkout Successfully", () => {
    onLoginPage.login("standard_user", "secret_sauce");
    onInventoryPage.verifyTheInventoryPageOpened();
    onInventoryPage.clickTheRandomItemAndVerifyItemName();
    onDetailPage.clickTheAddToCardAndVerifyTheBadgeNumber();
    onDetailPage.clickTheShoppingCardAndVerifyThePrice();
    onCheckoutPage.getPriceFromCheckoutPage();
    onCheckoutPage.clickTheContinueButtonAndVerifyTextAreas();
    onCheckoutPage.fillTheInformationsAndTheClickContinue(
      "Emre",
      "Abanozoglu",
      "34000"
    );
    onCheckoutPage.checkInformationsOnThePage();
    onCheckoutPage.clickTheFinishButtonAndVerifyCheckoutIsSuccess();
  });

  it("Try to login with locked user", () => {
    onLoginPage.login("locked_out_user", "secret_sauce");
    onLoginPage.checkTheErrorMessages("Epic sadface: Sorry, this user has been locked out.");
  });

  it("Try to login with wrong username and password", () => {
    onLoginPage.login("test","test1")
    onLoginPage.checkTheErrorMessages("Epic sadface: Username and password do not match any user in this service")
  })
});
