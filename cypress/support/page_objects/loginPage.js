const usernameLocator = '[data-test="username"]';
const passwordLocator = '[data-test="password"]';
const loginButtonLocator = '[data-test="login-button"]';
const lockedUserErrorMessageLocator = '[data-test="error"]';

export class LoginPage {
  login(username, password) {
    cy.get(usernameLocator).type(username);
    cy.get(passwordLocator).type(password);
    cy.get(loginButtonLocator).click();
  }

  checkTheErrorMessages(errorMessage) {
    cy.get(lockedUserErrorMessageLocator).should(
      "contain",
      errorMessage
    );
  }
}

export const onLoginPage = new LoginPage();
