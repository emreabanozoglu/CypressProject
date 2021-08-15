const usernameLocator = "#user-name";
const passwordLocator = "#password";
const loginButtonLocator = "#login-button";
const lockedUserErrorMessageLocator = '[data-test="error"]';

export class LoginPage {
  login(username, password) {
    cy.get(usernameLocator).type(username);
    cy.get(passwordLocator).type(password);
    cy.get(loginButtonLocator).click();
  }

  checkTheErrorMessageForLockedUser() {
    cy.get(lockedUserErrorMessageLocator).should(
      "contain",
      "Epic sadface: Sorry, this user has been locked out."
    );
  }
}

export const onLoginPage = new LoginPage();
